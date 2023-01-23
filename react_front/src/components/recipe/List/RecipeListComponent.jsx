import React, { useState } from "react";
import { Link, Route } from "react-router-dom";
import { instance } from "../../api/Api";
import { useEffect } from "react";
import { Paging } from "../../common/Paging";
import { useNavigate } from "react-router-dom";

const RecipeListComponent = (props) => {
  const [recipeList, setRecipeList] = useState([]);
  const [count, setCount] = useState(0);

  const [currentpage, setCurrentpage] = useState(1); //현재페이지
  const [postPerPage] = useState(10); //페이지당 아이템 개수

  const [indexOfLastPost, setIndexOfLastPost] = useState(0);
  const [indexOfFirstPost, setIndexOfFirstPost] = useState(0);
  const [currentPosts, setCurrentPosts] = useState([]);

  const navigate = useNavigate();
  console.log("진짜" + props.filterItem);

  useEffect(() => {
    {
      !props.isSearch
        ? setCount(recipeList.length)
        : setCount(props.filterItem.length);
    }
    setIndexOfLastPost(currentpage * postPerPage);
    setIndexOfFirstPost(indexOfLastPost - postPerPage);

    {
      !props.isSearch
        ? setCurrentPosts(recipeList.slice(indexOfFirstPost, indexOfLastPost))
        : setCurrentPosts(
            props.filterItem.slice(indexOfFirstPost, indexOfLastPost)
          );
    }
  }, [
    props.isSearch,
    props.filterItem,
    currentpage,
    indexOfFirstPost,
    indexOfLastPost,
    recipeList,
    postPerPage,
  ]);

  useEffect(() => {
    //전체 레시피 잘라서 받기
    const onRecipeList = async () => {
      try {
        const response = await instance.get(`/api/recipe/all`);
        console.log("레시피데이터" + JSON.stringify(response));
        setRecipeList(response.data.body.recipes);
        console.log("리스트" + JSON.stringify(recipeList));
      } catch (error) {
        console.log(error);
      }
    };
    onRecipeList();
  }, []);

  const setPage = (e) => {
    setCurrentpage(e);
  };

  const watched = JSON.parse(localStorage.getItem("data"));
  console.log("watched" + watched);
  if (watched === null) {
    localStorage.setItem("data", JSON.stringify([]));
  }
  return (
    <>
      <h5>
        최근에 본 레시피 <span>({watched.length})</span>
      </h5>
      <div className="recipe-component2">
        <div className="recipe-content">
          <div className="recipe-list">
            {watched.map((r) => (
              <div className="recipe-item" key={r.id}>
                <img
                  className="list-img"
                  src={r.img}
                  alt={r.name}
                  onClick={() => navigate(`/recipe/${r.id}`)}
                />
                <div className="list-title">{r.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <h5>
        레시피 <span>({count})</span>
      </h5>
      <div className="recipe-component">
        <div className="recipe-content">
          <div className="recipe-list">
            {currentPosts.map((r) => (
              <div className="recipe-item" key={r.id}>
                <img
                  className="list-img"
                  src={r.img}
                  alt={r.name}
                  onClick={() => navigate(`/recipe/${r.id}`)}
                />
                <div className="list-title">{r.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Paging page={currentpage} count={count} setPage={setPage} />
    </>
  );
};

export default RecipeListComponent;

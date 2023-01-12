import React from 'react';
//template
import { Button, Form, InputGroup } from 'react-bootstrap';
//component
import Header from '../components/common/Header';
import RecipeListComponent from '../components/recipe/List/RecipeListComponent';
import RecipesSearch from '../components/recipe/RecipesSearch';

const RecipePage = () => {

  return(
    <div className="page recipe-page">
      <Header />
      <div className="layout container">
        <div className="search">
          <InputGroup>
            <Form.Control placeholder='메뉴 이름을 검색하세요.' />
            <Button variant="outline-primary" className="btn-find">찾기</Button>
          </InputGroup>
        </div>
        <RecipeListComponent />
      </div>
    </div>
  );
}

export default RecipePage;
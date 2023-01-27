import React, { useState } from "react";
import { useEffect } from "react";
import { instance } from "../api/Api";
import { AiFillDelete } from "react-icons/ai";
import Card from "react-bootstrap/Card";
import CloseButton from "react-bootstrap/CloseButton";
import Button from "react-bootstrap/Button";

const FreezerNoticeComponent = (props) => {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    const onItemList = async () => {
      try {
        const response = await instance.get(`/api/inventory/all`);
        const data = response.data.body.inventoryItem;
        setItemList(data);
      } catch (error) {
        console.log(error);
      }
    };

    onItemList();
  }, []);


  const onDeleteInventoryItem = async (id) => {
    try {
      await instance.delete(
        `/api/inventory/delete/${id}`
      );
      props.setNoticeShow(false)
      window.location.reload();
      
    } catch (error) {
      console.log(error);
    }
  };

  const deleteHandler = (id) => {
    onDeleteInventoryItem(id)
  }

  const convertDate = (milliSecond) => {
    const days = ["일", "월", "화", "수", "목", "금", "토"];
    const data = new Date(milliSecond); //Date객체 생성

    const year = data.getFullYear(); //0000년 가져오기
    const month = data.getMonth() + 1; //월은 0부터 시작하니 +1하기
    const date = data.getDate(); //일자 가져오기
    const day = days[data.getDay()]; //요일 가져오기

    return `${year}.${month}.${date}. (${day})`;
  };

  console.log(itemList)
  return (
    <div className="notice-component">
      <div className="notice-content">
        <Card>
          <div className="content-header">
            <Card.Title>냉장고 알림</Card.Title>
            <CloseButton className="right" onClick={props.onClick} />
          </div>
          <div className="content-body">
            <Card.Body>
              {itemList
                .filter(
                  (itemList) => itemList.expDate - Date.now() < "432000000"
                )
                .map((itemList) => (
                  <div className="notice" key={itemList.id}>
                    <img className="img" alt={itemList.id} src={itemList.item.img} />

                    <div className="text">
                      <div className="title">유통기한 임박!</div>
                      <span className="date-text">
                        {convertDate(itemList.expDate)}
                      </span>
                    </div>
                      <Button variant="danger" className="btn-delete" onClick={() => deleteHandler(itemList.id)}><AiFillDelete /></Button>
                  </div>
                ))}
            </Card.Body>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default FreezerNoticeComponent;

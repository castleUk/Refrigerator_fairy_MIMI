import React from "react";
// component
import ItemModal from "../common/ItemModal";

const NutrientComponent = ({ show, onHide, itemInfo, setItemInfo }) => {



  //재료 성분 가져오기




  return (
    <ItemModal show={show} onHide={onHide}  itemInfo={itemInfo} setItemInfo={setItemInfo}/>
    // <Modal size="lg" show={show} onHide={onHide} className="recipy-modal">
    //   <Modal.Header closeButton>
    //     이름 : {itemInfo.itemName}
    //     갯수 : {itemInfo.count}
    //   </Modal.Header>
    //   <Modal.Body>
    //     <NutrientTable nutrientInfo={nutrientInfo} />
    //     <h5>메뉴 추천</h5>
    //     <div className="content-body">
    //       <RecipesGroup itemName={itemInfo.itemName}/>
    //     </div>
    //   </Modal.Body>
    //   <Modal.Footer></Modal.Footer>
    // </Modal>
  );
};

export default NutrientComponent;

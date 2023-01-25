import Modal from "react-bootstrap/Modal";
import RecipesGroup from "../../recipe/RecipesGroup";
import NutrientTable from "../NutrientTable";
import Button from "react-bootstrap/Button";
import { instance } from "../../api/Api";
import { AiFillDelete } from "react-icons/ai";

const NutrientModal = ({
  show,
  onHide,
  itemInfo,
  setItemInfo,
  setItemReload
}) => {
  const InventoryItemId = itemInfo.id;

  const onDeleteInventoryItem = async () => {
    try {
      const response = await instance.delete(
        `/api/inventory/delete/${InventoryItemId}`
      );
      setItemReload(true);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteHandler = () => {
    onDeleteInventoryItem();
  };

  return (
    <>
      <Modal
        size="lg"
        show={show}
        onHide={onHide}
        className="ingr-detail-modal"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>재료 상세보기</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="content-header">
            <img
              className="ingr-img"
              src={itemInfo.item.img}
              alt={itemInfo.item.name}
            />

            <div className="detail-ingr">
              <h5 className="title">{itemInfo.item.name}</h5>
              {/* <span className="count-text">갯수 : {itemInfo.count}</span> */}
            </div>
            <Button
              variant="danger"
              onClick={() => {
                deleteHandler();
                onHide();
              }}
            >
              <AiFillDelete className="icon" />
            </Button>
          </div>

          <NutrientTable itemInfo={itemInfo.item} />
          <h5>메뉴 추천</h5>
          <div className="content-body">
            <RecipesGroup itemName={itemInfo.item.name} />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default NutrientModal;

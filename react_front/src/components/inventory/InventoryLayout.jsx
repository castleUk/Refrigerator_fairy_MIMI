import React from "react";
// component
import { useParams } from "react-router-dom";
import Header from "../common/Header";
import InventoryContent from "./InventoryContent";

const InventoryLayout = () => {
  const params = useParams();
  const index = params.index;

  return (
    <div className="components cts">
      <Header />
      <InventoryContent index={index} />
    </div>
  );
};

export default InventoryLayout;

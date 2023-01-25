import React from "react";
// component
import { useLocation } from "react-router-dom";
import InventoryContent from "./InventoryContent";
import Header from "../common/Header";
import { useParams } from "react-router-dom";

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

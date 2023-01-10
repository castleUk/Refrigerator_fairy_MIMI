import React from "react";
// component
import { useLocation } from "react-router-dom";
import InventoryContent from "./InventoryContent";
import Header from "../common/Header";

const InventoryLayout = () => {
  const location = useLocation();
  const index = location.state;
  console.log("최초 ContentLayout" + index);
  return (
    <div className="components cts">
      <Header />
      <InventoryContent index={index} />
    </div>
  );
};

export default InventoryLayout;

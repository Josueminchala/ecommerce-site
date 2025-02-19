import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../sneakers.css"

function sneakers() {
  return (
    <div className="sneakers-container">
      <h1 className="sneakers-header">SHOP ALL SNEAKERS</h1>
      <div className="sneakers-descritpion">
        Shop for all your needs. From all the newest releases from Nike, Adidas,
        ASICS, and more. Along with apparel such as BAPE, Supreme, and more!
      </div>
    </div>
  );
}

export default sneakers;

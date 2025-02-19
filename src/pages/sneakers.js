import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../sneakers.css";
import sneakersData from "../data/sneakersData";

function Sneakers() {
  //Hook to store and update dropdown states dynamically.
  const [modelOpen, setModelOpen] = useState(false);
  const [brandOpen, setBrandOpen] = useState(false);
  const [sizeOpen, setSizeOpen] = useState(false);

  //State for selected brands
  const [selectedBrands, setSelectedBrands] = useState([]);

  //handles brand selection
  const brandSelection = (brand) => {
    setSelectedBrands((prevBrands) =>
      prevBrands.includes(brand)
        ? prevBrands.filter((b) => b !== brand) 
        : [...prevBrands, brand] 
    );
  };

  //used for filtering sneakers based on brand
  const filteredSneakers =
    selectedBrands.length === 0
      ? sneakersData 
      : sneakersData.filter((sneaker) => selectedBrands.includes(sneaker.brand));

  return (
    <div className="sneakers-container">
      <div className="sidebar">
        <div className="sidebar-filters">
          <h2 className="filter-header">FILTER</h2>

          <div className="filter-section">
            <button className="filter-title" onClick={() => setModelOpen(!modelOpen)}>
              Model {modelOpen ? "▲" : "▼"}
            </button>

            {modelOpen && (
              <div className="filter-options">
                <label><input type="checkbox" /> Jordan 1</label>
                <label><input type="checkbox" /> Jordan 2</label>
                <label><input type="checkbox" /> Jordan 3</label>
                <label><input type="checkbox" /> Jordan 4</label>
                <label><input type="checkbox" /> Air Force 1</label>
                <label><input type="checkbox" /> Air Max 1</label>
                <label><input type="checkbox" /> Air Max 97</label>
                <label><input type="checkbox" /> Dunk</label>
                <label><input type="checkbox" /> Yeezy Boost 350</label>
                <label><input type="checkbox" /> Yeezy Boost 500</label>
                <label><input type="checkbox" /> Yeezy Slides</label>
                <label><input type="checkbox" /> Gel Lyte 3</label>
                <label><input type="checkbox" /> Gel Kayano</label>
              </div>
            )}
          </div>

          <div className="filter-section">
            <button className="filter-title" onClick={() => setBrandOpen(!brandOpen)}>
              Brand {brandOpen ? "▲" : "▼"}
            </button>

            {brandOpen && (
              <div className="filter-options">
                <label>
                  <input
                    type="checkbox"
                    onChange={() => brandSelection("Nike")}
                    checked={selectedBrands.includes("Nike")}
                  /> Nike
                </label>
                <label>
                  <input
                    type="checkbox"
                    onChange={() => brandSelection("Air Jordans")}
                    checked={selectedBrands.includes("Air Jordans")}
                  /> Air Jordans
                </label>
                <label>
                  <input
                    type="checkbox"
                    onChange={() => brandSelection("Adidas")}
                    checked={selectedBrands.includes("Adidas")}
                  /> Adidas
                </label>
                <label>
                  <input
                    type="checkbox"
                    onChange={() => brandSelection("ASICS")}
                    checked={selectedBrands.includes("ASICS")}
                  /> ASICS
                </label>
              </div>
            )}
          </div>

          <div className="filter-section">
            <button className="filter-title" onClick={() => setSizeOpen(!sizeOpen)}>
              Size {sizeOpen ? "▲" : "▼"}
            </button>

            {sizeOpen && (
              <div className="filter-options">
                <label><input type="checkbox" /> 1</label>
                <label><input type="checkbox" /> 2</label>
                <label><input type="checkbox" /> 3</label>
                <label><input type="checkbox" /> 4</label>
                <label><input type="checkbox" /> 5</label>
                <label><input type="checkbox" /> 6</label>
                <label><input type="checkbox" /> 7</label>
                <label><input type="checkbox" /> 8</label>
                <label><input type="checkbox" /> 9</label>
                <label><input type="checkbox" /> 10</label>
                <label><input type="checkbox" /> 11</label>
                <label><input type="checkbox" /> 12</label>
              </div>
            )}
          </div>
        </div>
      </div>

      
      <div className="sneaker-content">
        <h1 className="sneakers-header">SHOP ALL SNEAKERS</h1>
        <p className="sneakers-description">
          Shop for all your needs. From all the newest releases from Nike, Adidas,
          ASICS, and more. Along with apparel such as BAPE, Supreme, and more!
        </p>
        <div className="sneaker-list">
          {filteredSneakers.length > 0 ? (
            filteredSneakers.map((sneaker) => (
              <div key={sneaker.id} className="sneaker-card">
                <img src={sneaker.image} alt={sneaker.model} className="sneaker-image" />
                <div className="sneaker-info">
                  <h3>{sneaker.model}</h3>
                  <p>{sneaker.brand}</p>
                  <p>${sneaker.price}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No sneakers found for the selected brand.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Sneakers;

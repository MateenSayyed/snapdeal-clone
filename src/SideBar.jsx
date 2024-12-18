import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3>Footwear</h3>
      <ul>
        <li>Casual Shoes For Men</li>
        <li>Formal Shoes For Men</li>
        <li>Loafers For Men</li>
        <li>Slippers For Men</li>
        <li>Boots For Men</li>
        <li>Ethnic Footwear For Men</li>
        <li>Sandals & Floaters</li>
      </ul>
      <h3>Price</h3>

      <span className="limit-label" id="lower-limit">
        400
      </span>
      <input className="slider" type="range" min="400" max="15000" step="100" />
      <span className="limit-label" id="upper-limit">
        15000
      </span>

      <h3>Brand</h3>
      <div className="filters">
        <label>
          <input type="checkbox" /> Nike
        </label>
        <label>
          <input type="checkbox" /> Adidas
        </label>
        <label>
          <input type="checkbox" /> Puma
        </label>
        <label>
          <input type="checkbox" /> Reebok
        </label>
      </div>

      <h3>Sizes</h3>
      <div className="filters">
        <label>
          <input type="checkbox" /> 6
        </label>
        <label>
          <input type="checkbox" /> 7
        </label>
        <label>
          <input type="checkbox" /> 8
        </label>
        <label>
          <input type="checkbox" /> 9
        </label>
        <label>
          <input type="checkbox" /> 10
        </label>
      </div>

      <h3>Customer Ratings</h3>
      <div className="filters">
        <label>
          <input type="checkbox" /> ⭐⭐⭐⭐ & Up
        </label>
        <label>
          <input type="checkbox" /> ⭐⭐⭐ & Up
        </label>
        <label>
          <input type="checkbox" /> ⭐⭐ & Up
        </label>
      </div>

      <h3>Color</h3>
      <div className="color-options">
        <label className="color-wrapper">
          <input type="checkbox" />{" "}
          <span className="color-box" style={{ background: "black" }}></span>
          <span>Black</span>
        </label>
        <label className="color-wrapper">
          <input type="checkbox" />
          <span className="color-box" style={{ background: "brown" }}></span>
          <span>Brown</span>
        </label>
        <label className="color-wrapper">
          <input type="checkbox" />{" "}
          <span className="color-box" style={{ background: "green" }}></span>
          <span>Green</span>
        </label>
        <label className="color-wrapper">
          <input type="checkbox" />{" "}
          <span className="color-box" style={{ background: "blue" }}></span>
          <span>Blue</span>
        </label>
      </div>
    </div>
  );
};

export default Sidebar;

import React, { useState } from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import ProductCard from "./Components/ProductCard/ProductCard";
import Sidebar from "./Components/Sidebar/Sidebar";
import bag from "./images/img1.png";
import hart from "./images/img2.png";
import belt from "./images/img3.png";
import cap from "./images/img4.png";
import bag1 from "./images/img5.png";
import poco2 from "./images/img6.png";
import pars from "./images/img7.png";
import pars2 from "./images/img8.png";
import pars3 from "./images/img9.png";
import pars4 from "./images/img10.png";
import pars5 from "./images/img11.png";
import "./App.css";

function App() {
  const products = [
    
    { img: bag, title: "PPXOC Milkyway Dress in Pressed Flowers" , isLike: false},
    { img: pars5, title: "PPXOC Milkyway Dress in Pressed Flowers" , isLike: true},
    { img: bag1, title: "PPXOC Milkyway Dress in Pressed Flowers" , isLike: false},
    { img: poco2, title: "PPXOC Milkyway Dress in Pressed Flowers" , isLike: false},
    { img: pars, title: "PPXOC Milkyway Dress in Pressed Flowers" , isLike: false},
    { img: cap, title: "PPXOC Milkyway Dress in Pressed Flowers" , isLike: false},
    { img: belt, title: "PPXOC Milkyway Dress in Pressed Flowers" , isLike: false},
    { img: pars2, title: "PPXOC Milkyway Dress in Pressed Flowers" , isLike: false},
    { img: pars4, title: "PPXOC Milkyway Dress in Pressed Flowers" , isLike: false},
  ];

  return (
    <div>
      <Header />
      <main>
        <Sidebar />
        <div className="product-grid">
          {products.map((product, index) => (
            <ProductCard key={index} img={product.img} title={product.title} isLike={product.isLike} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;

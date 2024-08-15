import React, { useState } from "react";
import "./Sidebar.css";


function Sidebar() {
  const [isOpen, setIsOpen] = useState({
    occasion: true,
    work: true,
    fabric: true,
    segment: true,
    suitableFor: true,
    rawMaterials: true,
    pattern: true,
  });

  const toggleSection = (section) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    // <div className="sidebar">
    //   <div className="filter-section">
    //     <label>
    //       <input type="checkbox" />
    //       Customizable
    //     </label>
    //   </div>

    //   <div className="filter-section">
    //     <div className="filter-title" onClick={() => toggleSection("occasion")}>
    //       Occasion {isOpen.occasion ? "▲" : "▼"}
    //     </div>
    //     {isOpen.occasion && (
    //       <ul className="filter-options">
    //         <li>All</li>
    //       </ul>
    //     )}
    //   </div>

    // </div>


    <div className="sidebar">
    <div className="filter-section">
      <label>
        <input type="checkbox" />
        Customizable
      </label>
    </div>

    <div className="filter-section">
      <div
        className="filter-title"
        onClick={() => toggleSection("occasion")}
      >
        Occasion {isOpen.occasion ? "▲" : "▼"}
      </div>
      {isOpen.occasion && (
        <ul className="filter-options">
          <li>All</li>
        </ul>

      
      )}
    </div>

    <div className="filter-section">
      <div className="filter-title" onClick={() => toggleSection("work")}>
        Work {isOpen.work ? "▲" : "▼"}
      </div>
      {isOpen.work && (
        <ul className="filter-options">
          <li>All</li>
        </ul>
      )}
    </div>

    <div className="filter-section">
      <div
        className="filter-title"
        onClick={() => toggleSection("fabric")}
      >
        Fabric {isOpen.fabric ? "▲" : "▼"}
      </div>
      {isOpen.fabric && (
        <ul className="filter-options">
          <li>All</li>
        </ul>
      )}
    </div>

    <div className="filter-section">
      <div
        className="filter-title"
        onClick={() => toggleSection("segment")}
      >
        Segment {isOpen.segment ? "▲" : "▼"}
      </div>
      {isOpen.segment && (
        <ul className="filter-options">
          <li>All</li>
        </ul>
      )}
    </div>

    <div className="filter-section">
      <div
        className="filter-title"
        onClick={() => toggleSection("suitableFor")}
      >
        Suitable For {isOpen.suitableFor ? "▲" : "▼"}
      </div>
      {isOpen.suitableFor && (
        <ul className="filter-options">
          <li>All</li>
        </ul>
      )}
    </div>

    <div className="filter-section">
      <div
        className="filter-title"
        onClick={() => toggleSection("rawMaterials")}
      >
        Raw Materials {isOpen.rawMaterials ? "▲" : "▼"}
      </div>
      {isOpen.rawMaterials && (
        <ul className="filter-options">
          <li>All</li>
        </ul>
      )}
    </div>

    <div className="filter-section">
      <div
        className="filter-title"
        onClick={() => toggleSection("pattern")}
      >
        Pattern {isOpen.pattern ? "▲" : "▼"}
      </div>
      {isOpen.pattern && (
        <ul className="filter-options">
          <li>All</li>
        </ul>
      )}
    </div>
  </div>


  );
}

export default Sidebar;

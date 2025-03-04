import React, { useState } from "react";
import "./ExpandableInfo.css";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";

const ExpandableInfo = ({ title, numChildren, childrenContent, childrenTitles }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedChildren, setExpandedChildren] = useState(Array(numChildren).fill(false));

  const toggleChildExpansion = (index) => {
    setExpandedChildren((prevState) =>
      prevState.map((expanded, i) => (i === index ? !expanded : expanded))
    );
  };

  const childArray = Array.from({ length: numChildren }, (_, index) => (
    <div key={index} className={`expandable-content ${expandedChildren[index] ? "expanded" : ""}`}>
      <div className="expandable-child-header" onClick={() => toggleChildExpansion(index)}>
        {expandedChildren[index] ? <FaMinusCircle className="icon" /> : <FaPlusCircle className="icon" />}
        <span className="child-title">{childrenTitles?.[index] || `Child ${index + 1}`}</span>
      </div>
      {expandedChildren[index] && (
        <div className="expandable-child-content">{childrenContent[index] || `Child ${index + 1} content`}</div>
      )}
    </div>
  ));

  return (
    <div className={`expandable-container ${isExpanded ? "expanded" : ""}`}>
      <div className="expandable-header" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="title-container">
          {isExpanded ? <FaMinusCircle className="icon" /> : <FaPlusCircle className="icon" />}
          <h3 className="title">{title}</h3>
        </div>
      </div>

      {isExpanded && <div className="expandable-children-container">{childArray}</div>}
    </div>
  );
};

export default ExpandableInfo;

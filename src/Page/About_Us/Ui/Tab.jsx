import React, { useState } from "react";
import { NavLink } from "react-router";

const Tab = ({ data }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
      <div className="w-full">
      
      {/* Tabs */}
      <div className="border-b border-base-300">
        <div className="flex gap-2 overflow-x-auto whitespace-nowrap pb-2">
          {data.map((tab, index) => (
            <NavLink
              key={index}
              onClick={() => setActiveTab(index)}
              className={`tab tab-bordered font-semibold text-xl ${
                activeTab === index ? "tab-active" : ""
              }`}
            >
              {tab.title}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="mt-3 border-base-300 bg-base-100 px-5 py-3 rounded-box text-justify">
        {data[activeTab].content}
      </div>

    </div>
  );
};

export default Tab;

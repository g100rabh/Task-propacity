import React, { useState } from "react";
import classes from "./SideBar.module.css";
import { FaFolder } from "react-icons/fa";
import { IoChevronForwardOutline } from "react-icons/io5";
import useFetch from "../CustomHooks/useFetch";

const SideBar = () => {
  const itemsArr = [
    "Films",
    "Peoples",
    "Planets",
    "Species",
    "Starships",
    "Vehicle",
  ];
  const [fetchObj, setFetchObj] = useState(null);

  const {data, loading, error} = useFetch(fetchObj);

  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (item) => {
    setActiveItem(item);
    setFetchObj(item.toLowerCase());
    console.log(data)

  };

  return (
    <div className={classes.sidebar}>
      <ul>
        {itemsArr.map((item) => (
          <li
            key={item}
            className={`${classes.sideItems} ${
              activeItem === item ? classes.active : ""
            }`}
            onClick={() => handleItemClick(item)}
          >
            <div>
              <span>
                <FaFolder />
                <text>{item}</text>
              </span>
              <IoChevronForwardOutline />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;

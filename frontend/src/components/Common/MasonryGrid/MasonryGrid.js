import React, { useEffect, useRef, useLayoutEffect } from "react";
import "./MasonryGrid.css";

const MasonryGrid = ({ children }) => {
  const gridRef = useRef(null);

  const resizeGridItem = (item) => {
    const grid = gridRef.current;
    const rowHeight = parseInt(
      window.getComputedStyle(grid).getPropertyValue("grid-auto-rows")
    );
    const rowGap = parseInt(
      window.getComputedStyle(grid).getPropertyValue("grid-gap")
    );
    const rowSpan = Math.ceil(
      (item.querySelector(".content").getBoundingClientRect().height + rowGap) /
        (rowHeight + rowGap)
    );
    item.style.gridRowEnd = `span ${rowSpan}`;
  };

  const resizeAllGridItems = () => {
    const allItems = gridRef.current.getElementsByClassName("item");
    for (let i = 0; i < allItems.length; i++) {
      resizeGridItem(allItems[i]);
    }
  };

  useLayoutEffect(() => {
    resizeAllGridItems();

    const handleResize = () => resizeAllGridItems();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [children]);

  useEffect(() => {
    const images = gridRef.current.getElementsByTagName("img");
    const handleImageLoad = () => resizeAllGridItems();

    if (images.length > 0) {
      for (let i = 0; i < images.length; i++) {
        if (!images[i].complete) {
          images[i].addEventListener("load", handleImageLoad);
          images[i].addEventListener("error", handleImageLoad);
        }
      }
    }

    return () => {
      for (let i = 0; i < images.length; i++) {
        images[i].removeEventListener("load", handleImageLoad);
        images[i].removeEventListener("error", handleImageLoad);
      }
    };
  }, [children]);

  return (
    <div className="grid" ref={gridRef}>
      {React.Children.map(children, (child, index) => (
        <div className="item" key={index}>
          <div className="content">{child}</div>
        </div>
      ))}
    </div>
  );
};

export default MasonryGrid;

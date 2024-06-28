import React, { useEffect, useRef, useLayoutEffect } from "react";
import "./MasonryGrid.css";

const MasonryGrid = ({ children }) => {
  const gridRef = useRef(null);

  const resizeGridItem = (item) => {
    const grid = gridRef.current;
    const rowHeight = parseInt(
      window.getComputedStyle(grid).getPropertyValue("grid-auto-rows"),
      10
    );
    const rowGap = parseInt(
      window.getComputedStyle(grid).getPropertyValue("grid-gap"),
      10
    );
    const rowSpan = Math.ceil(
      (item.querySelector(".content").getBoundingClientRect().height + rowGap) /
        (rowHeight + rowGap)
    );
    item.style.gridRowEnd = `span ${rowSpan}`;
    item.style.visibility = "visible"; // Make the item visible after resizing
  };

  const resizeAllGridItems = () => {
    const allItems = gridRef.current.getElementsByClassName("item");
    for (let i = 0; i < allItems.length; i++) {
      resizeGridItem(allItems[i]);
    }
  };

  useLayoutEffect(() => {
    resizeAllGridItems();
    window.addEventListener("resize", resizeAllGridItems);
    return () => window.removeEventListener("resize", resizeAllGridItems);
  }, []);

  useEffect(() => {
    const images = gridRef.current.getElementsByTagName("img");
    const handleImageLoad = () => resizeAllGridItems();

    Array.from(images).forEach((image) => {
      if (!image.complete) {
        image.addEventListener("load", handleImageLoad);
        image.addEventListener("error", handleImageLoad);
      }
    });

    // Initial resize when images are already loaded but component just mounted
    if (Array.from(images).every((img) => img.complete)) {
      resizeAllGridItems();
    }

    return () => {
      Array.from(images).forEach((image) => {
        image.removeEventListener("load", handleImageLoad);
        image.removeEventListener("error", handleImageLoad);
      });
    };
  }, [children]); // Monitoring children to reapply effects if children change

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

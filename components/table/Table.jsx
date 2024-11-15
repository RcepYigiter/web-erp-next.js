"use client"

import React, { useState, useCallback, useEffect, useRef } from "react";

const createHeaders = (headers) => {

  return headers.map((item) => ({
    text: item.header,
    ref: useRef()
  }));
};

/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/resizable-tables-with-react-and-css-grid
 */
const Table = ({ headers, minCellWidth, tableContent, searchable }) => {
  const [tableHeight, setTableHeight] = useState("auto");
  const [activeIndex, setActiveIndex] = useState(null);
  const tableElement = useRef(null);
  const [data,setData]=useState("")

  const columns = createHeaders(headers);

  useEffect(() => {
    setTableHeight(tableElement.current.offsetHeight);
  }, []);

  const mouseDown = (index) => {
    setActiveIndex(index);
  };

  const mouseMove = useCallback(
    (e) => {
      if (activeIndex === null) return;

      const currentCell = columns[activeIndex].ref.current;
      const startWidth = currentCell.offsetWidth;
      const startX = currentCell.getBoundingClientRect().right; // Sütunun sağ kenarı

      const newWidth = e.clientX - startX + startWidth; // Yeni genişlik

      if (newWidth >= minCellWidth) {
        const gridColumns = columns.map((col, i) => {
          if (i === activeIndex) {
            return `${newWidth}px`; // Sadece aktif sütunun genişliğini güncelle
          }
          return `${col.ref.current.offsetWidth}px`; // Diğer sütunlar sabit kalır
        });

        tableElement.current.style.gridTemplateColumns = `${gridColumns.join(" ")}`;
      }
    },
    [activeIndex, columns, minCellWidth]
  );

  const removeListeners = useCallback(() => {
    window.removeEventListener("mousemove", mouseMove);
    window.removeEventListener("mouseup", removeListeners);
  }, [mouseMove]);

  const mouseUp = useCallback(() => {
    setActiveIndex(null);
    removeListeners();
  }, [setActiveIndex, removeListeners]);

  useEffect(() => {
    if (activeIndex !== null) {
      window.addEventListener("mousemove", mouseMove);
      window.addEventListener("mouseup", mouseUp);
    }

    return () => {
      removeListeners();
    };
  }, [activeIndex, mouseMove, mouseUp, removeListeners]);


  return (
    <div className="container-fluid">
      
      <div className="table-wrapper overflow-auto" style={{height:"calc(100vh - 140px)"}}>
        <table className="resizeable-table" ref={tableElement}>
          <thead>
            <tr>
              {columns.map(({ ref, text }, i) => (
                <th ref={ref} key={text}>
                  <span>{text}</span>
                  <div
                    style={{ height: tableHeight }}
                    onMouseDown={() => mouseDown(i)}
                    className={`resize-handle ${activeIndex === i ? "active" : "idle"
                      }`}
                  />
                </th>
              ))}
            </tr>
          </thead>

          <tbody >
            {tableContent}
          </tbody>
          
        </table>
      </div>
      {/* <button onClick={resetTableCells}>Reset</button> */}
    </div>
  );
};

export default Table;
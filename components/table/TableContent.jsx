"use client"

import React, { useRef } from "react";
const createHeaders = (headers) => {

  return headers.map((item) => ({
    text: item.field,
    ref: useRef()
  }));
};
const TableContent = ({ rowData, headers, onRowClick }) => {
  const columns = createHeaders(headers);

  return (
    <>
      {
        rowData.map((data, index) => (
          <tr className="h-[36px]" key={index} >
            {
              columns.map(({ text, ref }, i) => (
                <td key={i}>
                  {
                    i == 0 ? <a onClick={() => onRowClick(data.id)} className="text-teal-600 font-bold" style={{ color: 'teal' }}>{data[text]}</a> : data[text]
                  }

                </td>
              ))
            }
          </tr>
        ))
      }

    </>
  );
};

export default TableContent;

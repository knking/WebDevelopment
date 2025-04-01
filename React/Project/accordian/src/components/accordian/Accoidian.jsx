import React, { useState } from "react";
import data from "./data";

function Accoidian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelect, setenableMultiSelect] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getItemId) {
    setSelected(getItemId === selected ? null : getItemId);
  }

  function hanldeMultiSelection(currentId) {
    let copyState = [...multiple];
    const findIndexOfCurrentId = copyState.indexOf(currentId);
    if (findIndexOfCurrentId === -1) copyState.push(currentId);
    else copyState.splice(findIndexOfCurrentId, 1);
    setMultiple(copyState);
  }

  return (
    <div className="w-full h-full flex flex-col justify-center  gap-5 items-center border border-red-400">
      <button
        onClick={() => setenableMultiSelect(!enableMultiSelect)}
        className="bg-[#614101] py-4 px-6 mt-4 text-white cursor-pointer"
      >
        Enable Multi Selection
      </button>
      <div className="w-[500px] border border-green-400">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="bg-[#614101] mb-2 py-2 px-4">
              <div
                className="flex justify-between text-white cursor-pointer"
                onClick={
                  enableMultiSelect
                    ? () => hanldeMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
              >
                <h3 className="">{dataItem.title}</h3>
                {selected == dataItem.id ? <span>-</span> : <span>+</span>}
              </div>

              {enableMultiSelect
                ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div className="text-white h-auto"> {dataItem.content}</div>
                  )
                : selected == dataItem.id && (
                    <div className="text-white h-auto"> {dataItem.content}</div>
                  )}

              {/* {selected == dataItem.id ? (
                <div className="text-white h-auto"> {dataItem.content}</div>) : null
              } */}
            </div>
          ))
        ) : (
          <div>data not found</div>
        )}
      </div>
    </div>
  );
}

export default Accoidian;

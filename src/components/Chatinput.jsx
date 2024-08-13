import React from "react";
import { useState } from "react";
const Chatinput = ({ sendMessage }) => {
  const [value, setValue] = useState([""]);

  const handleSubmit = () => {
    if (value === " ") {
      return null;
    } else {
      sendMessage({ sender: "user", message: value });
      setValue(" ");
    }
  };
  return (
    <div className="w-full bg-white bg-opacity-10 rounded-lg overflow-auto relative ">
      <textarea
        className=" border-0 bg-transparent outline-none w-[90%] resize-none px-4 py-2"
        rows={3}
        value={value}
        type="text"
        onKeyDown={(e) => {
          e.keyCode === 13 && e.shiftKey === false && handleSubmit();
        }}
        onChange={(e) => setValue(e.target.value)}
      ></textarea>
      <div className=" absolute top-7 right-4">
        <i
          className="fa-solid fa-circle-right text-4xl hover:cursor-pointer ease-in duration-100 hover:scale-125"
          onClick={handleSubmit}
        ></i>
      </div>
    </div>
  );
};

export default Chatinput;

import React from "react";
import { TypeAnimation } from "react-type-animation";
const Chatbd = ({ chat }) => {
  const ai = "bg-white bg-opacity-70 mr-auto";

  return (
    <div className="flex flex-col gap-4">
      <div
        className={`break-words border-2 rounded-xl self-end px-3 py-2 max-w-[80%] ${ai}`}
      >
        <pre className=" whitespace-pre-wrap">
          <span>
            <TypeAnimation
              sequence={[
                ` Hi This is Learnity.ai , I am a custom AI model trained on python dataset. I can answer your questions related to python. Ask me anything about python.`,
                1000,
              ]}
              speed={90}
              cursor={false}
            />
          </span>
        </pre>
      </div>
      {chat.map((message, i) => {
        return (
          <div
            key={i}
            className={`border-[#999999]  break-words border-2 rounded-xl self-end px-3 py-2 max-w-[80%] ${
              message.sender === "ai" && ai
            }`}
          >
            <pre className=" whitespace-pre-wrap">
              <span>
                <TypeAnimation
                  sequence={[`${message.message}`, 1000]}
                  cursor={false}
                  speed={80}
                />
              </span>
            </pre>
          </div>
        );
      })}

      {/** ai */}
      {/* <div
        className={`border-[#999999] break-words border-2 rounded-xl self-end px-3 py-2 max-w-[80%] ${ai}`}
      >
        <pre>
          <span>hi this is ai!!</span>
        </pre>
      </div> */}
    </div>
  );
};

export default Chatbd;

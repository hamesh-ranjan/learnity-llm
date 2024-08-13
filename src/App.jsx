import { useState } from "react";
import ChatBody from "./components/ChatBody";
import Chatinput from "./components/Chatinput";
import YoutubeEmbed from "./components/youtubeembed";
import axios from "axios";
function App() {
  const [chat, setChat] = useState([]);

  const sendMessage = async (message) => {
    const role =
      "Act as a tutor and provide me answer related the only related to python within 100 words question,I will not answer any other questions that aren't related to python, Questions that are not related to python should not be answered, instead I will say Not to lead out of the topic or ask you to ask queries only based on python, I will greet you when required as per the your input but keep I should keep them simple and crisp, Once I answer, ill ask you whether you are satisfied with the answer, if not ill explain it in even more simple terms, Don't try to hallucinate me with irrelevant questions or facts that aren't real or not relevant:";
    const content = message.message;
    const data = role.concat(" ", content);
    console.log(data);
    await Promise.resolve(setChat((prev) => [...prev, message]));

    const options = {
      method: "POST",
      url: 'https://chatgpt-42.p.rapidapi.com/conversationgpt4-2',
      headers: {
      'x-rapidapi-key': 'e17bf532e4msha5bde230e4bc7bfp16f3f8jsn62bef21a5333',
      'x-rapidapi-host': 'chatgpt-42.p.rapidapi.com',
      'Content-Type': 'application/json'
      },
      data: {
        messages: [
          {
            role: "user",
            content: { data },
          },
        ],
        web_access: false,
        system_prompt: "",
        temperature: 0.9,
        top_k: 5,
        top_p: 0.9,
        max_tokens: 256,
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      setChat((prev) => [
        ...prev,
        { sender: "ai", message: response.data.result },
      ]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-gradient-to-br from-teal-300 to-sky-900 h-screen py-6 relative sm:px-16 px-12 text-dark overflow-hidden flex flex-col justify-between  align-middle">
      {/* gradients */}

      {/* header */}
      <div className="uppercase font-bold  text-2xl text-center mb-3">
        Learnity Chat
      </div>
      <div className="h-[100%] overflow-auto w-full max-w-4xl min-w-[20rem] py-8 px-4 self-center">
        <YoutubeEmbed />
      </div>

      {/* body */}
      <div
        className="h-[90%] overflow-auto w-full max-w-4xl min-w-[20rem] py-8 px-4 self-center
      scrollbar-thumb-slate-400 scrollbar-thin scrollbar-track-gray-tranparent scrollbar-thumb-rounded-md
      "
      >
        <ChatBody chat={chat} />
      </div>

      {/* input */}
      <div className="w-full max-w-4xl min-w-[20rem] self-center">
        <Chatinput sendMessage={sendMessage} />
        <div className=" text-center text-white">
          <a href="https://forms.gle/GKZZnEvetHAAbUtM6">
            Click here to give feedback
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;

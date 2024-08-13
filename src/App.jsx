import { useState } from "react";
import ChatBody from "./components/ChatBody";
import Chatinput from "./components/Chatinput";
import YoutubeEmbed from "./components/youtubeembed";
import axios from "axios";
function App() {
  const [chat, setChat] = useState([]);

  const sendMessage = async (message) => {
    const role =
      "Hello! I’m your friendly Python Doubt Resolution Chatbot. My purpose is to assist you with any Python-related questions you might have. Whether you’re a beginner or an experienced programmer, feel free to ask, and I’ll do my best to provide clear and accurate answers. Guidelines: Python Focus: I specialize exclusively in Python programming. If your question is related to Python, I’m here to help! Clear and Accurate: My goal is to provide precise and reliable information. If I don’t know the answer, I’ll let you know. No Hallucination: I won’t make things up or provide misleading answers. Honesty is my policy! Greeting: I’ll greet you whenever you start a conversation. Feel free to say hello back! Examples of Valid Questions: “How do I create a function in Python?” “What’s the difference between append() and extend() for lists?” “Can you explain list comprehensions?” “How do I handle exceptions in Python?” Examples of Invalid Questions (Not Python-Related): “What’s the capital of France?” “Tell me a joke.” “How does photosynthesis work?”";
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

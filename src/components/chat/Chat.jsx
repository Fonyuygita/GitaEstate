import React from "react"
import { useState } from "react";
import "./chat.scss";

function Chat() {
  const [chat, setChat] = useState(true);
  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        <div className="message">
          <img
            src="/doc1.png"
            alt=""
          />
          <span>Fonyuy Patrick</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="message">
          <img
            src="/doc2.png"
            alt=""
          />
          <span>Fonta Rex</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="message">
          <img
            src="/doc5.png"
            alt=""
          />
          <span>Jiss Deil</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="message">
          <img
            src="/doc4.png"
            alt=""
          />
          <span>Rene Cheel</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="message">
          <img
            src="/doc.png"
            alt=""
          />
          <span>Kilo Vale</span>
          <p>Hello Paul Take some water after rest...</p>
        </div>
        <div className="message">
          <img
            src="/doc.png"
            alt=""
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
      </div>
      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img
                src="/doc.png"
                alt=""
              />
              John Doe
            </div>
            <span className="close" onClick={()=>setChat(null)}>X</span>
          </div>
          <div className="center">
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
          </div>
          <div className="bottom">
            <textarea></textarea>
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chat;

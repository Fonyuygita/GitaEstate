import Chat from "../../components/chat/Chat";
import List from "../../components/list/List.jsx";

import "./profile.scss";

function ProfilePage() {
  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
          </div>
          <div className="info">
            
       <div className="bigImage">
       <img
       src="/user.png"
       alt=""
     />


     <div className="smallImage">
              <img
              src="/user.png"
              alt=""
            />
              </div>
       </div>
              
            
            
            <span>
              Username: <b>John Doe</b>
            </span>
            <span>
              E-mail: <b>john@gmail.com</b>
            </span>
          </div>
          <div className="title">
            <h1>Doctors you may know</h1>
            <button>New Post</button>
          </div>
        <List/>
          
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat/>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;

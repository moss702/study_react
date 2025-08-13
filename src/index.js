import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import Library from "./chapter_03/Library";
import ConfirmDialog from "./chapter_04/ConfirmDialog";
import Clock from "./chapter_04/Clock";
import Welcome from "./chapter_05/Welcome";
import Welcome1 from "./chapter_05/Welcome1";
import App1 from "./chapter_05/App1";
import Comment from "./chapter_05/Comment";
import CommenttList from "./chapter_05-1/CommenttList";
import NotificationList from "./chapter_06/NotificationList";
import Counter from "./chapter_07/Counter";
import Accommodate from  "./chapter_07/Accommodate";
import Toggle from  "./chapter_08/Toggle";
import MyButton from  "./chapter_08/MyButton";
import ToggleCheck from "./chapter_08/ToggleCheck";
import LoginControl from "./chapter_09/LoginControl";
import Mailbox from "./chapter_09/Mailbox";
import MainPage from "./chapter_09/MainPage";
import LandingPage from "./chapter_09/LandingPage";

// --------- chap 03_ Book, Library
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <React.StrictMode>
//       <Library /> // 불러오려는 녀석의 이름을 넣어주자!
//     </React.StrictMode>
// );

// --------- chap 04_ Clock
// const root = ReactDOM.createRoot(document.getElementById('root'));
// setInterval(() => {
//   root.render(
//       <React.StrictMode>
//         <Clock />
//       </React.StrictMode>
//   );
// }, 1000);
// --------- chap 05_Welcome, Welcome1 <Welcome1 name={"이끼끼"} /> , App1
// const author = {avatarUrl: "http://file.instiz.net/data/file/20130317/6/4/4/64486366e06189228c268416290dd5b7", name: "Lee"};
//
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <React.StrictMode>
//       <Comment author={author} text="영화" date={"2025-08-13"} />
//     </React.StrictMode>
// );

// --------- chap 05-1 CommenttList
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <React.StrictMode>
//       <CommenttList />
//     </React.StrictMode>
// );

// --------- chap 06 NotificationList
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <React.StrictMode>
//       <NotificationList />
//     </React.StrictMode>
// );

// --------- chap 07 Counter, Accommodate
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <React.StrictMode>
//       <Counter />
//     </React.StrictMode>
// );

// --------- chap 08 Toggle, MyButton, ToggleCheck
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <React.StrictMode>
//       <ToggleCheck />
//     </React.StrictMode>
// );

// --------- chap 09 Greeting, Mailbox, MainPage, LandingPage
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      {/*<Mailbox unreadMessages={["메시지1", "메시지2"]} />*/}
      <LandingPage />
    </React.StrictMode>
);



//====================================================================
// // --------- chap 0
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
  {
    no : 1,
    message : "안녕하세요. 오늘 일정을 알려드립니다.",
  },
  {
    no : 2,
    message : "점심식사 시간입니다.",
  },
  {
    no : 3,
    message : "곧 미팅이 시작됩니다.",
  },
];

var timer;

class NotificationList extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      notifications : [],
    };
  }

  componentDidMount() {
    const {notifications} = this.state;
    timer = setInterval(() => {
      if(notifications.length < reservedNotifications.length) {
        const idx = notifications.length;
        notifications.push(reservedNotifications[idx]);
        this.setState({notifications: notifications,});
      }
      else  {
        this.setState({notifications: []}); // 배경을 다시 그린다.
        clearInterval(timer);
      }
    }, 1000);
    console.log("componentDidMount() called.... ")
  }

  componentDidUpdate() {
    console.log("componentDidUpdate() called.... ")
  }

  componentWillUnmount() {
    if(timer) {
      clearInterval(timer);
    }
    console.log("componentWillUnmount() called.... ")
  }

  render() {
    return (
        <div>
          {this.state.notifications.map((notification) => {
            return <Notification
                key = {notification.no}
                message = {notification.message} />
          })}
        </div>
    );
  }
}
export  default NotificationList;
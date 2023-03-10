import "./App.css";
import React from "react";
import Profile from "./components/profile";

class app extends React.Component {
  state = {
    person: {
      fullName: "Moetaz Khaled",
      bio: "learn fast work hard",
      imgSrc: "./maphoto.jpg",
      profession: "FullStuck JS Developper",
    },
    show: false,
  };

  handleClick = () => this.setState({ show: !this.state.show });
  render() {
    return (
      <>
        <button onClick={this.handleClick}> ClickMe</button>
        {this.state.show ? <Profile p={this.state.person}></Profile> : null}
      </>
    );
  }
}
export default app;
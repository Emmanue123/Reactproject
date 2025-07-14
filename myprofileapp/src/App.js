import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Person: {
        fullName: "Chinonso Emmanuel",
        bio: "I am a passionate web developer exploring React!",
        imgSrc:
          "https://via.placeholder.com/200x200.png?text=Profile+Image",
        profession: "Frontend Developer",
      },
      shows: false,
      interval: 0,
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        interval: prevState.interval + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  toggleProfile = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  };

  render() {
    const { Person, shows, interval } = this.state;

    return (
      <div style={{ textAlign: "center", padding: "40px" }}>
        <button onClick={this.toggleProfile}>
          {shows ? "Hide Profile" : "Show Profile"}
        </button>

        {shows && (
          <div style={{ marginTop: "20px" }}>
            <h1>{Person.fullName}</h1>
            <img
              src={Person.imgSrc}
              alt="Profile"
              style={{ width: "200px", borderRadius: "50%" }}
            />
            <p>{Person.bio}</p>
            <p><strong>Profession:</strong> {Person.profession}</p>
          </div>
        )}

        <p>Component mounted since: {interval} second(s)</p>
      </div>
    );
  }
}

export default App;

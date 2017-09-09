import React from 'react';


class Clock extends React.Component{

  componentDidMount() { this.intervalID = setInterval(this.tick, 1000); }
  componentWillUnmount() { clearInterval(this.intervalID);}

  constructor(props) {
    super(props);
    this.intervalID = '';
    this.state = {
      time: new Date()
    };
    this.tick = this.tick.bind(this);
  }

  render() {
    return (
    <div className="clockContainer">
      <h1>A CLOCK!</h1>
      <div className="flexiClass">
        <p>Time:</p>
        <p >{this.formatTime()}</p>
      </div>
      <div className="flexiClass">
        <p>Date:</p>
        <p>{this.formatDate()}</p>
      </div>
    </div>
    );
  }

  tick() {
    this.setState({time: new Date()});
  }

  formatTime() {
    let hours = this.state.time.getHours();
    let minutes = this.state.time.getMinutes();
    let seconds = this.state.time.getSeconds();
    //TODO
    // [hours, minutes, seconds].map(num =>  num > 9 ? num : "0" + num);

    return `${hours} : ${minutes} : ${seconds}`;
  }

  formatDate() {
    const monthHash = {
      0: "January",
      1: "February",
      2: "March",
      3: "April",
      4: "May",
      5: "June",
      6: "July",
      7: "August",
      8: "September",
      9: "October",
      10: "November",
      11: "December"
    };

    const daysHash = {
      0: "Sunday",
      1: "Monday",
      2: "Tuesday",
      3: "Wednesday",
      4: "Thursday",
      5: "Friday",
      6: "Saturday"
    };

    const day = daysHash[this.state.time.getDay()];
    const date = this.state.time.getDate();
    const year = this.state.time.getFullYear();
    const month = monthHash[this.state.time.getMonth()];

    return `${day} ${month} ${date} ${year}`;
  }
}

export default Clock;

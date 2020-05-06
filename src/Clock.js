import "./Clock.css";
import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        time: new Date(),
      });
    }, 100);
  }
  formatSet(data) {
    return data < 10 ? "0" + data : data;
  }

  render() {
    const { time } = this.state;
    const { color } = this.props;
    const y = this.formatSet(time.getFullYear());
    const mon = this.formatSet(time.getMonth() + 1);
    const d = this.formatSet(time.getDate());
    const h = this.formatSet(time.getHours());
    const m = this.formatSet(time.getMinutes());
    const s = this.formatSet(time.getSeconds());
    const ms = this.formatSet(time.getMilliseconds());
    return (
      <div className="clockBox" style={{ color }}>
        <h1 className="fontchange">
          {y}년 {mon}월{d}일 {h}시{m}분{s}.{ms}초
        </h1>
      </div>
    );
  }
}

export default Clock;

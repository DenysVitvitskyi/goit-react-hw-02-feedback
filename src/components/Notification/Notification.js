import { Component } from "react";
import PropTypes from "prop-types";

class Notification extends Component {
  render() {
    return <p>{this.props.title}</p>;
  }
}

Notification.propTypes = {
  title: PropTypes.string,
};

export default Notification;
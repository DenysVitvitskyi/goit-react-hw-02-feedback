import { Component } from "react";
import PropTypes from "prop-types";
import { Button, List, Item } from "./FeedbackOptions.styled";

class FeedbackOptions extends Component {
  render() {
    return (
      <List>
        {this.props.options.map((option) => {
          return (
            <Item key={option}>
              <Button
                type="button"
                name={option}
                onClick={this.props.onLeaveFeedback}
              >
                {option}
              </Button>
            </Item>
          );
        })}
      </List>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
'use strict';

var React = require('react-native');
var {
  View,
  Text,
  TouchableHighlight
} = React;
var {
  styles,
  colors
} = require('./globalStyles.js');

export class PickerButton extends React.Component {
  constructor(props) {
    super(props);
    this.createOption = this.createOption.bind(this);
  }
  getValue() {
    return this.props.value;
  }
  getOnPress() {
    return this.props.onPress;
  }
  createOption(option) {
    let textStyle = styles.buttonText,
        buttonStyle = styles.button,
        onClick = this.getOnPress();

    if (this.getValue() === option) {
      textStyle = styles.buttonTextSelected;
      buttonStyle = styles.buttonSelected;
    }

    return React.createElement(
      TouchableHighlight, {
        style: buttonStyle,
        key: option + "button",
        underlayColor: colors.blue,
        onPress: () => onClick(option)
      },
      React.createElement(
        Text, {
          style: textStyle,
          key: option + "text"
        },
        option
      )
    );
  }
  render() {
    let options = this.props.options,
        label = React.createElement(
          Text, {
            style: styles.labelText
          },
          this.props.label),
        buttons = React.createElement(
          View, {
            style: styles.buttonList
          },
          options.map(this.createOption)
        );
    return React.createElement(View, null, label, buttons);
  }
}

module.exports = PickerButton;

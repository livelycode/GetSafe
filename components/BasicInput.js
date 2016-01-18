'use strict';

var React = require('react-native'),
    {View, TextInput, Text} = React,
    {styles, colors} = require('./globalStyles.js');

export class BasicInput extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    let label = React.createElement(
      Text, {
        style: styles.labelText
      },
      this.props.label
    ),
        value = this.props.value,
        input = React.createElement(
          TextInput, {
            style: styles.input,
            onChangeText: this.props.onChange,
            underlineColorAndroid: colors.blue,
            value
          }
        );
    return React.createElement(View, null, label, input);
  }
}

module.exports = BasicInput;

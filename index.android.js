'use strict';

var React = require('react-native'),
    PickerButton = require('./components/PickerButton.js'),
    BasicInput = require('./components/BasicInput.js'),
    {
      Alert,
      AppRegistry,
      Text,
      TouchableOpacity,
      TouchableHighlight,
      View,
      ScrollView
    } = React,
    {
      styles,
      colors
    } = require('./components/globalStyles.js');

var GetSafePrototype = React.createClass({
  getInitialState: () => {
    return {
      name: "Alfredo Papst",
      address: "Schönestrasse links 125b",
      gender: "Männlich",
      family: "Verheiratet",
      postal: "",
      city: "",
      birthday: "01.02.1980"
    };
  },
   isComplete: function () {
     let {
       name,
       city,
       address,
       postal,
       birthday} = this.state;
     return name !== "" &&
       address !== "" &&
       postal !== "" &&
       birthday !== "" &&
       city !== "";
  },
  render: function() {
    let topNavigation = React.createElement(
      TouchableHighlight, {
        onPress: this._onPressButton,
        underlayColor: colors.lightBlue,
        style: styles.navigationButton
      },
      React.createElement(Text, null)
    ),
        title = React.createElement(
          Text, {
            style: styles.welcome
          },
          "Persönliche Angabe"),
        name= React.createElement(
          BasicInput, {
            label: "NAME",
            value: this.state.name,
            onChange: (name) => this.setState({name})
          }
        ),
        gender= React.createElement(
          PickerButton, {
            label: "GESCHLECHT",
            value: this.state.gender,
            options: ["Weiblich", "Männlich"],
            onPress: gender => this.setState({gender})
          }
        ),
        family= React.createElement(
          PickerButton, {
            label: "FAMILIENSTATUS",
            value: this.state.family,
            options: ["Ledig", "Verheiratet"],
            onPress: family => this.setState({family})
          }
        ),
        birthday= React.createElement(
          BasicInput, {
            label: "GEBURTSDATUM",
            value: this.state.birthday,
            onChange: birthday => this.setState({birthday})
          }
        ),
        address= React.createElement(
          BasicInput, {
            label: "ADRESSE",
            value: this.state.address,
            onChange: address => this.setState({address})
          }
        ),
        postal = React.createElement(
          BasicInput, {
            label: "PLZ",
            value: this.state.postal,
            onChange: postal => this.setState({postal})
          }
        ),
        city = React.createElement(
          BasicInput, {
            label: "ORT",
            value: this.state.city,
            onChange: city => this.setState({city})
          }
        ),
        continueText = React.createElement(
          Text, {
            style: this.isComplete() ?
              styles.navigationButtonText :
              styles.navigationButtonTextDisabled
          },
          "WEITER"
        ),
        continueButton = React.createElement(
          TouchableOpacity, {
            onPress: this.isComplete() ?
              () => Alert.alert("Person", "Eingabe komplett", [{text: "OK"}]) : null,
            activeOpacity: this.isComplete() ? 0.7 : 1,
            underlayColor: colors.lightBlue,
            style: this.isComplete() ? styles.navigationButton : styles.navigationButtonDisabled
          },
          continueText
        ),
        scrollView = React.createElement(
          ScrollView, null,
          topNavigation,
          title,
          name,
          gender,
          family,
          birthday,
          address,
          postal,
          city,
          continueButton
        );
    return React.createElement(
      View, {
        style: styles.container
      },
      scrollView
    );
  }
});

AppRegistry.registerComponent('GetSafePrototype', () => GetSafePrototype);

'use strict';
var StyleSheet = require('react-native').StyleSheet;

var colors = {
    blue : "#3d9df4",
    blueWhite: "#f9feff",
    lightBlue: "#a0d1ff",
    lightGrey: "#858585",
    ultraLightGrey: "#dadada"
  };


var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#F4FCFF',
  },
  button: {
      flexWrap: "wrap",
      width: 128,
      paddingBottom: 10,
      paddingTop: 10,
      backgroundColor: colors.ultraLightGrey,
      marginBottom: 10,
      alignSelf: "center"
  },
  buttonText: {
      alignSelf: "center",
  },
  buttonSelected: {
      flexWrap: "wrap",
      width: 128,
      paddingBottom: 10,
      paddingTop: 10,
      backgroundColor: colors.blue,
      marginBottom: 10,
      alignSelf: "center"
  },
  buttonTextSelected: {
      alignSelf: "center",
      color: colors.blueWhite,
  },
  buttonList: {
      flexDirection: "row",
      marginLeft: 10,
      marginBottom: 10
  },
  switcher: {
      justifyContent: "center",
      alignSelf: "center"
  },
  welcome: {
    fontSize: 20,
    color: colors.lightGrey,
    marginLeft: 10,
    marginBottom: 15,
    marginTop: 15,
  },
  labelText: {
    textAlign: 'left',
    color: colors.lightGrey,
    fontSize: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 5
  },
  text: {
    textAlign: 'left',
    color: '#333333',
    marginLeft: 10,
    marginTop: 5,
  },
  input: {
    height: 40,
    borderWidth: 1,
    marginLeft: 10,
    marginRight: 10
  },
  navigationButton: {
    backgroundColor: colors.blue,
    paddingTop: 25,
    paddingBottom: 25
  },
  navigationButtonDisabled: {
    backgroundColor: colors.lightGrey,
    paddingTop: 25,
    paddingBottom: 25
  },
  navigationButtonText: {
    color: colors.blueWhite,
    alignSelf: "center"
  },
  navigationButtonTextDisabled: {
      alignSelf: "center"
  }
});

module.exports = {
  styles,
  colors
};

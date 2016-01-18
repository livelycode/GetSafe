'use strict';

var React = require('react-native');
var {
  Alert,
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  Switch,
  View,
  ScrollView,
  TextInput,
  ListView
} = React;

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


var GetSafePrototype = React.createClass({
  getInitialState: () => {
    return {
      name: "Alfredo Papst",
      address: "Schönestrasse links 125b",
      gender: {
        male: true,
        female: false
      },
      family: {
        married: true,
        single: false
      },
      postal: "",
      city: "",
      birthday: "01.02.1980"
    };
  },
  setGender: function (gender) {
    let newStatus;
    switch(gender) {
      case "male": {
        newStatus = true;
        break;
      }
      case "female": {
        newStatus = false;
        break;
      }
    }

    this.setState({
      gender: {
        male: newStatus,
        female: !newStatus
      }
    });
  },
  setFamilyStatus: function (status) {
    let newStatus;
    switch(status) {
      case "married": {
        newStatus = true;
        break;
      }
      case "single": {
        newStatus = false;
        break;
      }
    }
    this.setState({
      family: {
        married: newStatus,
        single: !newStatus
      }
    });
  },
  setPickerStyle: function (status) {
    if(status) {
      return styles.buttonSelected;
    } else {
      return styles.button;
    }
  },
  setPickerStyleText: function (status) {
      if(status) {
        return styles.buttonTextSelected;
      } else {
        return styles.buttonText;
      }
  },
  isComplete: function () {
    let {name, city, address, postal, birthday} = this.state;
    return name !== "" && address !== "" && postal !== "" && birthday !== "" && city !== "";
  },
  render: function() {
    return (
      <View style={styles.container}>
        <ScrollView>
        <TouchableHighlight onPress={this._onPressButton}
           underlayColor={colors.lightBlue}
           style={styles.navigationButton}>
           <Text></Text>
         </TouchableHighlight>
        <Text style={styles.welcome}>
          Persönliche Angaben
        </Text>
        <Text style={styles.labelText}>NAME</Text>
        <TextInput style={styles.input}
          onChangeText={(name) => this.setState({name})}
          underlineColorAndroid={colors.blue}
          value={this.state.name} />
        <Text style={styles.labelText}>GESCHLECHT</Text>
        <View style={styles.buttonList}>
          <TouchableHighlight onPress={() => this.setGender("female")}
            style={this.setPickerStyle(this.state.gender.female)}
           underlayColor={colors.blue}>
           <Text style={this.setPickerStyleText(this.state.gender.female)}>Weiblich</Text>
         </TouchableHighlight>
         <TouchableHighlight onPress={() => this.setGender("male")}
            style={this.setPickerStyle(this.state.gender.male)}
           underlayColor={colors.blue}>
           <Text style={this.setPickerStyleText(this.state.gender.male)}>Männlich</Text>
         </TouchableHighlight>
        </View>
        <Text style={styles.labelText}>FAMILIENSTATUS</Text>
        <View style={styles.buttonList}>
          <TouchableHighlight onPress={() => this.setFamilyStatus("single")}
            style={this.setPickerStyle(this.state.family.single)}
            underlayColor={colors.blue}>
           <Text style={this.setPickerStyleText(this.state.family.single)}>Ledig</Text>
         </TouchableHighlight>
         <TouchableHighlight onPress={() => this.setFamilyStatus("married")}
            style={this.setPickerStyle(this.state.family.married)}
           underlayColor={colors.blue}>
           <Text style={this.setPickerStyleText(this.state.family.married)}>Verheiratet</Text>
         </TouchableHighlight>
        </View>
        <Text style={styles.labelText}>GEBURTSDATUM</Text>
        <TextInput style={styles.input}
          onChangeText={(birthday) => this.setState({birthday})}
          value={this.state.birthday} />
        <Text style={styles.labelText}>ADRESSE</Text>
        <TextInput style={styles.input}
          onChangeText={(address) => this.setState({address})}
          value={this.state.address} />
        <Text style={styles.labelText}>PLZ</Text>
        <TextInput style={styles.input}
          onChangeText={(postal) => this.setState({postal})}
          value={this.state.postal} />
        <Text style={styles.labelText}>ORT</Text>
        <TextInput style={styles.input}
          onChangeText={(city) => this.setState({city})}
          value={this.state.city} />
        <TouchableOpacity
          onPress={this.isComplete() ?
            () => Alert.alert("Person", "Eingabe komplett", [{text: "OK"}]) :
            null}
            activeOpacity={this.isComplete() ? 0.7 : 1}
          underlayColor={colors.lightBlue}
          style={this.isComplete() ? styles.navigationButton : styles.navigationButtonDisabled}>
          <Text style={this.isComplete() ?  styles.navigationButtonText : styles.navigationButtonTextDisabled}>WEITER</Text>
         </TouchableOpacity>
       </ScrollView>
      </View>
    );
  }
});

AppRegistry.registerComponent('GetSafePrototype', () => GetSafePrototype);

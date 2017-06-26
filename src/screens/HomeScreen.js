import React, { Component } from "react";
import { View, Text, TextInput, ActivityIndicator, Alert } from "react-native";
import { Button, Container, Content, Item, Input, Icon } from "native-base";
import { connect } from "react-redux";
import { fetchHome } from "../actions/home_actions";
class HomeScreen extends Component {
  static navigationOptions = {
    title: "UK Property Search"
  };
  state = {
    isReady: true,
    placeName: "chelsea"
  };
  onSearchPres = () => {
    // this.setState( { isReady: false } )
    if (this.state.placeName === '') {
      Alert.alert(
        "Please fill in place name",
        "",
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
      );
    } else {
      this.props.fetchHome(this.state.placeName, () => {
        this.props.navigation.navigate("listhome");
      });

      // this.setState( { isReady: true } )
    }
  };

  render() {
    const {
      firstText,
      secondText,
      input,
      searchButton,
      container,
      locationButton
    } = styles;

    // if (!this.state.isReady) {
    //   return (
    //     <View style = { { alignSelf: 'center' }} >
    //         <Text
    //         style = { { alignSelf: 'center', fontSize: 40 }}>
    //          Loading... </Text>
    //     </View>
    //    )

    // }

    return (
      <View>
        <Text style={firstText}>
          Search for houses to buy!
        </Text>

        <Text style={secondText}>
          Search by place-name, postcode or by location!
        </Text>

        <View style={container}>
          <Item rounded style={input}>
            <Input
              placeholder="city or postcode"
              value={this.state.placeName}
              onChangeText={placeName => this.setState({ placeName })}
            />
          </Item>

          <Button
            primary
            rounded
            medium
            style={searchButton}
            onPress={this.onSearchPres}
          >
            <Text
              style={{
                fontSize: 14,
                textAlign: "center",
                color: "white"
              }}
            >
              Go
            </Text>
          </Button>
        </View>
        <Button iconLeft primary rounded style={locationButton}>

          <Text
            style={{
              fontSize: 14,
              textAlign: "center",
              color: "white"
            }}
          >
            Find By Location
          </Text>
        </Button>

      </View>
    );
  }
}

const styles = {
  firstText: {
    marginTop: 15,
    fontSize: 18,
    alignSelf: "center"
  },
  secondText: {
    marginTop: 15,
    fontSize: 13,
    alignSelf: "center"
  },
  container: {
    flexDirection: "row",
    marginTop: 30
  },
  input: {
    left: 15,
    width: 220,
    borderColor: "black",
    borderWidth: 0.2
  },
  searchButton: {
    position: "relative",
    marginLeft: 35,
    width: 80,
    backgroundColor: "#199",
    justifyContent: "center"
  },
  locationButton: {
    marginTop: 15,
    alignSelf: "center",
    width: 300,
    justifyContent: "center"
  }
};

const mapStateToProps = ({ listHome }) => {
  return { homes: listHome };
};

export default connect(mapStateToProps, { fetchHome })(HomeScreen);

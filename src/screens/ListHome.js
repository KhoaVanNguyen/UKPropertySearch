import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableHighlight
} from "react-native";
import { connect } from "react-redux";
import { fetchHome } from "../actions/home_actions";
import { Button } from "native-base";
class ListHome extends Component {
  static navigationOptions = {
    title: "Result"
  };
  renderListHome = () => {
    
    if ( this.props.homes.length <= 0  ){
      return (
        <View> 
          <Text> There are no results  </Text>
        </View>
      )
    }

    const { image, row, textContainer, priceText, devider } = styles;
    return this.props.homes.map(home => {
      return (
        <TouchableHighlight key={home.img_url}

          onPress = { () => {
            this.props.navigation.navigate('detail', { home } )
          }  }
        >
          <View style={row}>
            <Image style={image} source={{ uri: home.img_url }} />
            <View style={textContainer}>
              <Text style={priceText}> {home.price_formatted}  </Text>
              <Text> {home.title}  </Text>
            </View>
          </View>
        </TouchableHighlight>
      );
    });
  };
  render() {
    
    console.log(this.props)
    return (
      <View>
        <ScrollView scrollEnabled>
          {this.renderListHome()}
        </ScrollView>
      </View>
    );
  }
}

const styles = {
  row: {
    flexDirection: "row",
    flex: 3,
    marginBottom: 10
  },
  image: {
    width: 80,
    height: 80,
    flex: 1
  },
  textContainer: {
    flex: 2,
    justifyContent: "flex-start"
  },
  priceText: {
    fontSize: 18,
    color: "#049"
  },
  devider: {
    height: 2,
    backgroundColor: "#001"
  }
};

const mapStateToProps = ({ listHome }) => {
  return { homes: listHome };
};

export default connect(mapStateToProps, { fetchHome })(ListHome);

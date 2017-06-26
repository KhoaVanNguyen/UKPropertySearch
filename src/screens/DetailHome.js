import React, { Component  } from 'react'
import { View, Text, Image, Dimensions } from 'react-native'

const WIDTH = Dimensions.get('window').width
class DetailHome extends Component {
    static navigationOptions = {
        title: "Detail"
     };
    render(){
        const {  home   } = this.props.navigation.state.params
        const { image, price, title } = styles
        return (
            <View>
                <Image style={image} source={{ uri: home.img_url }} />
                <Text sytle = { price } > {home.price_formatted} </Text>
                <Text style = { title } > { home.title  }  </Text>
                
                <Text>  ${ home.bedroom_number } bedroom(s) ${home.bathroom_number} bathroom(s)  </Text>
                <Text> { home.summary }  </Text>
            </View>
            
        )
    }

}
const styles = { 
    image: {
        height: 250,
        width: WIDTH
    }, 
    price: {
        fontSize: 22,
        color: "#049"
    },
    title: {
        fontSize: 16
    }
}

export default DetailHome

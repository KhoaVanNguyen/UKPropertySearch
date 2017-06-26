import React from 'react';
import { Text, View, AppRegistry} from 'react-native';
import ListHome from './src/screens/ListHome'
import HomeScreen from './src/screens/HomeScreen'
import DetailHome from './src/screens/DetailHome'
import { StackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import store from './src/store'
export default class App extends React.Component {
 
  render() {
    const App = StackNavigator({
      home: { screen: HomeScreen },
      listhome: { screen: ListHome },
      detail: { screen: DetailHome }
    } )
    return (
      <Provider store = { store }>
        <App />
      </Provider>
        
      
    );
  }
}


AppRegistry.registerComponent('UKPropertySearch', () => App);

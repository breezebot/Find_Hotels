'use strict';

var React = require('react-native');

var ListView = require('./components/ListView');
var MapView = require('./components/MapView');
var ScrollView = require('./components/ScrollView');
var SliderIOS = require('./components/SliderIOS');
var SwitchIOS = require('./components/SwitchIOS');


var {
  Image,
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

module.exports = React.createClass({
    render: function() {
        return (
          <View>
            <View style={[styles.view1]}>
                <Text 
                	style={[styles.view1Navbar2]}>
                	Amenities
                </Text>
            </View>
            <View style={[styles.view3]}>
                <Text 
                	style={[styles.view3Text6]}>
                	Dogs Allowed
                </Text>
                <SwitchIOS 
                  style={[styles.view3Switchios13]}>
                </SwitchIOS>
            </View>
            <View style={[styles.view4]}>
                <Text 
                	style={[styles.view4Text7]}>
                	Pool
                </Text>
                <SwitchIOS 
                  style={[styles.view4Switchios12]}>
                </SwitchIOS>
            </View>
            <View style={[styles.view5]}>
                <Text 
                	style={[styles.view5Text9]}>
                	Room Service
                </Text>
                <SwitchIOS 
                  style={[styles.view8Switchios14]}>
                </SwitchIOS>
            </View>
            <View style={[styles.view8]}>
                <Text 
                	style={[styles.view8Text10]}>
                	Gym
                </Text>
                <SwitchIOS 
                  style={[styles.view5Switchios11]}>
                </SwitchIOS>
            </View>
            <View style={[styles.view15]}>
                <Text 
                	style={[styles.view15Text16]}>
                	Minimum Price
                </Text>
            </View>
            <View style={[styles.view17]}>
                <SliderIOS 
                	style={[styles.view17Sliderios27]}>
                </SliderIOS>
            </View>
            <View style={[styles.view19]}>
                <Text 
                	style={[styles.view19Text20]}>
                	Maximum Price
                </Text>
            </View>
            <View style={[styles.view21]}>
                <SliderIOS 
                	style={[styles.view21Sliderios22]}>
                </SliderIOS>
            </View>
          </View>
        );
    }
})


var styles = StyleSheet.create({
      view1:{
      }, 
      view1Navbar2:{
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 32,
          paddingBottom: 21,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 0,
          fontSize: 17,
          fontWeight: 'bold',
          textAlign: 'center',
          color: '#ffffff',
          backgroundColor: '#9c1c00',
          width: 375,
          height: 73.75,
      }, 
      view3:{
          flexDirection: 'row',
          width: 375,
          paddingTop: 10,
      }, 
      view4:{
          flexDirection: 'row',
      }, 
      view5:{
          flexDirection: 'row',
      }, 
      view3Text6:{
          fontSize: 17,
          marginLeft: 20,
          width: 260,
          height: 60,
      }, 
      view4Text7:{
          fontSize: 17,
          marginLeft: 20,
          width: 260,
          height: 60,
      }, 
      view8:{
          flexDirection: 'row',
      }, 
      view5Text9:{
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 0,
          marginLeft: 20,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 0,
          fontSize: 17,
          width: 260,
          height: 60,
      }, 
      view8Text10:{
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 0,
          marginLeft: 20,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 0,
          fontSize: 17,
          width: 260,
          height: 60,
      }, 
      view5Switchios11:{
          paddingLeft: 10,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 0,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 0,
          width: 260,
          height: 60,
      }, 
      view4Switchios12:{
          paddingLeft: 10,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 0,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 0,
          width: 260,
          height: 60,
      }, 
      view3Switchios13:{
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 0,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 0,
          width: 260,
          height: 60,
      }, 
      view8Switchios14:{
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 0,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 0,
          width: 260,
          height: 60,
      }, 
      view15:{
      }, 
      view15Text16:{
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 0,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 15,
          marginBottom: 0,
          fontSize: 18,
          textAlign: 'center',
          width: 375,
          height:20,
      }, 
      view17:{
      }, 
      view19:{
      }, 
      view19Text20:{
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 0,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 15,
          marginBottom: 0,
          fontSize: 18,
          textAlign: 'center',
          width: 375,
          height: 20,
      }, 
      view21:{
      }, 
      view21Sliderios22:{
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 0,
          marginLeft: 10,
          marginRight: 10,
          marginTop: 0,
          marginBottom: 0,
          width: 350,
          height: 50,
      }, 
      view23:{
          height: NaN,
      }, 
      view24:{
          height: NaN,
      }, 
      view24Tabbarios25:{
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 0,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 0,
          width: 375,
      }, 
      view17Sliderios27:{
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 0,
          marginLeft: 10,
          marginRight: 10,
          marginTop: 0,
          marginBottom: 0,
          width: 350,
          height: 50,
      }, 
})




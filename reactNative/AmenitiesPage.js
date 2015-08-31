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
                <SwitchIOS 
                	style={[styles.view3Switchios13]}>
                </SwitchIOS>
                <Text 
                	style={[styles.view3Text6]}>
                	Dogs Allowed
                </Text>
            </View>
            <View style={[styles.view4]}>
                <SwitchIOS 
                	style={[styles.view4Switchios12]}>
                </SwitchIOS>
                <Text 
                	style={[styles.view4Text7]}>
                	Pool
                </Text>
            </View>
            <View style={[styles.view5]}>
                <SwitchIOS 
                	style={[styles.view8Switchios14]}>
                </SwitchIOS>
                <Text 
                	style={[styles.view5Text9]}>
                	Room Service
                </Text>
            </View>
            <View style={[styles.view8]}>
                <SwitchIOS 
                	style={[styles.view5Switchios11]}>
                </SwitchIOS>
                <Text 
                	style={[styles.view8Text10]}>
                	Gym
                </Text>
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
          paddingTop: 12,
          paddingBottom: 0,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 0,
          fontSize: 17,
          textAlign: 'center',
          backgroundColor: '#9c1b00',
          color: '#ffffff',
          width: 375,
          height: NaN,
      }, 
      view3:{
          flexDirection: 'row',
      }, 
      view4:{
          flexDirection: 'row',
      }, 
      view5:{
          flexDirection: 'row',
      }, 
      view3Text6:{
          paddingLeft: 12,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 0,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 0,
          fontSize: 17,
          width: 234.375,
          height: NaN,
      }, 
      view4Text7:{
          paddingLeft: 11,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 0,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 0,
          fontSize: 17,
          width: 312.49999999999994,
          height: NaN,
      }, 
      view8:{
          flexDirection: 'row',
      }, 
      view5Text9:{
          paddingLeft: 8,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 0,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 0,
          fontSize: 17,
          width: 234.375,
          height: NaN,
      }, 
      view8Text10:{
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 0,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 0,
          fontSize: 17,
          width: 312.49999999999994,
          height: NaN,
      }, 
      view5Switchios11:{
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 0,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 0,
          width: 156.24999999999997,
          height: NaN,
      }, 
      view4Switchios12:{
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 0,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 0,
          width: 156.24999999999997,
          height: NaN,
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
          width: 234.375,
          height: NaN,
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
          width: 234.375,
          height: NaN,
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
          marginTop: 0,
          marginBottom: 0,
          fontSize: 12,
          textAlign: 'center',
          color: '#442194',
          width: 375,
          height: NaN,
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
          marginTop: 0,
          marginBottom: 0,
          fontSize: 20,
          textAlign: 'center',
          width: 375,
          height: NaN,
      }, 
      view21:{
      }, 
      view21Sliderios22:{
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 0,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 0,
          width: 375,
          height: NaN,
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
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 0,
          width: 375,
          height: NaN,
      }, 
})




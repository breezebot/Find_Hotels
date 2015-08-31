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
                	Find Hotels
                </Text>
            </View>
            <View style={[styles.view3]}>
                <MapView
                	latitude={40.704814} longitude={-74.008930} latitudeDelta={undefined} longitudeDelta={undefined} mapType={'standard'}
                	style={[styles.view3Mapview4]}>
                </MapView>
            </View>
            <View >
                <ScrollView 
                dataSource={['http://downtownmagazinenyc.com/wp-content/uploads/2012/04/AndazWallStreetHotelNYC091610-01-LO-TPP.jpeg', 'http://www.ritzcarlton.com/NR/rdonlyres/D04FD033-3DC9-48BA-B564-80A8CC74E95C/0/Ritz_BatteryPark_00099_1220x520.jpg', 'http://ihg.scene7.com/is/image/ihg/holiday-inn-new-york-3442552674-4x3']}
                style={[styles.view5Scrollview6]}>
                </ScrollView>
            </View>
            <View style={[styles.view7]}>
                <ListView 
                dataSource={['Andaz Hotel', 'Ritz Carlton', 'Holiday Inn']}
                style={[styles.view7Listview9]}>
                </ListView>
                <ListView 
                dataSource={['$236.00', '$455.23', '$98.20']}
                style={[styles.view7Listview10]}>
                </ListView>
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
          paddingTop: 11,
          paddingBottom: 0,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 0,
          fontSize: 17,
          textAlign: 'center',
          backgroundColor: '#c82c2f',
          color: '#ffffff',
          width: 375,
          height: 85,
      }, 
      view3:{
      }, 
      view3Mapview4:{
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
      view5Scrollview6:{
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
      view7:{
          flexDirection: 'row',
      }, 
      view8:{
          height: NaN,
      }, 
      view7Listview9:{
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 0,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 0,
          fontSize: 15,
          textAlign: 'center',
          width: 234.375,
          height: NaN,
      }, 
      view7Listview10:{
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 0,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 0,
          fontSize: 15,
          textAlign: 'center',
          width: 234.375,
          height: NaN,
      }, 
      view8Tabbarios11:{
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 5,
          paddingBottom: 0,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 0,
      }, 
})




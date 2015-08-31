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
                	style={[styles.view1Navbar4]}>
                	My Cool App
                </Text>
            </View>
            <View style={[styles.view2]}>
                <ScrollView 
                dataSource={['http://www.boutiquehotelnews.com/media/206335/andaz-wall-street-p181-entrance-1280x427.jpg', 'http://newyork.wallstreet.andaz.hyatt.com/PropertyWebsites/andaz/nycaw/Media/All/Andaz-Wall-Street-P117-ExtraLargeKingSuite-1280x720.jpg/jcr:content/renditions/cq5dam.thumbnail.744.415.png', 'http://cdn.clubtravel.ie/macrosites/andaz-wall-street2968_201411181646366834.jpg', 'http://newyork.wallstreet.andaz.hyatt.com/content/dam/PropertyWebsites/andaz/nycaw/Media/All/Andaz-Wall-Street-W012-Wall-Street-Flags-1280x427.jpg', 'http://www.aecom.com/deployedfiles/Internet/Capabilities/Construction%20Services/Images/wtc-night-main.jpg']}
                style={[styles.view2Scrollview5]}>
                </ScrollView>
            </View>
            <View style={[styles.view3]}>
                <ListView 
                dataSource={['Andaz Wall Street is a boutique hotel', 'in the Financial District.', 'Feel like youre living in', 'Lower Manhattan in 253', 'loft-style rooms - some', 'of the largest in NYC ', 'with 11-foot ceilings.', 'Seven-foot windows', 'provide a glimpse of', 'The city scene, where', 'dynamic experiences', 'a few steps from our front door.']}
                style={[styles.view3Listview8]}>
                </ListView>
                <ListView 
                dataSource={['Standard: $340', 'Deluxe: $355', 'Suite: $380', '24-Hour gym', 'In-room dining', 'Spa services', 'Dry cleaning and laundry', 'Business Services', 'Pets allowed', 'Currency exchange', 'Complimentary safe boxes']}
                style={[styles.view3Listview9]}>
                </ListView>
            </View>
          </View>
        );
    }
})


var styles = StyleSheet.create({
      view1:{
      }, 
      view2:{
      }, 
      view3:{
          flexDirection: 'row',
      }, 
      view1Navbar4:{
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 32,
          paddingBottom: 21,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 0,
          fontSize: 17,
          textAlign: 'center',
          color: '#ffffff',
          backgroundColor: '#9c1c00',
          width: 375,
          height: 73.75,
      }, 
      view2Scrollview5:{
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 0,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 0,
          width: 375,
          height: 238.75,
      }, 
      view6Tabbarios7:{
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 16,
          paddingBottom: 0,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 0,
          width: 375,
      }, 
      view3Listview8:{
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 0,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 0,
          fontSize: 13,
          width: 234.375,
          height: 281.25,
      }, 
      view3Listview9:{
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 0,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 0,
          fontSize: 13,
          width: 234.375,
          height: 281.25,
      }, 
})




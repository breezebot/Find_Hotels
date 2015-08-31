'use strict';

var React = require('react-native');
var FindHotels = require('./FindHotels.js');
var AmenitiesPage = require('./AmenitiesPage.js');
var AndazHotel = require('./AndazHotel.js');

var {
  StyleSheet,
  TabBarIOS,
  Text,
  View,
} = React;

var systemIconTypes = ['bookmarks', 'contacts', 'downloads', 'favorites', 'featured', 'history', 'more', 'most-recent', 'most-viewed', 'recents', 'search', 'top-rated'];

module.exports = React.createClass({
  getInitialState: function() {
    return {
      selectedTab: 'history'
    };
  },

  render: function() {
    return (
      <TabBarIOS
        style={[styles.view8Tabbarios11]}
        >
        <TabBarIOS.Item 
        systemIcon='history'
        selected={this.state.selectedTab === 'history'}
        onPress={() => {
          this.setState({
            selectedTab: 'history',
          });
        }}>
        <AmenitiesPage />
        </TabBarIOS.Item>
        <TabBarIOS.Item 
        systemIcon='top-rated'
        selected={this.state.selectedTab === 'top-rated'}
        onPress={() => {
          this.setState({
            selectedTab: 'top-rated',
          });
        }}>
        <AndazHotel />
        </TabBarIOS.Item>
        <TabBarIOS.Item 
        systemIcon='search'
        selected={this.state.selectedTab === 'search'}
        onPress={() => {
          this.setState({
            selectedTab: 'search',
          });
        }}>
        <FindHotels />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  },

});

var styles = StyleSheet.create({
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
});

'use strict';

var React = require('react-native');
var {
  ScrollView,
  StyleSheet,
  View,
  Image
} = React;

var imageStyle;

module.exports = React.createClass({
  getInitialState (){
    return {
      THUMBS: this.props.dataSource,
      createThumbRow: (uri, i) => <Thumb key={i} uri={uri} />,
    }
  },

  render: function() {
    imageStyle = this.props.style;
    return (
      <ScrollView
        horizontal={true}
        contentInset={this.props.contentInset}
        style={[this.props.style]}
        alwaysBounceVertical={false}
        automaticallyAdjustContentInsets={true}
        bounces={false}
        centerContent={true}
        directionalLockEnabled={true}>
        {this.state.THUMBS.map(this.state.createThumbRow)}
      </ScrollView>
    );
  }
});

var Thumb = React.createClass({
  shouldComponentUpdate: function(nextProps, nextState) {
    return false;
  },
  render: function() {
    return (
      <View style={styles.border}>
        <Image style={[imageStyle, styles.img]} source={{uri:this.props.uri}} />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  border: {
    margin: 7,
    padding: 5,
    alignItems: 'center',
    backgroundColor: '#eaeaea',
    borderRadius: 3,
    flexDirection: 'row',
  },
  img: {
    flex: 1,
    width: 200,
    height: 122,
  }
});

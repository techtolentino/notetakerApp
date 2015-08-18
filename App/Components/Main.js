var React = require('react-native');

var {
  View,
  Text,
  StyleSheet
} = React;


class Main extends React.Component{
  render(){
    return(
      <View style={styles.mainContent}>
        <Text style={styles.mainText}>Testing the Router</Text>
      </View>
    )
  }
};

var styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#48BBEC'
  }
});

module.exports = Main;
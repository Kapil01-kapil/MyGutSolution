import React, {Component} from 'react';
import {
  Keyboard,
  Text,
  TextInput,
  ScrollView,
  View,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  Picker,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {Searchbar} from 'react-native-paper';
export default class App extends Component {
  state = {
    searchQuery: '',
  };

  _onChangeSearch = query => this.setState({searchQuery: query});

  render() {
    const {searchQuery} = this.state;
    return (
      <KeyboardAvoidingView style={styles.containerView}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView>
            <View style={styles.containerView}>
              <View style={{backgroundColor: '#51B6F5'}}>
                <View style={{flexDirection: 'row', margin: 15}}>
                  <Icon
                    name="arrowleft"
                    style={{fontSize: 24, color: '#FFF'}}
                    onPress={() => this.props.navigation.goBack(null)}
                  />
                  <View
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      flex: 1,
                    }}>
                    <Text style={styles.textStyle}>Breakfast</Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  borderRadius: 5,
                  borderWidth: 1,
                  margin: 15,
                  borderColor: '#e7e7e7',
                }}>
                <Searchbar
                  placeholder="Search for a food"
                  onChangeText={this._onChangeSearch}
                  value={searchQuery}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginLeft: 15,
                  marginRight: 15,
                }}>
                <Text style={styles.text}>Your recently selected items</Text>
                <Text style={{fontSize: 16, color: 'red'}}>Clear</Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  margin: 15,
                }}>
                <View>
                  <Text style={styles.text}>Apple</Text>
                  <Text style={{fontSize: 12}}>6.0 medium</Text>
                </View>

                <Text style={{fontSize: 16}}>583 Cal</Text>
              </View>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
  },
  viewStyle: {
    flexDirection: 'row',
    margin: 15,

    justifyContent: 'space-between',
  },
  textStyle: {
    fontSize: 18,

    fontWeight: 'bold',
    textAlign: 'center',

    color: 'white',
  },
  text: {
    fontSize: 16,
  },
  sendButton: {
    backgroundColor: '#51B6F5',
    borderRadius: 5,
    height: 50,
    margin: 15,
    marginTop: 15,
  },
});

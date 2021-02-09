import React, {Component} from 'react';
import {
  Keyboard,
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
import {
  Container,
  Header,
  Content,
  Item,
  Input,
  Text,
  Label,
} from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';
export default class App extends Component {
  render() {
    return (
      <View style={styles.containerView}>
        <View style={{backgroundColor: '#51B6F5'}}>
          <View
            style={{
              flexDirection: 'row',
              margin: 15,
            }}>
            <Icon
              name="arrowleft"
              style={{fontSize: 24, color: '#FFF'}}
              onPress={() => this.props.navigation.goBack(null)}
            />
            <View
              style={{
                alignItems: 'center',
                flex: 1,
              }}>
              <Text style={styles.textStyle}>Your Question Answered</Text>
            </View>
          </View>
        </View>
        <View style={{margin: 15}}>
          <Text
            style={{
              color: '#51B6F5',
              fontSize: 17,
              fontWeight: 'bold',
              marginBottom: 5,
            }}>
            Diet & IBS:
          </Text>
          <Image
            source={{
              uri: 'https://media.salon.com/2014/10/shutterstock_138061871.jpg',
            }}
            style={{
              width: 80,
              height: 60,
              borderRadius: 5,
              borderWidth: 1,
            }}
          />
          <View style={styles.View}>
            <Text>Query: </Text>
            <Text>Any tips on how to cope with eating out ?</Text>
          </View>
          <View style={styles.View}>
            <Text>Reply: </Text>
            <Text>Here are some of my top tips when eating out</Text>
          </View>
          <View>
            <View style={styles.View}>
              <Text>1. </Text>
              <Text>
                See if you can access the menu online before you go this can
                make is easier for your to see what you might order, or even
                suggest a different venue if that's needed
              </Text>
            </View>
            <View style={styles.View}>
              <Text>2. </Text>
              <Text>
                Ring the restaurant in advance - try to avoid peak times for
                kitchen. Generally, we find that most kitchens are open to
                facilitating dietary requirements especially when you ring in
                advance
              </Text>
            </View>
            <View style={styles.View}>
              <Text>3. </Text>
              <Text>
                Become familiar with your triggers and it'll be easier to
                identify potential sources of them when reading a menu{' '}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  viewStyle: {
    flexDirection: 'row',
    margin: 15,

    justifyContent: 'space-between',
  },
  textStyle: {
    fontSize: 18,

    fontWeight: 'bold',
    color: 'white',
  },
  view: {
    marginTop: 15,
  },
  text: {
    fontSize: 16,
  },
  View: {
    flexDirection: 'row',
    marginTop: 10,
  },
  sendButton: {
    backgroundColor: '#51B6F5',
    borderRadius: 5,
    height: 50,
    margin: 15,
    marginTop: 15,
  },
});

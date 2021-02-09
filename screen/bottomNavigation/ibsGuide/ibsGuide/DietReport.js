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
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
export default class App extends Component {
  render() {
    return (
      <View style={styles.containerView}>
        <Image
          source={{
            uri: 'https://i.ytimg.com/vi/QztyrlFSPL8/maxresdefault.jpg',
          }}
          style={{
            width: '100%',
            height: '42%',
          }}
        />
        <View style={{margin: 15, marginLeft: 10, marginRight: 10}}>
          <View style={styles.viewStyle}>
            <Text style={{fontWeight: 'bold', fontSize: 15}}>Diet & IBS</Text>
            <View
              style={{
                borderRadius: 5,
                borderWidth: 1,
                height: 30,
                width: '50%',
              }}>
              <Text style={{textAlign: 'center'}}>Got a Question?</Text>
            </View>
          </View>
          <View style={styles.viewStyle}>
            <Text style={{color: '#51B6F5', fontSize: 18, fontWeight: 'bold'}}>
              Action Points:
            </Text>
            <View
              style={{
                borderRadius: 5,
                borderWidth: 1,
                height: 30,
                width: '50%',
                borderColor: '#51B6F5',
              }}>
              <Text style={{textAlign: 'center', color: '#51B6F5'}}>
                Send to my email
              </Text>
            </View>
          </View>
          <Text style={styles.textStyle}>
            Fibre- There's a Right Fibre Type for Your IBS Type
          </Text>
          <View style={styles.View}>
            <TouchableOpacity style={styles.TouchableOpacity} />
            <Text>
              Review your fibre intake - can you offen choose hight fibre foods
              more often?
            </Text>
          </View>
          <View style={styles.View}>
            <TouchableOpacity style={styles.TouchableOpacity} />
            <Text>Eat oats daily</Text>
          </View>
          <View style={styles.View}>
            <TouchableOpacity style={styles.TouchableOpacity} />
            <Text>Eat pulses and lentils to tolerance</Text>
          </View>
          <Text style={styles.textStyle}>
            Fruit - Are You Having Too Much of a Good Thing?
          </Text>
          <View style={styles.View}>
            <TouchableOpacity style={styles.TouchableOpacity} />
            <Text>
              Count how many pieces of fruit you have on a typical day.
            </Text>
          </View>
          <View style={styles.View}>
            <TouchableOpacity style={styles.TouchableOpacity} />
            <Text>One portion of fruit per sarving </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
  },
  TouchableOpacity: {
    flexDirection: 'row',
  },
  viewStyle: {
    flexDirection: 'row',
    marginTop: 10,

    justifyContent: 'space-between',
  },
  textStyle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
  },
  text: {
    fontSize: 13,
    marginTop: 10,
  },
  View: {
    flexDirection: 'row',
    marginTop: 10,
  },
  TouchableOpacity: {
    backgroundColor: '#51B6F5',
    borderColor: '#51B6F5',
    borderRadius: 5,
    width: 5,
    height: 5,
    borderWidth: 5,
    marginTop: 5,
    marginRight: 10,
  },
  textView: {
    fontSize: 12,
  },
});

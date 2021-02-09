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
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <Image
          source={{
            uri: 'https://i.ytimg.com/vi/QztyrlFSPL8/maxresdefault.jpg',
          }}
          style={{
            width: '100%',
            height: '42%',
          }}
        />
        <ScrollView
          style={{
            flex: 1,
            position: 'absolute',
            backgroundColor: 'white',
            margin: 10,
            top: '35%',
            bottom: 0,
            left: 0,
            right: 0,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: 'white',
          }}>
          <Animatable.View animation="fadeInUpBig">
            <View>
              <View>
                <View style={{margin: 15}}>
                  <Text style={styles.textStyle}>
                    Brked Raspberry & Apple Oats
                  </Text>
                  <Text style={styles.text}>
                    If you're tring to get more oats into your diet, then why
                    not try one of our favourite why not try one of our
                    favourite ways to have them- its like...{' '}
                  </Text>
                  <Text
                    style={{
                      color: '#51B6F5',
                      fontSize: 18,
                      fontWeight: 'bold',
                      marginTop: 10,
                    }}>
                    Sarvings: 4
                  </Text>
                  <Text style={{fontSize: 18}}>Ingredients:</Text>
                  <Text style={{fontSize: 15, marginTop: 5, marginBottom: 5}}>
                    For the baked oats
                  </Text>
                  <Text style={styles.textView}>128g oats</Text>
                  <Text style={styles.textView}>1 level tsp baking powder</Text>
                  <Text style={styles.textView}>1 apple grated (skin on)</Text>
                  <Text style={styles.textView}>2 eggs (beaten)</Text>
                  <Text style={styles.textView}>200ml milk</Text>
                  <Text style={styles.textView}>
                    90g fresh/frozen raspberries
                  </Text>
                  <Text style={{fontSize: 18, marginTop: 10, marginBottom: 10}}>
                    To serve:
                  </Text>
                  <Text style={styles.textView}>204g live natural yoghurl</Text>
                  <Text style={styles.textView}>160g fresh raspberries</Text>
                  <Text style={{fontSize: 18, marginTop: 10, marginBottom: 10}}>
                    Method:
                  </Text>
                  <Text style={styles.textView}>
                    1. preheat the over to 180c
                  </Text>
                  <Text style={styles.textView}>
                    2. In a mixing bowl, mix together the oats, baking powder,
                    grated apple, eggs and milk
                  </Text>
                  <Text style={{fontSize: 16, marginTop: 10, marginBottom: 10}}>
                    Natritional Information (Per serving) 276g
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text style={styles.textView}>Energy(kcal)</Text>
                    <Text style={styles.textView}>301</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text style={styles.textView}>Fat</Text>
                    <Text style={styles.textView}>9.4g</Text>
                  </View>
                </View>
              </View>
            </View>
          </Animatable.View>
        </ScrollView>
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
    margin: 15,
  },
  viewStyle: {
    flexDirection: 'row',
    margin: 15,

    justifyContent: 'space-between',
  },
  textStyle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 13,
    marginTop: 10,
  },
  sendButton: {
    backgroundColor: '#51B6F5',
    borderRadius: 5,
    height: 50,
    margin: 15,
    marginTop: 15,
  },
  textView: {
    fontSize: 12,
  },
});

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

export default class App extends Component {
  state = {user: ''};
  updateUser = user => {
    this.setState({user: user});
  };
  render() {
    return (
      <KeyboardAvoidingView style={styles.containerView}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView>
            <View style={styles.containerView}>
              <View style={{backgroundColor: '#51B6F5'}}>
                <View style={styles.viewStyle}>
                  <Text style={styles.textStyle}>Good Morning Brian!</Text>
                  <Text style={styles.textStyle}>Save</Text>
                </View>
              </View>
              <View style={styles.viewStyle}>
                <Text style={styles.text}>Thursday, 23 Jan 2020</Text>
                <Text>Save</Text>
              </View>
              <View
                style={{width: '100%', height: 1, backgroundColor: '#e7e7e7'}}
              />
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  marginLeft: 15,
                  marginTop: 10,
                }}>
                What did you eat?
              </Text>
              <View style={{backgroundColor: '#e7e7e7', marginTop: 10}}>
                <View style={styles.viewStyle}>
                  <Text style={styles.text}>Breakfast</Text>
                  <TouchableOpacity style={{flexDirection: 'row'}}>
                    <Text style={{fontSize: 16, color: '#51B6F5'}}>+</Text>
                    <Text style={{marginLeft: 15, fontSize: 16}}>Add Food</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{backgroundColor: '#e7e7e7', marginTop: 10}}>
                <View style={styles.viewStyle}>
                  <Text style={styles.text}>Lunch</Text>
                  <TouchableOpacity style={{flexDirection: 'row'}}>
                    <Text style={{fontSize: 16, color: '#51B6F5'}}>+</Text>
                    <Text style={{marginLeft: 15, fontSize: 16}}>Add Food</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{backgroundColor: '#e7e7e7', marginTop: 10}}>
                <View style={styles.viewStyle}>
                  <Text style={styles.text}>Dinner</Text>
                  <TouchableOpacity style={{flexDirection: 'row'}}>
                    <Text style={{fontSize: 16, color: '#51B6F5'}}>+</Text>
                    <Text style={{marginLeft: 15, fontSize: 16}}>Add Food</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{backgroundColor: '#e7e7e7', marginTop: 10}}>
                <View style={styles.viewStyle}>
                  <Text style={styles.text}>Snacks</Text>
                  <TouchableOpacity style={{flexDirection: 'row'}}>
                    <Text style={{fontSize: 16, color: '#51B6F5'}}>+</Text>
                    <Text style={{marginLeft: 15, fontSize: 16}}>Add Food</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  marginLeft: 15,
                  marginTop: 10,
                }}>
                How are your symptoms today?
              </Text>
              <View style={{margin: 15}}>
                <Text style={styles.text}>Tummy Pain</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 10,
                    justifyContent: 'space-around',
                    borderRadius: 5,
                    borderWidth: 1,
                    marginBottom: 10,
                  }}>
                  <View style={{margin: 10}}>
                    <Image
                      source={require('../../assets/smile.png')}
                      style={{width: 25, height: 25}}
                    />
                    <Text>None</Text>
                  </View>

                  <View style={{margin: 10}}>
                    <Image
                      source={require('../../assets/smile.png')}
                      style={{width: 25, height: 25}}
                    />
                    <Text>Mild</Text>
                  </View>
                  <View
                    style={{
                      margin: 10,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image
                      source={require('../../assets/smile.png')}
                      style={{width: 25, height: 25}}
                    />
                    <Text>moderate</Text>
                  </View>
                  <View
                    style={{
                      margin: 10,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image
                      source={require('../../assets/smile.png')}
                      style={{width: 25, height: 25}}
                    />
                    <Text>Severe</Text>
                  </View>
                </View>
                <Text style={styles.text}>Bloating</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 10,
                    justifyContent: 'space-around',
                    borderRadius: 5,
                    borderWidth: 1,
                    marginBottom: 10,
                  }}>
                  <View style={{margin: 10}}>
                    <Image
                      source={require('../../assets/smile.png')}
                      style={{width: 25, height: 25}}
                    />
                    <Text>None</Text>
                  </View>

                  <View style={{margin: 10}}>
                    <Image
                      source={require('../../assets/smile.png')}
                      style={{width: 25, height: 25}}
                    />
                    <Text>Mild</Text>
                  </View>
                  <View
                    style={{
                      margin: 10,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image
                      source={require('../../assets/smile.png')}
                      style={{width: 25, height: 25}}
                    />
                    <Text>moderate</Text>
                  </View>
                  <View
                    style={{
                      margin: 10,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image
                      source={require('../../assets/smile.png')}
                      style={{width: 25, height: 25}}
                    />
                    <Text>Severe</Text>
                  </View>
                </View>
                <Text style={styles.text}>Urgent need for the toilet</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 10,
                    justifyContent: 'space-around',
                    borderRadius: 5,
                    borderWidth: 1,
                    marginBottom: 10,
                  }}>
                  <View style={{margin: 10}}>
                    <Image
                      source={require('../../assets/smile.png')}
                      style={{width: 25, height: 25}}
                    />
                    <Text>None</Text>
                  </View>

                  <View style={{margin: 10}}>
                    <Image
                      source={require('../../assets/smile.png')}
                      style={{width: 25, height: 25}}
                    />
                    <Text>Mild</Text>
                  </View>
                  <View
                    style={{
                      margin: 10,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image
                      source={require('../../assets/smile.png')}
                      style={{width: 25, height: 25}}
                    />
                    <Text>moderate</Text>
                  </View>
                  <View
                    style={{
                      margin: 10,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image
                      source={require('../../assets/smile.png')}
                      style={{width: 25, height: 25}}
                    />
                    <Text>Severe</Text>
                  </View>
                </View>
                <Text style={styles.text}>
                  Feeling of incomplete bowel movement
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 10,
                    justifyContent: 'space-around',
                    borderRadius: 5,
                    borderWidth: 1,
                    marginBottom: 10,
                  }}>
                  <View style={{margin: 10}}>
                    <Image
                      source={require('../../assets/smile.png')}
                      style={{width: 25, height: 25}}
                    />
                    <Text>None</Text>
                  </View>

                  <View style={{margin: 10}}>
                    <Image
                      source={require('../../assets/smile.png')}
                      style={{width: 25, height: 25}}
                    />
                    <Text>Mild</Text>
                  </View>
                  <View
                    style={{
                      margin: 10,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image
                      source={require('../../assets/smile.png')}
                      style={{width: 25, height: 25}}
                    />
                    <Text>moderate</Text>
                  </View>
                  <View
                    style={{
                      margin: 10,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image
                      source={require('../../assets/smile.png')}
                      style={{width: 25, height: 25}}
                    />
                    <Text>Severe</Text>
                  </View>
                </View>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                  }}>
                  Did you pass a bowel motion today?
                </Text>
                <Text
                  style={{
                    marginTop: 10,
                    fontSize: 16,
                  }}>
                  Number of motions
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 15,
                  }}>
                  <TouchableOpacity
                    style={{
                      borderRadius: 25,
                      width: 25,
                      height: 25,
                      borderWidth: 1,
                    }}>
                    <Text style={{textAlign: 'center'}}>0</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      borderRadius: 25,
                      width: 25,
                      height: 25,
                      borderWidth: 1,
                    }}>
                    <Text style={{textAlign: 'center'}}>1</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      borderRadius: 25,
                      width: 25,
                      height: 25,
                      borderWidth: 1,
                    }}>
                    <Text style={{textAlign: 'center'}}>2</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      borderRadius: 25,
                      width: 25,
                      height: 25,
                      borderWidth: 1,
                    }}>
                    <Text style={{textAlign: 'center'}}>3</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      borderRadius: 25,
                      width: 25,
                      height: 25,
                      borderWidth: 1,
                    }}>
                    <Text style={{textAlign: 'center'}}>4</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      borderRadius: 25,
                      width: 25,
                      height: 25,
                      borderWidth: 1,
                    }}>
                    <Text style={{textAlign: 'center'}}>5</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      borderRadius: 25,
                      width: 25,
                      height: 25,
                      borderWidth: 1,
                    }}>
                    <Text style={{textAlign: 'center'}}>6+</Text>
                  </TouchableOpacity>
                </View>
                <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 10}}>
                  How are your feeling?
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    borderRadius: 5,
                    borderWidth: 1,
                    marginTop: 10,
                  }}>
                  <Picker
                    selectedValue={this.state.user}
                    onValueChange={this.updateUser}>
                    <Picker.Item label="Steve" value="steve" />
                    <Picker.Item label="Ellen" value="ellen" />
                    <Picker.Item label="Maria" value="maria" />
                  </Picker>
                </View>
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
    backgroundColor: '#fff',
  },
  viewStyle: {
    flexDirection: 'row',
    margin: 15,

    justifyContent: 'space-between',
  },
  textStyle: {
    fontSize: 18,
    marginTop: 10,
    fontWeight: 'bold',
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

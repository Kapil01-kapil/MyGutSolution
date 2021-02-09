import React, {Component} from 'react';
import {View, Image, StyleSheet, SafeAreaView} from 'react-native';

class SplashScreen extends Component {
  performTimeConsumingTask = async () => {
    return new Promise(resolve =>
      setTimeout(() => {
        resolve('result');
      }, 2000),
    );
  };

  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.props.navigation.replace('Login');
    }
  }

  render() {
    return (
      <View style={styles.viewStyles}>
        <Image
          source={require('./assets/LogoBlueBackground/Logo.png')}
          style={styles.ImageStyles}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#51B6F5',
  },
  ImageStyles: {
    width: '80%',
    height: '50%',
  },
});

export default SplashScreen;

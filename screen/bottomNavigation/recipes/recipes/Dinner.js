import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  SafeAreaView,
  FlatList,
  TextInput,
} from 'react-native';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data_one: [],
      enableButton: true,
      data_two: [],
      username: 'Log in',
    };

    //this.arrayholder = [];

    this.arrayholder = [
      {
        title: 'Brked Raspberry & Apple Oats',
        content: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
        image: 'https://media.salon.com/2014/10/shutterstock_138061871.jpg',
      },

      {
        title: 'Brked Raspberry & Apple Oats',
        content: 'Lorem ipsum dolor sit amet',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Eggs-as-food.jpg/1200px-Eggs-as-food.jpg',
      },
      {
        title: 'Brked Raspberry & Apple Oats',
        content: ' ipsum dolor sit amet Lorem ipsum dolor sit amet',
        image: 'https://i.ytimg.com/vi/QztyrlFSPL8/maxresdefault.jpg',
      },
    ];
  }
  componentDidMount() {
    this.setState(
      {
        isLoading: false,
        dataSource: this.arrayholder,
      },
      function() {
        this.arrayholder = this.arrayholder;
      },
    );
  }
  getListViewItem(item) {
    // Alert.alert(item.battery, item.mobile_display + '\n' + item.rear_camera);
    this.props.navigation.navigate('searchSecond', {item});
  }
  render() {
    return (
      <View style={{margin: 10}}>
        <FlatList
          data={this.state.dataSource}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={this.ListViewItemSeparator}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.TouchableOpacity}
              onPress={this.getListViewItem.bind(this, item)}>
              <TouchableOpacity onPress={this.getListViewItem.bind(this, item)}>
                <Image
                  source={{uri: item.image}}
                  style={{
                    width: 80,
                    height: 80,

                    borderRadius: 10,
                    borderWidth: 1,
                  }}
                />
              </TouchableOpacity>

              <View
                style={{
                  marginLeft: 10,
                  marginRight: 10,
                  marginEnd: 10,
                  margin: 10,
                }}>
                <Text
                  onPress={this.getListViewItem.bind(this, item)}
                  style={styles.textStyle}>
                  {item.title}
                </Text>
                <Text
                  onPress={this.getListViewItem.bind(this, item)}
                  style={styles.text}>
                  {item.content}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
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
    fontSize: 16,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 13,
  },
  sendButton: {
    backgroundColor: '#51B6F5',
    borderRadius: 5,
    height: 50,
    margin: 15,
    marginTop: 15,
  },
});

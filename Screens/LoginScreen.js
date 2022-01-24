import React, {useState} from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {
  ApplicationProvider,
  Button,
  Icon,
  IconRegistry,
  Layout,
  Input,
  Text,
  Spinner,
} from '@ui-kitten/components';
import {SafeAreaView} from 'react-native-safe-area-context';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function LoginScreen(props) {
  const handleLogin = () => {
    console.log({username, password});
  };
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  return (
    <View style={styles.pRectangle}>
      <View style={styles.cRectangle}>
        <View style={{padding: 20}} />
        <Text style={styles.header}> Log in</Text>
        <View style={{padding: 20}} />
        <View
          style={{
            borderBottomColor: '#D3DBE7',
            borderBottomWidth: 1,
          }}
        />
        <Image source={require('../assets/mainimg.png')} style={styles.logo} />
        <Text style={styles.subHeader}> Username</Text>
        <View style={{padding: 10}} />
        <Input
          style={styles.input}
          size="large"
          placeholder="Enter Username"
          value={username}
          onChangeText={nextUsername => setUsername(nextUsername)}
        />
        <View style={{padding: 20}} />
        <Text style={styles.subHeader}> Password</Text>
        <View style={{padding: 10}} />

        <Input
          style={styles.input}
          size="large"
          placeholder="Enter Password"
          value={password}
          onChangeText={nextPassword => setPassword(nextPassword)}
        />
        <View style={{padding: 20}} />
        <Button
          style={styles.button}
          appearance="primary"
          onPress={() => handleLogin()}>
          LogIn
        </Button>
        <View style={{padding: 20}} />
        <View style={styles.viewRow}>
          <Text style={styles.text1} appearance="hint">
            Don't have an account?
          </Text>
          <TouchableOpacity onPress={() => props.navigation.push('Register')}>
            <Text style={styles.text2} appearance="alternative">
              {' '}
              Register Here
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pRectangle: {
    position: 'absolute',
    width: wp('100%'),
    height: hp('100%'),
    backgroundColor: '#D3DBE7',
  },
  cRectangle: {
    position: 'absolute',
    marginTop: hp('2%'),
    marginLeft: wp('3%'),
    width: wp('94%'),
    height: hp('92%'),
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
  },
  header: {
    marginLeft: wp('5%'),
    fontSize: wp('8%'),
    fontWeight: '700',
  },
  subHeader: {
    marginLeft: wp('4%'),
    fontSize: wp('4%'),
    fontWeight: '700',
  },
  logo: {
    marginLeft: wp('25%'),
    width: wp('40%'),
    height: hp('30%'),
  },
  input: {
    marginLeft: wp('4%'),
    width: wp('85%'),
  },
  button: {
    width: wp('40%'),
    marginLeft: wp('28%'),
  },
  viewRow: {
    flexDirection: 'row',
  },
  text1: {
    marginLeft: wp('20%'),
  },
  text2: {
    color: 'blue',
  },
});

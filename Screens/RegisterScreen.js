import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
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

export default function RegisterScreen(props) {
  const handleRegister = () => {
    console.log({username, password, firstName, lastName, height, weight});
  };

  const [firstName, setfirstName] = React.useState('');
  const [lastName, setlastName] = React.useState('');
  const [height, setHeight] = React.useState('');
  const [weight, setWeight] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  return (
    <View style={styles.pRectangle}>
      <View style={styles.cRectangle}>
        <View style={{padding: 20}} />
        <Text style={styles.header}> Register</Text>
        <View style={{padding: 20}} />
        <View
          style={{
            borderBottomColor: '#D3DBE7',
            borderBottomWidth: 1,
          }}
        />
        <ScrollView>
          <View style={{padding: 10}} />
          <Text style={styles.subHeader}> First Name</Text>
          <View style={{padding: 10}} />
          <Input
            style={styles.input}
            size="large"
            placeholder="First Name"
            value={firstName}
            onChangeText={fname => setfirstName(fname)}
          />
          <View style={{padding: 20}} />
          <Text style={styles.subHeader}> Last Name</Text>
          <View style={{padding: 10}} />
          <Input
            style={styles.input}
            size="large"
            placeholder="Last Name"
            value={lastName}
            onChangeText={lname => setlastName(lname)}
          />
          <View style={{padding: 20}} />
          <Text style={styles.subHeader}> Height</Text>
          <View style={{padding: 10}} />
          <Input
            style={styles.input}
            size="large"
            placeholder="Enter Your Height"
            value={height}
            onChangeText={ht => setHeight(ht)}
          />
          <View style={{padding: 20}} />
          <Text style={styles.subHeader}> Weight</Text>
          <View style={{padding: 10}} />
          <Input
            style={styles.input}
            size="large"
            placeholder="Enter your Weight"
            value={weight}
            onChangeText={wt => setWeight(wt)}
          />
          <View style={{padding: 20}} />
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
            onPress={() => handleRegister()}>
            LogIn
          </Button>
          <View style={{padding: 20}} />

          <View style={styles.viewRow}>
            <Text style={styles.text1} appearance="hint">
              Already have an account?
            </Text>
            <TouchableOpacity onPress={() => props.navigation.push('Login')}>
              <Text style={styles.text2} appearance="alternative">
                {' '}
                Login
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{padding: 10}} />
        </ScrollView>
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

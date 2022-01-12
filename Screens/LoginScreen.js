import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  ApplicationProvider,
  Button,
  Icon,
  IconRegistry,
  Layout,
  Text,
} from '@ui-kitten/components';
import {SafeAreaView} from 'react-native-safe-area-context';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function LoginScreen() {
  return (
    <SafeAreaView>
      <View style={styles.pRectangle}>
        <View style={styles.cRectangle}>
          <View style={{padding: 20}} />
          <Text style={styles.header}> Log in</Text>
          <View style={{padding: 20}} />
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              //   marginLeft: wp('10%'),
              //   width: wp('70%'),
            }}
          />
        </View>
      </View>
    </SafeAreaView>
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
});

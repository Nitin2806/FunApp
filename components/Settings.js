import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Settings = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>
        You're not capable of doing such things......jk
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    alignContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export default Settings;

import React, {useState} from 'react';
import {Button, StyleSheet, Image, Text, ScrollView} from 'react-native';
import {TouchableHighlight} from 'react-native';

const HomeScreen = () => {
  const [touchedme, didtouch] = useState(true);
  const [clicked, didClick] = useState(false);

  const changeEmoji = () => {
    didtouch(!touchedme);
  };
  const buttonclick = () => {
    didClick(!clicked);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.home}>You are at Homepage</Text>

      <TouchableHighlight onPress={() => changeEmoji()}>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={styles.image}
        />
      </TouchableHighlight>

      <Text style={styles.title}>
        {touchedme ? 'Hello!! I am Lucy 😸' : "😿 Don't  ever do that again 😾"}
      </Text>
      <Text style={styles.title}>Thank you!! Nitin :)</Text>

      <Button
        color="green"
        title="Click here dude"
        onPress={() => buttonclick()}
      />
      {clicked && <Text style={styles.title}>BC apna kam kr</Text>}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#eaeaea',
  },
  home: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 2,
    borderColor: '#37832a',
    borderRadius: 12,

    color: '#40292a',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  title: {
    marginTop: 16,
    padding: 20,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 18,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 23,
    fontWeight: 'bold',
  },

  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
});
export default HomeScreen;

import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Orders = () => {
  return (
    <View style={styles.container}>
      <View style={styles.orderWrapper}>
        <Text style={styles.sectionTitle}>Orders</Text>
        <View style={styles.items}>{/* All orders here */}</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'E8EAED',
  },
  orderWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {},
});

export default Orders;

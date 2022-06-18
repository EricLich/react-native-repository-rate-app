import React from 'react';
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {  
    backgroundColor: theme.appBar.primary,
    paddingTop: Constants.statusBarHeight + 10,
    paddingBottom: 10,
    paddingLeft: 10
  },
  text: {    
    color: theme.appBar.textPrimary,
    fontWeight: 'bold',
    fontSize: 24
  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Repositories
      </Text>
    </View>
  );
};

export default AppBar;

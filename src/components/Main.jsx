import React from "react";
import Constants from 'expo-constants'; //for different sizes
import { Text, View } from "react-native";

import ReposList from "./RepositoryList";

const Main = () => {
  return (
    <View style={{marginTop: Constants.statusBarHeight, flexGrow: 1}}>
      <Text>Rate Repository Application test</Text>
      <ReposList/>
    </View>  
  );
};

export default Main;

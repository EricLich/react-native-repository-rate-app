import React from "react";
import { Text, View } from "react-native";

import ReposList from "./RepositoryList";
import AppBar from "./AppBar";

const Main = () => {
  return (
    <View style={{ flexGrow: 1}}>
      <AppBar />
      <ReposList/>
    </View>  
  );
};

export default Main;

import React from "react";
import { View, Text, FlatList } from "react-native"
import repositories from "../data/repositories";
import RepositoryItem from "./RpositoryItem";

const ReposList = () => {
  return (
    <FlatList    
      data={repositories}
      ItemSeparatorComponent={() => <Text></Text>}
      renderItem={({ item: repo }) => (
        <RepositoryItem key={repo?.id} repo={repo}/>
      )} />
  );
};

export default ReposList;

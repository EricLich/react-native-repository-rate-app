import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import RepositoryStats from './RpositoryStats';
import StyledText from './StyledText';

const RepositoryItemHeader = (props) => (
  <View style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: 2, marginBottom: 10 }}>
    <Image style={styles.image} source={{ uri: props.repo.ownerAvatarUrl }} />
    <View style={{marginLeft: 15, flex: 1}}>
      <StyledText  fontWeight={"bold"} fontSize={"subheading"}>Name: {props.repo.fullName}</StyledText>
      <StyledText color={"secondary"}>Description: {props.repo.description}</StyledText>
      <StyledText  type={"language"}>{props.repo.language}</StyledText>
    </View>
  </View>
);

const RepositoryItem = (props) => {
  return (
    <View style={styles.container}>
      <RepositoryItemHeader {...props} />
      <RepositoryStats {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5,    
  },
  strong: {
    color: '#09f',
    fontWeight: 'bold',
    marginBottom: 5
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 4,    
  }
});

export default RepositoryItem;

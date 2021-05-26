import React from "react";
import Constants from "expo-constants";
import { Text, StyleSheet, View } from "react-native";
import RepositoryList from "./RepositoryList";
import MyText from "./Text";

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <Text>Rate Repository Application</Text>
      <MyText>Simple text</MyText>
      <MyText style={{ paddingBottom: 10 }}>Text with custom style</MyText>
      <MyText fontWeight="bold" fontSize="subheading">
        Bold subheading
      </MyText>
      <RepositoryList />
    </View>
  );
};

export default Main;

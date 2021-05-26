import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  id: {
    color: "blue",
    fontSize: 24,
    fontWeight: "700",
  },
});

const RepositoryItem = (props) => {
  return (
    <View>
      <Text style={styles.id}>{props.itemData.id}</Text>
      <Text>{props.itemData.fullName}</Text>
      <Text>{props.itemData.description}</Text>
    </View>
  );
};

export default RepositoryItem;

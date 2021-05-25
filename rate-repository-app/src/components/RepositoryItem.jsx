import React from "react";
import { View, Text } from "react-native";

const RepositoryItem = (props) => {
  return (
    <View>
      <Text>{props.itemData.id}</Text>
      <Text>{props.itemData.fullName}</Text>
      <Text>{props.itemData.description}</Text>
    </View>
  );
};

export default RepositoryItem;

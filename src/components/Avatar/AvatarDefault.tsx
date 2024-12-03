import { View, Text } from "react-native";
import React from "react";
import { Avatar } from "react-native-paper";
import avatarDefault from "../../images/avatar/avatar.jpg";

const AvatarDefault = () => {
  return (
    <View>
      <Avatar.Image size={24} source={avatarDefault} />
    </View>
  );
};

export default AvatarDefault;

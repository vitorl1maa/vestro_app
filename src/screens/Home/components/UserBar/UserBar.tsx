import { View, Text } from "react-native";
import React from "react";

import avatarDefault from "@assets/avatar/avatar.jpg";
import AvatarDefault from "@shared-components/Avatar/AvatarDefault";

const UserBar = () => {
  return (
    <View>
      <AvatarDefault path={avatarDefault} resizeMode="contain" />
    </View>
  );
};

export default UserBar;

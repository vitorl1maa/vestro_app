import { View, Text } from "react-native";
import React from "react";
import { AvatarBackup, AvatarImage } from "./styled";
import { AvatarProps } from "./types";
import { User } from "lucide-react-native";
import theme from "@theme/index";

const AvatarDefault = ({ path, ...rest }: AvatarProps) => {
  const defaultAvatar = path !== "" ? path : "";

  return (
    <View>
      {defaultAvatar ? (
        <AvatarImage source={path} {...rest} />
      ) : (
        <AvatarBackup>
          <User color={theme.colors.pistache} size={32} />
        </AvatarBackup>
      )}
    </View>
  );
};

export default AvatarDefault;

import avatarDefault from "@assets/avatar/avatar.jpg";
import { UserDetails, UserInfo, UserName, UserTitle } from "./styled";
import AvatarDefault from "@shared-components/Avatar/AvatarDefault";
import { TouchableOpacity, View } from "react-native";
import { Settings2 } from "lucide-react-native";
import theme from "@theme/index";

const UserBar = () => {
  return (
    <UserDetails>
      <AvatarDefault path="" resizeMode="contain" />

      <UserInfo>
        <View>
          <UserTitle>Welcome</UserTitle>
          <UserName>Lucie S.</UserName>
        </View>

        <View>
          <TouchableOpacity>
            <Settings2 color={theme.colors.pistache} />
          </TouchableOpacity>
        </View>
      </UserInfo>
    </UserDetails>
  );
};

export default UserBar;

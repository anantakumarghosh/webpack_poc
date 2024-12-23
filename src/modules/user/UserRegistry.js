import UserProfile from './components/UserProfile';
import UserSettings from './components/UserSettings';
import UserAvatar from './components/UserAvatar';

export const UserComponents = {
  Profile: UserProfile,
  Settings: UserSettings,
  Avatar: UserAvatar
};

export default {
  components: UserComponents,
  moduleName: 'User',
  
  createUserView: (props) => {
    const { Profile, Avatar, Settings } = UserComponents;
    return (
      <div>
        <Avatar {...props.avatarProps} />
        <Profile {...props.profileProps} />
        <Settings {...props.settingsProps} />
      </div>
    );
  }
};

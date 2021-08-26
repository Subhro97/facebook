import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';

export default function GroupAvatars() {
  return (
    <AvatarGroup max={4}>
      <Avatar alt="Remy Sharp" src="Images/Iron.jpg" />
      <Avatar alt="Travis Howard" src="Images/cap.jpg" />
      <Avatar alt="Cindy Baker" src="Images/sam.jpg" />
      <Avatar alt="Agnes Walker" src="Images/nick.jpg" />
      <Avatar alt="Trevor Henderson" src="Images/hulk.jpg" />
    </AvatarGroup>
  );
}
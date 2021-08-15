import { UserInfo } from 'interface';

interface Props {
   user: UserInfo;
   size: number;
   borderRadius: number;
}

export function Avatar(props: Props) {
   const { size, user, borderRadius } = props;
   const style = {
      borderRadius: borderRadius,
      width: `${size}px`,
      height: `${size}px`,
   };
   return <img style={style} src={user.imageUrl} alt="avatar" />;
}

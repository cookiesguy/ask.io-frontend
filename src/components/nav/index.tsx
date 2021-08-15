import { Search, MoreVert } from '@material-ui/icons';
import { useAppSelector } from 'app/hooks';
import { selectUser } from 'redux/authentication/login';
import { Avatar, Input } from 'shared/components';
import { colors, Components } from 'shared/styles';
import { NavContainer, SearchIcon } from './style';
export function Nav() {
   const user = useAppSelector(selectUser);
   return (
      <NavContainer>
         <Input
            placeHolder="Search"
            icon={
               <SearchIcon>
                  <Search fontSize={'small'} htmlColor={colors.white} />
               </SearchIcon>
            }
            iconPosition="right"
         />
         <Components.CenterColumn>
            <Avatar user={user} size={30} borderRadius={30} />
            <MoreVert style={{ cursor: 'pointer', color: colors.gray80 }} />
         </Components.CenterColumn>
      </NavContainer>
   );
}

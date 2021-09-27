import { Search, MoreVert, ExitToApp } from '@material-ui/icons';
import { useAppSelector, useAppDispatch } from 'app/hooks';
import {
   selectUser,
   logout,
   makeLoading,
   selectLoading,
} from 'redux/authentication/login';
import { Avatar, FullLoader, Input } from 'shared/components';
import { colors, Components } from 'shared/styles';
import { NavContainer, SearchIcon, LogoutButton } from './style';
export function Nav() {
   const user = useAppSelector(selectUser);

   const isLoading = useAppSelector(selectLoading);

   const dispatch = useAppDispatch();

   const logoutHandle = () => {
      dispatch(makeLoading());
      setTimeout(() => dispatch(logout()), 500);
   };

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
         <FullLoader isLoading={isLoading} />

         <Components.CenterColumn>
            <LogoutButton onClick={logoutHandle}>
               Logout
               <ExitToApp htmlColor={colors.blue80} />
            </LogoutButton>
            <Avatar user={user} size={30} borderRadius={30} />
            <MoreVert style={{ cursor: 'pointer', color: colors.gray80 }} />
         </Components.CenterColumn>
      </NavContainer>
   );
}

import { useCallback } from 'react';
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import LoginBanner from 'assets/images/loginBanner.svg';
import GoogleIcon from 'assets/images/icons/google.svg';
import FacebookIcon from 'assets/images/icons/facebook.svg';
import GithubIcon from 'assets/images/icons/github.svg';
import { LoginLayout } from 'components/layout/loginLayout';
import { FACEBOOK_APP_ID_TEST, GOOGLE_CLIENT_ID } from 'config/constants';
import { User } from 'interface';
import {
   LoginButton,
   LoginContainer,
   BannerImage,
   WrapButtonChild,
   WrapButtonContainer,
   ButtonIcon,
   fbStyle,
} from './style';
import { FullLoader } from 'shared/components';

interface PropsType {
   isLoading: boolean;
   isLoggedIn: boolean;
   dispatchLogin: (user: User) => void;
   dispatchLogout: () => void;
}

export function Login(props: PropsType) {
   const { isLoading, dispatchLogin } = props;
   const responseGoogle = useCallback(
      (response: any): void => {
         const { name, email, imageUrl } = response.profileObj;
         const user: User = {
            email: email,
            userInfo: `${name},${imageUrl}`,
         };
         dispatchLogin(user);
      },
      [dispatchLogin]
   );

   const responseFacebook = useCallback((response: any) => {
      console.log(response);
   }, []);

   return (
      <LoginLayout>
         <FullLoader isLoading={isLoading} />
         <LoginContainer>
            <WrapButtonContainer>
               <WrapButtonChild>
                  <GoogleLogin
                     autoLoad={false}
                     clientId={GOOGLE_CLIENT_ID}
                     render={renderProps => (
                        <LoginButton
                           onClick={renderProps.onClick}
                           disabled={renderProps.disabled}
                        >
                           <ButtonIcon src={GoogleIcon} alt="google" />
                           <p>Login with Google</p>
                        </LoginButton>
                     )}
                     buttonText="Login"
                     onSuccess={responseGoogle}
                     onFailure={responseGoogle}
                     cookiePolicy={'single_host_origin'}
                  />
                  <FacebookLogin
                     appId={FACEBOOK_APP_ID_TEST}
                     autoLoad={false}
                     callback={responseFacebook}
                     buttonStyle={fbStyle}
                     icon={<ButtonIcon src={FacebookIcon} alt="facebook" />}
                  />
                  <LoginButton>
                     <ButtonIcon src={GithubIcon} alt="github" />
                     <p>Login with Github</p>
                  </LoginButton>
               </WrapButtonChild>
            </WrapButtonContainer>
            <div>
               <BannerImage src={LoginBanner} alt="banner" />
            </div>
         </LoginContainer>
      </LoginLayout>
   );
}

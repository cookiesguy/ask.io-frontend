/* eslint-disable jsx-a11y/alt-text */
import { useCallback } from 'react';
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import LoginBanner from 'images/loginBanner.svg';
import GoogleIcon from 'images/icons/google.svg';
import FacebookIcon from 'images/icons/facebook.svg';
import GithubIcon from 'images/icons/github.svg';
import commonStyles from 'shared/styles/common.module.css';
import { LoginLayout } from 'components/layout/loginLayout';
import { FACEBOOK_APP_ID_TEST, GOOGLE_CLIENT_ID } from 'config/constants';
import { User } from 'interface';
import loginStyles from './login.module.css';

interface PropsType {
   isLoading: boolean;
   isLoggedIn: boolean;
   dispatchLogin: (user: User) => void;
   dispatchLogout: () => void;
}

export function Login(props: PropsType) {
   const responseGoogle = useCallback(
      (response: any): void => {
         const { name, email, imageUrl } = response.profileObj;
         const user: User = {
            email: email,
            userInfo: `${name},${imageUrl}`,
         };
         props.dispatchLogin(user);
      },
      [props]
   );

   const responseFacebook = useCallback((response: any) => {
      console.log(response);
   }, []);

   return (
      <LoginLayout>
         {props.isLoading && (
            <div className={commonStyles.wrapContainer}>
               <div className={commonStyles.ldsRoller}>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
               </div>
            </div>
         )}
         <div className={loginStyles.loginContainer}>
            <div className={loginStyles.wrapButtonContainer}>
               <div>
                  <GoogleLogin
                     autoLoad={false}
                     clientId={GOOGLE_CLIENT_ID}
                     render={renderProps => (
                        <button
                           className={loginStyles.loginButton}
                           onClick={renderProps.onClick}
                           disabled={renderProps.disabled}
                        >
                           <img
                              className={loginStyles.buttonIcon}
                              src={GoogleIcon}
                           ></img>
                           <p>Login with Google</p>
                        </button>
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
                     cssClass={loginStyles.loginButton}
                     icon={
                        <img
                           className={loginStyles.buttonIcon}
                           src={FacebookIcon}
                        ></img>
                     }
                  />

                  <button className={loginStyles.loginButton}>
                     <img
                        className={loginStyles.buttonIcon}
                        src={GithubIcon}
                     ></img>
                     <p>Login with Github</p>
                  </button>
               </div>
            </div>
            <div>
               <img className={loginStyles.bannerImage} src={LoginBanner}></img>
            </div>
         </div>
      </LoginLayout>
   );
}

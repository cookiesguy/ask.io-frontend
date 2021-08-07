/* eslint-disable jsx-a11y/alt-text */
import { useCallback } from 'react';
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login-typed';
import LoginBanner from 'images/loginBanner.svg';
import GoogleIcon from 'images/icons/google.svg';
import FacebookIcon from 'images/icons/facebook.svg';
import GithubIcon from 'images/icons/github.svg';
import loginStyles from 'styles/Login.module.css';
import { LoginLayout } from 'components/Layout/LoginLayout';
import { FACEBOOK_APP_ID_TEST, GOOGLE_CLIENT_ID } from 'config/constants';

interface PropsType {
   isLoading: boolean;
   isLoggedIn: boolean;
   dispatchLogin: VoidFunction;
   dispatchLogout: VoidFunction;
}

export function Login(props: PropsType) {
   const responseGoogle = useCallback((response: any): void => {
      console.log(response);
   }, []);

   const responseFacebook = useCallback((response: any) => {
      console.log(response);
   }, []);

   return (
      <LoginLayout>
         <div className={loginStyles.loginContainer}>
            <div className={loginStyles.loginButtons}>
               <div>
                  <GoogleLogin
                     clientId={GOOGLE_CLIENT_ID}
                     render={renderProps => (
                        <button
                           onClick={renderProps.onClick}
                           disabled={renderProps.disabled}
                        >
                           <p>Login with Google</p>
                           <img
                              className={loginStyles.buttonIcon}
                              src={GoogleIcon}
                           ></img>
                        </button>
                     )}
                     buttonText="Login"
                     onSuccess={responseGoogle}
                     onFailure={responseGoogle}
                     cookiePolicy={'single_host_origin'}
                  />
                  <FacebookLogin
                     appId={FACEBOOK_APP_ID_TEST}
                     autoLoad
                     callback={responseFacebook}
                     render={renderProps => (
                        <button
                           onClick={renderProps.onClick}
                           disabled={renderProps.isDisabled}
                        >
                           <p>Login with Facebook</p>
                           <img
                              className={loginStyles.buttonIcon}
                              src={FacebookIcon}
                           ></img>
                        </button>
                     )}
                  />

                  <button>
                     <p>Login with Github</p>
                     <img
                        className={loginStyles.buttonIcon}
                        src={GithubIcon}
                     ></img>
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

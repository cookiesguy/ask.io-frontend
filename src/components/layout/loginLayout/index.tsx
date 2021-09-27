import Logo from 'assets/images/icons/logo.svg';
import { Header } from './style';

export function LoginLayout({ children }: any) {
   return (
      <>
         <Header>
            <img src={Logo} alt="logo"></img>
         </Header>
         {children}
      </>
   );
}

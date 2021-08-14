import Logo from 'images/icons/logo.svg';
import styles from './loginLayout.module.css';

export function LoginLayout({ children }: any) {
   return (
      <>
         <div className={styles.header}>
            <img src={Logo}></img>
         </div>
         {children}
         <div className={styles.footer}></div>
      </>
   );
}

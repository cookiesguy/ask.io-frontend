import styles from './input.module.css';

interface Props {
   placeHolder: string;
   icon?: any;
   iconPosition: 'left' | 'right';
}

export function Input(props: Props) {
   const { placeHolder, icon } = props;

   return (
      <div className={styles.inputWrapper}>
         <input className={styles.input} placeholder={placeHolder}></input>
         {icon && <div className={styles.icon}>{icon}</div>}
      </div>
   );
}

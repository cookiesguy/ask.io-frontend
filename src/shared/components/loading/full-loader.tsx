import styles from './loading.module.css';
interface Props {
   isLoading: boolean;
}
export function FullLoader(props: Props) {
   const { isLoading } = props;
   if (isLoading)
      return (
         <div className={styles.wrapContainer}>
            <div className={styles.ldsRoller}>
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
      );
   return null;
}

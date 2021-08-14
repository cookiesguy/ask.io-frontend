import { Search } from '@material-ui/icons';
import { Input } from 'shared/components/input';
import styles from './nav.module.css';
export function Nav() {
   return (
      <div className={styles.nav}>
         <Input placeHolder="Search" icon={<Search />} iconPosition="right" />
      </div>
   );
}

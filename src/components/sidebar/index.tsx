import {
   Home,
   FiberNew,
   Chat,
   Group,
   Settings,
   Menu,
} from '@material-ui/icons';
import { SideBarItem } from 'interface';
import styles from './sidebar.module.css';

const items: SideBarItem[] = [
   {
      title: 'Home',
      icon: <Home />,
   },
   {
      title: 'Developer news',
      icon: <FiberNew />,
   },
   {
      title: 'Ranking',
      icon: <Home />,
   },
   {
      title: 'Chat',
      icon: <Chat />,
   },

   {
      title: 'Meet the team',
      icon: <Group />,
   },
   {
      title: 'Setting',
      icon: <Settings />,
   },
];

export function SideBar() {
   return (
      <div className={styles.sideBar}>
         <div className={styles.bar}>
            <Menu />
         </div>
         {items.map((element: SideBarItem) => (
            <div className={styles.item} key={element.title}>
               {element.icon}
               <span>{element.title}</span>
            </div>
         ))}
      </div>
   );
}

import { Nav } from 'components/nav';
import { SideBar } from 'components/sidebar';
import { ReactElement } from 'react';
import commonStyles from 'shared/styles/common.module.css';

interface Props {
   children: ReactElement;
}
export function HomeLayout(props: Props) {
   return (
      <div className={commonStyles.fullContainer}>
         <SideBar></SideBar>
         <div className={commonStyles.body}>
            <Nav></Nav>
            {props.children}
         </div>
      </div>
   );
}

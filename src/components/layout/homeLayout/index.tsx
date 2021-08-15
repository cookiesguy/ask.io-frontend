import { ReactElement } from 'react';
import { Nav } from 'components/nav';
import { SideBar } from 'components/sidebar';
import { Components } from 'shared/styles';

interface Props {
   children: ReactElement;
}

export function HomeLayout(props: Props) {
   return (
      <Components.FullContainer>
         <SideBar></SideBar>
         <Components.Body>
            <Nav></Nav>
            {props.children}
         </Components.Body>
      </Components.FullContainer>
   );
}

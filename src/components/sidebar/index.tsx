import {
   Home,
   FiberNew,
   Chat,
   Group,
   Settings,
   Menu,
} from '@material-ui/icons';
import { SideBarItem } from 'interface';
import { SideBarContainer, Bar, Item, Title } from './style';

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
      <SideBarContainer>
         <Bar>
            <Menu />
         </Bar>
         {items.map((element: SideBarItem) => (
            <Item key={element.title}>
               {element.icon}
               <Title>{element.title}</Title>
            </Item>
         ))}
      </SideBarContainer>
   );
}

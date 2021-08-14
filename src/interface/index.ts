export interface User {
   email: string;
   userInfo: string;
}

export interface SideBarItem {
   title: string;
   icon: any;
}

export type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

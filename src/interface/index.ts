export interface User {
   email: string;
   userInfo: string;
}

export type UserInfo = {
   id: string;
   userName: string;
   email: string;
   imageUrl: string;
   token: string;
};

export interface SideBarItem {
   title: string;
   icon: any;
}

export type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

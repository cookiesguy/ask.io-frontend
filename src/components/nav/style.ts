import styled from 'styled-components';
import { colors } from 'shared/styles';
export const NavContainer = styled.div`
   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
   padding: 20px;
   display: flex;
   justify-content: space-between;
`;

export const SearchIcon = styled.div`
   background-color: ${colors.blue80};
   padding: 3px;
   border-radius: 25px;
   width: 25px;
   height: 25px;
`;

export const LogoutButton = styled.button`
   background-color: ${colors.white};
   border: 1px solid ${colors.white};
   cursor: pointer;
   margin-right: 20px;
   display: flex;
   align-items: center;
   color: ${colors.blue80};
`;

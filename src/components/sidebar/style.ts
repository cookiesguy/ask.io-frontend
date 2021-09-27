import styled from 'styled-components';
import { colors } from 'shared/styles';

export const SideBarContainer = styled.div`
   background-color: ${colors.blue80};
   color: ${colors.white};
   width: 220px;
   position: fixed;
   top: 0;
   bottom: 0;
`;

export const Bar = styled.div`
   padding-top: 20px;
   padding-right: 10px;
   display: flex;
   justify-content: flex-end;
`;

export const Item = styled.div`
   display: flex;
   align-items: center;
   padding: 1.2rem 1.2rem;
   cursor: pointer;
`;

export const Title = styled.span`
   margin-left: 0.5rem;
`;

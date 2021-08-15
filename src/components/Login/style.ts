import { colors } from 'shared/styles';
import styled from 'styled-components';

export const BannerImage = styled.img`
   width: 40rem;
   height: 30rem;
`;

export const WrapButtonContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-evenly;
`;
export const WrapButtonChild = styled.div`
   height: 300px;
   display: flex;
   justify-content: space-evenly;
   flex-direction: column;
`;

export const LoginButton = styled.button`
   padding: 0.5rem 2rem;
   display: flex;
   justify-content: space-evenly;
   width: 300px;
   align-items: center;
   border: 1px solid ${colors.gray80};

   border-radius: 20px;
   background-color: ${colors.white};
   cursor: pointer;
`;

export const ButtonIcon = styled.img`
   height: 2rem;
   width: 2rem;
`;

export const LoginContainer = styled.div`
   display: flex;
   justify-content: space-evenly;
   padding: 40px 80px;
   flex-wrap: wrap-reverse;
`;

export const fbStyle = {
   padding: `0.5rem 2rem`,
   display: `flex`,
   justifyContent: `space-evenly`,
   width: `300px`,
   alignItems: `center`,
   border: `1px solid ${colors.gray80}`,
   borderRadius: '20px',
   backgroundColor: `${colors.white}`,
   cursor: 'pointer',
};

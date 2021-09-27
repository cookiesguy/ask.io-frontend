import styled from 'styled-components';
import { colors } from 'shared/styles';

export const InputWrapper = styled.div`
   position: relative;
`;

export const InputElement = styled.input`
   padding: 7px 15px;
   padding-right: 40px;
   border-radius: 20px;
   border: 0.5px solid ${colors.gray80};
   outline: none;
`;

export const InputIcon = styled.div`
   position: absolute;
   top: 5px;
   right: 8px;
`;

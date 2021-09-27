import styled from 'styled-components';

const CenterColumn = styled.div`
   display: flex;
   align-items: center;
`;
const FullContainer = styled.div`
   height: 100%;
`;

const FlexCenterBox = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   flex-wrap: wrap;
`;

const Body = styled.div`
   margin-left: 220px;
   height: 100%;
`;

export const Components = {
   CenterColumn: CenterColumn,
   FullContainer: FullContainer,
   FlexCenterBox: FlexCenterBox,
   Body: Body,
};

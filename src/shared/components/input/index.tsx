import { InputWrapper, InputElement, InputIcon } from './style';

interface Props {
   placeHolder: string;
   icon?: any;
   iconPosition: 'left' | 'right';
}

export function Input(props: Props) {
   const { placeHolder, icon } = props;

   return (
      <InputWrapper>
         <InputElement placeholder={placeHolder} />
         {icon && <InputIcon>{icon}</InputIcon>}
      </InputWrapper>
   );
}

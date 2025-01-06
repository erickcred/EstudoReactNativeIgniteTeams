import { TextInputProps } from 'react-native';
import { Container } from './styles';
import { useState } from 'react';
import theme from '@theme/index';

export function Input({ ...rest }: TextInputProps) {
  const [ nomeTurma, setNomeTurma ] = useState();

  function addNewTurma() {
    console.log(nomeTurma)
  }

  return (
    <Container { ...rest }
      placeholderTextColor={ theme.COLORS.GRAY_300 } 
      onChanged={setNomeTurma}
      value={nomeTurma}
    />
  )
}
import { TextInput, TextInputProps } from 'react-native';
import { Container } from './styles';
import React, { useState } from 'react';
import theme from '@theme/theme';

type Props = TextInputProps & {
  inputRef?: React.RefObject<TextInput>;
}

export function Input({ inputRef, ...rest }: Props) {
  const [ nomeTurma, setNomeTurma ] = useState();

  function addNewTurma() {
    console.log(nomeTurma)
  }

  return (
    <Container { ...rest }
      ref={ inputRef }
      placeholderTextColor={ theme.COLORS.GRAY_300 } 
    />
  )
}
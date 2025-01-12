import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { StatusBar } from 'react-native';

import { Routes } from '@routes/routes';

import theme from '@theme/index';
import { useFonts , Roboto_400Regular, Roboto_700Bold  } from '@expo-google-fonts/roboto'

import { Loading } from '@components/Loading';

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Roboto_400Regular, Roboto_700Bold
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      />
      
      { fontsLoaded ? <Routes /> : <Loading /> }
    </ThemeProvider>
  );
}
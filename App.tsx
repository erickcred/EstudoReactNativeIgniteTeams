import { ThemeProvider } from 'styled-components/native';
import { StatusBar } from 'react-native';

import theme from '@theme/index';
import { useFonts , Roboto_400Regular, Roboto_700Bold  } from '@expo-google-fonts/roboto'

import { Groups } from '@screens/Groups';
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
      
      { fontsLoaded ? <Groups /> : <Loading /> }
    </ThemeProvider>
  );
}
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './src/navigation/AppStack';
import { useFonts } from 'expo-font'
import { Text } from 'react-native';

export default function App() {
  let [fontsLoaded] = useFonts({
    'Nunito-Regular': require('./src/assets/fonts/Nunito-Regular.ttf'),
    'Nunito-SemiBold': require('./src/assets/fonts/Nunito-SemiBold.ttf'),
    'Nunito-Bold': require('./src/assets/fonts/Nunito-Bold.ttf'),
    'Nunito-Italic': require('./src/assets/fonts/Nunito-Italic.ttf'),
    'Nunito-BoldItalic': require('./src/assets/fonts/Nunito-BoldItalic.ttf'),
  })

  if (!fontsLoaded)
    return <Text>loading</Text>
  return (
    <NavigationContainer>
      <AppStack></AppStack>
    </NavigationContainer>
  );
}



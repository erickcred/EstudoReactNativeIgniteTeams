import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Groups } from '@screens/Groups/groups';
import { NewGroup } from '@screens/NewGroup/newGroup';
import { Players } from '@screens/Players/players';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="groups" component={ Groups } />
      <Screen name="newGroup" component={ NewGroup } />
      <Screen name="players" component={ Players } />
    </Navigator>
  )
}
import AsyncStorage from '@react-native-async-storage/async-storage';

import { PLAYER_COLLECTION } from '@storage/storageConfig';
import { PlayerStorageDTO } from './PlayStorageDTO';
import { playersGetByGroup } from './playersGetByGroup';

export async function playerRemoveByGroup(player: PlayerStorageDTO, group: string) {
  try {
    const storagePlayers = await playersGetByGroup(group);
    const playersUpdated = storagePlayers.filter(p => p.name !== player.name);
    
    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, JSON.stringify(playersUpdated));
  } catch (error) {
    throw error;
  }
}

import AsyncStorage from '@react-native-async-storage/async-storage'
import { PLAYER_COLLECTION } from '@storage/storageConfig';
import { PlayerStorageDTO } from './PlayStorageDTO';

export async function playersGetByGroup(group: string): Promise<PlayerStorageDTO[]> {
  try {
    const storatePlayers = await AsyncStorage.getItem(`${PLAYER_COLLECTION}-${group}`);
    const players: PlayerStorageDTO[] = storatePlayers ? JSON.parse(storatePlayers) : [];

    return players;
  } catch (error) {
    throw (error);
  }
}
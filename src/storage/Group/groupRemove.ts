import AsyncStorage from '@react-native-async-storage/async-storage';

import { GROUP_COLLECTION } from '@storage/storageConfig';
import { PLAYER_COLLECTION } from '@storage/storageConfig';
import { groupsGetAll } from './groupsGetAll';
import { AppError } from '../../utils/AppError';
import { playersGetByGroup } from '@storage/players/playersGetByGroup';

export async function groupRemove(groupName: string) {
  try {
   const storageGroups = await groupsGetAll();
   const storagePlayers = await playersGetByGroup(groupName);
   console.log(storagePlayers);

   if (storagePlayers.length > 0) {
    console.log('sfsdfsd', storagePlayers.length)
    await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupName}`);
   }
   
   if (storageGroups.includes(groupName)) {
    const newStorageGroups = storageGroups.filter(group => group !== groupName);
    
    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(newStorageGroups));
   } else {
    throw new AppError(`Não foi possível remover a turma ${ groupName }.`);
   } 
  } catch (error) {
    throw error;
  }
}
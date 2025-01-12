import AsyncStorage from '@react-native-async-storage/async-storage';

import { GROUP_COLLECTION } from '@storage/storageConfig';
import { groupsGetAll } from './groupsGetAll';
import { AppError } from '../../utils/AppError';

export async function groupRemove(groupName: string) {
  try {
   const storagedGroups = await groupsGetAll();
   
   if (storagedGroups.includes(groupName)) {
    const newStorageGroups = storagedGroups.filter(group => group !== groupName);
    
    await AsyncStorage.removeItem(GROUP_COLLECTION);
    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(newStorageGroups));
   } else {
    throw new AppError(`Não foi possível remover a turma ${ groupName }.`);
   } 
  } catch (error) {
    throw error;
  }
}
import { getFirestore } from 'firebase-admin/firestore';
import { AppConfig, UpdateAppConfig } from '../../types/config/appConfig';
import { APPCONFIG_COLLECTION_ID, APPCONFIG_DB_COLLECTION } from '../constants';
import { NonNullConfig } from '../../types/common/util.types';

export const getConfig = async () => {
  const db = getFirestore();
  const snapshot = await db.collection(APPCONFIG_DB_COLLECTION).doc(APPCONFIG_COLLECTION_ID).get();
  if (!snapshot.exists) return null;
  return snapshot.data() as AppConfig;
}

export const updateConfig = async (config: UpdateAppConfig) => {
  const db = getFirestore();
  const filteredConfig = Object.entries(config).reduce(
    (acc, [key, value]) => {
      if (value !== null && value !== undefined) {
        acc[key as keyof AppConfig] = value;
      }
      return acc;
    },
    {} as NonNullConfig<AppConfig>
  );
  if (Object.keys(filteredConfig).length !== 0) {
    const docRef = db.collection(APPCONFIG_DB_COLLECTION).doc(APPCONFIG_COLLECTION_ID);
    const doc = await docRef.get();
    if (doc.exists) {
      await docRef.update(filteredConfig);
    } else {
      await docRef.set(filteredConfig);
    }
  }
};


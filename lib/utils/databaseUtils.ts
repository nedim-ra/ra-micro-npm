import { IDBPDatabase, openDB } from "idb";

type OpenDbKey = "EssentialsSettings" | "BeaSettings" | "SpaceSettings";

class DatabaseUtils {
  static getDbVersion = () => 0;

  /**
   *
   * @param dbName - The database name
   * @param storeNames - The names of the store within
   * @param dbVersion - The database version
   * @returns An instance of a IDBPDatabase
   */
  static initIndexedDB = async (
    dbName: string,
    storeNames: string[],
    dbVersion: number = DatabaseUtils.getDbVersion()
  ): Promise<IDBPDatabase<unknown>> => {
    const database = await openDB(dbName, dbVersion, {
      upgrade(db: IDBPDatabase) {
        storeNames.forEach((storeName) => {
          if (!db.objectStoreNames.contains(storeName)) {
            db.createObjectStore(storeName);
          }
        });
      },
    });
    return database;
  };

  /**
   *
   * @param key - The key of the value being set
   * @param value - The value to be set
   * @param storeName - The name of the store where the value is stored
   * @param name - The database name
   */
  static async setItem<T>(
    key: OpenDbKey,
    value: T,
    storeName: string,
    dbName: string = "dbStore"
  ): Promise<void | null> {
    const db = await openDB(dbName, DatabaseUtils.getDbVersion());
    const tx = db.transaction(storeName, "readwrite");
    tx.store.put(value, key);
  }

  /**
   *
   * @param key - The key of the value being read
   * @param storeName - The name of the store where the value is stored
   * @param name - The databse name
   * @returns  - The item of type T
   */
  static async getItem<T>(
    key: OpenDbKey,
    storeName: string,
    name: string = "dbStore"
  ): Promise<T | null> {
    try {
      const db = await openDB(name, DatabaseUtils.getDbVersion());
      const tx = db.transaction(storeName, "readonly");
      const domain = await tx.store.get(key);
      return domain;
    } catch (err) {
      return null;
    }
  }
}

export default DatabaseUtils;

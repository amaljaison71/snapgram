import { Client, Account, Storage, Databases, Avatars } from "appwrite";

export const appwriteConfig = {
    url: import.meta.env.VITE_APPWRITE_PROJECT_URL,
    projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
    databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    storageId: import.meta.env.VITE_APPWRITE_STORAGE_ID,
    usersCollctionId: import.meta.env.VITE_APPWRITE_USERS_COLLECTION_ID,
    postsCollctionId: import.meta.env.VITE_APPWRITE_POSTS_COLLECTION_ID,
    savesCollctionId: import.meta.env.VITE_APPWRITE_SAVES_COLLECTION_ID,
}

export const client = new Client();

client.setProject(appwriteConfig.projectId);
client.setEndpoint(appwriteConfig.url)

export const account = new Account(client);
export const storage = new Storage(client);
export const databases = new Databases(client);
export const avatars = new Avatars(client);
import { Client, Account, ID } from "react-native-appwrite";

export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.eta.harvestBox",
  projectId: "66f192c5000df8acf9d4",
  databaseId: "66f78507002fccebef06",
  userCollectionId: "66f7852e002b53049821",
};

const client: Client = new Client();

client
  .setEndpoint(config.endpoint)
  .setProject(config.projectId)
  .setPlatform(config.platform);

const account: Account = new Account(client);

//  const token = await account.createPhoneToken(
//     ID.unique(),
//     '+917899765925'
//  )

// const userId = token.userId;

export const getToken = async (phoneNumber: string) => {
  const phNumber = `+91${phoneNumber}`;
  try {
    await clearSession();
    const token = await account.createPhoneToken(ID.unique(), phNumber);
    if (!token) {
      throw new Error("Token not created");
    }
    const userId = token.userId;
    console.log(userId);
    return userId;
  } catch (error) {
    console.error(error);
  }
};

export const authenticateOtp = async (userId: string, secret: string) => {
  try {
    const session = await account.createSession(userId, secret);
    console.log("session created");
    if (!session) {
      throw new Error("Session not created");
    }
    return session;
    //use session & create user in database
  } catch (error) {
    console.error(error);
  }
};

export const clearSession = async () => {
  try {
    await account.deleteSession("current");
    console.log("session deleted");
  } catch (error) {
    console.error(error);
  }
};

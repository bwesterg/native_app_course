import { Account, Client } from 'react-native-appwrite';

export const config = {
  endpoint: 'https://cloud.appwrite.io/v1',
  platform: 'com.benWest.chuff',
  projectId: '66a16fba000dc5223a24',
  databaseId: '66a1710d000b290de658',
  userCollectionId: '66a1713d000efab7c4e8',
  videoCollectionId: '66a17163003d0d3c5120',
  storageId: '66a172c3002231b1d896'
}

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) 
    .setProject(config.projectId) 
    .setPlatform(config.platform) 


  const account = new Account(client);

export const createUser = () => {
  account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
      .then(function (response) {
          console.log(response);
      }, function (error) {
          console.log(error);
      });
}


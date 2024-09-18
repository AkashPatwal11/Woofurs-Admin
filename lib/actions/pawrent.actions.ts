"use server"

import { ID, Query } from "node-appwrite";
import { parseStringify } from "../utils";

import {
  BUCKET_ID,
  DATABASE_ID,
  ENDPOINT,
  PAWRENT_COLLECTION_ID,
  PET_COLLECTION_ID,
  PROJECT_ID,
  databases,
  storage,
  users,
} from "../appwrite.config";


// CREATE APPWRITE USER
export const createUser = async (user: CreateUserParams) => {
    try {
      // Create new user -> https://appwrite.io/docs/references/1.5.x/server-nodejs/users#create
      const newuser = await users.create(
        ID.unique(),
        user.email,
        user.phone,
        undefined,
        user.name
      );
  
      return parseStringify(newuser);
    } catch (error: any) {
      // Check existing user
      if (error && error?.code === 409) {
        const existingUser = await users.list([
          Query.equal("email", [user.email]),
        ]);
  
        return existingUser.users[0];
      }
      console.error("An error occurred while creating a new user:", error);
    }
};

  // GET USER
export const getUser = async (userId: string) => {
  try {
    const user = await users.get(userId);

    return parseStringify(user);
  } catch (error) {
    console.error(
      "An error occurred while retrieving the user details:",
      error
    );
  }
};

// REGISTER Pawrent
export const registerPawrent = async ({
  ...pawrent
}: RegisterPawrentParams) => {
  try {
    // Create new pawrent document -> https://appwrite.io/docs/references/cloud/server-nodejs/databases#createDocument
    const newPawrent = await databases.createDocument(
      DATABASE_ID!,
      PAWRENT_COLLECTION_ID!,
      ID.unique(),
      {
        ...pawrent,
      }
    );

    return parseStringify(newPawrent);
  } catch (error) {
    console.error("An error occurred while creating a new pawrent:", error);
  }
};

// GET Pawrent
export const getPawrent = async (userId: string) => {
  try {
    const pawrents = await databases.listDocuments(
      DATABASE_ID!,
      PAWRENT_COLLECTION_ID!,
      [Query.equal("userId", [userId])]
    );

    return parseStringify(pawrents.documents[0]);
  } catch (error) {
    console.error(
      "An error occurred while retrieving the pawrent details:",
      error
    );
  }
};

// REGISTER Pet
export const registerPet = async ({
  ...pet
}: RegisterPetParams) => {
  try {
    // Create new pet document -> https://appwrite.io/docs/references/cloud/server-nodejs/databases#createDocument
    const newPet = await databases.createDocument(
      DATABASE_ID!,
      PET_COLLECTION_ID!,
      ID.unique(),
      {
        ...pet,
      }
    );

    return parseStringify(newPet);
  } catch (error) {
    console.error("An error occurred while creating a new pet:", error);
  }
};

export const updatePet = async ({
  petId, weight, gender, birthDate
}: RegisterPetParams) => {
  try {
    // Create new pet document -> https://appwrite.io/docs/references/cloud/server-nodejs/databases#createDocument
    debugger;
    const newPet = await databases.updateDocument(
      DATABASE_ID!,
      PET_COLLECTION_ID!,
      petId!,
      {weight, gender, birthDate}
    );

    return parseStringify(newPet);
  } catch (error) {
    console.error("An error occurred while creating a new pet:", error);
  }
};

// GET Pet
export const getPet = async (userId: string, petName: string) => {
  try {
    const pets = await databases.listDocuments(
      DATABASE_ID!,
      PET_COLLECTION_ID!,
      [Query.equal("userId", [userId]), Query.equal("name", [petName])]
    );

    return parseStringify(pets.documents[0]);
  } catch (error) {
    console.error(
      "An error occurred while retrieving the pet details:",
      error
    );
  }
};

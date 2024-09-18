"use server"

import { ID, Query } from "node-appwrite";
import { parseStringify } from "../utils";

import {
    BUCKET_ID,
    DATABASE_ID,
    ENDPOINT,
    ESTD_COLLECTION_ID,
    PET_COLLECTION_ID,
    PROJECT_ID,
    databases,
    storage,
    users,
  } from "../appwrite.config";


// GET establishment
export const getEstablishment = async (estdId: string) => {
    try {
      const establishments = await databases.getDocument(
        DATABASE_ID!,
        ESTD_COLLECTION_ID!,
        estdId!
      );
      
      return parseStringify(establishments);
    } catch (error) {
      console.error(
        "An error occurred while retrieving the establishment details:",
        error
      );
    }
};
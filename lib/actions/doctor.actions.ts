"use server"

import { ID, Query } from "node-appwrite";
import { parseStringify } from "../utils";

import {
    BUCKET_ID,
    DATABASE_ID,
    ENDPOINT,
    DOCTOR_COLLECTION_ID,
    PET_COLLECTION_ID,
    PROJECT_ID,
    databases,
    storage,
    users,
  } from "../appwrite.config";

// GET establishment doctors
export const getEstablishmentDoctors = async (estdId: string) => {
  try {
    const doctors = await databases.listDocuments(
      DATABASE_ID!,
      DOCTOR_COLLECTION_ID!,
      [Query.equal("estdId", [estdId])]
    );

    return parseStringify(doctors.documents);
  } catch (error) {
    console.error(
      "An error occurred while retrieving the pet details:",
      error
    );
  }
};

// GET doctor
export const getDoctor = async (doctorId: string) => {
  try {
    const doctor = await databases.listDocuments(
      DATABASE_ID!,
      DOCTOR_COLLECTION_ID!,
      [Query.equal("doctorId", [doctorId])]
    );

    return parseStringify(doctor.documents[0]);
  } catch (error) {
    console.error(
      "An error occurred while retrieving the pet details:",
      error
    );
  }
};
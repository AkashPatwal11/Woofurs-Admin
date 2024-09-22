import { Models } from "node-appwrite";

export interface Pawrent extends Models.Document {
  userId: string;
  name: string;
  email: string;
  phone: string;
  birthDate: Date;
  gender: Gender;
  address: string;
  privacyConsent: boolean;
}

export interface Pet extends Models.Document {
  petId: string;
  name: string;
  birthDate: Date;
  gender: Gender;
  pawrent: Pawrent;
  type: PetType;
  weight: number;
}

export interface Appointment extends Models.Document {
  patient: Pawrent;
  schedule: Date;
  status: Status;
  doctorId: string;
  reason: string;
  note: string;
  userId: string;
  cancellationReason: string | null;
}

export interface Customer {
  id: number;
  name: string;
  email: string;
  petName: string;
  petDetail: string;
  service: string;
  price: number;
  employee: string;
  updatedAt: string;
  status: string;
}

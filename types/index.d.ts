/* eslint-disable no-unused-vars */

declare type SearchParamProps = {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

declare type Gender = "Male" | "Female" | "Other";
declare type PetType = "Dog" | "Cat" | "Cattle" | "Goats" | "Other";
declare type Status = "pending" | "scheduled" | "cancelled";

declare interface CreateUserParams {
  name: string;
  email: string;
  phone: string;
}
declare interface User extends CreateUserParams {
  $id: string;
}

declare interface Pet extends RegisterPetParams {
  $id: string;
}

declare interface Pawrent extends RegisterPawrentParams {
  $id: string;
}

declare interface RegisterPawrentParams extends CreateUserParams {
  userId: string;
  birthDate?: Date;
  gender?: Gender;
  address?: string;
  privacyConsent: boolean;
}

declare type RegisterPetParams = {
  name: string;
  birthDate?: Date;
  gender?: Gender;
  userId: string;
  type?: PetType;
  weight?: number;
  petId?: string;
};

declare type CreateAppointmentParams = {
  userId: string;
  pawrentId: string;
  estdId: string;
  doctorId: string;
  reason: string;
  schedule: Date;
  status: Status;
  note: string | undefined;
};

declare type UpdateAppointmentParams = {
  appointmentId: string;
  userId: string;
  timeZone: string;
  appointment: Appointment;
  type: string;
};

declare type Doctors = Array<Doctor>

declare type Doctor = {
  name: string;
  $id: string
}

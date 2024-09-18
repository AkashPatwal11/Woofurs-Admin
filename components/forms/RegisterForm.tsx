"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form, FormControl } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { SelectItem } from "@/components/ui/select";
import {
  Doctors,
  GenderOptions,
  PawrentFormDefaultValues,
  PetFormDefaultValues
} from "@/constants";
import { registerPawrent, updatePet } from "@/lib/actions/pawrent.actions";
import { PawrentFormValidation } from "@/lib/validation";

import "react-datepicker/dist/react-datepicker.css";
import "react-phone-number-input/style.css";
import CustomFormField, { FormFieldType } from "../CustomFormField";
import SubmitButton from "../SubmitButton";

const RegisterForm = ({ user, pet, pawrent, estdId }: { user: User, pet: Pet, pawrent: Pawrent, estdId: string }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof PawrentFormValidation>>({
    resolver: zodResolver(PawrentFormValidation),
    defaultValues: {
      ...PawrentFormDefaultValues,
      ...PetFormDefaultValues,
      name: user.name,
      email: user.email,
      phone: user.phone,
      petName: pet?.name,
      petGender: pet?.gender || PetFormDefaultValues.petGender,
      weight: pet?.weight || PetFormDefaultValues.weight,
      petBirthDate: pet?.birthDate || PetFormDefaultValues.petBirthDate
    },
  });

  const onSubmit = async (values: z.infer<typeof PawrentFormValidation>) => {
    setIsLoading(true);

    try {
      const pawrentObj = {
        userId: user.$id,
        name: values.name,
        email: values.email,
        phone: values.phone,
        birthDate: new Date(values.birthDate),
        gender: values.gender,
        address: values.address,
        privacyConsent: values.privacyConsent,
      };

      const petDetails = {
        userId: user.$id,
        name: values.petName,
        gender: values.petGender,
        birthDate: new Date(values.petBirthDate),
        weight: values.weight,
        petId: pet.$id
      };

      await updatePet(petDetails);

      if(!pawrent){
        const newPawrent = await registerPawrent(pawrentObj);
      }

      router.push(`/establishment/${estdId}/pawrent/${user.$id}/new-appointment`);

    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex-1 space-y-12"
      >
        <section className="space-y-2">
          <h1 className="header">Welcome  👋</h1>
        </section>

        <section className="space-y-4">
          <div className="mb-9 space-y-1">
            <h2 className="sub-header">Pet Information</h2>
          </div>

          {/* NAME */}
          <div className="flex flex-col gap-6 xl:flex-row">
            <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={form.control}
              name="petName"
              label="Pet Name"
              placeholder="Muffin"
              iconSrc="/assets/icons/paw.svg"
              iconAlt="user"
            />

            <CustomFormField
              fieldType={FormFieldType.SKELETON}
              control={form.control}
              name="petGender"
              label="Gender"
              renderSkeleton={(field) => (
                <FormControl>
                  <RadioGroup
                    className="flex h-11 gap-6 xl:justify-between"
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    {GenderOptions.map((option, i) => (
                      <div key={option + i} className="radio-group">
                        <RadioGroupItem value={option} id={option} />
                        <Label htmlFor={option} className="cursor-pointer">
                          {option}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </FormControl>
              )}
            />
          </div>
          {/* BirthDate & Gender */}
          <div className="flex flex-col gap-6 xl:flex-row">

            <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={form.control}
              name="weight"
              label="Weight (in Kgs)"
              placeholder="20Kgs"
              iconSrc="/assets/icons/weight.svg"
              iconAlt="user"
            />

            <CustomFormField
              fieldType={FormFieldType.DATE_PICKER}
              control={form.control}
              name="petBirthDate"
              label="Date of birth"
            />
          </div>

        </section>
        {pawrent ? null: <section className="space-y-6">
          <div className="mb-9 space-y-1">
            <h2 className="sub-header">Personal Information</h2>
          </div>

          {/* NAME */}
          <div className="flex flex-col gap-6 xl:flex-row">
            <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={form.control}
              name="name"
              label="Full name"
              placeholder="Tony Stark"
              iconSrc="/assets/icons/user.svg"
              iconAlt="user"
            />
            <CustomFormField
              fieldType={FormFieldType.DATE_PICKER}
              control={form.control}
              name="birthDate"
              label="Date of birth"
            />

            <CustomFormField
              fieldType={FormFieldType.SKELETON}
              control={form.control}
              name="gender"
              label="Gender"
              renderSkeleton={(field) => (
                <FormControl>
                  <RadioGroup
                    className="flex h-11 gap-6 xl:justify-between"
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    {GenderOptions.map((option, i) => (
                      <div key={option + i} className="radio-group">
                        <RadioGroupItem value={option} id={option} />
                        <Label htmlFor={option} className="cursor-pointer">
                          {option}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </FormControl>
              )}
            />
          </div>

          {/* EMAIL & PHONE */}
          <div className="flex flex-col gap-6 xl:flex-row">
            <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={form.control}
              name="email"
              label="Email address"
              placeholder="tonystark@gmail.com"
              iconSrc="/assets/icons/email.svg"
              iconAlt="email"
            />

            <CustomFormField
              fieldType={FormFieldType.PHONE_INPUT}
              control={form.control}
              name="phone"
              label="Phone Number"
              placeholder="(+91) 9999912345"
            />
            {/* Address */}
            <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={form.control}
              name="address"
              label="Address"
              placeholder="15th main road, HSR Layout, Bengaluru, 560102"
            />
          </div>
        </section> }

        <section className="space-y-6">
          <div className="mb-9 space-y-1">
            <h2 className="sub-header">Consent and Privacy</h2>
          </div>

          <CustomFormField
            fieldType={FormFieldType.CHECKBOX}
            control={form.control}
            name="privacyConsent"
            label="I acknowledge that I have reviewed and agree to the
            privacy policy"
          />
        </section>

        <SubmitButton isLoading={isLoading}>Submit and Continue</SubmitButton>
      </form>
    </Form>
  );
};

export default RegisterForm;

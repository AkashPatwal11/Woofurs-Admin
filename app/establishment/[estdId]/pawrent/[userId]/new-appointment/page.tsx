import Image from "next/image";

import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { getPawrent } from "@/lib/actions/pawrent.actions";
import { getEstablishmentDoctors } from "@/lib/actions/doctor.actions";

const Appointment = async ({searchParams, params: { estdId, userId} }: SearchParamProps) => {
  const pawrent = await getPawrent(userId);
  const doctors = estdId ? await getEstablishmentDoctors(estdId) : [];

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[860px] flex-1 justify-between">
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="logo"
            className="mb-12 h-10 w-fit"
          />

          <AppointmentForm
            pawrentId={pawrent?.$id}
            userId={userId}
            estdId={estdId}
            type="create"
            doctors={doctors}
          />

          <p className="copyright mt-10 py-12">© 2024 Woofurs</p>
        </div>
      </section>

      <Image
        src="/assets/images/appointment-img.png"
        height={1500}
        width={1500}
        alt="appointment"
        className="side-img max-w-[390px] bg-bottom"
      />
    </div>
  );
};

export default Appointment;

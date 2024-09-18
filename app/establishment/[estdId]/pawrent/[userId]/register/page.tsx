import Image from "next/image";
import { redirect } from "next/navigation";

import RegisterForm from "@/components/forms/RegisterForm";
import { getPawrent, getPet, getUser } from "@/lib/actions/pawrent.actions";

const Register = async ({searchParams, params: { estdId, userId} }: SearchParamProps) => {
  const user = await getUser(userId);
  const pawrent = await getPawrent(userId);
  const selectedPet = (searchParams?.selectedPet as string) || "";
  const pet = await getPet(userId, selectedPet);

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="pet parent"
            className="mb-12 h-10 w-fit"
          />

          <RegisterForm user={user} pet={pet} pawrent={pawrent} estdId={estdId}/>

          <p className="copyright py-12">© 2024 Woofurs</p>
        </div>
      </section>

      <Image
        src="/assets/images/register-img.png"
        height={1000}
        width={1000}
        alt="pawrent"
        className="side-img max-w-[390px]"
      />
    </div>
  );
};

export default Register;

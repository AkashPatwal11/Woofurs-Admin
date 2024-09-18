import {PawrentForm} from "@/components/forms/PawrentForm";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

import { getEstablishment } from "@/lib/actions/establishment.actions";

const Home = async ({searchParams, params: { estdId } }: SearchParamProps) => {
  debugger;
  const establishment = estdId ? await getEstablishment(estdId) : null;
  return (
    <div className="flex h-screen max-h-screen">
      {/* to do otp verification */}
      {establishment ? (
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image
            src="/assets/icons/logo-full.svg"
            width={1000}
            height={1000}
            alt="pets"
            className="mb-12 h-10 w-fit"
          />

          <PawrentForm estdId={estdId}/>

          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2024 Woofurs
            </p>
            <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>) : (
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image
            src="/assets/icons/logo-full.svg"
            width={1000}
            height={1000}
            alt="pets"
            className="mb-12 h-10 w-fit"
          />

          <section className="mb-12 space-y-4">
            <h1 className="header">Hi there 👋</h1>
            <p className="text-dark-700">We couldn&apos;t locate the requested hospital or establishment in our system.</p>
            
            <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">To get started:</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                  <span>Scan the QR code displayed at the hospital.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                  <span>If you can&apos;t find a QR code, check with the receptionist for assistance.</span>
                </li>
              </ul>
              <div className="flex items-start pt-4 border-t border-gray-700">
                <svg className="w-6 h-6 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>
                  <span>Need help? Contact our support team at  </span>
                  <a href="mailto:support@woofurs.com" className="text-blue-400 hover:underline">care@woofurs.com</a>
                </span>
              </div>
            </div>
          </section>

          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2024 Woofurs
            </p>
          </div>
        </div>
      </section>
      )}

      <Image
        src="/assets/images/onboarding-img.png"
        height={1000}
        width={1000}
        alt="woofurs pet care"
        className="side-img max-w-[50%]"
      />
    </div>
  );
}

export default Home;

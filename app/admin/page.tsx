"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { StatCard } from "@/components/StatCard";
import { columns } from "@/components/table/columns";
import { DataTable } from "@/components/table/DataTable";
import { getRecentAppointmentList } from "@/lib/actions/appointment.actions";

const AdminDashboardPage = async () => {
  const router = useRouter();
  const [appointments, setAppointments] = useState(null);

  // Simulating an authentication check, replace this with actual check
  const isAuthenticated = false; // Replace this with real auth check, e.g., JWT or Appwrite session

  // useEffect(() => {
  //   if (!isAuthenticated) {
  //     router.push("/auth"); // Redirect to Sign-In page if not authenticated
  //   } else {
  //     // Fetch the appointments if authenticated
  //     (async () => {
  //       const fetchedAppointments = await getRecentAppointmentList();
  //       setAppointments(fetchedAppointments);
  //     })();
  //   }
  // }, [isAuthenticated]);

  // if (!isAuthenticated) return null; // Render nothing while checking auth state

  return (
    <div className="mx-auto  flex max-w-7xl flex-col space-y-14">
      <header className="admin-header">
        <Link href="/" className="cursor-pointer">
          <Image
            src="/assets/icons/logo-full.svg"
            height={32}
            width={162}
            alt="logo"
            className="h-8 w-fit"
          />
        </Link>
        <p className="text-16-semibold">Admin Dashboard</p>
      </header>

      <main className="admin-main">
        <section className="w-full space-y-4">
          <h1 className="header">Welcome 👋</h1>
          <p className="text-dark-700">
            Start the day by managing new appointments
          </p>
        </section>

        <section className="admin-stat">
          <StatCard
            type="appointments"
            count={100}
            label="Scheduled appointments"
            icon={"/assets/icons/appointments.svg"}
          />
          <StatCard
            type="pending"
            count={200}
            label="Pending appointments"
            icon={"/assets/icons/pending.svg"}
          />
          <StatCard
            type="cancelled"
            count={20}
            label="Cancelled appointments"
            icon={"/assets/icons/cancelled.svg"}
          />
        </section>

        {/* <DataTable columns={columns} data={appointments.documents} /> */}

        <p>Loading appointments...</p>
      </main>
    </div>
  );
};

export default AdminDashboardPage;

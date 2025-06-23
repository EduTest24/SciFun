"use client";

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import ProfileForm from "@/components/ProfileForm";
import AttendanceRecord from "@/components/AttendenceRecord";
import Image from "next/image";
import Link from "next/link";

export default function DashboardPage() {
  const { user, isLoaded } = useUser();
  const [userInfo, setUserInfo] = useState(null);
  const [activeSection, setActiveSection] = useState("profile");
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      if (!user || !isLoaded) return;
      try {
        const res = await fetch(`/api/users/get?clerkId=${user.id}`);
        const data = await res.json();
        if (res.ok) setUserInfo(data);
        else console.error(data.error || "Failed to load user");
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [user, isLoaded]);

  const renderSection = () => {
    switch (activeSection) {
      case "profile":
        return <ProfileForm />;
      case "attendance":
        return <AttendanceRecord />;
      case "tests":
        return (
          <div className="p-4 text-[#61615C]">Test Analysis coming soon...</div>
        );
      case "homework":
        return (
          <div className="p-4 text-[#61615C]">
            Homework & Progress Report coming soon...
          </div>
        );
      default:
        return null;
    }
  };

  if (loading || !isLoaded) {
    return (
      <p className="p-6 text-center text-[#61615C]">
        Loading your dashboard...
      </p>
    );
  }

  if (!userInfo) {
    return <p className="p-6 text-center text-red-500">User data not found.</p>;
  }

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`fixed md:relative top-0 left-0 z-50 h-full w-64 bg-[#1D1D1B] text-white p-6 transform transition-transform duration-300 ease-in-out
        ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <div className="flex justify-between items-center mb-6 md:hidden">
          <h2 className="text-xl font-bold">Menu</h2>
          <button onClick={() => setSidebarOpen(false)} className="text-xl">
            ✕
          </button>
        </div>

        <Link href="/" className="flex items-center gap-3 pb-6">
          <Image
            src="/logobg.png"
            alt="SciFun Logo"
            width={40}
            height={40}
            className="rounded"
          />
          <span className="text-xl font-extrabold tracking-tight">
            Sci<span className="text-[#FF7A00]">Fun</span>
          </span>
        </Link>

        <nav className="flex flex-col gap-4 text-sm">
          {[
            {
              key: "profile",
              icon: "fas fa-id-card-alt",
              label: "Complete Profile",
            },
            {
              key: "attendance",
              icon: "fas fa-calendar-check",
              label: "Attendance Record",
            },
            { key: "tests", icon: "fas fa-chart-line", label: "Test Analysis" },
            {
              key: "homework",
              icon: "fas fa-tasks",
              label: "Homework & Reports",
            },
          ].map((item) => (
            <button
              key={item.key}
              onClick={() => {
                setActiveSection(item.key);
                setSidebarOpen(false);
              }}
              className={`flex items-center gap-3 py-2 px-3 rounded ${
                activeSection === item.key
                  ? "bg-white text-[#1D1D1B]"
                  : "hover:bg-[#3A3A37]"
              }`}
            >
              <i className={`${item.icon} text-base`} />
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Mobile Toggle */}
      <div className="md:hidden fixed top-4 left-4 z-40">
        <button
          className="bg-[#1D1D1B] text-white p-2 rounded-lg shadow"
          onClick={() => setSidebarOpen(true)}
        >
          ☰
        </button>
      </div>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-[#FCFCFC] p-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white p-6 shadow-md rounded-xl border border-[#EFEFEF]">
            {renderSection()}
          </div>
        </div>
      </main>
    </div>
  );
}

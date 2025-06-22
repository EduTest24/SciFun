"use client";

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function AttendanceRecord() {
  const { user } = useUser();
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    if (!user?.id) return;

    const fetchAttendance = async () => {
      try {
        const res = await fetch(`/api/attendance?clerkId=${user.id}`);
        const data = await res.json();
        if (res.ok) setRecords(data);
        else console.error(data.error);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAttendance();
  }, [user]);

  const overview = () => {
    const present = records.filter((r) => r.status === "Present").length;
    const absent = records.filter((r) => r.status === "Absent").length;
    const total = records.length;
    return { present, absent, total };
  };

  const calendarData = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    return Array.from({ length: daysInMonth }, (_, i) => {
      const day = i + 1;
      const record = records.find((r) => {
        const d = new Date(r.date);
        return (
          d.getFullYear() === year &&
          d.getMonth() === month &&
          d.getDate() === day
        );
      });

      return {
        day,
        status: record?.status || "N/A",
        fullDate: new Date(year, month, day),
      };
    });
  };

  const weeklyData = () => {
    const weekLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dataMap = Array(7).fill("N/A");

    const today = new Date();
    const startOfLastWeek = new Date(today);
    startOfLastWeek.setDate(today.getDate() - today.getDay() - 7); // Sunday of last week

    const endOfLastWeek = new Date(startOfLastWeek);
    endOfLastWeek.setDate(startOfLastWeek.getDate() + 6); // Saturday of last week

    records.forEach((r) => {
      const date = new Date(r.date);
      if (date >= startOfLastWeek && date <= endOfLastWeek) {
        const dayIndex = date.getDay(); // Sunday=0, ..., Saturday=6
        dataMap[dayIndex] = r.status;
      }
    });

    return {
      labels: weekLabels,
      datasets: [
        {
          label: "Last Week",
          data: dataMap.map((status) => (status === "Present" ? 1 : 0)),
          backgroundColor: dataMap.map((status) =>
            status === "Present"
              ? "#10B981"
              : status === "Absent"
              ? "#F87171"
              : "#D1D5DB"
          ),
        },
      ],
    };
  };

  const { present, absent, total } = overview();
  const today = new Date();

  if (loading) return <p className="p-4 text-center">Loading attendance...</p>;

  return (
    <div className="space-y-10">
      {/* Overview Cards & Weekly Graph */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="flex flex-col sm:flex-col gap-4 text-white">
          <div className="bg-green-500 flex-1 p-4 rounded-lg shadow flex items-center gap-4">
            <i className="fas fa-user-check text-3xl" />
            <div>
              <p className="text-sm">Present</p>
              <p className="text-lg font-bold">{present}</p>
            </div>
          </div>

          <div className="bg-red-500 flex-1 p-4 rounded-lg shadow flex items-center gap-4">
            <i className="fas fa-user-times text-3xl" />
            <div>
              <p className="text-sm">Absent</p>
              <p className="text-lg font-bold">{absent}</p>
            </div>
          </div>

          <div className="bg-blue-500 flex-1 p-4 rounded-lg shadow flex items-center gap-4">
            <i className="fas fa-calendar-alt text-3xl" />
            <div>
              <p className="text-sm">Total Days</p>
              <p className="text-lg font-bold">{total}</p>
            </div>
          </div>
        </div>

        {/* Weekly Bar Chart (Large screens only) */}
        <div className="hidden lg:block bg-white p-6 shadow rounded-xl border">
          <h2 className="text-lg font-semibold mb-4 text-[#1D1D1B]">
            📊 This Week Attendance
          </h2>
          <Bar data={weeklyData()} />
        </div>
      </div>

      {/* Calendar Section */}
      <section className="bg-white p-6 shadow rounded-xl border">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-[#1D1D1B]">
            🗓️ {currentDate.toLocaleString("default", { month: "long" })}{" "}
            {currentDate.getFullYear()}
          </h2>
          <div className="space-x-2">
            <button
              onClick={() =>
                setCurrentDate(
                  new Date(
                    currentDate.getFullYear(),
                    currentDate.getMonth() - 1
                  )
                )
              }
              className="text-sm px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
            >
              ← Prev
            </button>
            <button
              onClick={() =>
                setCurrentDate(
                  new Date(
                    currentDate.getFullYear(),
                    currentDate.getMonth() + 1
                  )
                )
              }
              className="text-sm px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
            >
              Next →
            </button>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-3 text-sm text-center">
          {calendarData().map((day, i) => {
            const isToday =
              day.fullDate.toDateString() === today.toDateString();

            return (
              <div
                key={i}
                title={`${day.fullDate.toDateString()} - ${day.status}`}
                className={`p-2 rounded border text-xs ${
                  day.status === "Present"
                    ? "bg-green-100 text-green-700"
                    : day.status === "Absent"
                    ? "bg-red-100 text-red-700"
                    : "bg-gray-100 text-gray-400"
                } ${isToday ? "ring-2 ring-blue-400" : ""}`}
              >
                <div className="font-bold">{day.day}</div>
                <div>{day.status}</div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

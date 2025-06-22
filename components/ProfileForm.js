"use client";

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import toast from "react-hot-toast";

export default function ProfileSection() {
  const { user, isLoaded } = useUser();

  const [studentInfo, setStudentInfo] = useState(null);
  const [formData, setFormData] = useState({
    schoolName: "",
    className: "",
    mobile: "",
    gender: "Male",
    dob: "",
    address: "",
    className: "",
  });
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);

  // Fetch student info
  useEffect(() => {
    const fetchStudentInfo = async () => {
      if (!user?.id) return;

      try {
        const res = await fetch(`/api/students/get?clerkId=${user.id}`);
        const data = await res.json();

        if (data.exists) {
          setStudentInfo(data.student);
          setFormData({
            ...data.student,
            dob: data.student.dob?.split("T")[0] || "",
          });
        } else {
          setStudentInfo(null);
        }
      } catch (err) {
        toast.error("Error loading student info");
      } finally {
        setLoading(false);
      }
    };

    fetchStudentInfo();
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "mobile" && !/^\d*$/.test(value)) return;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/students/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, clerkId: user.id }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Profile saved successfully!");
        setStudentInfo(data);
        setEditMode(false);
      } else {
        toast.error(data.error || "Failed to save profile");
      }
    } catch (error) {
      toast.error("Network error");
    }
  };

  if (!isLoaded || loading) {
    return (
      <p className="text-center py-6 text-[#61615C]">Loading profile...</p>
    );
  }

  return (
    <>
      <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
        <img
          src={user.imageUrl}
          alt="User Avatar"
          className="w-24 h-24 rounded-full object-cover border-2 border-[#1D1D1B]"
        />
        <div className="text-center sm:text-left">
          <h2 className="text-2xl font-bold text-[#1D1D1B]">
            {user.fullName || user.username}
          </h2>
          <p className="text-[#61615C] text-sm">
            {user.emailAddresses[0]?.emailAddress}
          </p>
        </div>
      </div>

      {/* Student Info or Form */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-[#1D1D1B]">
            Student Profile
          </h3>
          {studentInfo && !editMode && (
            <button
              onClick={() => setEditMode(true)}
              className="bg-[#1D1D1B] text-white px-4 py-1.5 text-sm rounded hover:bg-[#3A3A37]"
            >
              Edit Details
            </button>
          )}
        </div>

        {!studentInfo && !editMode && (
          <p className="text-sm text-red-500 mb-4">
            Profile incomplete. Please complete your student details below.
          </p>
        )}

        {editMode || !studentInfo ? (
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <input
              type="text"
              name="schoolName"
              placeholder="School Name"
              value={formData.schoolName}
              onChange={handleChange}
              required
              className="p-2 border rounded"
            />
            <input
              type="text"
              name="className"
              placeholder="Class"
              value={formData.className}
              onChange={handleChange}
              required
              className="p-2 border rounded"
            />
            <input
              type="text"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              maxLength="10"
              required
              className="p-2 border rounded"
            />
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="p-2 border rounded"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="p-2 border rounded"
            />
            <textarea
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              className="p-2 border rounded sm:col-span-2"
            ></textarea>

            <button
              type="submit"
              className="bg-[#1D1D1B] text-white px-4 py-2 rounded hover:bg-[#3A3A37] sm:col-span-2"
            >
              Save Profile
            </button>
          </form>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-[#1D1D1B]">
            <div className="bg-[#EFEFEF] p-3 rounded">
              <strong>School:</strong> {studentInfo.schoolName}
            </div>
            <div className="bg-[#EFEFEF] p-3 rounded">
              <strong>Class:</strong> {studentInfo.className}
            </div>
            <div className="bg-[#EFEFEF] p-3 rounded">
              <strong>Mobile:</strong> {studentInfo.mobile}
            </div>
            <div className="bg-[#EFEFEF] p-3 rounded">
              <strong>Gender:</strong> {studentInfo.gender}
            </div>
            <div className="bg-[#EFEFEF] p-3 rounded">
              <strong>Date of Birth:</strong> {studentInfo.dob?.split("T")[0]}
            </div>
            <div className="bg-[#EFEFEF] p-3 rounded sm:col-span-2">
              <strong>Address:</strong> {studentInfo.address}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

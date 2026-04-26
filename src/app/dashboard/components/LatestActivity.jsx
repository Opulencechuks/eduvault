"use client";
import Link from "next/link";
import { FaBook, FaDownload, FaStar } from "react-icons/fa";

export default function LatestActivity() {
  const activities = [
    { id: 1, action: "Purchased BICH 324 – Development Economics Notes", time: "3d ago", icon: <FaBook className="text-blue-500" />, type: "purchase" },
    { id: 2, action: "Earned 0.5 XLM from 2 user downloads", time: "3d ago", icon: <FaDownload className="text-green-500" />, type: "earning" },
    { id: 3, action: "Downloaded “MTH 201 Pre Questions 2025–2023”", time: "4d ago", icon: <FaDownload className="text-indigo-500" />, type: "download" },
  ];

  return (
    <div className="p-6 bg-white border border-gray-100 rounded-xl shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-gray-900">Your Latest Activity</h3>
        <button className="text-indigo-600 hover:text-indigo-700 font-medium text-sm">See All</button>
      </div>
      <div className="space-y-5">
        {activities.map((a) => (
          <div key={a.id} className="flex gap-4 items-start group">
            <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-50 transition-colors">
              {a.icon}
            </div>
            <div className="flex-1 pb-4 border-b border-gray-50 group-last:border-0 group-last:pb-0">
              <p className="text-sm text-gray-800 leading-snug mb-1">{a.action}</p>
              <span className="text-xs text-gray-500 font-medium">{a.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


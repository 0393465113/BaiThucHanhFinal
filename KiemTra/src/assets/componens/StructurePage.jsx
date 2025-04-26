import React, { useState } from "react";
import { ChevronDown } from 'lucide-react';

const StructurePage = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const menuItems = [
    {
      title: "Lãnh Đạo",
      submenu: [
        { title: "Đảng Ủy", url: "#" },
        { title: "Ban Giám Hiệu", url: "#" },
      ],
    },
    {
      title: "Các Phòng Ban",
      submenu: [
        { title: "Phòng Tổ Chức - Hành Chính", url: "#" },
        { title: "Phòng Đào Tạo", url: "#" },
      ],
    },
    {
      title: "Các Khoa",
      submenu: [
        { title: "Khoa Công Nghệ Thông Tin", url: "#" },
        { title: "Khoa Điện - Điện Tử", url: "#" },
      ],
    },
    {
      title: "Các Viện",
      submenu: [
        { title: "Viện Nghiên Cứu 1", url: "#" },
        { title: "Viện Nghiên Cứu 2", url: "#" },
      ],
    },
    {
      title: "Các Trung Tâm",
      submenu: [
        { title: "Trung Tâm Đào Tạo", url: "#" },
        { title: "Trung Tâm Tuyển Sinh", url: "#" },
      ],
    },
    {
      title: "Các Phân Hiệu",
      submenu: [
        { title: "Phân Hiệu 1", url: "#" },
        { title: "Phân Hiệu 2", url: "#" },
      ],
    },
    {
      title: "Đoàn Thể",
      submenu: [
        { title: "Đoàn Thanh Niên", url: "#" },
        { title: "Hội Sinh Viên", url: "#" },
      ],
    },
  ];

  const toggleDropdown = (title) => {
    setOpenDropdown(prev => prev === title ? null : title);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg">
        <div className="bg-blue-900 text-white font-bold text-lg p-4">
          CƠ CẤU TỔ CHỨC
        </div>
        <nav className="flex flex-col">
          {menuItems.map((item, index) => (
            <div key={index} className="relative">
              <button
                className={`w-full text-left px-4 py-3 border-b hover:bg-gray-200 flex items-center justify-between
                  ${item.title === "Lãnh Đạo" ? "text-red-600 font-semibold" : ""}`}
                onClick={() => toggleDropdown(item.title)}
                aria-haspopup={!!item.submenu} // Indicate dropdown
                aria-expanded={openDropdown === item.title}
              >
                {item.title}
                {item.submenu && (
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      openDropdown === item.title ? "rotate-180" : "rotate-0"
                    }`}
                    aria-hidden="true"
                  />
                )}
              </button>

              {/* Dropdown menu */}
              {openDropdown === item.title && item.submenu && (
                <div
                  className="absolute left-full top-0 mt-0 w-48 bg-white shadow-md z-10 border"
                  role="menu"
                  aria-orientation="vertical"
                >
                  {item.submenu.map((sub, idx) => (
                    <a
                      key={idx}
                      href={sub.url}
                      className="block px-4 py-2 hover:bg-gray-100 border-b text-sm"
                      role="menuitem"
                    >
                      {sub.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </aside>
    </div>
  );
};

export default StructurePage;

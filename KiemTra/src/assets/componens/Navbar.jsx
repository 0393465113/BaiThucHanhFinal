import { useState } from "react";
import { FaHome, FaSearch } from "react-icons/fa";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);

  const menuItems = [
    { name: "GIỚI THIỆU", subItems: ["Lịch sử", "Sứ mệnh", "Tầm nhìn"] },
    { name: "ĐÀO TẠO", subItems: ["Đại học", "Cao học", "Liên kết quốc tế"] },
    { name: "TUYỂN SINH", subItems: ["Thông báo", "Hướng dẫn", "Chuyên ngành"] },
    { name: "NGHIÊN CỨU" },
    { name: "SINH VIÊN" },
    { name: "GIẢNG VIÊN" },
    { name: "VĂN BẰNG" },
  ];

  return (
    <div className="bg-[#e7e7e7] shadow w-full mx-auto py-2">
      <div className="max-w-7xl mx-auto flex items-center ml-5">
        {/* Home Icon */}
        <button className="p-2 text-blue-900">
          <FaHome size={20} />
        </button>

        {/* Menu Items */}
        <div className="flex items-center space-x-4 flex-1">
          {menuItems.map((item, idx) => (
            <div
              key={idx}
              className="relative group"
              onMouseEnter={() => setOpenMenu(idx)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button className="text-sm font-bold text-blue-900 flex items-center">
                {item.name}
                {item.subItems && (
                  <span className="ml-1">▼</span>
                )}
              </button>
              {/* Dropdown Sub Menu */}
              {item.subItems && openMenu === idx && (
                <div className="absolute top-full left-0 bg-white shadow-md mt-1 rounded text-blue-900">
                  {item.subItems.map((sub, subIdx) => (
                    <div key={subIdx} className="px-4 py-2 hover:bg-blue-100 cursor-pointer">
                      {sub}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Search Box */}
        <div className="flex items-center bg-white rounded p-1">
          <input
            type="text"
            placeholder="Tìm kiếm"
            className="outline-none text-sm px-2"
          />
          <FaSearch className="text-gray-500 mr-2" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;

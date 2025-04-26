import React, { useState } from "react";
import { ChevronRight } from 'lucide-react';

const StructurePage = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const menuItems = [
    { title: "Lãnh Đạo" },
    { title: "Các Phòng Ban" },
    { title: "Các Khoa" },
    { title: "Các Viện" },
    { title: "Các Trung Tâm" },
    { title: "Các Phân Hiệu" },
    { title: "Đoàn Thể" },
  ];

  const toggleDropdown = (title) => {
    setOpenDropdown(prev => prev === title ? null : title);
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <aside className="w-64 bg-[#0C4193] text-white shadow-lg border-r">
        <div className="text-center font-bold text-lg p-4 border-b border-white">
          CƠ̂́ CẤU TỔ CHỨC
        </div>
        <nav className="flex flex-col">
          {menuItems.map((item, index) => (
            <div key={index} className="relative">
              <button
                className="w-full text-left px-6 py-3 flex items-center justify-between border-b border-[#6b94d3] hover:bg-[#0e4cab]"
                onClick={() => toggleDropdown(item.title)}
              >
                {item.title}
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 grid grid-cols-2 gap-6">
        {/* Thông báo */}
        <section>
          <div className="flex justify-between items-center border-b-2 border-red-500 mb-2">
            <h2 className="font-bold text-blue-900">THÔNG BÁO</h2>
            <button className="text-xs text-white bg-gray-500">Xem tất cả</button>
          </div>
          <ul className="text-sm space-y-2">
            <li className="flex items-center text-gray-700">
              <p className="text-red-500 mr-2">&#9656;</p>  <span className="text-gray-400 text-xs ml-1">Thông báo v/v kế hoạch nghỉ lịch tế đối với sinh viên năm 2025 <span></span> <span className="text-red-500 font-bold">new</span></span>
            </li>
            <li className="flex items-center text-gray-700">
              <span className="text-red-500 mr-2">&#9656;</span> Thông báo tuyển chọn nam sinh tốt nghiệp đại học cho các trường quân đội... <span className="text-gray-400 text-xs ml-1">21-04-2025 <span className="text-red-500 font-bold">new</span></span>
            </li>
          </ul>
        </section>

        {/* Tuyển sinh */}
        <section>
          <div className="flex justify-between items-center border-b-2 border-red-500 mb-2">
            <h2 className="font-bold text-blue-900">TUYỂN SINH</h2>
            <button className="text-xs text-gray-500">xem tất cả</button>
          </div>
          <ul className="text-sm space-y-2">
            <li className="flex items-center text-gray-700">
              <span className="text-red-500 mr-2">&#9656;</span> Thông báo tuyển sinh đào tạo liên thông từ trình độ cao đẳng lên trình... <span className="text-gray-400 text-xs ml-1">28-03-2025</span>
            </li>
            <li className="flex items-center text-gray-700">
              <span className="text-red-500 mr-2">&#9656;</span> Thông báo v/v tuyển sinh đại học văn bằng hai, đợt 1 năm 2025 <span className="text-gray-400 text-xs ml-1">20-03-2025</span>
            </li>
          </ul>
        </section>

        {/* Tin tức - Sự kiện */}
        <section className="col-span-1">
          <div className="flex justify-between items-center border-b-2 border-red-500 mb-2">
            <h2 className="font-bold text-blue-900">TIN TỨC - SỰ KIỆN</h2>
            <button className="text-xs text-gray-500">xem tất cả</button>
          </div>
          <img src="/path/to/image1.png" alt="Tin tức" className="w-full h-40 object-cover mb-2" />
          <ul className="text-sm space-y-2">
            <li className="text-gray-700">IUH bế mạc thành công đợt đánh giá chất lượng cấp trường theo tiêu chuẩn... <span className="text-gray-400 text-xs ml-1">26-04-2025 <span className="text-red-500 font-bold">new</span></span></li>
            <li className="text-gray-700">AVEVA tài trợ gói phần mềm trị giá 180.000 đổ Mỹ cho Đại học Công nghiệp... <span className="text-gray-400 text-xs ml-1">25-04-2025 <span className="text-red-500 font-bold">new</span></span></li>
          </ul>
        </section>

        {/* Hợp tác quốc tế */}
        <section className="col-span-1">
          <div className="flex justify-between items-center border-b-2 border-red-500 mb-2">
            <h2 className="font-bold text-blue-900">HỢP TÁC QUỐC TẾ</h2>
            <button className="text-xs text-gray-500">xem tất cả</button>
          </div>
          <img src="/path/to/image2.png" alt="Hợp tác quốc tế" className="w-full h-40 object-cover mb-2" />
          <ul className="text-sm space-y-2">
            <li className="text-gray-700">Sôi nổi loạt hoạt động Tuần lễ giao lưu văn hóa, khoa học sinh viên quốc... <span className="text-gray-400 text-xs ml-1">24-03-2025</span></li>
            <li className="text-gray-700">Đại học Công nghiệp TP. HCM tham gia dự án Green Edu Seeds của quỹ Erasmus <span className="text-gray-400 text-xs ml-1">19-03-2025</span></li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default StructurePage;

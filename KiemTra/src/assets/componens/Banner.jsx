function Banner() {
    return (
      <div className="bg-[#c0d5dd] py-4">
        <div className="max-w-8xl mx-auto flex flex-col items-center">
          {/* Logo và tên trường */}
          <div className="flex items-center space-x-4">
            <img
              src="	https://iuh.edu.vn/templates/2015/image/logo.png"
              alt="IUH Logo"
              className="w-24 h-auto object-contain"
            />
            <div className="text-center">
              <p className="text-sm font-bold text-blue-900">BỘ CÔNG THƯƠNG</p>
              <p className="text-2xl font-extrabold text-blue-900">
                ĐẠI HỌC CÔNG NGHIỆP TP. HỒ CHÍ MINH
              </p>
            </div>
          </div>
  
          {/* Khẩu hiệu */}
          <p className="mt-2 text-red-600 text-sm">
            Đổi mới tư duy, làm giàu thêm tri thức - đời sống
          </p>
        </div>
      </div>
    );
  }
  
  export default Banner;
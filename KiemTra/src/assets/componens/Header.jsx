import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="bg-[#211f5b] text-white text-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2">
        {/* Left Side */}
        <div className="flex space-x-6 items-center">
          <Link to="/e-office" className="flex items-center space-x-1">
            <span>🖥️</span>
            <span>E-OFFICE</span>
          </Link>
          <Link to="/email" className="flex items-center space-x-1">
            <span>📧</span>
            <span>EMAIL</span>
          </Link>
          <Link to="/library" className="flex items-center space-x-1">
            <span>📚</span>
            <span>THƯ VIỆN - THÔNG TIN</span>
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          <Link to="/connect" className="hover:underline">
            KẾt nối
          </Link>
          <span>|</span>
          <Link to="/contact" className="hover:underline">
            Liên hệ
          </Link>
          <div className="flex items-center space-x-2 ml-4">
            <img src="	https://iuh.edu.vn/templates/2015/style/icon/icon-flag-vn.png" alt="VN" className="w-6 h-4 object-cover" />
            <img src="https://iuh.edu.vn/templates/2015/style/icon/icon-flag-en.png" alt="EN" className="w-6 h-4 object-cover" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
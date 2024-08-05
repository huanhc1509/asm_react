import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
  children: React.ReactNode,
}

const Privaterouter = ({ children }: Props) => {
  const user = sessionStorage.getItem('user')
  if (user) {
    return (
      <>{children}</>
    )
  } else {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Bạn không có quyền truy cập</h1>
          <p className="text-gray-600 mb-6">
            Xin lỗi, bạn không có quyền truy cập vào trang này. Vui lòng đăng ký hoặc đăng nhập để tiếp tục.
          </p>
          <div className="flex gap-4">
            <Link
              to="/register"
              className="inline-flex items-center px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Đăng ký
            </Link>
            <Link
              to="/login"
              className="inline-flex items-center px-4 py-2 text-white bg-gray-600 hover:bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Đăng nhập
            </Link>
          </div>
        </div>
      </div>
    )
  }

}

export default Privaterouter
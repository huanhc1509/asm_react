
const Login = () => {
    return (
        <section className="flex items-center justify-center px-6 py-8 h-screen">
            <div className="w-full bg-white">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="flex items-center justify-center text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-4xl">
                        Đăng Nhập
                    </h1>
                    <form className="max-w-sm mx-auto">
                        <div className="mb-4">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                            <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@flowbite.com" required name="email" />
                            <div className="text-danger">
                                Error
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Your password</label>
                            <input type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Password" required name="password" />
                            <div className="text-danger">
                                Error
                            </div>
                        </div>
                        <div className="flex items-start mb-4">
                            <div className="flex items-center h-5">
                                <input id="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" required />
                            </div>
                            <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900">I agree with the
                                <a href="#" className="text-blue-600 hover:underline">terms and conditions</a></label>
                        </div>
                        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                            Đăng nhập
                        </button>
                        <div className="text-danger my-2">
                            Error
                        </div>
                    </form>
                </div>
            </div>
        </section>


    )
}

export default Login
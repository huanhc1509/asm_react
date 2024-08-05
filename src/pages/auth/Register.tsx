import { useForm } from "react-hook-form"
import { IUser } from "../../interfaces/User"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<IUser>()
    const navigate = useNavigate()
    const onSubmit = async (registerData: IUser) => {
        try {
            await axios.post("http://localhost:3000/register", registerData)
            alert("Đăng ký thành công")
            navigate("/login")
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <section className="flex items-center justify-center min-h-screen bg-gray-100 px-6 py-8">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold leading-tight text-gray-900 mb-6 text-center md:text-3xl">
                    Đăng Ký
                </h1>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-lg font-medium text-gray-900 mb-2">Nhập email</label>
                        <input
                            type="email"
                            id="email"
                            {...register("email", {
                                required: "Email là bắt buộc",
                                pattern: {
                                    value: /^\S+@(\S+\.)+\S{2,6}$/,
                                    message: "Email không đúng định dạng"
                                }
                            })}
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="name@flowbite.com"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-lg font-medium text-gray-900 mb-2">Nhập mật khẩu</label>
                        <input
                            type="password"
                            id="password"
                            {...register("password", {
                                required: "Mật khẩu là bắt buộc",
                                minLength: {
                                    value: 6,
                                    message: "Mật khẩu phải có ít nhất 6 ký tự"
                                }
                            })}
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="********"
                        />
                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                    </div>
                    <div className="flex items-center mb-4">
                        <input
                            id="terms"
                            type="checkbox"
                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                        />
                        <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900">
                            Tôi đồng ý với
                            <a href="#" className="text-blue-600 hover:underline"> điều khoản và điều kiện</a>
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-700 text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                        Đăng Ký
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Register
import { useForm } from 'react-hook-form'
import { categoryCT } from '../../../context/CategoryContext'
import { ICategory } from '../../../interfaces/Category'
import { useNavigate, useParams } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { getCategoryById } from '../../../services/category'

const CategoryEdit = () => {
    const { onEdit } = useContext(categoryCT)
    const { register, handleSubmit, reset, formState: { errors } } = useForm<ICategory>()
    const navigate = useNavigate()
    const param = useParams()
    useEffect(() => {
        (async () => {
            const category = await getCategoryById(param.id as string | number)
            reset({
                name: category.name,
                description: category.description
            })
        })()
    }, [param.id, reset])
    const onSubmit = async (category: ICategory) => {
        await onEdit(category, param.id as string | number)
        navigate('/category')
    }
    return (
        <>
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-bold">Thêm danh mục</h1>
                <a className="btn btn-primary bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Quản lý danh mục</a>
            </div>
            <form className="mt-4" onSubmit={handleSubmit(onSubmit)} >
                <div className="sm:col-span-3 mb-4">
                    <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">Tên danh mục</label>
                    <div className="mt-2">
                        <input {...register("name", { required: true, minLength: 6 })}
                            className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="text" id="title" placeholder="Tên danh mục" />
                        {(errors.name) &&
                            <div className="text-danger">
                                Không được để trống và nhỏ hơn 6 ký tự
                            </div>
                        }
                    </div>
                </div>
                <div className="sm:col-span-3 mb-4">
                    <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">Ảnh danh mục</label>
                    <div className="mt-2">
                        <input {...register("images", { required: true })}
                            className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="text" id="title" placeholder="Tên danh mục" />
                        {(errors.images) &&
                            <div className="text-danger">
                                Không được để trống
                            </div>
                        }
                    </div>
                </div>
                <div className="sm:col-span-4 mb-4">
                    <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">Mô tả</label>
                    <div className="mt-2">
                        <input {...register("description")}
                            className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="text" id="description" placeholder="Mô tả danh mục" />

                    </div>
                </div>
                <div className="mt-6 flex w-full">
                    <button type="submit" className="w-full rounded-md bg-indigo-600 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Thêm mới
                    </button>
                </div>
            </form>
        </>


    )
}

export default CategoryEdit
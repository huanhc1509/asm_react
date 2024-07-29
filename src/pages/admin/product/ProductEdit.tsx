import { useForm } from 'react-hook-form'
import { productCT } from '../../../context/ProductContext'
import { IProduct } from '../../../interfaces/Product'
import { useNavigate, useParams } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { getProductById } from '../../../services/product'
import { categoryCT } from '../../../context/CategoryContext'
import { ICategory } from '../../../interfaces/Category'

const ProductEdit = () => {
    const { onEdit } = useContext(productCT)
    const { categorys } = useContext(categoryCT)
    const { register, handleSubmit, reset, formState: { errors } } = useForm<IProduct>()
    const navigate = useNavigate()
    const param = useParams()
    useEffect(() => {
        (async () => {
            const product = await getProductById(param.id as string | number)
            reset({
                name: product.name,
                images: product.images,
                price: product.price,
                description: product.description,
                categoryId: product.categoryId
            })
        })()
    }, [])
    const onSubmit = async (product: IProduct) => {
        await onEdit(product, param.id as string | number)
        navigate('/admin')
    }
    return (
        <>
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-bold">Thêm sản phẩm</h1>
                <a className="btn btn-primary bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Quản lý sản phẩm</a>
            </div>
            <form className="mt-4" onSubmit={handleSubmit(onSubmit)} >
                <div className="sm:col-span-3 mb-4">
                    <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">Tên sản phẩm</label>
                    <div className="mt-2">
                        <input {...register("name", { required: true, minLength: 6 })}
                            className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="text" id="title" placeholder="Tên sản phẩm" />
                        {(errors.name) &&
                            <div className="text-red-500 text-sm m-2">
                                Không được để trống và nhỏ hơn 6 ký tự
                            </div>
                        }
                    </div>
                </div>
                <div className="sm:col-span-3 mb-4">
                    <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">Giá sản phẩm</label>
                    <div className="mt-2">
                        <input {...register("price", { required: true, pattern: /^\d*$/ })}
                            className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="text" id="price" placeholder="Giá sản phẩm" />
                        {(errors.name) &&
                            <div className="text-red-500 text-sm m-2">
                                Giá phải là số và không âm
                            </div>
                        }
                    </div>
                </div>
                <div className="sm:col-span-4 mb-4">
                    <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">Ảnh sản phẩm</label>
                    <div className="mt-2">
                        <input {...register("images")}
                            className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="text" id="images" placeholder="Ảnh sản phẩm" />

                    </div>
                </div>
                <div className="sm:col-span-4 mb-4">
                    <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">Mô tả</label>
                    <div className="mt-2">
                        <input {...register("description")}
                            className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="text" id="description" placeholder="Mô tả sản phẩm" />

                    </div>
                </div>
                <div className="sm:col-span-4 mb-4">
                    <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">Danh mục</label>
                    <div className="mt-2">
                        <select {...register("categoryId", {
                            required: true,
                            setValueAs: (value) => Number(value)
                        })}
                            className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                            {categorys.map((category: ICategory) => (
                                <option key={category.id} value={category.id}>{category.name}</option>
                            ))}
                        </select>
                        {(errors.categoryId) &&
                            <div className="text-danger">
                                Vui lòng chọn danh mục
                            </div>
                        }
                    </div>
                </div>
                <div className="mt-6 flex w-full">
                    <button type="submit" className="w-full rounded-md bg-indigo-600 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Cập nhập
                    </button>
                </div>
            </form>
        </>


    )
}

export default ProductEdit
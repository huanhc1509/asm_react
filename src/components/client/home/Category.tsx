import { useContext } from "react";
import { categoryCT } from "../../../context/CategoryContext";
import { ICategory } from "../../../interfaces/Category";
import { Link } from "react-router-dom";
import { productCT } from "../../../context/ProductContext";
import { IProduct } from "../../../interfaces/Product";

const Category = () => {
    const { categorys } = useContext(categoryCT);

    const { products } = useContext(productCT);

    const countProductsByCategory = (categoryId: number | string) => {
        return products.filter((product: IProduct) => product.categoryId === categoryId).length;
    };

    return (
        <div className="my-8 mx-auto w-[1300px]">
            <h2 className="text-2xl font-bold mb-4 px-20">Kategorien</h2>
            <hr />
            <div className="grid grid-cols-4 my-4 gap-4">
                {categorys.map((category: ICategory) => (
                    <Link to={`category/${category.id}`}
                        key={category.id}
                        className="relative product-item flex flex-col border border-solid border-[#eee] mx-auto"
                    >
                        <div className="overflow-hidden">
                            <img
                                className="mx-auto object-cover hover:scale-110 duration-500"
                                src={category.images}
                                alt={category.name}
                            />
                        </div>
                        <div

                            className="absolute top-0 right-0 py-2 px-4 my-4 text-white"
                        >
                            <h2 className="font-semibold text-2xl">{category.name}</h2>
                            <h3>{countProductsByCategory(category.id)} items</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Category;

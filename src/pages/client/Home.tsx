import Category from '../../components/client/home/Category'
import Contact from '../../components/client/Contact'
import Items from '../../components/client/home/Items'
import Card from '../../components/client/Card'
import Banner from '../../components/client/home/Banner'
import { useContext } from 'react'
import { productCT } from '../../context/ProductContext'
import { IProduct } from '../../interfaces/Product'


const Home = () => {
    const { products } = useContext(productCT)
    const firstFourProducts = products.slice(0, 4)
    return (
        <div className="bg-[#F9F3EE]">
            {/* Banner */}
            <Banner />
            {/* Card */}
            <div className="my-8 mx-auto">
                <h2 className="text-2xl font-bold mb-4 px-20">Featured Products</h2>
                <div className="bg-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-4 px-20">
                    {firstFourProducts.map((product: IProduct) => (
                        <Card key={product.id} product={product} />
                    ))}
                </div>
            </div>
            {/* Items */}
            <Items />
            {/* Category */}
            <Category />
            {/* Contact */}
            <Contact />
        </div>

    )
}

export default Home
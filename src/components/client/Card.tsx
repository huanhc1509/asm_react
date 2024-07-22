
const Card = () => {
    return (
        <div className="my-8 mx-auto">
            <h2 className="text-2xl font-bold mb-4 px-20">Featured Products</h2>
            <div className="bg-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-4 px-20">
                <div>
                    <div className="h-[350px] overflow-hidden">
                        <img className="h-full mx-auto p-4 hover:scale-110 duration-500" src="src/assets/img/card-1.png" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Product Name</h3>
                    <div className="flex justify-between">
                        <p className="text-gray-700 mb-2">Dress</p>
                        <p className="text-gray-700 mb-2">$20.00</p>
                    </div>
                </div>
                <div>
                    <div className="h-[350px] overflow-hidden">
                        <img className="h-full mx-auto p-4 hover:scale-110 duration-500" src="src/assets/img/card-2.png" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Product Name</h3>
                    <div className="flex justify-between">
                        <p className="text-gray-700 mb-2">Dress</p>
                        <p className="text-gray-700 mb-2">$20.00</p>
                    </div>
                </div>
                <div>
                    <div className="h-[350px] overflow-hidden">
                        <img className="h-full mx-auto p-4 hover:scale-110 duration-500" src="src/assets/img/card-3.png" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Product Name</h3>
                    <div className="flex justify-between">
                        <p className="text-gray-700 mb-2">Dress</p>
                        <p className="text-gray-700 mb-2">$20.00</p>
                    </div>
                </div>
                <div>
                    <div className="h-[350px] overflow-hidden">
                        <img className="h-full mx-auto p-4 hover:scale-110 duration-500" src="src/assets/img/card-4.png" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Product Name</h3>
                    <div className="flex justify-between">
                        <p className="text-gray-700 mb-2">Dress</p>
                        <p className="text-gray-700 mb-2">$20.00</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Card
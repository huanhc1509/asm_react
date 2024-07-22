
const Details = () => {
    return (
        <div className="my-16 grid grid-cols-2 gap-36">
            <div>
                <img src="src/assets/img/detail-1.png" alt="" className="w-full" />
                <div className="grid grid-cols-3 gap-8">
                    <img src="src/assets/img/detail-1.png" alt="" className="h-full hover:border-2 hover:border-black border-2 border-white rounded-lg" />
                    <img src="src/assets/img/detail-2.png" alt="" className="h-full hover:border-2 hover:border-black border-2 border-white rounded-lg" />
                    <img src="src/assets/img/detail-3.png" alt="" className="h-full hover:border-2 hover:border-black border-2 border-white rounded-lg" />
                </div>
            </div>
            <div >
                <h3 className="text-lg text-[#4E7C32] font-medium py-2">Plant</h3>
                <h1 className="text-4xl font-bold py-2">Square cultivation pots
                    0.27 to 2 litres</h1>
                <p className="text-sm text-[#68707D] py-2">Lorem Ipsum is simply dummy text of the printing and
                    typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy
                    text ever since the</p>
                <div className="flex items-center py-2">
                    <h1 className="text-4xl font-bold pr-2">$125.00</h1>
                    <span className="bg-[#FFEDE0] font-bold text-[#4E7C32] rounded my-auto px-2 py-1">50%</span>
                </div>
                <h1 className="text-xl font-medium pr-2 line-through">$250.00</h1>
                <form className="py-4">
                    <div className="relative flex">
                        <button type="button" id="decrement-button" data-input-counter-decrement="quantity-input" className="bg-gray-100 hover:bg-gray-200 rounded-s-lg p-3 h-11 focus:ring-gray-100">
                            <svg className="w-3 h-3 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
                            </svg>
                        </button>
                        <input type="text" id="quantity-input" data-input-counter aria-describedby="helper-text-explanation" className="bg-gray-100 border-x-0 border-gray-300 h-11 text-center text-black text-sm block py-2.5" required />
                        <button type="button" id="increment-button" data-input-counter-increment="quantity-input" className="bg-gray-100 hover:bg-gray-200 rounded-e-lg p-3 h-11 focus:ring-gray-100">
                            <svg className="w-3 h-3 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
                            </svg>
                        </button>
                        <button className="w-full bg-[#4E7C32] text-white rounded-lg ml-4 h-11">
                            <i className="fa-solid fa-card-shopping mr-2" />Add
                            to card</button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Details
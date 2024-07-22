
const Items = () => {
    return (
        <div className="my-8 mx-auto grid grid-cols-4 grid-rows-2 gap-4 w-[1200px] h-[570px]">
            <div className="relative product-item flex flex-col border border-solid border-[#eee] col-span-2 row-span-2">
                <div className="overflow-hidden">
                    <img className="w-full mx-auto object-cover hover:scale-110 duration-500" src="src/assets/img/item-1.png" />
                </div>
                <h3 className="absolute top-[20px] left-0 w-full py-2 bg-gradient-to-r from-[rgba(255,255,255,0.8)] to-[rgba(255,255,255,0.1)] text-[#665345] font-semibold text-[14px] px-4 my-4">
                    Garten Spaten
                </h3>
            </div>
            <div className="relative product-item flex flex-col border border-solid border-[#eee] mx-auto">
                <div className="overflow-hidden">
                    <img className="mx-auto object-cover hover:scale-110 duration-500" src="src/assets/img/item-2.png" />
                </div>
                <h3 className="absolute top-[20px] left-0 w-full py-2 bg-gradient-to-r from-[rgba(255,255,255,0.8)] to-[rgba(255,255,255,0.1)] text-[#665345] font-semibold text-[14px] px-4 my-4">
                    Sand
                </h3>
            </div>
            <div className="relative product-item flex flex-col border border-solid border-[#eee] mx-auto">
                <div className="overflow-hidden">
                    <img className="mx-auto object-cover hover:scale-110 duration-500" src="src/assets/img/item-3.png" />
                </div>
                <h3 className="absolute top-[20px] left-0 w-full py-2 bg-gradient-to-r from-[rgba(255,255,255,0.8)] to-[rgba(255,255,255,0.1)] text-[#665345] font-semibold text-[14px] px-4 my-4">
                    Pflanzer
                </h3>
            </div>
            <div className=" relative product-item flex flex-col border border-solid border-[#eee] mx-auto">
                <div className="overflow-hidden">
                    <img className="mx-auto object-cover hover:scale-110 duration-500" src="src/assets/img/item-4.png" />
                </div>
                <h3 className="absolute top-[20px] left-0 w-full py-2 bg-gradient-to-r from-[rgba(255,255,255,0.8)] to-[rgba(255,255,255,0.1)] text-[#665345] font-semibold text-[14px] px-4 my-4">
                    Schlammkuchen
                </h3>
            </div>
            <div className="relative product-item flex flex-col border border-solid border-[#eee] mx-auto">
                <div className="overflow-hidden">
                    <img className="mx-auto object-cover hover:scale-110 duration-500" src="src/assets/img/item-5.png" />
                </div>
                <h3 className="absolute top-[20px] left-0 w-full py-2 bg-gradient-to-r from-[rgba(255,255,255,0.8)] to-[rgba(255,255,255,0.1)] text-[#665345] font-semibold text-[14px] px-4 my-4">
                    Klemmen
                </h3>
            </div>
        </div>

    )
}

export default Items
import { useState } from 'react';

const Banner = () => {
    const images = [
        'src/assets/img/banner.png',
        'https://sohanews.sohacdn.com/160588918557773824/2022/8/3/photo-1-1659509584546766342306.png',
        'https://aphoto.vn/wp-content/uploads/2018/02/anh-dep-chup-va-blend-bang-dien-thoai-8.jpg',
        'https://aphoto.vn/wp-content/uploads/2018/02/anh-dep-chup-va-blend-bang-dien-thoai-7.jpg',
    ];
    const [activeIndex, setActiveIndex] = useState(0);

    const prevSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className='w-full'>
            <div className="relative bg-gradient-to-r from-[#B5DCB0] to-white w-full flex items-center justify-center h-[700px]">
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 p-4 text-white bg-gray-500 rounded-full focus:outline-none z-20"
                    aria-label="Previous Slide"
                >
                    <i className="fa-solid fa-angle-left fa-2xl" />
                </button>

                <div className="relative w-full h-full overflow-hidden">
                    <div className="absolute top-1/2 left-40 transform -translate-y-1/2 w-2/5 p-4 z-10">
                        <h1 className="text-5xl leading-tight font-bold text-[#505F4E]">
                            Chúng tôi là một trong những người làm vườn và nhà đẹp nhất của bạn
                        </h1>
                        <p className="mt-4 text-[#665345] w-8/12">
                            Lorem Ipsum chỉ đơn giản là văn bản giả của ngành in ấn và sắp chữ. Lorem Ipsum đã là văn bản giả chuẩn của ngành kể từ những năm 1500,
                        </p>
                        <button className="text-xl font-semibold text-[#505F4E] py-4 px-12 border-4 border-[#505F4E] mt-4 hover:bg-green-600">
                            XEM THÊM
                        </button>
                    </div>
                    {images.map((image, i) => (
                        <div
                            key={i}
                            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${i === activeIndex ? 'opacity-100' : 'opacity-0'
                                }`}
                        >
                            <img
                                src={image}
                                alt={`Slide ${i}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>

                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 p-4 text-white bg-gray-500 rounded-full focus:outline-none z-20"
                    aria-label="Next Slide"
                >
                    <i className="fa-solid fa-angle-right fa-2xl" />
                </button>
            </div>
        </div>
    );
};

export default Banner;

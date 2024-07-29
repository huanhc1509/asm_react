
const Contact = () => {
    return (
        <div className="flex items-center justify-center pb-10 relative">
            <img src="/src/assets/img/background.png" alt="#" className="absolute right-0 top-0 h-full" />
            <div className="text-left p-8 max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-green-800">
                    Etwas abonnieren<span className="text-green-600">*</span>
                </h1>
                <h2 className="text-xl font-semibold text-green-800 mb-4">
                    Unser Newsletter
                </h2>
                <hr className="border-2 border-gray-300 w-16 my-4" />
                <div className="flex">
                    <p className="text-gray-600 mb-6 w-1/3">
                        Get weekly update about our product on your email, no spam
                        guaranteed we promise <span className="text-yellow-500">✌</span>
                    </p>
                    <form className="relative w-2/3 mx-5">
                        <i className="fa-solid fa-envelope absolute pl-3 top-4" />
                        <input type="email" placeholder="youremail123@gmail.com" className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-green-500" required />
                        <button type="submit" className="absolute right-0 top-3 mt-2 mr-2 px-4 py-2 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
                            Abonnieren
                        </button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Contact
import React from 'react'
import BannerCategory from '../../components/client/category/BannerCategory'
import CardCategory from '../../components/client/category/CardCategory'
import Filter from '../../components/client/category/Filter'
import Sidebar from '../../components/client/category/Sidebar'
import Contact from '../../components/client/Contact'

const Search = () => {
    return (
        <>
            <BannerCategory />
            <div className="bg-white max-w-screen-lg mx-auto">
                <Filter />
                <div className="grid grid-cols-4 gap-4">
                    <CardCategory />
                    <Sidebar />
                </div>
            </div>
            <Contact />
        </>
    )
}

export default Search
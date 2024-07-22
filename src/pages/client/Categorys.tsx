import Contact from '../../components/client/Contact'
import BannerCategory from '../../components/client/category/BannerCategory'
import Menu from '../../components/client/category/Menu'
import Filter from '../../components/client/category/Filter'
import CardCategory from '../../components/client/category/CardCategory'
import Sidebar from '../../components/client/category/Sidebar'

const Categorys = () => {
    return (
        <>
            <BannerCategory />
            <div className="bg-white max-w-screen-lg mx-auto">
                <Menu />
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

export default Categorys
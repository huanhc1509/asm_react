import Category from '../../components/client/home/Category'
import Contact from '../../components/client/Contact'
import Items from '../../components/client/home/Items'
import Card from '../../components/client/Card'
import Banner from '../../components/client/home/Banner'


const Home = () => {

    return (
        <div className="bg-[#F9F3EE]">
            <Banner />
            <Card />
            <Items />
            <Category />
            <Contact />
        </div>

    )
}

export default Home
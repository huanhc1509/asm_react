import Decription from '../../components/client/detail/Decription'
import Details from '../../components/client/detail/Details'
import Evaluate from '../../components/client/detail/Evaluate'
import Comment from '../../components/client/detail/Comment'
import Contact from '../../components/client/Contact'

const Detail = () => {
    return (
        <>
            <div className="bg-white max-w-screen-lg mx-auto">
                {/* Detail */}
                <Details />
                {/* Decription */}
                <Decription />
                <Evaluate />

                <Comment />
            </div>
            <Contact />
        </>

    )
}

export default Detail
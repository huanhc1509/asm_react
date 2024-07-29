import Details from '../../components/client/detail/Details'
import Comment from '../../components/client/detail/Comment'
import Contact from '../../components/client/Contact'

const Detail = () => {
    return (
        <>
            <div className="bg-white max-w-screen-lg mx-auto">
                <Details />
                <Comment />
            </div>
            <Contact />
        </>

    )
}

export default Detail
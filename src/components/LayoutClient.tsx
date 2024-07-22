import { Outlet } from "react-router-dom"
import Header from "./client/Header"
import Footer from "./client/Footer"

const LayoutClient = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet></Outlet>
            </main>
            <Footer />
        </>
    )
}

export default LayoutClient
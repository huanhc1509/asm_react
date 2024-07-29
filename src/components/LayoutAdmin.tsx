import { Outlet } from 'react-router-dom'
import SideBar from './admin/SideBar';

const LayoutAdmin = () => {
    return (
        <>
            <SideBar />
            <div className="p-4 sm:ml-64">
                {/* <Header /> */}
                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                    <Outlet></Outlet>
                </div>
            </div>
        </ >


    )
}

export default LayoutAdmin
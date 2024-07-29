import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderChart from '../HeaderChart'
import Footer from '../Footer'

const Chart = () => {
    return (
        <div>
            <HeaderChart />
            <div className='max-w-screen-lg mx-auto grid grid-cols-3'>
                <Outlet></Outlet>
            </div>
            <Footer />
        </div>
    )
}

export default Chart
import React from 'react'
import Sidebar from './SideBar'
import  SalesFigures  from './SalesFigures'
import WorldMap from './WorldMap';

const Home = () => {
  return (
    <>
    <div className=''>
    <div>
    <Sidebar />
    </div>
    <div className='worldmap w-76 h-100'>
      <WorldMap />
      </div>
      </div>
      <div>
      <SalesFigures />
      </div>
    </>
  );
}

export default Home
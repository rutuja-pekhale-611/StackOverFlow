import React from 'react'
import './css/Header.css'
import InboxIcon from '@mui/icons-material/Inbox';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';

function Header() {
  return (
     <header>
      <div className='header-container'>
        <div className='header-left'>
          <img src= 'https://tse1.explicit.bing.net/th?id=OIP.TBwy--olDqrzRPAvCxgB7QHaDt&pid=Api&P=0&h=180' alt='logo'/>
          <h3>Products</h3>
        </div>
        <div className='header-middle'>
          <div className='header-search-container'>
            <SearchIcon />
            <input type='text' placeholder='Search...'/>
          </div>
        </div>
        <div className='header-right'>
          <div className='header-right-container'>
            <Avatar />
            <InboxIcon />
            <svg xmlns="http://www.w3.org/2000/svg" 
            /*x="0px" 
            y="0px"*/
             width="50" height="50" viewBox="0,0,256,256">
            <g fill="#75767e" 
            fill-rule="nonzero"
            stroke="none" 
            stroke-width="1" stroke-linecap="butt"
             stroke-linejoin="miter" stroke-miterlimit="10"
              stroke-dasharray="" stroke-dashoffset="0" font-family="none"
               font-weight="none" font-size="none" text-anchor="none" 
               
               style={{
                cursor: "pointer",
               }}
               >
                <g transform="scale(4,4)">
                <path d="M14,41h36v1c0,2.137 -0.832,4.146 -2.344,5.657c-1.489,1.489 -3.463,2.319 -5.564,2.342l-6.605,7.338c-0.387,0.43 -1.336,0.773 -2.203,0.529c-0.797,-0.223 -1.284,-1.038 -1.284,-1.866v-6h-10c-2.137,0 -4.146,-0.832 -5.656,-2.343c-1.512,-1.511 -2.344,-3.52 -2.344,-5.657zM50,32v5h-36v-5zM14,28v-5h36v5zM50,19h-36v-1c0,-2.137 0.832,-4.146 2.344,-5.657c1.51,-1.511 3.519,-2.343 5.656,-2.343h20c2.137,0 4.146,0.832 5.656,2.343c1.512,1.511 2.344,3.52 2.344,5.657z"></path></g></g>
           </svg>
          </div>
        </div>
      </div>
     </header>
  )
}

export default Header

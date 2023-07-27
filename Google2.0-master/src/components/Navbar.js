import React from 'react';
import {Link} from'react-router-dom';
import {Search} from './Search';

export default function Navbar(props) {
    return (
        <div className="p-5 pb-0 flex flex-wrap items-center border-b dark:border-gray-700 border-gray-400">
            <div className="flex justify-between items-center space-x-5 w-screen">
            <Link to="/">
            <p className="text-2xl font-bold text-blue-700 px-2 py-1 rounded dark:text-white">
            Google <i class="fas fa-search"></i></p>
            </Link>
            <button type='button' onClick={()=>props.setDarkTheme(!props.darkTheme)} className='text-xl dark:bg-gray-60 dark:text-gray-900 bg-white rounded-full px-2 py-1 hover:shadow-lg'>
                {props.darkTheme?'Light':'Dark'}
            </button>
            </div>
            <Search/>
        </div>
    )
}

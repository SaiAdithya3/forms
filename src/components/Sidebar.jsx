import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <>
            <div className="w-[20%] p-16 bg-slate-100 border-r-2 border-zinc-800 h-screen text-white">
                <h1 className="text-2xl text-black font-bold">Sidebar</h1>
                <div className="mt-4 flex flex-col items-start gap-5">
                    <Link to="/level1" className='bg-zinc-500 px-3 py-1 rounded-lg shadow hover:scale-105 transition-all w-full font-semibold'> Level 1 </Link>
                    <Link to="/level2" className='bg-zinc-500 px-3 py-1 rounded-lg shadow hover:scale-105 transition-all w-full font-semibold'> Level 2 </Link>
                    <Link to="/level3" className='bg-zinc-500 px-3 py-1 rounded-lg shadow hover:scale-105 transition-all font-semibold w-full'> Level 3 </Link>
                </div>
            </div>
        </>
    )
}

export default Sidebar
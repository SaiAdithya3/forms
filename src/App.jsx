import React from 'react';
import { Link } from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import Level1 from './pages/Level1';
import Level2 from './pages/Level2';
import Level3 from './pages/Level3';
import { Toaster } from 'sonner';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <>
      <div className="w-full max-w-[1800px] justify-around flex items-center">
        <Sidebar />
        <div className="w-full">
          <Routes>
            <Route path="/level1" element={<Level1 />} />
            <Route path="/level2" element={<Level2 />} />
            <Route path="/level3" element={<Level3/>} />
            <Route path="*" element={<Level1/>} />
          </Routes>
        </div>
        <Toaster position='top-right' richColors/>
      </div>
    </>
  )
}

export default App
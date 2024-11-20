import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import Footer from '../Footer';

export default function MainLayout() {
    return (
        <div className='flex h-screen overflow-hidden'>
            <Sidebar />
            <div className="flex-1 flex flex-col overflow-x-hidden overflow-y-auto bg-[#101523]">
                <Navbar />
                <main className='flex-1'>
                    <Outlet />
                </main>
                {/* <Footer /> */}
            </div>
        </div>
    );
}
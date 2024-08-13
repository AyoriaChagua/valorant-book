import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import Footer from '../Footer';

export default function MainLayout() {
    return (
        <div>
            <Navbar />
            <div className="flex flex-row">
                <Sidebar />
                <div className='flex flex-col'>
                    <main className='mt-16'><Outlet /></main>
                    <Footer />
                </div>
            </div>
        </div>
    );
}
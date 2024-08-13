import { Route, Routes } from 'react-router-dom';
import { MainLayout } from '@/components';
import { About, Home, Saved } from '@/pages';

export default function AppRoutes() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path='/valorant-book' element={<Home />} />
                <Route path='/valorant-book/saved' element={<Saved />} />
                <Route path='/valorant-book/about' element={<About />} />
            </Route>
        </Routes>
    );
}
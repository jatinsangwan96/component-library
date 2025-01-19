import {FC} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Buttons from '@/pages/Buttons';

const Router: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/components/buttons" element={<Buttons />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;

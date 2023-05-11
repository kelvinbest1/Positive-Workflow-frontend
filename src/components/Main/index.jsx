import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from '../../pages/Auth';
import Home from "../../pages/Home";

export default function Main(props) {
    return (
        <main>
            <BrowserRouter>
                <Routes>



                    <Route path="/" element={<Home />} />
                    <Route path="/auth" element={<Auth />} />

                </Routes>
            </BrowserRouter>
        </main>
    )
}
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from '../../pages/Auth'

export default function Main(props){
    return (
    <main>
    <BrowserRouter>
        <Routes>                
            
            <Route path="/auth" element={<Auth/>} />
            
        </Routes>
        </BrowserRouter>
    </main>
    )
}
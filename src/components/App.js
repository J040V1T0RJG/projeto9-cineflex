import Navbar from "./Navbar"
import RequiredOrStatus from "./RequiredOrStatus"
import Movies from "./Movies"
import SelectTime from "./SelectTime"
import { BrowserRouter, Routes, Route} from "react-router-dom"

export default function App () {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <RequiredOrStatus />
                <Routes>
                    <Route path="/" element={<Movies />}/>
                    <Route path="/sessoes/:idFilme" element={<SelectTime />}/>
                </Routes>  
            </BrowserRouter>
                
                
                <div></div>
        </>
    )
}
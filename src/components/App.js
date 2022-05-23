import Navbar from "./Navbar"
import RequiredOrStatus from "./RequiredOrStatus"
import Movies from "./Movies"
import SelectTime from "./SelectTime"
import SelectSeats from "./SelectSeats"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import React from "react"
import Success from "./Success"


export default function App () {
    const [requiredOrStatusP, setRequiredOrStatusP] = React.useState("Selecione o filme")
    const [requiredOrStatusClass, setRequiredOrStatusClass] = React.useState("normal")
    const [requestData, setRequestData] = React.useState([])


    return (
        <>
            <BrowserRouter>
                <Navbar />
                <RequiredOrStatus requiredOrStatusP={requiredOrStatusP} requiredOrStatusClass={requiredOrStatusClass}/>
                <Routes>
                    <Route path="/" element={<Movies />}/>
                    <Route path="/sessoes/:idFilme" element={<SelectTime setRequiredOrStatusP={setRequiredOrStatusP} requestData={requestData} setRequestData={setRequestData}/>}/>
                    <Route path="/assentos/:idSessao" element={<SelectSeats setRequiredOrStatusP={setRequiredOrStatusP} requestData={requestData} setRequestData={setRequestData}/>}/>
                    <Route path="/sucesso" element={<Success setRequiredOrStatusP={setRequiredOrStatusP} setRequiredOrStatusClass={setRequiredOrStatusClass}/>}/>
                </Routes>  
            </BrowserRouter>
                
                
                <div></div>
        </>
    )
}
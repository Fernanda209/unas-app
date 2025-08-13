import { Route, Routes } from "react-router-dom"
import App from "../App"
import Products from '../pages/Products.jsx'
import Citas from '../pages/Citas.jsx'

function Rutas() {
    return(
        <Routes>
            <Route path="/" element={<App></App>}></Route>
            <Route path="/products" element={<Products></Products>}></Route>
            <Route path="/citas" element={<Citas></Citas>}></Route>
        </Routes>
    )
}

export default Rutas
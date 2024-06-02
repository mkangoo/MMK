import './scss/app.scss'
import Home from './pages/Home'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import RecommendedSoftware from './pages/RecommendedSoftware'
import Products from './pages/Products'
import PasswordCheck from './pages/PasswordCheck'
import Company from './pages/HistroyCompany'
import CheckPartner from './pages/CheckPartner'

function App() {
    return (
        <div className="wrapper">
            <div className="content">
                <Header />
                <Routes>
                    <Route path="/MMK" element={<Home />}></Route>
                    <Route path="/recommendedSoftware" element={<RecommendedSoftware />}></Route>
                    <Route path="/products" element={<Products />}></Route>
                    <Route path="/passwordCheck" element={<PasswordCheck />}></Route>
                    <Route path="/company" element={<Company />}></Route>
                    <Route path="/checkPartner" element={<CheckPartner />}></Route>
                </Routes>
            </div>
        </div>
    )
}

export default App

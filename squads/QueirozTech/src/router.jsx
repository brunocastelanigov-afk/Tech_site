import { Routes, Route } from 'react-router-dom'
import HomePage from './components/pages/HomePage'
import ContactFormPage from './components/pages/ContactFormPage'

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contato" element={<ContactFormPage />} />
        </Routes>
    )
}

export default AppRoutes

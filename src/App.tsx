import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Layout from "./components/Layout"
import Projects from "./pages/Projects"
import NotFound from "./pages/NotFound"

export default function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="*" element={<NotFound />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

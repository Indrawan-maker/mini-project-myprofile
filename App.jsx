import Info from "./components/Info"
import Interest from "./components/Interest"
import About from "./components/About"
import Footer from "./components/Footer"

export default function App() {
    return (
        <div className="container">
        <Info />
        <About />
        <Interest/>
        <Footer/>
        </div>
    )
}
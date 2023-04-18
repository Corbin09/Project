import {Route, Routes} from "react-router-dom";
import Homepage from "./pages/HomePage";
import Header from "./components/Header";
import LoginPage from "./pages/LoginPage";

const App = () => {
    return <>
        <div className="container">
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
            </Routes>
        </div>  
    </>
}

export default App;
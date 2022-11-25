import {Routes, Route} from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";

function Router() {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/*" element={<ErrorPage errorMessage="Error 404"/>} />
            <Route path="/error/" element={<ErrorPage />} />
        </Routes>
    )
}

export default Router

import {Routes, Route} from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import MiniJeux from "../pages/MiniJeux/MiniJeux";
import Quizz from "../pages/Quizz/Quizz";

function Router() {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/minijeux" element={<MiniJeux />}/>
            <Route path="/minijeux/quizz" element={<Quizz/>}/>
            <Route path="/*" element={<ErrorPage errorMessage="Error 404"/>} />
            <Route path="/error/" element={<ErrorPage />} />
        </Routes>
    )
}

export default Router

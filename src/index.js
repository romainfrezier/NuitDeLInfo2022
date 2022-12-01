import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./styles/styles.scss"
import {BrowserRouter} from "react-router-dom";
import {AnimatePresence} from "framer-motion";
import {ContextProvider} from "./context/context";
import "./styles/abstracts/theme.scss" // Global theme css
import "./styles/styles.scss";

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <ContextProvider>
            <AnimatePresence>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </AnimatePresence>
        </ContextProvider>
    </React.StrictMode>
)


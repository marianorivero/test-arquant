import React from 'react'
import ReactDOM from 'react-dom/client'
import Title from "./components/Title/Title";
import App from './App'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <>
        <Title />
        <App/>
    </>
);



import React, {useState} from 'react';
import {Route, Routes,} from "react-router-dom";
import Main from "./сomponents/Main/Main";

function App() {

    return (
        <Routes>
            <Route path={'/'} exact element={<Main/>}/>
        </Routes>
    );
}

export default App;

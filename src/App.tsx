import React from 'react';
import { BrowserRouter, Form, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

function App() {
    return (
        <BrowserRouter>
            <RecoilRoot>
                <Routes>
                    <Route path='/' element={Form} />
                </Routes>
            </RecoilRoot>
        </BrowserRouter>
    );
}

export default App;

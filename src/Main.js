import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import MyLayout from './components/MyLayout';
import MyDashboard from './views/Dashboard';
import MyForm from './views/Form';
import MyTable from './views/Table';

  
const Main = () => {
    return (
        <BrowserRouter>
            <MyLayout>
                <Routes>
                <Route exact path="/dashboard" element={<MyDashboard />} />
                <Route path="/form" element={<MyForm />} />
                <Route path="/table" element={<MyTable />} />
                </Routes>
            </MyLayout>
        </BrowserRouter>
    )
}

export default Main

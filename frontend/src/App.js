import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListPage from './pages/ListPage';
import AddPage from './pages/AddPage';
import EditPage from './pages/EditPage';
import './styles.css'; // import global styles

// main application component
// handles routing between different pages

function App() {
    return (
        <Router>
            <div className="App">
                {/* defines diff routes for the app */}
                <Routes>
                    {/* home page: displays the list of team members */}
                    <Route path="/" element={<ListPage />} />

                    {/* page for adding a new team member */}
                    <Route path="/add" element={<AddPage />} />

                    {/* page for editing an existing team member */}
                    <Route path="/edit/:id" element={<EditPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

import React from 'react';
import axios from 'axios';
import TeamForm from '../components/TeamForm';
import { useNavigate } from 'react-router-dom';

const AddPage = () => {
    // allows us to navigate between pages
    const navigate = useNavigate();

    // funct to handle form submission
    const handleSubmit = (newMember) => {
        console.log("Submitting a new member:", newMember);
        // send POST req to backend API to add new member
        axios.post('http://127.0.0.1:8000/api/team-members/', newMember)
            // redirects user back to home page (ran successfully)
            .then(() => navigate('/'))
            // logs errors during req
            .catch(error => console.error("Error:", error.response?.data || error.message));
    };

    return (
        <div>
            <h1>Add New Team Member</h1>
            <TeamForm onSubmit = {handleSubmit} />
        </div>
    );
};

export default AddPage;
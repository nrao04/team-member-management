import React from 'react';
import axios from 'axios';
import teamForm from '../components/teamForm';
import { useNavigate } from 'react-router-dom';

const addPage = () => {
    const navigate = useNavigate();

    const handleSubmit = (newMember) => {
        axios.post('http://127.0.0.1:8000/api/teammembers/', newMember)
            .then(() => navigate('/'))
            .catch(error => console.error(error));
    };

    return (
        <div>
            <h1>Add New Team Member</h1>
            <teamForm onSubmit = {handleSubmit} />
        </div>
    );
};

export default addPage;
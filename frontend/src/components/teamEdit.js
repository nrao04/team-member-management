import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import TeamForm from './TeamForm';

// page for editing existing team member
// gets member details and allows for updating

const TeamEdit = () => {
    // gets member ID from URL
    const {id} = useParams();
    // allows us to navigate between pages
    const navigate = useNavigate();
    // stores the team member data
    const [memberData, setMemberData] = useState(null);

    useEffect(() => {
        // fetch existing data of team member
        axios.get(`http://127.0.0.1:8000/api/teammembers/${id}/`)
            .then(response => setMemberData(response.data))
            .catch(error => console.error(error));
    }, [id]);

    // handles form submission by updating team member
    const handleSubmit = (updatedData) => {
        axios.put(`http://127.0.0.1:8000/api/teammembers/${id}/`, updatedData)
            // redirects user back to home page (ran successfully)
            .then(() => navigate('/'))
            // logs errors during req  
            .catch(error => console.error(error));
    };

    return (
        <div>
            <h1>Edit Team Member</h1>
            {/* render form only when data is loaded */}
            {memberData && <TeamForm onSubmit={handleSubmit} initialData={memberData} />}
        </div>
    );
};

export default TeamEdit;
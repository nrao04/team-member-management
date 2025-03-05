import React, {useEffect, useState} from 'react';
import axios from 'axios';
import teamList from '../components/teamList';
import {useNavigate} from 'react-router-dom';

// displays list of team members
// fetches members from the API and provides navigation

const listPage = () => {
    // stores the team members
    const [members, setMembers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // fetch list of members from API
        axios.get('http://127.0.0.1:8000/api/teammembers/')
            .then(response => setMembers(response.data))
            .catch(error => console.error(error));
    }, []);

    // Navigate to edit page when a member is clicked
    const handleEdit = (id) => {
        navigate(`/edit/${id}`);
    };

    return (
        <div>
            <h1>Team Members</h1>
            <button onClick={() => navigate('/add')}>Add New Member</button>
            <TeamList members={members} onEdit={handleEdit} />
        </div>
    );
};

export default ListPage;

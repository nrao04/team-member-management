import React, {useEffect, useState} from 'react';
import axios from 'axios';
import TeamList from '../components/TeamList';
import {useNavigate} from 'react-router-dom';

// displays list of team members
// fetches members from the API and provides navigation

const ListPage = () => {
    // stores the team members
    const [members, setMembers] = useState([]);
    // allows navigation to other pages
    const navigate = useNavigate();

    useEffect(() => {
        // fetch list of members from API
        axios.get('http://127.0.0.1:8000/api/team-members/')
            // redirects user back to home page (ran successfully)
            .then(response => setMembers(response.data))
            // logs errors during req
            .catch(error => console.error(error));
    }, []);

    // navigate to edit page when a member is clicked
    const handleEdit = (id) => {
        navigate(`/edit/${id}`);
    };

    return (
        <div>
            <h1>Team Members</h1>
             {/* button to navigate to the add member page */}
            <button onClick = {() => navigate('/add')}>Add New Member</button>
            <TeamList members = {members} onEdit = {handleEdit} />
        </div>
    );
};

export default ListPage;

import React from 'react';

// displays list of team members
// each member is clickable and can navigate to the edit page
const teamList = ({members, onEdit, onDelete}) => {
    return (
        <ul>
            {/* iterate thru list of members */}
            {members.map(member => (
               <li key = {member.id}>
                {/* display member details */}
                    {member.first_name} {member.last_name} - {member.role}

                    {/* admins can edit anyone, regular members can only edit themselves */}
                    {(userRole === 'admin' || member.id === userId) && (
                       <button onClick = {() => onEdit(member.id)}>Edit</button> 
                    )}

                    {/* only admins can delete*/}
                    {userRole === 'admin' && (
                        <button onClick = {() => onDelete(member.id)}>Delete</button>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default teamList;
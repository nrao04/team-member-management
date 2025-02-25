import React from 'react';

// displays list of team members
// each member is clickable and can navigate to the edit page
const teamList = ({members, onSelectMember}) => {
    return (
        <ul>
            {/* iterate thru list of members */}
            {members.map(member => (
               <li key = {member.id} onClick = {() => onSelectMember(member.id)}>
                {/* display member details */}
                    {member.first_name} {member.last_name} - {member.role}
                </li>
            ))}
        </ul>
    );
};
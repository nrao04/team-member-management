import React, {useState} from 'react';

// form component for adding or editing team members
// accepts opt initial data to prefill form
const TeamForm = ({onSubmit, initialData = {first_name: '', last_name: '', role: ''} }) => {
    // local state for form fields
    const [formData, setFormData] = useState(initialData);

    // handles form field changes
    const formFieldChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    };

    // handles form submission
    const formSubmit = (e) => {
        // prevents page reload
        e.preventDefault(); 
        // calls par. funct. with form data
        onSubmit(formData)
    };
    
    // handles form submission details
    return (
        <form onSubmit = {formSubmit}>
            <label>First Name:</label>
            <input type = "text" name = "first_name" value = {formData.first_name} onChange = {formFieldChange} required />

            <label>Last Name:</label>
            <input type = "text" name = "last_name" value = {formData.last_name} onChange = {formFieldChange} required />

            <label>Role:</label>
            <select name = "role" value = {formData.role} onChange = {formFieldChange}>
                <option value = "regular">Regular</option>
                <option value = "admin">Admin</option>
            </select>

            <button type = "submit" >Submit</button>
        </form>
    );
};

export default TeamForm;

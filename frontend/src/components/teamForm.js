import React, {useState} from 'react';

// form component for adding or editing team members
// accepts opt initial data to prefill form
const teamForm = ({onSubmit, initialData = {first_name: '', last_name: '', role: ''} }) => {
    // local state for form fields
    const [formData, setFormData] = useState(initialData);

    // handles form field changes
    const formFieldChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    };

    //

};

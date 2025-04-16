import React, { useState } from 'react';
import axios from 'axios';

const CreateSubscriber = () => {
    const [email, setEmail] = useState('');
    const [newsletterId, setNewsletterId] = useState(1);  // Par défaut, la newsletter_id est 1
    const token = localStorage.getItem('auth_token');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                'http://127.0.0.1:8000/api/subscribers',
                { email, newsletter_id: newsletterId },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            alert('subbscriber added successfully');
            console.log('created Subscriber:', response.data);
        } catch (error) {
            console.error('error creating subscriber:', error);
            alert('error creating subscriber');
        }
    };

    return (
        <div>
            <h2>Create Subscriber</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label>Newsletter ID:</label>
                    <input
                        type="number"
                        value={newsletterId}
                        onChange={(e) => setNewsletterId(e.target.value)}
                    />
                </div>
                <button type="submit">Add Subscriber</button>
            </form>
        </div>
    );
};

export default CreateSubscriber;
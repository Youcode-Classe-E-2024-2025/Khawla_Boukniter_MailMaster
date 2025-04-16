import React, { useState } from 'react';
import axios from 'axios';

const CreateCampaign = () => {
    const [subject, setSubject] = useState('');
    const [content, setContent] = useState('');
    const [newsletterId, setNewsletterId] = useState(1);  // Par défaut, la newsletter_id est 1
    const token = localStorage.getItem('auth_token');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                'http://127.0.0.1:8000/api/campaigns',
                { subject, content, newsletter_id: newsletterId },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            alert('Cmpaign created successfully');
            console.log('created Campaign:', response.data);
        } catch (error) {
            console.error('error creating campaign:', error);
            alert('error creating campaign');
        }
    };

    return (
        <div>
            <h2>Create Campaign</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Subject:</label>
                    <input
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                    />
                </div>
                <div>
                    <label>Content:</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
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
                <button type="submit">Create Campaign</button>
            </form>
        </div>
    );
};

export default CreateCampaign;
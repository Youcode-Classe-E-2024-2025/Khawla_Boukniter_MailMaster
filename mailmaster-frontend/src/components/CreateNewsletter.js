import React, { useState } from 'react';
import axios from 'axios';

const CreateNewsletter = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const token = localStorage.getItem('auth_token');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                'http://127.0.0.1:8000/api/newsletters',
                { title, content },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            alert('newslettr created successfully');
            console.log('ereated Newsletter:', response.data);
        } catch (error) {
            console.error('errror creating newsletter:', error);
            alert('error creating newsletter');
        }
    };

    return (
        <div>
            <h2>Create Newsletter</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label>Content:</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </div>
                <button type="submit">Create Newsletter</button>
            </form>
        </div>
    );
};

export default CreateNewsletter;
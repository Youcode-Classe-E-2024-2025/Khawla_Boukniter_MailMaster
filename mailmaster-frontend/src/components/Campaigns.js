import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Campaigns = () => {
    const [campaigns, setCampaigns] = useState([]);
    const [loading, setLoading] = useState(true);
    const token = localStorage.getItem('auth_token');

    useEffect(() => {
        const fetchCampaigns = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/campaigns', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setCampaigns(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching campaigns:', error);
                setLoading(false);
            }
        };

        fetchCampaigns();
    }, [token]);

    const sendCampaign = async (id) => {
        try {
            await axios.post(`http://127.0.0.1:8000/api/campaigns/${id}/send`, {}, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            alert('Campaign sent successfully');
        } catch (error) {
            console.error('Error sending campaign:', error);
            alert('Error sending campaign');
        }
    };

    if (loading) {
        return <div>Loading campaigns...</div>;
    }

    return (
        <div>
            <h2>Campaigns</h2>
            <ul>
                {campaigns.map((campaign) => (
                    <li key={campaign.id}>
                        <h3>{campaign.subject}</h3>
                        <p>{campaign.content}</p>
                        <button onClick={() => sendCampaign(campaign.id)}>Send Campaign</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Campaigns;
import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Envoyer la requête POST à l'API pour se connecter
            const response = await axios.post('http://127.0.0.1:8000/api/login', {
                email,
                password
            }, {
                withCredentials: true, // Nécessaire pour utiliser Laravel Sanctum
            });

            // Si la connexion réussit, appeler onLogin pour mettre à jour l'état dans le parent
            onLogin(response.data);
        } catch (error) {
            alert('Erreur de connexion');
            console.error('Login error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Email :</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <label>Mot de passe :</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button type="submit">Se connecter</button>
        </form>
    );
};

export default Login;
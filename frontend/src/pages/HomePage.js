import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div>
            <h1>Welcome to the Chat Assistant</h1>
            <Link to="/chat">Go to Chat</Link>
        </div>
    );
}

export default HomePage;
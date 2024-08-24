import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage';
import ChatInterface from './components/ChatInterface';

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/chat" component={ChatInterface} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
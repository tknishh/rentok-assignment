import React, { useEffect } from 'react';
import introJs from 'intro.js';
import 'intro.js/introjs.css';

function Tutorial() {
    useEffect(() => {
        introJs().start();
    }, []);

    return null;
}

export default Tutorial;
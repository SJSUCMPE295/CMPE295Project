import React from 'react';
import Features from 'shared/components/Features';

const App: React.FC<any> = () => {
    return (
        <React.Fragment>
            <Features />
            <p>
                <button value="en_US">English</button>
            </p>
        </React.Fragment>
    );
};

export default App;

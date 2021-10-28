import React from 'react';
import { Button } from '@material-ui/core';
import Features from 'shared/components/Features';
const App: React.FC<any> = () => {
    return (
        <React.Fragment>
            <Features />
            <p>
                <Button value="en_US">English</Button>
            </p>
        </React.Fragment>
    );
};

export default App;

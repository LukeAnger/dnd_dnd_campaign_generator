import React from 'react';
import AttributeMenu from './components/AttributeMenu';
import DragContainer from './components/DragContainer';
import { DragProvider } from './state/store';

const App = () => {
    return (
        <DragProvider>
            <div style={{ display: 'flex', height: '100vh' }}>
                <AttributeMenu />
                <DragContainer />
            </div>
        </DragProvider>
    );
};

export default App;

import React from 'react';
import { Provider } from 'react-redux';
import store from './store.js';
import './App.css';
import AlbumsListContainer from './components/AlbumsListContainer.js';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <header className="App-header">
                    <AlbumsListContainer />
                </header>
            </div>
        </Provider>
    );
}

export default App;

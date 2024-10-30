import React from 'react';
import ReactDOM from 'react-dom/client';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Router>
                    <App />
                    <ToastContainer theme="dark" />
                </Router>
            </PersistGate>
        </Provider>
    </React.StrictMode>
);

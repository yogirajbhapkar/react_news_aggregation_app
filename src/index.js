import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App'

// const root = ReactDOM.createRoot(document.getElementById('root'));

const element = document.querySelector("#root")

let root = ReactDOM.createRoot(element)







root.render(
    < App/>
);


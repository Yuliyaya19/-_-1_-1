import React from 'react';
import './App.css';

import {Body} from "./site/Body";
import {Header} from "./site/Header";
import {Footer} from "./site/Footer";

function App() {
    return (
        <>
            <Header title={"New Body"}/>
            <Body titleForBody={"New Body"}/>
            <Footer titleForFooter={"New Footer"}/>
        </>
    );
}

export default App;

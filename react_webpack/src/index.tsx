import * as React from "react";
import * as ReactDOM from "react-dom";

import {Hello, HelloC} from './components/Hello'

const APP = () => {
    return (
        <div>
            <Hello compiler="TypeScript" framework="React"/>
            <HelloC compiler='TypeScript' framework='React'/>
        </div>
    )
}

ReactDOM.render(
    <APP/>,
    document.getElementById('example')
)

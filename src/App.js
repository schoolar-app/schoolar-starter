import React from 'react'
import { Fab, ToolBar, Toast } from './lib/interfaces'

function testInterface() {
    ToolBar.setTitle("Hello Schoolar")
    Fab.hide()
}

function showMessage(){
    Toast.show('Hello from Schoolar tool')
}

export default function App() {

    testInterface();

    return (
        <div>
            Welcome to Schoolar
            <br/>
            <button onClick={() => showMessage()}>Hello</button>
        </div>
    )
}
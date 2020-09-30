import React from 'react'
import { Fab, ToolBar, Toast } from 'schoolar-framework'

function initView() {
    ToolBar.setTitle("Hello Schoolar")
    Fab.hide() 
}

function showMessage(){
    Toast.show('Hello from Schoolar tool')
}

export default function App() {

    initView();

    return (
        <>
            <h3>Welcome to Schoolar Tool Template</h3>
            <button onClick={() => showMessage()}>Click Me</button>
        </>
    )
}
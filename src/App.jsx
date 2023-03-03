import React from 'react'
import './App.css'
import data from './data'
import Navigation from './components/Navigation'
import Card from './components/Card'

function App() {
    const cards = data.map((item) => {
        return <Card key={item.id} {...item} />
    })
    return (
        <div className="App">
            <Navigation />
            <div className="card-row">{cards}</div>
        </div>
    )
}

export default App

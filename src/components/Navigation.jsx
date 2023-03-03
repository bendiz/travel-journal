import React from 'react'
import './styles/Navigation.css'
import globe from './img/globe.png'

export default function Navigation() {
    return (
        <nav className="Navigation">
            <img src={globe} alt="A globe icon" />
            <h1>&nbsp;my travel journal</h1>
        </nav>
    )
}

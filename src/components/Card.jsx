import React from 'react'
import './styles/Card.css'
import locationDot from './img/location-pin.png'

export default function Card(props) {
    return (
        <>
            <div className="Card">
                <img src={props.image} alt={props.title} />
                <div className="info">
                    <div className="maps">
                        <img
                            src={locationDot}
                            alt="location dot"
                            className="location-dot"
                        />
                        <span className="location">{props.location}</span>
                        <a
                            href={props.google}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View on Google Maps
                        </a>
                    </div>
                    <h2 className="title">{props.title}</h2>
                    <h3 className="date">{props.date}</h3>
                    <p className="desc">{props.description}</p>
                </div>
            </div>
            <hr></hr>
        </>
    )
}

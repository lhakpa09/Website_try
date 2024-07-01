import React from 'react'
import './servicesGrid.css'

const service = [
    {
        title: "Apple Watch 7 Gen with steel",
        price: 300,
        rating: 5,
        description: "This is a digital watch",
        image: "1.jpg"

    },
    {
        title: "Apple Watch 8 Gen with steel",
        price: 400,
        rating: 5,
        description: "This is a digital watch",
        image: "2.jpg"
    },
    {
        title: "Apple Watch 9 Gen with steel",
        price: 500,
        rating: 5,
        description: "This is a digital watch",
        image: "3.jpg"
    },
    {
        title: "Apple Watch 10 Gen with steel",
        price: 300,
        rating: 5,
        description: "This is a digital watch",
        image: "1.jpg"

    },
]


function ServicesGrid() {
    return (
        <div className='gridcontainer'>
            {service.map((service, index) => (
                <div className='service-name'>
                    <img src={`${service.image}`} />
                    <h2>{service.title}</h2>
                    <h2>{service.price}</h2>
                    <div className='rating-container'>
                        <label>Rating</label>
                        <label>5</label>
                    </div>
                </div>

            ))
            }
        </div>
    )
}

export default ServicesGrid
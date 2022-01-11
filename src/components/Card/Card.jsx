import React from 'react'

const Card = ({title, paragraph, image, link}) => {
    return (
        <div className='col-md-4'>
            <div className="card bg-dark col-md-12 mt-4">
                <img src={image} className="card-img-top" alt={image} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{paragraph}</p>
                    <a href="#" className="btn btn-primary">{link}</a>
                </div>
            </div>
        </div>
    )
}

export default Card

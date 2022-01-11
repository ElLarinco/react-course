import React from 'react'

const Jumbotron = (props) => {
    return (
        <div className="container-fluid row py-5">
            <div className="container py-5 col-lg-6">
                <h1 className="display-4">{props.title}</h1>
                <hr />
                <p>{props.paragraph}</p>
                <a href="#" className="btn btn-primary">{props.link}</a>
            </div>
            <div className="container col-lg-6">
                {props.children}
            </div>
        </div>
    )
}

export default Jumbotron

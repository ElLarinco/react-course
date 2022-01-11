import React from 'react'
import image from '../../images/image.png'

const Presentation = () => {
    return (
        <div className="container-fluid row py-5 d-flex justify-content-center align-items-center">
            <div className='col-md-12 bg-dark mb-3'>
              <img src={image} className="card-img-top img-fluid mt-2 bg-light" alt={image} />
              <div className="card-body">
                <h4 className="card-title text-center">Larin Hoshi</h4>
                <h5 class="card-subtitle mb-2 text-warning text-center">Fullstack Web Developer</h5>
                <div class="btn-group d-flex justify-content-center align-items-center mt-3" role="group">
                  <a href='#' class="btn btn-light mx-2 rounded">
                    <i class="fab fa-github mx-1"></i>
                    Github
                  </a>
                  <a href='#' class="btn btn-primary mx-2 rounded">
                    <i class="fab fa-discord mx-1"></i>
                    Discord
                  </a>
                </div>
                <hr />
                <div className='mt-3'>
                  <h5 class="card-subtitle mb-2">Acerca</h5>
                  <p className="card-text">
                    Soy un desarrollador web por hobby, llevo estudiando desde hace más de un año lenguajes como <strong>HTML, CSS, JS, PHP, Python, MySQL, React, NodeJS, Laravel, etc....</strong>
                  </p>
                </div>
                <hr />
                <div className='mt-3'>
                  <h5 class="card-subtitle mb-2">Intereses</h5>
                  <p className="card-text">
                    Soy un desarrollador web por hobby, llevo estudiando desde hace más de un año lenguajes como <strong>HTML, CSS, JS, PHP, Python, MySQL, React, NodeJS, Laravel, etc....</strong>
                  </p>
                </div>
                <hr/>
                <footer className='container mt-4 shadow-lg py-2 rounded'>
                  <div className='row d-flex justify-content-center align-items-center'>
                    <div className='col-4 col-lg-3 mb-3 d-flex justify-content-center align-items-center'>
                      <i class="fab fa-github display-5"></i>
                    </div>
                    <div className='col-4 col-lg-3 mb-3 d-flex justify-content-center align-items-center'>
                      <i class="fab fa-twitter display-5"></i>
                    </div>
                    <div className='col-4 col-lg-3 mb-3 d-flex justify-content-center align-items-center'>
                      <i class="fab fa-facebook display-5"></i>
                    </div>
                    <div className='col-4 col-lg-3 mb-3 d-flex justify-content-center align-items-center'>
                      <i class="fab fa-instagram display-5"></i>
                    </div>
                  </div>
                </footer>
              </div>
            </div>
        </div>
    )
}

export default Presentation

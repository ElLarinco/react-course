import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Jumbotron from './components/Jumbotron/Jumbotron'
import Card from './components/Card/Card'
import Presentation from './components/Presentation/Presentation'
import './App.css';
import image1 from './images/image1.jpg'
import image2 from './images/image2.jpg'
import image3 from './images/image3.jpg'
import image4 from './images/image4.jpg'
import image5 from './images/image5.jpg'

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='main-container'>
        <main className='container mt-4'>
          <Jumbotron 
          title='Welcome to React Course' 
          paragraph='Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.' 
          link='Go Home'>
            <Presentation />
          </Jumbotron>
          <div className="container-fluid row py-5 d-flex justify-content-center align-items-center">
                <h1 className="display-4">Cards</h1>
                <hr />
                <div className='row'>
                  <Card title="Kanon" paragraph="1" image={image1} link="Link"/>
                  <Card title="Keke" paragraph="2" image={image3} link="Link"/>
                  <Card title="Chisato" paragraph="3" image={image2} link="Link"/>
                  <Card title="Sumire" paragraph="4" image={image4} link="Link"/>
                  <Card title="Ren" paragraph="5" image={image5} link="Link"/>
              </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;

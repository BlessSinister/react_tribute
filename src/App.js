import React from 'react';
import './App.css';
import { li, liGenera } from './Li';


function App() {


  return (

    <div className="App container-fluid">
      <header className="App-header container-fluid">
        <div className="bg-gray row">
          <div className="col-xs-12 col-sm-12 col-md-12 ">
            <h1>Dr. Norman Borlaug</h1>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 ">
            <p>The man who saved a billion lives</p>
          </div>
        </div>
      </header>
      <main className='container-fluid'>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 ">  <img src="tribute.jpg" alt="" className='img-fluid' /></div>
          <div className="col-xs-12 col-sm-12 col-md-12 ">  <p>Dr. Norman Borlaug, third from the left, trains biologists in Mexico on how to increase wheat yields - part of his life-long war on hunger.</p></div>
        </div>
      </main>
      <section className='cobtainer-fluid'>
        <article className='row'>
          <div className="col-xs-12 col-sm-12 col-md-12 ">     <h2>Here's a time line of Dr. Borlaug's life:</h2></div>
          <div className="col-xs-12 col-sm-12 col-md-12 "> <ul id='12'>
            {liGenera(li)}
          </ul></div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 ">  <p className='epig'>"Borlaug's life and achievement are testimony to the far-reaching contribution that one man's towering intellect, persistence and scientific vision can make to human peace and progress."</p></div>
              <div className="col-xs-12 col-sm-12 col-md-12 ">
                <p className='epig'>-- Indian Prime Minister Manmohan Singh</p></div>
            </div>
          </div>

        </article>
      </section>
      <footer className='container-fluid'>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 ">
            <p><strong>If you have time, you should read more about this incredible human being on his <a href='https://en.wikipedia.org/wiki/Norman_Borlaug'>Wikipedia entry.</a></strong></p>
          </div>
        </div>

      </footer>

    </div>
  );
}

export default App;

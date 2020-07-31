import React from 'react';

import eu from '../../assets/eu.png';
import mario from '../../assets/supermario.gif';
import estrelamario from '../../assets/estrelamario.gif';
import zeldalink from '../../assets/zelda-link.gif';
import kakashi from '../../assets/kakashi.gif';
import kirito from '../../assets/kirito.gif';
import minato from '../../assets/minato.gif';
import sonic from '../../assets/sonic.gif';
import yang from '../../assets/yang.gif';
import './App.css';

function App() {
  document.addEventListener("mousemove", parallax);
  function parallax(e) {
      this.querySelectorAll('.layer').forEach(layer => {
          const speed = layer.getAttribute('data-speed')
  
          const x = (window.innerWidth - e.pageX*speed)/100
          const y = (window.innerHeight - e.pageY*speed)/100
  
          layer.style.transform = `translateX(${x}px) translateY(${y}px)`
      })
  }
  return (
    <div className="App">
        <header className="App-header">
          <img src={eu} className="App-logo layer" data-speed={-1} alt="logo" />
          <div className="layer" data-speed={-2}>
            <p>
              Estudante de Eng. de Software, amante da <br />
              tecnologia e programação, com o foco nos jogos digitas <br />
              (Acho que deu pra perceber ;P)<br />
            </p>
            <a
              className="App-link"
              href="https://github.com/JvSe"
              target="_blank"
              rel="noopener noreferrer"
            >
              JvSe
            </a>
          </div>
          
        </header>
        <div className="elements">
          <img className="layer" id="img-1" data-speed={5} src={mario} alt="mario"/>
          <img className="layer" id="img-2" data-speed={5} src={estrelamario} alt="estrela mario"/>  
          <img className="layer" id="img-3" data-speed={-3} src={yang} alt="dragonball"/>  
          <img className="layer" id="img-4" data-speed={-2} src={zeldalink} alt="zelda link"/>  
          <img className="layer" id="img-5" data-speed={7} src={kirito} alt="kirito"/>  
          <img className="layer" id="img-6" data-speed={-3} src={sonic} alt="sonic"/>  
          <img className="layer" id="img-7" data-speed={-6} src={minato} alt="minato"/>  
          <img className="layer" id="img-8" data-speed={4} src={kakashi} alt="kakashi"/>
        </div>
    </div>
  );
}

export default App;

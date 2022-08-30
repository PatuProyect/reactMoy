import { useState } from 'react';
import './App.css';
import html2canvas from "html2canvas"

function App() {

  const [linea1, setLinea1] = useState("");
  const [linea2, setLinea2] = useState("");
  const [imagen, setImagen] = useState("");

  const onChangeLinea1 = function(evento){
    setLinea1(evento.target.value)
  }
  const onChangeLinea2 = function(evento){
    setLinea2(evento.target.value)
  }
  const onChangeImagen = function(evento){
    setImagen(evento.target.value)
  }
  const onClickExportar = function(evento){
    html2canvas(document.querySelector("#meme")).then(canvas => {
      let img = canvas.toDataURL("image/png");
      let link = document.createElement("a")
      link.download = "meme.png"
      link.href = img;
      link.click();
  });
  }


  return (
    <div className="App">
      <select onChange={onChangeImagen}>
        <option value="fry">Fry</option>
        <option value="dicaprio">Di Caprio</option>
        <option value="homero">Homero Elegante</option>
        <option value="nene">Nene</option>
        <option value="nena">Nena en llamas</option>
        <option value="peter">Peter</option>
        <option value="spiderman">Hombre Araña</option>
      </select> <br />

      <input onChange={onChangeLinea1} type="text" placeholder="linea 1"></input> <br />
      <input onChange={onChangeLinea2} type="text" placeholder='linea 2'></input> <br />
      <button onClick={onClickExportar}>Exportar</button>

      <div className='meme' id='meme'>
        <span>{linea1}</span><br />
        <span>{linea2}</span><br />
        <img src={"/img/" + imagen + ".jpg"} alt="meme"/>
      </div>

    </div>
  );
}

export default App;

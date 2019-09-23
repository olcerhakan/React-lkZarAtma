import React, { Component } from 'react';
import ana from './img/ana.jpg'
import './App.css';

class App extends Component {
  render() {

    function zarSalla() {
      var result=Math.floor(Math.random()*6)+1;
      console.log(result);
      document.getElementById('sonucText').innerHTML=result+' attınız.';
      document.getElementById('emojiResimId').setAttribute('src',require('./img/' + result + '.jpg'));
    }
    
    return (
      <div className="App">
        <img id='emojiResimId' className='emojiResim' src={ana} />
        <h2  id='sonucText' align='center'> Henüz zar atmadınız... </h2>
        <button onClick={zarSalla}>ZAR AT</button>
      </div>
    );
  }
}

export default App;
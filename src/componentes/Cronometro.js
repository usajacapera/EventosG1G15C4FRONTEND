import {useEffect, useInsertionEffect, useState} from 'react'
//import './App.css';

function Cronometro() {
  const [diff, setDiff] = useState(null)
  const [initial, setInitial] = useState(+new Date())

  const tick = () => {
    setDiff(new Date ( + new Date() - initial))
  }

  useEffect( () => {
    if (initial) {
      requestAnimationFrame(tick);
    }
  }, [initial]);

  useEffect( () => {
    if (diff) {
      requestAnimationFrame(tick);
    }
  }, [diff])
  
  const stopStart = () => {
    timeFormat(setDiff(null))
  }


  return (
    <div className="App" onClick={stopStart}>
      <h4 style = {{color:'white'}} className = "timer"   >{timeFormat(diff)}</h4>
    </div>
  );
}



const timeFormat = (date) => {
  if(!date) return "00:00:00";

  let mm = date.getUTCMinutes();
  let ss = date.getSeconds();
  let cm = Math.round(date.getMilliseconds() / 10);

  mm = mm < 10 ? "0" + mm : mm;
  ss = ss < 10 ? "0" + ss : ss;
  cm = cm < 10 ? "0" + cm : cm;

  return `${mm}:${ss}:${cm}`;
}

export default Cronometro;

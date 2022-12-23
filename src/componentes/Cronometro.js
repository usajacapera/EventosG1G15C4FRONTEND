function Cronometro  () {

  let segundos = 0
  let minutos = 0
  let horas = 0
  let segundosAux = 0
  let minutosAux = 0
  let horasAux = 0
  const tiempoEspera = 100 // tiempo que durara el cronometro en minutos
  let empezar = 0

  const cronometro = () => {
    segundos++
    if ( segundos > 59 ) { minutos++; segundos = 0 }
    if ( minutos > 59 ) { horas++; minutos = 0 }
    if ( horas > 24 ) { horas = 0}

    if ( segundos < 10 ) { segundosAux = "0" + segundos} else { segundosAux = segundos }
    if ( minutos < 10 ) { minutosAux = "0" + minutos } else { minutosAux = minutos }
    if ( horas < 10 ) { horasAux = "0" + horas } else { horasAux = horas }
    //console.log(`${horasAux}:${minutosAux}:${segundosAux}`)
    document.getElementById("hms").innerHTML = horasAux + ":" + minutosAux + ":" + segundosAux;
  }

  // Iniciando cronometro
  const empezarCronometro = () => {
    empezar = setInterval(()=>{
      cronometro();
      if(tiempoEspera === minutos){
        clearInterval(empezar)
      }
    }, 1000)
  }

  const reiniciarCronometro = () => {
    clearInterval(empezar);
    segundos = 0
    minutos = 0
    horas = 0
    empezarCronometro();
  }

  return (
    <div style={{color:"white"}}>
      <h4 id="hms">{empezarCronometro()}</h4>
    </div>
  )
}

export default Cronometro
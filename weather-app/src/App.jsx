import React, { useState, useEffect } from 'react'
import './App.css'
import { api } from './services/api'
import { FaTemperatureHigh, FaWind } from 'react-icons/fa'

function App() {
  const [weather, setWeather] = useState(null)
  const [city, setCity] = useState("")
  const [search, setSearch] = useState("")

  async function handleGetWeather(event){
    event.preventDefault()
    const response = await api.get(search)
    await fetch("https://goweather.herokuapp.com/weather/")
    setCity(search)
    console.log(response.data)
    setWeather(response.data)
  }

  function setTempo(){
    let tempo = weather.description
    console.log(tempo)
    switch(tempo){
      case "Sunny":
        tempo = 'Ensolarado'
        break
      case "Partly cloudy":
        tempo = 'Parcialmente nublado'
        break
      case "Clear":
        tempo = 'Limpo'
        break
      case "Light snow":
        tempo = 'Nevando'
        break
    }
    return tempo
  }

  useEffect(() => {
    //handleGetWeather()
  }, [])

  return (
    <div className="App">
      <div className="bodyMain">
        <header>
          <form onSubmit={handleGetWeather}>
            <input type="text" value={search} 
                onChange={(event) => setSearch(event.target.value)}
            />
            <button>enviar</button>
          </form>
        </header>

        {weather && //Só vai mostrar se tiver o tempo
          <main>
            <h1>{city}</h1>
          
          <section className="current-weather">
            <h2>Clima atual</h2>
            <p className="tempo">{weather.description}</p>
            <p><FaTemperatureHigh /> {weather.temperature}</p>
            <p><FaWind /> {weather.wind}</p>
            <section className="forecast">
              <h2>Próximos dias</h2>
              <ol>
                {
                  weather.forecast.map(day =>
                    <li>
                      <div>
                        <FaTemperatureHigh />
                        <p>{day.temperature}</p>
                      </div>
                      <div>
                        <FaWind />
                        <p>{day.wind}</p>
                      </div>
                    </li>
                  )
                } 
              </ol>
            </section>
          </section>
          </main>
        }
      </div>
    </div>
  )
}

export default App

import React, { useState, useEffect } from "react"

const API_HOST = "http://localhost:3000"
const API_URL = `${API_HOST}/players`

function App() {
  const [data, setData] = useState([])

  const fetchPlayers = () => {
    fetch(`${API_URL}`)
      .then(res => res.json())
      .then(json => setData(json))
  }

  useEffect(() => {
    fetchPlayers()
  }, [])

  return (
    <div className="container">
      <h1>NBA Scoreboard</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Team</th>
            <th>Soll</th>
            <th>Ist</th>
            <th>Datum</th>
          </tr>
        </thead>
        <tbody>
          {data.map(player => (
            <tr key={player.id}>
              <td>{player.name}</td>
              <td>{player.team}</td>
              <td>{player.soll_1}</td>
              <td>{player.ist_1}</td>
              <td>{player.datum}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App

import umbrella_logo from './assets/umbrella_logo.gif'
import health_background from './assets/health_background.gif'
import './App.css'

function App() {
  return (
    <main className="home">
      <img
        src={health_background}
        className="background"
        alt=""
        aria-hidden="true"
      />
      <img src={umbrella_logo} className="base" alt="Umbrella" />
    </main>
  )
}

export default App

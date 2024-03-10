import SCLogo from './assets/StattyCaddy_icon.png'
import AppStoreLogo from './assets/AppStore.svg'
import mapScreenshot from './assets/map_screenshot.png'
import './App.css'

function App() {

  return (
    <>
      <div>
        <img src={SCLogo} className="logo" alt="StattyCaddy logo" />
      </div>
      <h1>StattyCaddy</h1>
      <p className="description">
        Golf for Geeks - analyze and track your game
      </p>
      <div>
        <img className="screenshot" src={mapScreenshot} alt="screenshot of how a hole was played in StattyCaddy" />
      </div>
      <a href="https://apps.apple.com/us/app/stattycaddy/id848742173">
        <img src={AppStoreLogo} alt="App Store logo" />
      </a>
    </>
  )
}

export default App

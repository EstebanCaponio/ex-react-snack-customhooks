import useSwitch from "./useSwitch"

function App() {

  const [value, toggle] = useSwitch(false)

  return (
    <>
      <div>
        <h2>L'interrutturore è: {value ? 'acceso' : 'spento'}</h2>
        <button onClick={toggle}>on/off</button>
      </div>
    </>
  )
}

export default App

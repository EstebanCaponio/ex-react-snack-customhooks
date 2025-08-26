import useCustomPointer from "./useCustomPointer";
import useDate from "./useDate";
import useSwitch from "./useSwitch"

function App() {


  const [value, toggle] = useSwitch(false)
  const currentDate = useDate();
  const customPointer = useCustomPointer();

  return (
    <>
      <div>
        <h2>L'interrutturore è: {value ? 'acceso' : 'spento'}</h2>
        <button onClick={toggle}>on/off</button>
      </div>

      <div>
        <h1>Data e ora attuali:</h1>
        <p>{currentDate.toLocaleString()}</p>
      </div>

      {customPointer}
    </>
  )
}

export default App

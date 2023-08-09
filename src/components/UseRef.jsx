import {useRef} from 'react'

const UseRef = () => {
    const inputRef = useRef()
    const handleFocus =()=>{
       inputRef.current.innerHTML = "agrego contenido"
    }
  return (
    <div>
        <input type="text"
        placeholder='Escriba un mensaje' 
        ref={inputRef}/>
        <button onClick={handleFocus}>Click me</button>
    </div>
  )
} 

export default UseRef
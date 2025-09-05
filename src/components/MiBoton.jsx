import { useState } from "react";

function MiBoton(props) {
    const [count, setCount] = useState(props.count);
    function onClick() {
        setCount(count + 1);
    }
    return (
        <button onClick={onClick}>Soy el botón {count}</button>
    );
}
export default MiBoton;
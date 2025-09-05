import { useObjects } from "../../contexts/ObjectsContext";
import SingleObject from "./SingleObject";

function ObjectData({data}) {
    return (
        <>
        {data && <p>Color {data.color}</p>}
        </>
    )
}
function ObjectList() {
    const objects = useObjects()
    const objectList = objects.map(obj => 
        <li key={obj.id}>{obj.name} <ObjectData data={obj.data}/></li>
    );
    return (
        <>
            <ul>{objectList}</ul>
            <SingleObject id={7}/>
        </>
    )
}

export default ObjectList;
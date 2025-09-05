import { useObjects } from "../../contexts/ObjectsContext";

function ObjectList() {
    const objects = useObjects()
    const objectList = objects.map(obj => 
        <li key={obj.id}>{obj.name}</li>
    );
    return (
        <ul>{objectList}</ul>
    )
}

export default ObjectList;
import { useObjects } from "../../contexts/ObjectsContext";

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
    const data = "null";
    return (
        <>
            {data && <p>hay data</p>}
            <ul>{objectList}</ul>
        </>
    )
}

export default ObjectList;
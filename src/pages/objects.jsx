import { useEffect, useState } from "react";
import { ObjectsProvider, useObjects } from "../contexts/ObjectsContext";
import ObjectList from "../components/objects/ObjectsList";

function ObjectsPage() {
    const [hasError, setError] = useState(false);
    const objects = useObjects();
    console.log(objects);
    return (
        <ObjectsProvider>
            <h1>Objects</h1>
            {hasError && <p>error!!!!</p>}
            <ObjectList/>
        </ObjectsProvider>
    )
}

export default ObjectsPage;

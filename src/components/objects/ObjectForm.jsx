import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { useObjects, addObject } from "../../contexts/ObjectsContext";



function ObjectForm() {

    const [name, setName] = useState("");
    const [color, setColor] = useState("");
    const [addObject] = useObjects();
    const handleSubmit = async (e) => {
        try {
            await addObject(name, color)
            setName("");
            setColor("");

        } catch (err) {
            console.log(err);

        }
    }
    return (
        <Box component="form" onSubmit={handleSubmit}>
            <TextField name="name" label="Nombre del objeto" onChange={(e) => setName(e.target.value)} required />
            <TextField name="color" label="Color del objeto" onChange={(e) => setColor(e.target.value)} required />
            <Button type="submit" >Agregar Objeto</Button>
        </Box>
    );
}
export default ObjectForm;
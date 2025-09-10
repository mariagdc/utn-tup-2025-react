import { useEffect, useState } from "react";
import { ObjectsProvider, useObjects } from "../contexts/ObjectsContext";
import ObjectList from "../components/objects/ObjectsList";
import MiBoton from "../components/MiBoton";
import { Container, Typography, Alert, Box } from "@mui/material";

function ObjectsPage() {
    const [hasError, setError] = useState(false);
    const objects = useObjects();
    console.log(objects);
    
    return (
        <ObjectsProvider>
            <Container maxWidth="lg" sx={{ py: 4 }}>
                <Typography 
                    variant="h3" 
                    component="h1" 
                    gutterBottom 
                    align="center"
                    sx={{ mb: 4 }}
                >
                    Gestión de Objetos
                </Typography>
                
                {hasError && (
                    <Alert severity="error" sx={{ mb: 2 }}>
                        ¡Ha ocurrido un error al cargar los datos!
                    </Alert>
                )}
                
                <ObjectList/>
                
                <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
                    <MiBoton count={0} />
                </Box>
            </Container>
        </ObjectsProvider>
    )
}

export default ObjectsPage;

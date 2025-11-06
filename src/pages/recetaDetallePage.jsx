import { Container, Typography, Button, Box, CircularProgress, Alert } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { useParams, useNavigate } from "react-router-dom";
import { useRecetas } from '../contexts/RecetaContext'; // ← Cambié a RecetaContext (sin "s")
import RecetaDetalle from '../components/recetas/recetaDetalle';

const RecetaDetallePage = () => {
    
    const { id } = useParams();
    const navigate = useNavigate();
    const { isLoading, getRecetaById } = useRecetas();

    const receta = getRecetaById(id);

    if(isLoading) {
        return(
            <Box sx={{ display: 'flex', justifyContent: 'center', p:4 }}>
                <CircularProgress />
                <Typography variant="h6" sx={{ ml: 2 }}> Cargando detalles...</Typography>
            </Box>
        );
    }
    if(!receta) {
        return(
            <Container maxWidth="lg" sx={{ py: 6, textAlign: 'center' }}>
                <Alert severity="warning" sx={{ mb: 3 }}>
                    La receta de ID "{id}" no fue encontrada.
                </Alert>
                <Button
                    variant="contained"
                    onClick={()=> navigate('/receta')} // ← Cambié a '/receta'
                    startIcon={<ArrowBack />}
                > Volver al listado </Button>
            </Container>
        );
    }
    return (
        <Container maxWidth="lg" sx={{ py: 4}}>
            <Button 
                variant="outlined" 
                onClick={()=> navigate('/receta')} // ← Cambié a '/receta'
                startIcon={<ArrowBack />}
                sx={{ mb: 2 }}
            > Volver al listado </Button>
            <RecetaDetalle receta={receta} />
        </Container>
    );
};

export default RecetaDetallePage;
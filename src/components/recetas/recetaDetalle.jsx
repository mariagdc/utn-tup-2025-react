import { Typography, Paper, Grid, Box, Chip, Stack, CardMedia, List, ListItem, ListItemText, Divider } from "@mui/material";
import { AccessTime, People, LocalDining, ArrowBack } from "@mui/icons-material";
import IngredientesList from './ingredientesList';

const RecetaDetalle = ({ receta }) =>{

    const getDificultadColor = (dificultad) =>{
        return dificultad === "Fácil" ? "success" : dificultad === "Media" ? "warning" : "error";
    };

    return(
        <Paper elevation={3} sx={{ p:{ xs:2, md:4 }, mt: 4}}>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <CardMedia 
                        component="img"
                        image={receta.imagen}
                        alt={receta.titulo}
                        sx={{
                            borderRadius: '8px',
                            maxHeight: '400px',
                            width: '100%',
                            objectFit: 'cover',
                            boxShadow: 2
                        }}
                    />
                </Grid>

                <Grid item xs={12} md={6}>
                    <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 600}}>
                        {receta.titulo}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph>
                        {receta.descripcion}
                    </Typography>
                    <Stack direction="row" spacing={1.5} sx={{ mb: 3, flexWrap: 'warp'}}>
                        <Chip 
                            icon={<AccessTime fontSize="small" />}
                            label={receta.tiempoPreparacion}
                            color="primary"
                            variant="outlined"
                        />
                        <Chip
                            icon={<LocalDining fontSize="samll" />}
                            label={receta.dificultad}
                            color={getDificultadColor(receta.dificultad)}
                        />
                        <Chip 
                            icon={<People fontSize="small"/>}
                            label={`${receta.porciones} porciones`}
                            color="info"
                            variant="outlined"
                        />
                    </Stack>
                    <Chip
                        label={`Categoría: ${receta.categoria}`}
                        size="small"
                        sx={{ mb: 2 }}
                    />
                </Grid>

                {/* Ingredientes */}
                <Grid item xs={12} md={4}>
                    <IngredientesList ingredientes={receta.ingredientes} />
                </Grid>

                {/* Preparación */}
                <Grid item xs={12} md={8}>
                    <Typography variant="h5" components="h2" gutterBottom sx={{ mt:{xs:3, md: 0}, mb: 1, fontWeight: "bold" }}>
                        Proceso de Preparación
                    </Typography>
                    <Divider sx={{ mb: 2 }} />
                    <List>
                        { receta.pasos.map( (paso, index) =>(
                            <ListItem key={index} sx={{ alignItems: "flex-start", px: 0 }}>
                                <Typography variant="h6" color="primary" sx={{ mr: 2, fontWeight: 'bold'}}>
                                    { index + 1 }
                                </Typography>
                                <ListItemText primary={paso} primaryTypographyProps={{ variant: 'body1'}} />
                            </ListItem>
                        ))}
                    </List>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default RecetaDetalle;
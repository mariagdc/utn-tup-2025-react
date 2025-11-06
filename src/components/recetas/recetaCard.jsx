import { Card, CardMedia, CardContent, CardActions, Typography, Button, Chip, Stack } from '@mui/material';
import { AccessTime, People } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const RecetaCard = ({ receta }) => {

    const navigate = useNavigate();

    const handleVerReceta = () => {
        navigate(`/recetas/${receta.id}`);
    };

    const getDificultadColor = (dificultad) => {
        switch (dificultad) {
            case 'Fácil':
                return 'success';
            case 'Media':
                return 'warning';
            case 'Difícil':
                return 'error';
            default:
                return 'default';
        }
    };

    return (
        <Card
            sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 8,
                },
            }}
        >
            <CardMedia component="img" height="200" image={receta.imagen} alt={receta.titulo} sx={{ objectFit: 'cover' }} />
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant='h5' component="div" gutterBottom>{receta.titulo}</Typography>
                <Typography variant='body2' color="text.secondary" sx={{ mb: 2 }}>
                    {receta.descripcion.substring(0, 70)}...
                </Typography>
                <Stack direction="row" spacing={1} sx={{ mb: 1, flexWrap: 'wrap' }}>
                    <Chip
                        icon={<AccessTime fontSize='small' />}
                        label={receta.tiempoPreparacion}
                        size="samll"
                        variant='outlined'
                    />
                    <Chip
                        label={receta.dificultad}
                        size='small'
                        color={getDificultadColor(receta.dificultad)}
                        sx={{ fontWeight: 'bold' }}
                    />
                </Stack>
                <Chip
                    icon={<People fontSize='small' />}
                    label={`${receta.porciones} porciones`}
                    size='small'
                    variant='outlined'
                />
            </CardContent>
            <CardActions>
                <Button size='medium' variant='contained' fullWidth onClick={handleVerReceta} sx={{ fontWeight: 'bold' }}> Ver Receta </Button>
            </CardActions>
        </Card>
    );
};
export default RecetaCard;
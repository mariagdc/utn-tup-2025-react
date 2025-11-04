import { AppBar, Toolbar, Typography, Button, Container, Box } from "@mui/material";
import { MenuBook } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <AppBar position="static" color="primary">
        <Container maxWidth="lg">
            <Toolbar disableGutters>
                <h2>Recetas App</h2>
                <MenuBook sx={{ mr: 1, display: {xs: 'none', md: 'flex'} }}/>
                <Box sx={{ flexGrow: 1 }} />
                <Button color="inherit" component={Link} to="/recetas"> Listado de Recetas</Button>
                {/* Agregar boton hamburguesa para vista celular */}
            </Toolbar>
        </Container>
    </AppBar>
    );
};
export default Navbar;
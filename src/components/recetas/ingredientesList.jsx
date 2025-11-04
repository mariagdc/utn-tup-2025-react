import { List, ListItem, ListItemText, Typography, Divider } from "@mui/material";

const IngredientesList = ({ ingredientes }) => {
    return(
        <>
            <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 3, mb: 1, fontWeight: "bold"}}>
                Ingredientes
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <List dense>
                {ingredientes.map( (ingrediente, index) => (
                    <ListItem key={index} sx={{ py: 0.5, px: 0 }}>
                        <ListItemText 
                            primary={`${ingrediente.cantidad} ${ingrediente.unidad} - ${ingrediente.nombre}`}
                            primaryTypographyProps={{ variant: 'body1' }} 
                        />
                    </ListItem>
                ))}
            </List>
        </>
    );
}
export default IngredientesList;
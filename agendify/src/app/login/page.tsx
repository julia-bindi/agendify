import { Button, Container, Typography } from '@mui/material';

export default function Login() {
    return (
        <Container
            disableGutters
            maxWidth={false}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                width: 'fit-content',
            }}>
            <Typography variant='h3'>Acesse a sua conta</Typography>
            <Typography>E-mail</Typography>
            <Typography>Senha</Typography>
            <Button variant='contained' href='/login'>Entrar</Button>
            <Typography>Não tem uma conta? Cadastre-se</Typography>
        </Container>
    );
};

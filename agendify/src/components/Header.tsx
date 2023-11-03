import Image from "next/image";
import { Button, Container } from '@mui/material';

export default function Header() {
    return (
        <Container
            disableGutters
            maxWidth={false}
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '24px 40px',
                boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
            }}>
            <Image
              src="/agendify_header.png"
              alt="Agendify Logo"
              width={200}
              height={46}
              priority
            />
            <Button variant="contained" href="/login">Entrar</Button>
        </Container>
    );
};
  
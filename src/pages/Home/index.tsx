import React from 'react';
import { toast } from 'react-toastify';
import { Button, Container } from '@material-ui/core';
import { logout } from '../../services/auth';

const Home: React.FC = () => {
  const handleLogOut = () => {
    // logout();
    toast.success('Configurações adicionadas com sucesso', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  return (
    <Container>
      <h1>Home</h1>
      <Button onClick={handleLogOut}>Tenis</Button>
    </Container>
  );
};

export default Home;

import { Box, Modal, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../contexts/Auth';
import paths from '../../utils/paths';
import { Button } from '../Button';

export const ModalAlert = () => {
  const { isOpenModal, toggleModal } = useAuth();

  const navigate = useNavigate();

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 3,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 0.7,
  };

  return (
    <>
      <Modal open={isOpenModal} onClose={toggleModal}>
        <Box sx={style}>
          <Typography
            sx={{ marginBottom: 2, textAlign: 'center' }}
            id='modal-modal-title'
            variant='h6'
          >
            Olá! Para visualizar ou adicionar itens ao carrinho, acesse a sua
            conta
          </Typography>
          <Button
            onClick={() => {
              navigate(paths.register);
              toggleModal();
            }}
            styles={{
              width: '60%',
            }}
          >
            Cadastrar
          </Button>
          <Button
            onClick={() => {
              navigate(paths.login);
              toggleModal();
            }}
            styles={{
              width: '60%',
              background: 'transparent',
              color: '#0058a1',
              border: '1px solid #0058a1',
            }}
          >
            Entrar
          </Button>
        </Box>
      </Modal>
    </>
  );
};

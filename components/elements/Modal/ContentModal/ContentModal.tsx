import { Box, Modal } from '@mui/material';
import { ReactNode } from 'react';

type ContentModalProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
};

export const ContentModal = ({
  open,
  onClose,
  children,
}: ContentModalProps) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      slotProps={{
        backdrop: {
          style: {
            backgroundColor: 'transparent',
            backdropFilter: 'blur(10px)',
          },
        },
      }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      aria-modal="true"
      role="dialog"
    >
      <Box
        sx={{
          maxWidth: '600px',
          margin: 'auto',
          outline: 'none',
          position: 'relative',
          padding: '16px',
        }}
      >
        {children}
      </Box>
    </Modal>
  );
};

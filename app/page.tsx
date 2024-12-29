import { Box, Typography } from '@mui/material';

export default function Home() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        bgcolor: '#e0e0e0',
      }}
    >
      <Box
        sx={{
          bgcolor: '#f0f0f0',
          borderRadius: '16px',
          boxShadow: '10px 10px 30px #d1d1d1, -10px -10px 30px #ffffff',
          p: { xs: 2, md: 3 },
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: '#333',
            fontWeight: 'bold',
            textShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
          }}
        >
          このページは作成予定。
        </Typography>
      </Box>
    </Box>
  );
}

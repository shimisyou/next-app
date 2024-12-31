import { NeumorphicText } from '@/components/elements/Text/NeumorphicText/NeumorphicText';
import { Box } from '@mui/material';

export default function Home() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <NeumorphicText
        variant="h6"
        sx={{
          color: '#333',
          fontWeight: 'bold',
          textShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
        }}
      >
        このページは作成中です
      </NeumorphicText>
    </Box>
  );
}

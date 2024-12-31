import { NeumorphicText } from '@/components/elements/Text/NeumorphicText/NeumorphicText';
import { Box } from '@mui/material';

export default function NotFound() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: '#f5f5f5',
        color: '#333',
        textAlign: 'center',
        gap: 2,
      }}
    >
      {/* タイトル部分: 外側の影 */}
      <NeumorphicText
        variant="h1"
        isInset={false}
        sx={{
          fontSize: { xs: '3rem', md: '5rem' },
          fontWeight: 'bold',
          mb: 2,
        }}
      >
        404
      </NeumorphicText>

      {/* 説明部分: インセット影 */}
      <NeumorphicText
        variant="body1"
        sx={{
          fontSize: { xs: '1.1rem', md: '1.5rem' },
          padding: 2,
        }}
      >
        Not Found
      </NeumorphicText>
    </Box>
  );
}

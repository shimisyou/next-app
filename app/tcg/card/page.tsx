'use client';

import NeumorphicButton from '@/components/elements/Button/NeumorphicButton/NeumorphicButton';
import NeumorphicIconButton from '@/components/elements/Button/NeumorphicIconButton/NeumorphicIconButton';
import { NeumorphicText } from '@/components/elements/Text/NeumorphicText/NeumorphicText';
import { TCGCard } from '@/features/TCG/components/TCGCard/TCGCard';
import { useStoredCards } from '@/features/TCG/hooks/useStoredCards';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';

const CardListPage = () => {
  const { cards, deleteCard, clearAll } = useStoredCards();

  return (
    <Box>
      {/* ヘッダー */}
      <Box
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        gap={2}
      >
        <NeumorphicText variant="body1">所持カード</NeumorphicText>
        <Box display="flex" gap={2}>
          <Link href="/tcg/open-pack">
            <NeumorphicButton>カードを集める</NeumorphicButton>
          </Link>
          <NeumorphicIconButton onClick={clearAll}>
            <DeleteIcon />
          </NeumorphicIconButton>
        </Box>
      </Box>

      {/* カードリスト */}
      <Box
        display="flex"
        flexWrap="wrap"
        gap={3}
        justifyContent="center"
        mt={2}
      >
        {cards.map((card) => (
          <Box key={card.id} sx={{ position: 'relative' }}>
            <NeumorphicIconButton
              onClick={() => deleteCard(card.id)}
              sx={{
                position: 'absolute',
                top: '-8px',
                right: '-8px',
                zIndex: 10,
                width: '25px',
                height: '25px',
              }}
            >
              <DeleteIcon fontSize="small" sx={{ fontSize: '15px' }} />
            </NeumorphicIconButton>
            <TCGCard card={card} />
            <Typography
              sx={{
                position: 'absolute',
                bottom: '-8px',
                right: '-4px',
                backgroundColor: '#ffffff',
                borderRadius: '4px',
                padding: '2px 4px',
                color: 'gray',
                fontSize: '0.6rem',
                boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
                zIndex: 10,
              }}
            >
              x{card.count}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default CardListPage;

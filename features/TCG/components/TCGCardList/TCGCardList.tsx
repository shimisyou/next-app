import NeumorphicIconButton from '@/components/elements/Button/NeumorphicIconButton/NeumorphicIconButton';
import { TCGCard } from '@/features/TCG/components/TCGCard/TCGCard';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Typography } from '@mui/material';
import Grid2 from '@mui/material/Grid2';
import { ReactNode } from 'react';
import { StoredCard } from '../../types';

interface TCGCardListProps {
  cards: StoredCard[];
  onDelete: (id: number) => void;
  children?: ReactNode; // ソートボタンなどを受け取る
}

const TCGCardList = ({ cards, onDelete, children }: TCGCardListProps) => (
  <Grid2
    container
    spacing={3}
    sx={{
      padding: '1rem',
    }}
  >
    {/* カードリスト */}
    {cards.map((card) => (
      <Grid2
        key={card.id}
        size={{ xs: 6, sm: 4, md: 3 }} // SP時に2列表示、MD以上で3列
        sx={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            maxWidth: '200px', // カードの最大幅を指定
            overflow: 'hidden',
          }}
        >
          {/* 削除ボタン */}
          <NeumorphicIconButton
            icon={<DeleteIcon sx={{ fontSize: '15px' }} />}
            hideBoxShadow
            onClick={() => onDelete(card.id)}
            sx={{
              position: 'absolute',
              top: '8px',
              right: '8px',
              zIndex: 10,
              width: '20px',
              height: '20px',
            }}
          />

          {/* カード本体 */}
          <TCGCard card={card} />

          {/* 所持数 */}
          <Typography
            sx={{
              position: 'absolute',
              bottom: '8px',
              right: '8px',
              backgroundColor: '#ffffff',
              borderRadius: '4px',
              padding: '2px 6px',
              color: 'gray',
              fontSize: '0.8rem',
              boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
              zIndex: 10,
            }}
          >
            x{card.count}
          </Typography>
        </Box>
      </Grid2>
    ))}

    {/* ソートボタンなどを受け取る */}
    {children && (
      <Grid2
        size={{ xs: 12 }}
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        {children}
      </Grid2>
    )}
  </Grid2>
);

export default TCGCardList;

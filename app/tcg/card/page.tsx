'use client';

import { TCGCard } from '@/features/TCG/components/TCGCard/TCGCard';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

import NeumorphicButton from '@/components/elements/Button/NeumorphicButton/NeumorphicButton';
import NeumorphicIconButton from '@/components/elements/Button/NeumorphicIconButton/NeumorphicIconButton';
import { NeumorphicText } from '@/components/elements/Text/NeumorphicText/NeumorphicText';
import { Card } from '@/features/TCG/types';
import {
  clearLocalStorage,
  deleteCardFromLocalStorage,
  getCardsFromLocalStorage,
} from '@/features/TCG/utils/localStorage';
import Link from 'next/link';
type StoredCard = Card & {
  count: number; // カウントを管理
};

const CardListPage = () => {
  // 型を明示的に指定
  const [cards, setCards] = useState<StoredCard[]>([]);

  // ローカルストレージからカードを取得
  useEffect(() => {
    const storedCards = getCardsFromLocalStorage();
    setCards(storedCards);
  }, []);

  const handleDelete = (cardId: number) => {
    deleteCardFromLocalStorage(cardId);
    setCards(getCardsFromLocalStorage());
  };

  const handleClearAll = () => {
    clearLocalStorage();
    setCards([]); // 状態もリセット
  };

  return (
    <Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between" // アイテムを左右に配置
        flexWrap={'wrap'}
        gap={2}
      >
        <NeumorphicText variant="body1">所持カード</NeumorphicText>
        <Box display="flex" alignItems="center" justifyContent="center" gap={2}>
          <Link href="/tcg/open-pack" passHref>
            <NeumorphicButton>カードを集める</NeumorphicButton>
          </Link>
          <NeumorphicIconButton onClick={handleClearAll}>
            <DeleteIcon />
          </NeumorphicIconButton>
        </Box>
      </Box>

      {/* カードリスト */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 3,
          justifyContent: 'center',
          marginTop: '16px', // 上下にスペースを追加
        }}
      >
        {cards.map((card) => (
          <Box
            key={card.id}
            sx={{
              position: 'relative',
              display: 'inline-block',
            }}
          >
            <NeumorphicIconButton
              onClick={() => handleDelete(card.id)}
              sx={{
                position: 'absolute',
                top: '-8px',
                right: '-8px',
                zIndex: 10,
                width: '25px',
                height: '25px',
              }}
            >
              <DeleteIcon fontSize="inherit" sx={{ fontSize: '15px' }} />
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

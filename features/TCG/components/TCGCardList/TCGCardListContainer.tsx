'use client';
import NeumorphicButton from '@/components/elements/Button/NeumorphicButton/NeumorphicButton';
import NeumorphicIconButton from '@/components/elements/Button/NeumorphicIconButton/NeumorphicIconButton';
import { useStoredCards } from '@/features/TCG/hooks/useStoredCards';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Menu, MenuItem, Slide, TextField } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';
import { useCardManager } from '../../hooks/useCardManager';
import { StoredCard } from '../../types';
import TCGCardList from './TCGCardList';

const TCGCardListContainer = () => {
  const { cards: initialCards, deleteCard, clearAll } = useStoredCards();
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const { cards, filterText, setFilterText, sortOrder, sortKey, handleSort } =
    useCardManager(initialCards);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSortAndCloseMenu = (key: keyof StoredCard) => {
    handleSort(key);
    handleMenuClose();
  };

  const handleSearchToggle = () => {
    setIsSearchActive(!isSearchActive);
    if (!isSearchActive) setFilterText('');
  };

  return (
    <Box>
      {/* 操作ボタン */}
      <Box
        display="flex"
        gap={2}
        justifyContent={'space-between'}
        alignItems="center"
        sx={{ py: 2 }}
      >
        <Link href="/tcg/open-pack">
          <NeumorphicButton text="カードを集める" size="small" />
        </Link>
        <NeumorphicIconButton
          size="small"
          onClick={handleSearchToggle}
          icon={isSearchActive ? <CloseIcon /> : <SearchIcon />}
        />

        <NeumorphicButton
          text="全て削除"
          size="small"
          colorVariant="danger"
          onClick={() => {
            clearAll();
            setFilterText('');
          }}
        />
      </Box>

      {/* カードリスト */}
      <Box
        sx={{
          height: 'calc(100vh - 200px)',
          overflowY: 'auto',
        }}
      >
        <TCGCardList cards={cards} onDelete={deleteCard}>
          {/* ソートボタン */}
          <NeumorphicIconButton
            hideBoxShadow
            onClick={handleMenuOpen}
            icon={
              sortOrder === 'asc' ? (
                <ArrowUpwardIcon sx={{ color: '#f44336' }} />
              ) : (
                <ArrowDownwardIcon sx={{ color: '#2196f3' }} />
              )
            }
            sx={{
              position: 'fixed',
              bottom: 100,
              right: 20,
              zIndex: 1000,
            }}
          />
        </TCGCardList>
      </Box>

      {/* 下部スライドイン検索フォーム */}
      <Slide direction="up" in={isSearchActive} mountOnEnter unmountOnExit>
        <Box
          sx={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            width: '100%',
            bgcolor: '#f5f5f5',
            boxShadow: '0px -4px 12px rgba(0, 0, 0, 0.3)',
            padding: '16px',
            zIndex: 1000,
          }}
        >
          <TextField
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
            placeholder="名前で絞り込み"
            variant="outlined"
            size="small"
            fullWidth
            sx={{
              bgcolor: '#ffffff',
              borderRadius: '8px',
            }}
          />
        </Box>
      </Slide>

      {/* ソートメニュー */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        disableScrollLock
        sx={{
          '& .MuiPaper-root': {
            bgcolor: '#444',
            color: '#fff',
            borderRadius: '8px',
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.4)',
          },
        }}
      >
        {['name', 'rarity', 'createdAt'].map((key) => (
          <MenuItem
            key={key}
            onClick={() => handleSortAndCloseMenu(key as keyof StoredCard)}
            sx={{
              color: sortKey === key ? '#fff' : 'gray',
              fontWeight: sortKey === key ? 'bold' : 'normal',
              '&:hover': {
                bgcolor: '#555',
              },
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            {key === 'name' && '名前順'}
            {key === 'rarity' && 'レアリティ順'}
            {key === 'createdAt' && '入手順'}
            {sortKey === key &&
              (sortOrder === 'asc' ? (
                <ArrowUpwardIcon sx={{ fontSize: 16, color: '#fff', ml: 1 }} />
              ) : (
                <ArrowDownwardIcon
                  sx={{ fontSize: 16, color: '#fff', ml: 1 }}
                />
              ))}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default TCGCardListContainer;

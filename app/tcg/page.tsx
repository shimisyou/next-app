import NavigationCard from '@/components/elements/NavigationCard/NavigationCard';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import ViewListIcon from '@mui/icons-material/ViewList';
import Grid2 from '@mui/material/Grid2'; // 正しいGrid2のインポート

export default function TcgPage() {
  return (
    <Grid2
      container
      spacing={3} // グリッド要素間の余白
      columns={12} // 全体の列数を指定
      sx={{
        padding: '2rem',
        bgcolor: '#f5f5f5',
      }}
    >
      {/* カード一覧 */}
      <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
        <NavigationCard
          title="カード一覧"
          description="集めたカードを確認しよう！"
          href="/tcg/card"
          icon={<ViewListIcon fontSize="large" />}
        />
      </Grid2>

      {/* パック開封 */}
      <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
        <NavigationCard
          title="パック開封"
          description="新しいカードを集めよう！"
          href="/tcg/open-pack"
          icon={<CardGiftcardIcon fontSize="large" />}
        />
      </Grid2>
    </Grid2>
  );
}

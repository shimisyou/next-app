import { Drawer, List, ListItem, Typography } from '@mui/material';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar = ({ isOpen, toggleSidebar }: SidebarProps) => {
  return (
    <Drawer
      anchor="left"
      open={isOpen}
      onClose={toggleSidebar}
      variant="temporary" // サイドバーを重ねる設定
      disableScrollLock={true} // スクロールロックを無効化
      slotProps={{
        backdrop: {
          style: {
            backgroundColor: 'transparent', // 背景を透明に設定
          },
        },
      }}
      sx={{
        '& .MuiDrawer-paper': {
          width: '240px',
          bgcolor: '#f5f5f5', // 柔らかな背景色
          boxShadow: '4px 4px 8px #e0e0e0, -4px -4px 8px #ffffff', // ニューモーフィズム影
          borderRadius: '0 16px 16px 0',
          padding: '16px',
        },
      }}
    >
      <List sx={{ gap: 2, display: 'flex', flexDirection: 'column' }}>
        {['Storybook'].map((text, index) => (
          <ListItem
            key={index}
            component="a"
            href="https://shimisyou.github.io/next-app/storybook/"
            target="_blank"
            sx={{
              bgcolor: '#f5f5f5',
              borderRadius: '16px',
              boxShadow: '6px 6px 12px #d1d1d1, -6px -6px 12px #ffffff', // ニューモーフィズム影
              color: '#333',
              padding: '15px 20px',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease-in-out',
              '&:hover': {
                bgcolor: '#eaeaea', // ホバー時の背景色
              },
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontWeight: 'bold',
                textShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
                textAlign: 'center',
              }}
            >
              {text}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;

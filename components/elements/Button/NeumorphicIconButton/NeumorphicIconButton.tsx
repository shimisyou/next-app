import { IconButton, IconButtonProps } from '@mui/material';

interface NeumorphicIconButtonProps extends IconButtonProps {
  children?: React.ReactNode;
}

const NeumorphicIconButton = ({
  children,
  ...props
}: NeumorphicIconButtonProps) => {
  return (
    <IconButton
      sx={{
        bgcolor: '#f5f5f5',
        borderRadius: '50%',
        boxShadow: '6px 6px 12px #d1d1d1, -6px -6px 12px #ffffff', // 控えめなニューモーフィズム
        '&:hover': {
          bgcolor: '#eaeaea', // ホバー時の色を調整
        },
        width: { xs: 48, md: 64 },
        height: { xs: 48, md: 64 },
        transition: 'all 0.2s ease-in-out', // スムーズなホバーアニメーション
      }}
      {...props}
    >
      {children}
    </IconButton>
  );
};

export default NeumorphicIconButton;

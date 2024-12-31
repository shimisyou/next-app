import { IconButton, IconButtonProps } from '@mui/material';

interface NeumorphicIconButtonProps extends IconButtonProps {
  isInset?: boolean; // true: インセット影, false: 通常影
  children?: React.ReactNode;
}

const NeumorphicIconButton = ({
  isInset = false, // デフォルトは通常影
  children,
  sx = {},
  ...props
}: NeumorphicIconButtonProps) => {
  return (
    <IconButton
      sx={{
        bgcolor: '#f5f5f5',
        borderRadius: '50%',
        boxShadow: isInset
          ? 'inset 6px 6px 12px #d1d1d1, inset -6px -6px 12px #ffffff' // インセット影
          : '6px 6px 12px #d1d1d1, -6px -6px 12px #ffffff', // 通常影
        '&:hover': {
          bgcolor: '#eaeaea', // ホバー時の色
        },
        width: { xs: 48, md: 64 },
        height: { xs: 48, md: 64 },
        ...sx, // カスタムスタイルをマージ
      }}
      {...props}
    >
      {children}
    </IconButton>
  );
};

export default NeumorphicIconButton;

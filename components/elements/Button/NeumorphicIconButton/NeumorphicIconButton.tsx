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
        bgcolor: '#e0e0e0',
        borderRadius: '50%',
        boxShadow: '5px 5px 15px #bebebe, -5px -5px 15px #ffffff', // ニューモーフィズムスタイル
        '&:hover': {
          bgcolor: '#d0d0d0',
        },
        width: { xs: 48, md: 64 }, // アイコンボタンのサイズを調整
        height: { xs: 48, md: 64 }, // アイコンボタンのサイズを調整
      }}
      {...props}
    >
      {children}
    </IconButton>
  );
};

export default NeumorphicIconButton;

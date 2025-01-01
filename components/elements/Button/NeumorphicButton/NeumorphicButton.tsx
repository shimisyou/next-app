import { Button, ButtonProps, Typography } from '@mui/material';

interface NeumorphicButtonProps extends ButtonProps {
  children?: React.ReactNode;
}

const NeumorphicButton = ({
  children,
  sx = {},
  ...props
}: NeumorphicButtonProps) => {
  return (
    <Button
      sx={{
        bgcolor: '#f5f5f5',
        borderRadius: '16px',
        boxShadow: '6px 6px 12px #d1d1d1, -6px -6px 12px #ffffff', // 控えめなニューモーフィズム
        color: '#333',
        padding: '10px 20px',
        '&:hover': {
          bgcolor: '#eaeaea', // NeumorphicIconButtonと同じホバー時の背景色
        },
        ...sx,
      }}
      {...props}
    >
      <Typography
        sx={{
          fontWeight: 'bold',
          textShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
        }}
      >
        {children}
      </Typography>
    </Button>
  );
};

export default NeumorphicButton;

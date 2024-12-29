import { Button, ButtonProps, Typography } from '@mui/material';

interface NeumorphicButtonProps extends ButtonProps {
  children?: React.ReactNode;
}

const NeumorphicButton = ({ children, ...props }: NeumorphicButtonProps) => {
  return (
    <Button
      variant="contained"
      color="primary"
      sx={{
        bgcolor: '#e0e0e0', // NeumorphicIconButtonと同じ背景色
        boxShadow: '5px 5px 15px #bebebe, -5px -5px 15px #ffffff', // NeumorphicIconButtonと同じ影
        color: '#333',
        borderRadius: '50px',
        padding: '10px 20px',
        '&:hover': {
          bgcolor: '#d0d0d0', // NeumorphicIconButtonと同じホバー時の背景色
        },
      }}
      {...props}
    >
      <Typography
        variant="h6"
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

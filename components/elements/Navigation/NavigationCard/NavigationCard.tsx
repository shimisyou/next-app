import { NeumorphicText } from '@/components/elements/Text/NeumorphicText/NeumorphicText';
import { Box, Card, CardContent, Typography } from '@mui/material';
import Link from 'next/link';

type NavigationCardProps = {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
};

const NavigationCard = ({
  title,
  description,
  href,
  icon,
}: NavigationCardProps) => {
  return (
    <Link
      href={href}
      style={{
        textDecoration: 'none',
        color: 'inherit',
        display: 'block',
      }}
    >
      <Card
        sx={{
          width: '100%',
          bgcolor: '#f5f5f5',
          borderRadius: '12px',
          boxShadow: '4px 4px 8px #e0e0e0, -4px -4px 8px #ffffff',
          margin: '16px 0',
          overflow: 'hidden',
          textAlign: 'center',
          transition:
            'background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between', // 上下に均等配置
          alignItems: 'center',
          minHeight: '200px', // カードの高さを統一
          padding: '16px',
          gap: 2,
          '&:hover': {
            bgcolor: '#eaeaea',
            boxShadow: '6px 6px 12px #d1d1d1, -6px -6px 12px #ffffff',
          },
        }}
      >
        {/* ヘッダー */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2,
            textAlign: 'center',
          }}
        >
          {icon}
          <NeumorphicText isInset variant="h6">
            {title}
          </NeumorphicText>
        </Box>

        {/* コンテンツ */}
        <CardContent
          sx={{
            textAlign: 'center',
            flex: 1, // 空間を均等に使う
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              lineHeight: 1.5,
            }}
          >
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default NavigationCard;

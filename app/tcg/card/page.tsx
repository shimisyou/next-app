import { NeumorphicText } from '@/components/elements/Text/NeumorphicText/NeumorphicText';
import TCGCardListContainer from '@/features/TCG/components/TCGCardList/TCGCardListContainer';

const CardListPage = () => {
  return (
    <>
      <NeumorphicText variant="body1">所持カード</NeumorphicText>
      <TCGCardListContainer />
    </>
  );
};

export default CardListPage;

type Rarity = 'ultraRare' | 'superRare' | 'rare' | 'common';

export const cardsData: Record<Rarity, { name: string; img: string }[]> = {
  ultraRare: [
    { name: '虫取り少年', img: '/cards/series1/ultra-rare/01.png' },
    { name: '王様', img: '/cards/series1/ultra-rare/02.png' },
    { name: '王女', img: '/cards/series1/ultra-rare/03.png' },
    { name: 'ツチノコ', img: '/cards/series1/ultra-rare/04.png' },
  ],
  superRare: [
    { name: 'サメちゃん', img: '/cards/series1/super-rare/01.png' },
    { name: 'ポセイドン', img: '/cards/series1/super-rare/02.png' },
    { name: '青いウーパールーパー', img: '/cards/series1/super-rare/03.png' },
  ],
  rare: [
    { name: '巫女', img: '/cards/series1/rare/01.png' },
    { name: 'ユグドラシル', img: '/cards/series1/rare/02.png' },
  ],
  common: [
    { name: 'オオカミ', img: '/cards/series1/common/01.png' },
    { name: '近所のじっちゃん', img: '/cards/series1/common/02.png' },
    { name: '偉そうな犬', img: '/cards/series1/common/03.png' },
    { name: '森の少女', img: '/cards/series1/common/04.png' },
    { name: '森のねえさん', img: '/cards/series1/common/05.png' },
  ],
};

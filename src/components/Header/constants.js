import { SCREENS } from '../../routes/endpoints';

const navigationItems = [
  { text: 'Главная', to: SCREENS.LANDING },
  { text: 'Технология', to: '/mock-address/change-me' },
  { text: 'График полетов', to: '/mock-address/change-me' },
  { text: 'Гарантии', to: '/mock-address/change-me' },
  { text: 'О компаии', to: '/mock-address/change-me' }, // Чтобы увидеть соблюдение PP оставил слово с опечаткой (на макете О Компаии)
  { text: 'Контакты', to: '/mock-address/change-me' },
];

export { navigationItems };
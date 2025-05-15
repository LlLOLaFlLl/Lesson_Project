В некоторых элементах и компонентах желаемого результата добиться не удалось (Например, анимации в слайдере ресторанов или адаптация меню для мобилок)

**Зависимости** (вероятно что-то упустил):
```bash
npm install @vitejs/plugin-vue@5.2.4 lucide-vue-next@0.510.0 sass-embedded@1.87.0 swiper@11.2.6 vite@6.3.5 vue-router@4.5.1 vue@3.5.13
```

**Кликабельные элементы:**
- Баннер "Ханс Циммер" на главной странице - переносит в подробности о концерте
- Кнопка аутентификации в хедере - открывает окно аутентификации
- Кнопка меню в хедере - открывает меню
- "Хотите сотрудничать?" в футере - открывает страницу с контактами

**Структура проекта:**
```
src/
├── components/
│   ├── header/          # хедер
│   ├── footer/          # футер
│   ├── auth/            # форма аутентификации
│   ├── MainMenu/        # главное меню
│   └── pages/           # основные страницы
├── assets/
│   ├── icons/           # иконки для соцсетей
│   ├── images/          # все изображения
│   └── scss/            # стили из бойлерплейта
├── components/home/
│   ├── HeroBanner/      # Главный баннер (Ханс Циммер)
│   ├── EventCardsRow/   # События в ближайшие дни
│   ├── PromoBanner/     # Реклама
│   ├── ConcertSlider/   # Слайдер концертов
│   ├── SpecialEvent/    # Реклама концерта
│   ├── TravelCards/     # места Крыма
│   └── SubscriptionForm # Форма подписки
├── components/concertDetail/
│   ├── concertBanner/       # Главный баннер детальной страницы
│   ├── EventDetailsInfo/    # Информация о концерте
│   ├── ConcertGallery/      # Кадры с концерта
│   ├── ConcertPerformers/   # Исполнители
│   ├── ConcertSchedule/     # Расписание
│   ├── ConcertDescription/  # Доп. информация
│   ├── VenueLocation/       # Карта
│   ├── SocialInviteBar/     # Планируете пойти?
│   ├── NearbyRestaurants/   # Рестораны
│   └── NearbyHotels/        # Отели
└── components/contactsPage/
    ├── ContactBanner/   # Баннер страницы контактов
    ├── ContactForm/     # Форма вопроса
    └── ContactInfo/     # Контактная информация

src/assets/images/
├── banners/       # баннеры (главные и рекламные)
├── concerts/      # фото ConcertsSlider
├── crimea/        # фото для TravelCards
├── event/         # фото для EventCardsRow
├── gallery/       # фото для ConcertGallery
├── hotels/        # фото для NearbyHotels
├── performers/    # фото для ConcertPerformers
└── restaurants/   # фото для NearbyRestaurants
```

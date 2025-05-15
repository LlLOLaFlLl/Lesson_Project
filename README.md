*В некоторых элементах и компонентах желаемого результата добиться не удалось (Например, анимации в слайдере ресторанов или адаптация меню для мобилок)

Зависимости (вероятно что-то упустил):
npm install @vitejs/plugin-vue@5.2.4 lucide-vue-next@0.510.0 sass-embedded@1.87.0 swiper@11.2.6 vite@6.3.5 vue-router@4.5.1 vue@3.5.13

Кликабельные элементы:
Баннер "Ханс Циммер" на главной странице - переносит в подробности о концерте
Кнопка аутентификации в хедере - открывает окно аутентификации
Кнопка меню в хедере - открывает меню
"Хотите сотрудничать?" в футере - открывает страницу с контактами

Структура проекта:
src/components/
  header - хедер
  footer - футер
  auth - форма аутентификации (кнопка в хедере)
  MainMenu - меню (кнопка в хедере)
  pages - основные страницы: Главная, подробнее и контакты

scr/components/home/
  HeroBanner - Главный баннер (Ханс Циммер)
  EventCardsRow - События в ближайшие лни
  PromoBanner - Реклама
  ConcertSlider - Слайдер концертов
  SpecialEvent - Реклама концерта?
  TravelCards - места Крыма
  SubscriptionForm - Форма подписки

src/components/concertDetail/
  concertBanner - Главный баннер в подробнее (Ханс Циммер)
  EventDetailsInfo - Информация по концерту
  ConcertGallery - Кадры с концерта?
  ConcertPerformers - Исполнители
  ConcertSchedule - Расписание
  ConcertDescription - Еще информация
  VenueLocation - Карта
  SocialInviteBar - Планируете пойти на мероприятие?
  NearbyRestaurants - Рестораны
  NearbyHotels - Отели

src/components/contactsPage/
  ContactBanner - Главный баннер в контактах
  ContactForm - Форма заполнения вопроса
  ContactInfo - Адрес, телефон и карта

scr/assets/icons - содержит иконки соцсетей и прочее

scr/assets/images - фотографии
  banners - баннеры (главные и рекламные)
  concerts - фото ConcertsSlider
  crimea - фото для TravelCards
  event - фото для EventCardsRow
  gallery - фото для ConcertGallery
  hotels - фото для NearbyHotels
  performers - фото для ConcertPerformers
  restauranrs - фото для NearbyRestaurants

src/assets/scss - стили из бойлерплейта
  

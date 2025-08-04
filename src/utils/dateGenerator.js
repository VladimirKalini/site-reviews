// Утилита для генерации случайных дат в диапазоне 2020 - июнь 2025
export const generateRandomDate = () => {
  const start = new Date(2020, 0, 1); // 1 января 2020
  const end = new Date(2025, 5, 30);   // 30 июня 2025
  
  const randomTime = start.getTime() + Math.random() * (end.getTime() - start.getTime());
  const randomDate = new Date(randomTime);
  
  return randomDate.toLocaleDateString('ru-RU');
};

// Генерация времени отзыва (когда отзыв был оставлен)
export const generateTimeAgo = () => {
  const timeOptions = [
    '15 минут назад',
    '30 минут назад',
    '1 час назад',
    '2 часа назад',
    '3 часа назад',
    '5 часов назад',
    '12 часов назад',
    '1 день назад',
    '2 дня назад',
    '3 дня назад',
    '4 дня назад',
    '5 дней назад',
    '1 неделя назад',
    '2 недели назад',
    '3 недели назад',
    '1 месяц назад',
    '2 месяца назад',
    '3 месяца назад',
    '4 месяца назад',
    '5 месяцев назад',
    '6 месяцев назад',
    '8 месяцев назад',
    '10 месяцев назад',
    '1 год назад',
    '1.5 года назад',
    '2 года назад',
    '2.5 года назад',
    '3 года назад',
    '3.5 года назад',
    '4 года назад'
  ];
  
  return timeOptions[Math.floor(Math.random() * timeOptions.length)];
};
// Функція для налаштування теми в Telegram WebApp
export const setupTelegramTheme = () => {
    const tg = window.Telegram?.WebApp;
  
    if (tg) {
      // Налаштування кольору заголовка
      tg.setHeaderColor('bg_color'); // Чорний заголовок
      // Налаштування фону додатку
      tg.setBackgroundColor('#000000'); // Чорний фон
    }
  };
  
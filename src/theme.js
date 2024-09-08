export const setupTelegramTheme = () => {
    const tg = window.Telegram?.WebApp;
  
    if (tg) {
      // Встановлюємо чорний колір для заголовка незалежно від теми користувача
      tg.setHeaderColor('#000000'); // Чорний заголовок
      
      // Встановлюємо чорний фон для додатку незалежно від теми користувача
      tg.setBackgroundColor('#000000'); // Чорний фон додатку
    }
  };
  
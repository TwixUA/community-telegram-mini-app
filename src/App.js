import React, { useEffect, useState } from 'react';
import { setupTelegramTheme } from './theme';
import confetti from 'canvas-confetti'; // Імпортуємо бібліотеку конфеті
import './styles/global.css'; // Імпорт ваших стилів

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Перевіряємо, чи є об'єкт Telegram WebApp
    const tg = window.Telegram?.WebApp;

    // Налаштування теми через Telegram WebApp API
    setupTelegramTheme();

    if (tg) {
      // Використовуємо дані з Telegram
      const userData = tg.initDataUnsafe?.user;

      // Якщо є дані користувача, зберігаємо їх у стані
      if (userData) {
        setUser(userData);
      }

      // Активуємо кнопку закриття Telegram WebApp
      tg.ready();
    }
  }, []);

   // Виклик HapticFeedback при натисканні
   const handleAvatarClick = () => {
    const tg = window.Telegram?.WebApp;

    if (tg && tg.HapticFeedback) {
      // Викликаємо Haptic Feedback при натисканні
      tg.HapticFeedback.impactOccurred('light'); // 'light', 'medium', або 'heavy'
    }

    // Запускаємо конфеті
    confetti({
      particleCount: 150,
      spread: 60,
      origin: { y: 0.6 },
    });
  };

  return (
    <div className="container"> {/* Додаємо клас container */}
      {user ? (
        <div>
          <h1>Привіт, {user.first_name}!</h1>
          <p>Ваше ім'я: {user.first_name} {user.last_name}</p>
          <p>Нікнейм: @{user.username}</p>
          <p>ID: {user.id}</p>
          <img
            className="avatar" // Додаємо клас для аватарки
            src={user.photo_url || "https://cdn.prod.website-files.com/625816a3416990dd61391b9b/66c4d90bd4b9b8957e7bdad4_chromatic-17.avif"}
            alt="User Avatar"
            style={{ borderRadius: '50%', marginTop: '20px', width: '100px', height: '100px', cursor: 'pointer' }}
            onClick={handleAvatarClick}  // Додаємо подію кліку
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/150"; // Альтернативне зображення, якщо аватар не завантажується
            }}
          />
        </div>
      ) : (
        <p>Завантаження даних користувача...</p>
      )}
    </div>
  );
}

export default App;
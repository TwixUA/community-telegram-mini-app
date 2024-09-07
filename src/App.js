import React, { useEffect, useState } from 'react';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Перевіряємо, чи є об'єкт Telegram WebApp
    const tg = window.Telegram?.WebApp;

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
      // Викликаємо легкий вібраційний відгук
      tg.HapticFeedback.impactOccurred('light'); // 'light', 'medium' або 'heavy'
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      {user ? (
        <div>
          <h1>Привіт, {user.first_name}!</h1>
          <p>Ваше ім'я: {user.first_name} {user.last_name}</p>
          <p>Нікнейм: @{user.username}</p>
          <p>ID: {user.id}</p>
          <img
            src={user.photo_url || "https://via.placeholder.com/150"}
            alt="User Avatar"
            style={{ borderRadius: '50%', marginTop: '20px', width: '100px', height: '100px', cursor: 'pointer' }}
            onClick={handleAvatarClick}  // Додаємо подію кліку для аватара
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
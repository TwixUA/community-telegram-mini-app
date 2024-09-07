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

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      {user ? (
        <div>
          <h1>Привіт, {user.first_name}!</h1>
          <p>Ваше ім'я: {user.first_name} {user.last_name}</p>
          <p>Нікнейм: @{user.username}</p>
          <p>ID: {user.id}</p>
          <img src={user.photo_url} alt="User Avatar" style={{ borderRadius: '50%', marginTop: '20px' }} />
        </div>
      ) : (
        <p>Завантаження даних користувача...</p>
      )}
    </div>
  );
}

export default App;
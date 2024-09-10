import React, { useEffect, useState } from "react";
import { setupTelegramTheme } from "./theme";
import confetti from "canvas-confetti"; // Імпортуємо бібліотеку конфеті
import "./styles/global.css"; // Імпорт стилів
import Profile from "./components/Profile";

function App() {
  const [user, setUser] = useState(null);
  const [isTelegramApp, setIsTelegramApp] = useState(false);

  useEffect(() => {
    // Перевіряємо, чи є об'єкт Telegram WebApp і чи є параметри з Telegram
    const tg = window.Telegram?.WebApp;

    if (tg && window.Telegram.WebApp.initDataUnsafe?.user) {
      console.log("Додаток запущено в Telegram.");

      // Налаштування теми через Telegram WebApp API
      if (tg.version && parseFloat(tg.version) >= 6.0) {
        setupTelegramTheme();
      } else {
        console.warn(
          "Налаштування теми не підтримуються в цій версії WebApp API."
        );
      }

      const userData = tg.initDataUnsafe?.user;
      console.log("Дані користувача з Telegram:", userData);

      // Якщо є дані користувача, зберігаємо їх у стані
      if (userData) {
        setUser(userData);
      }

      // Вказуємо, що додаток запущений у Telegram
      setIsTelegramApp(true);

      // Активуємо кнопку закриття Telegram WebApp
      tg.ready();
    } else {
      console.log(
        "Додаток запущено поза Telegram. Використовуємо фіктивні дані."
      );
      // Фіктивні дані для локальної розробки
      setUser({
        first_name: "Фіктивний",
        last_name: "Користувач",
        username: "mock_user",
        id: 12345678,
        photo_url:
          "https://cdn3d.iconscout.com/3d/premium/thumb/gift-box-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--present-surprise-wanna-shop-pack-e-commerce-shopping-illustrations-3286985.png?f=webp",
      });
    }
  }, []);

  // Виклик HapticFeedback при натисканні
  const handleAvatarClick = () => {
    const tg = window.Telegram?.WebApp;

    if (tg && tg.HapticFeedback) {
      tg.HapticFeedback.impactOccurred("light"); // 'light', 'medium', або 'heavy'
    }

    // Запускаємо конфеті
    confetti({
      particleCount: 100,
      spread: 60,
      origin: { y: 0.15 },
    });
  };

  return (
    <div className="container">
      {user ? (
        <div onClick={handleAvatarClick}>
          <Profile />
        </div>
      ) : (
        <p>Завантаження даних користувача...</p>
      )}
    </div>
  );
}

export default App;

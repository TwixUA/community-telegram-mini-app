import React, { useEffect, useState } from 'react';

function UserProfile() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Ініціалізація Telegram WebApp
    const tg = window.Telegram.WebApp;

    // Отримання даних користувача з Telegram
    const user = tg.initDataUnsafe?.user;

    // Виклик API для отримання даних профілю
    if (user) {
      fetchUserProfile(user.id);
    }
  }, []);

  const fetchUserProfile = async (telegramUserId) => {
    try {
      const response = await fetch(`https://xdil-qda0-zofk.m2.xano.io/api:cOBZuYYG/mini-app/get-user/${telegramUserId}`);
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  if (!userData) {
    return <p>Loading...</p>;
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <img 
          src={userData.avatarUrl || "https://via.placeholder.com/150"} 
          alt="User Avatar" 
          style={styles.avatar} 
        />
        <h1 style={styles.username}>{userData.name || 'Ghost'}</h1>
        <p style={styles.userHandle}>@{userData.username}</p>
      </div>
      
      <div style={styles.statsContainer}>
        <div style={styles.statBox}>
          <span style={styles.statNumber}>{userData.gamesRegistered}</span>
          <p style={styles.statLabel}>Games registered</p>
        </div>
        <div style={styles.statBox}>
          <span style={styles.statNumber}>{userData.gamesVisited}</span>
          <p style={styles.statLabel}>Games visited</p>
        </div>
        <div style={styles.statBox}>
          <span style={styles.statNumber}>{userData.attendanceRate}%</span>
          <p style={styles.statLabel}>Team events attendance</p>
        </div>
      </div>

      <div style={styles.buttonContainer}>
        <button style={styles.messageButton}>Send message</button>
      </div>

      <div style={styles.infoContainer}>
        <div style={styles.infoBox}>
          <p style={styles.infoTitle}>{userData.rank}</p>
          <p style={styles.infoSubtitle}>User rank</p>
        </div>
        <div style={styles.infoBox}>
          <p style={styles.infoTitle}>{userData.playingSince}</p>
          <p style={styles.infoSubtitle}>Playing airsoft since</p>
        </div>
      </div>

      <div style={styles.teamContainer}>
        <h3 style={styles.teamTitle}>User's team</h3>
        <div style={styles.teamBox}>
          <p style={styles.teamName}>{userData.teamName}</p>
          <p style={styles.teamLocation}>{userData.teamLocation}</p>
          <span style={styles.teamArrow}>&rarr;</span>
        </div>
      </div>

      <div style={styles.aboutContainer}>
        <h3 style={styles.aboutTitle}>About</h3>
        <p style={styles.aboutText}>
          {userData.about}
        </p>
      </div>

      <div style={styles.navBar}>
        <div style={styles.navItem}>Events</div>
        <div style={styles.navItem}>Teams</div>
        <div style={styles.navItem}>Profile</div>
      </div>
    </div>
  );
}


const styles = {
  container: {
    backgroundColor: '#000',
    color: '#fff',
    fontFamily: 'Arial, sans-serif',
    padding: 20,
    maxWidth: 400,
    margin: '0 auto',
    borderRadius: 10,
  },
  header: {
    textAlign: 'center',
    marginBottom: 20,
  },
  avatar: {
    borderRadius: '50%',
    width: 100,
    height: 100,
  },
  username: {
    fontSize: 24,
    margin: 10,
  },
  userHandle: {
    fontSize: 16,
    color: '#888',
  },
  statsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statBox: {
    textAlign: 'center',
  },
  statNumber: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 12,
    color: '#888',
  },
  buttonContainer: {
    textAlign: 'center',
    marginBottom: 20,
  },
  messageButton: {
    backgroundColor: '#1E90FF',
    color: '#fff',
    padding: 10,
    borderRadius: 20,
    border: 'none',
    cursor: 'pointer',
  },
  infoContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  infoBox: {
    textAlign: 'center',
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoSubtitle: {
    fontSize: 12,
    color: '#888',
  },
  teamContainer: {
    marginBottom: 20,
  },
  teamTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  teamBox: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
    padding: 10,
    borderRadius: 10,
  },
  teamName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  teamLocation: {
    fontSize: 14,
    color: '#888',
  },
  teamArrow: {
    fontSize: 24,
    color: '#fff',
  },
  aboutContainer: {
    marginBottom: 20,
  },
  aboutTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  aboutText: {
    fontSize: 14,
    lineHeight: 1.6,
  },
  navBar: {
    display: 'flex',
    justifyContent: 'space-around',
    borderTop: '1px solid #333',
    paddingTop: 10,
    paddingBottom: 10,
  },
  navItem: {
    fontSize: 14,
    color: '#888',
  }
};

export default UserProfile;

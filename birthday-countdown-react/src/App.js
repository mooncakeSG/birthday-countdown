import React, { useState, useEffect, useMemo } from 'react';
import './App.css';
import CountdownPage from './components/CountdownPage';
import BirthdayPage from './components/BirthdayPage';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const [currentPage, setCurrentPage] = useState('countdown');
  const birthdayDate = useMemo(() => new Date('2025-10-31T00:00:00'), []); // Updated to October 31st 2025 for Che-Lynn

  useEffect(() => {
    const checkBirthdayTime = () => {
      const now = new Date();
      const distance = birthdayDate.getTime() - now.getTime();
      
      if (distance <= 0) {
        setCurrentPage('birthday');
      }
    };

    // Check immediately
    checkBirthdayTime();
    
    // Check every minute
    const interval = setInterval(checkBirthdayTime, 60000);
    
    return () => clearInterval(interval);
  }, [birthdayDate]);

  return (
    <div className="App">
      {currentPage === 'countdown' ? (
        <CountdownPage 
          birthdayDate={birthdayDate} 
          onBirthdayReached={() => setCurrentPage('birthday')} 
        />
      ) : (
        <BirthdayPage />
      )}
    </div>
  );
}

export default App;

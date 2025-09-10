import React, { useState, useEffect, useCallback, useMemo } from 'react';
import FutureMemories from './FutureMemories';

const CountdownPage = ({ birthdayDate, onBirthdayReached }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [dailyMessage, setDailyMessage] = useState('');
  
  // New interactive features based on chat history
  const [missYouCount, setMissYouCount] = useState(0);
  const [missYouHistory, setMissYouHistory] = useState([]);
  const [monthlyStats, setMonthlyStats] = useState({});
  
  // Background music state
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [audioRef, setAudioRef] = useState(null);
  
  // Navigation state
  const [activeSection, setActiveSection] = useState('countdown');

  // Daily messages object - organized by date
  const dailyMessages = useMemo(() => ({
    // June 2025
    '2025-06-19': "Hey my sweet drama queen 😭🫂, just thinking about how you make even the messiest days feel cozy. Can't wait to hold you tight soon ❤️. Also, maybe let the vacuum rest today? 😅",
    '2025-06-20': "Late night Instagram scrolls with you in my mind... how do you always find the cutest stories? 😍 Missing our little talks already. Sending you a virtual hug 🫂❤️",
    '2025-06-21': "Woke up thinking about your laugh today. You know, the one you do when you're trying not to cry but end up crying anyway 😭😂 Love every dramatic second of it ❤️",
    '2025-06-22': "Remember that scene in Purple Hearts where they first hold hands? That's how I feel every time you reach for mine 🫂💜 You're my favorite love story",
    '2025-06-23': "Che-Lynn, you're like sunshine wrapped in the softest blanket. Hope you're having the coziest day, my love 🌞🫂",
    '2025-06-24': "I bet you're deep cleaning something right now aren't you? 😅 Save some energy for cuddles later, you perfectionist ❤️",
    '2025-06-25': "Just saw something that reminded me of you... okay fine, it was literally everything 😭 You've taken over my whole heart, you know that?",
    '2025-06-26': "Late night thoughts: How did I get so lucky to find someone who cares as deeply as you do? You make everything feel like home 🏠❤️",
    '2025-06-27': "Your nurturing heart could heal the whole world, but I'm selfishly grateful it's healing mine every day 🫂😭",
    '2025-06-28': "Scrolling through my phone and every meme reminds me of your chaotic energy 😂 Miss your beautiful mess, my love",
    '2025-06-29': "You know what's unfair? How you can make even doing laundry look adorable. Stop being so perfect, it's not good for my heart 😅❤️",
    '2025-06-30': "Last day of June and I'm already counting down to October 31st 👻🎂 Can't wait to celebrate YOU properly, birthday girl!",
    
    // July 2025
    '2025-07-01': "New month, same obsession with you 😭 Hope July treats you as sweetly as you treat everyone around you ❤️",
    '2025-07-15': "Halfway through July and I'm getting butterflies thinking about your birthday countdown! 🦋 This is going to be epic",
    '2025-07-31': "Last July message: You've made every single day brighter just by existing. Here's to August being even more amazing ❤️🫂",
    
    // August 2025
    '2025-08-01': "New month, same beautiful you. August feels like it's going to be our month somehow 🌻❤️",
    '2025-08-15': "Halfway through August and my heart is already planning October celebrations. 77 more days, birthday girl! 🎂",
    '2025-08-31': "Last August message: Thank you for being consistently wonderful, dramatically perfect, and absolutely irreplaceable ❤️🫂",
    
    // September 2025
    '2025-09-01': "September is here! Birthday month is getting closer and I'm getting more excited by the day 🍂🎂✨",
    '2025-09-15': "Mid-September check-in: You're amazing, your heart is pure gold, and yes, everything does look spotless 🏠✨",
    '2025-09-30': "Last September message: One month until your birthday and I'm already emotional about it 😭 October, here we come! 🎂",
    
    // October 2025 - Birthday Month!
'2025-10-01': "BIRTHDAY MONTH IS HERE! 🎂✨👑 30 days until we celebrate the star of the show!",
'2025-10-02': "Your morning routine in birthday month probably comes with extra sparkle. The countdown is officially on! 🌅🎉",
'2025-10-03': "28 days to go and I’m already buzzing with excitement. This birthday is going to be unforgettable 🎂⚡",
'2025-10-05': "Only you could organize chaos while crying happy tears over your own birthday month 😭🫂",
'2025-10-10': "21 days left! Knowing you, those late-night plans include gifts for everyone else instead of yourself 📱😅",
'2025-10-15': "16 days until the big day! Halfway through October and the anticipation is reaching peak levels 🎉⚡",
'2025-10-20': "11 days left! Your dramatic countdown commentary is giving me all the butterflies 😭🦋",
'2025-10-25': "6 days away! Purple Hearts vibes: 'This feels right' - celebrating you always feels right 💜🎂",
'2025-10-28': "3 days left! Lake House energy: some moments are worth waiting for, and this one definitely is 💌✨",
'2025-10-29': "2 days to go! I bet your cleaning frenzy is officially in turbo mode for celebration prep 😅🧹",
'2025-10-30': "1 day away! Tomorrow is all about the most dramatic, organized, and amazing person I know 😭❤️ Get ready to be spoiled!",
'2025-10-31': "HAPPY BIRTHDAY CHE-LYNN! 🎂✨👑 Today celebrates your caring spirit, dramatic perfection, and the way you make every space feel like home. You deserve every ounce of joy, every laugh, and all the perfectly organized birthday magic 🫂💜🎉"
  }), []);

  const getDailyMessage = useCallback(() => {
    const today = new Date();
    const dateString = today.toISOString().split('T')[0]; // Format: YYYY-MM-DD
    
    // Check if we have a message for today
    if (dailyMessages[dateString]) {
      return dailyMessages[dateString];
    }
    
    // Fallback messages based on month
    const month = today.getMonth() + 1; // getMonth() returns 0-11
    
    if (month === 10) { // October - Birthday month
      return "October magic is in the air! ✨🍂 Every day this month is special because something wonderful is coming... 💫👑";
    } else if (month === 9) { // September
      return "September whispers of something beautiful ahead... 🍂 Can you feel the excitement building? ✨";
    } else if (month === 8) { // August
      return "August thoughts: Summer days thinking about how amazing you are ☀️ Something special is getting closer... 💫";
    } else if (month === 7) { // July
      return "July love: Every day with you (even from afar) feels like sunshine 🌞 Can't wait for what's coming! ❤️";
    } else {
      return "Thinking of you today and always 💕 Your beautiful heart makes every day brighter, and something wonderful awaits! ✨💫";
    }
  }, [dailyMessages]);

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedHistory = localStorage.getItem('missYouHistory');
    const savedStats = localStorage.getItem('monthlyStats');
    
    if (savedHistory) {
      const history = JSON.parse(savedHistory);
      setMissYouHistory(history);
      
      // Calculate today's count from history
      const today = new Date().toDateString();
      const todayCount = history.filter(entry => entry.date === today).length;
      setMissYouCount(todayCount);
    }
    
    if (savedStats) {
      setMonthlyStats(JSON.parse(savedStats));
    }
  }, []);

  // Initialize background music
  useEffect(() => {
    const audio = new Audio('/background-music.mp3');
    audio.loop = true;
    audio.volume = 0.3; // Set volume to 30%
    setAudioRef(audio);
    
    // Cleanup on unmount
    return () => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    };
  }, []);

  // Music control functions
  const toggleMusic = () => {
    if (audioRef) {
      if (isMusicPlaying) {
        audioRef.pause();
        setIsMusicPlaying(false);
      } else {
        audioRef.play().catch(error => {
          console.log('Autoplay prevented:', error);
          // Show user-friendly message
          if (window.Swal) {
            window.Swal.fire({
              title: '🎵 Music Ready!',
              text: 'Click the play button to start the background music',
              icon: 'info',
              confirmButtonText: 'Got it!',
              timer: 3000
            });
          }
        });
        setIsMusicPlaying(true);
      }
    }
  };

  // Calculate monthly statistics
  const calculateMonthlyStats = (history) => {
    const stats = {};
    history.forEach(entry => {
      const date = new Date(entry.timestamp);
      const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
      const monthName = date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
      
      if (!stats[monthKey]) {
        stats[monthKey] = { count: 0, name: monthName };
      }
      stats[monthKey].count++;
    });
    return stats;
  };

  // New interactive functions based on chat history
  const sendMissYou = () => {
    const now = new Date();
    const today = now.toDateString();
    const timestamp = now.getTime();
    
    const newEntry = {
      date: today,
      timestamp: timestamp,
      response: ""
    };
    
    const updatedHistory = [...missYouHistory, newEntry];
    setMissYouHistory(updatedHistory);
    setMissYouCount(prev => prev + 1);
    
    // Calculate and update monthly stats
    const newStats = calculateMonthlyStats(updatedHistory);
    setMonthlyStats(newStats);
    
    // Save to localStorage
    localStorage.setItem('missYouHistory', JSON.stringify(updatedHistory));
    localStorage.setItem('monthlyStats', JSON.stringify(newStats));
    
    const responses = [
      "I miss you too... so much it hurts &#128557;",
      "Why do you have to be so far away? &#129397;",
      "I wish I could teleport to you right now &#129303;",
      "Missing you is my full-time job apparently &#128584;",
      "Your absence is the only thing that makes me dramatic &#128557;"
    ];
    
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    
    // Show sweet popup
    if (window.Swal) {
      window.Swal.fire({
        title: '&#128557; Missing You Too...',
        html: `
          <div style="text-align: center; padding: 20px;">
            <div style="font-size: 3rem; margin-bottom: 1rem;">&#129303;</div>
            <p style="font-size: 1.1rem; color: #d63384; margin-bottom: 1rem;">
              ${randomResponse}
            </p>
            <p style="font-style: italic; color: #666; font-size: 0.9rem;">
              Miss you count: ${missYouCount + 1} times today
            </p>
          </div>
        `,
        confirmButtonText: "&#128557; Same energy",
        confirmButtonColor: '#d63384',
        timer: 4000,
        timerProgressBar: true
      });
    }
  };

  // Get top months with most misses
  const getTopMonths = () => {
    const sortedMonths = Object.entries(monthlyStats)
      .sort(([,a], [,b]) => b.count - a.count)
      .slice(0, 3);
    return sortedMonths;
  };

  // Get total miss count
  const getTotalMissCount = () => {
    return Object.values(monthlyStats).reduce((total, month) => total + month.count, 0);
  };


  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = birthdayDate.getTime() - now;

      if (distance < 0) {
        onBirthdayReached();
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    // Set daily message
    setDailyMessage(getDailyMessage());

    return () => clearInterval(timer);
  }, [birthdayDate, onBirthdayReached, getDailyMessage]);

  const isOctoberCountdown = () => {
    const today = new Date();
    return today.getMonth() === 9; // October is month 9 (0-indexed)
  };

  return (
    <div className="countdown-page">
      <div className="floating-hearts">
        <i className="fas fa-heart"></i>
        <i className="fas fa-heart"></i>
        <i className="fas fa-heart"></i>
        <i className="fas fa-heart"></i>
        <i className="fas fa-heart"></i>
        <i className="fas fa-heart"></i>
      </div>
      
      <div className="container">
        <header className="header">
          <h1 className="title">
            <i className="fas fa-heart"></i>
            {isOctoberCountdown() ? "✨ Something Magical Awaits ✨" : "Countdown to Something Special"}
            <i className="fas fa-heart"></i>
          </h1>
          <p className="subtitle">
            {isOctoberCountdown() ? "The most wonderful time is almost here... 💫👑" : "A very special moment is coming... 🎉"}
          </p>
          
          {/* Navigation Menu */}
          <nav className="page-navigation">
            <button 
              className={`nav-btn ${activeSection === 'countdown' ? 'active' : ''}`}
              onClick={() => setActiveSection('countdown')}
            >
              <i className="fas fa-clock"></i>
              <span>Countdown</span>
            </button>
            <button 
              className={`nav-btn ${activeSection === 'memories' ? 'active' : ''}`}
              onClick={() => setActiveSection('memories')}
            >
              <i className="fas fa-heart"></i>
              <span>Future Memories</span>
            </button>
          </nav>
          
          {/* Background Music Control */}
          <div className="music-control">
            <button 
              className={`music-btn ${isMusicPlaying ? 'playing' : ''}`}
              onClick={toggleMusic}
              title={isMusicPlaying ? 'Pause background music' : 'Play background music'}
            >
              <i className={`fas ${isMusicPlaying ? 'fa-pause' : 'fa-play'}`}></i>
              <span className="music-label">
                {isMusicPlaying ? 'Pause Music' : 'Play Music'}
              </span>
            </button>
            <div className="music-info">
              <small>🎵 "You Stole The Show" - Sienna Spiro</small>
            </div>
          </div>
        </header>

        {/* Conditional Content Based on Active Section */}
        {activeSection === 'countdown' && (
          <>
            {/* Daily Message Card */}
            <div className="daily-message-container">
              <div className={`daily-message-card ${isOctoberCountdown() ? 'birthday-month' : ''}`}>
                <div className="message-header">
                  <h3>
                    <i className="fas fa-envelope-heart"></i>
                    {isOctoberCountdown() ? "✨ Special October Message ✨" : "💕 Today's Sweet Note 💕"}
                  </h3>
                  <div className="message-date">
                    {new Date().toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                </div>
                <div className="message-content">
                  <p className="daily-message-text">{dailyMessage}</p>
                </div>
                <div className="message-footer">
                  <div className="message-signature">
                    With all my love 💕
                  </div>
                </div>
              </div>
            </div>
            
            <div className="countdown-container">
              <div className="countdown-display">
                <div className="time-unit">
                  <div className="time-value">{String(timeLeft.days).padStart(2, '0')}</div>
                  <div className="time-label">Days</div>
                </div>
                <div className="time-separator">:</div>
                <div className="time-unit">
                  <div className="time-value">{String(timeLeft.hours).padStart(2, '0')}</div>
                  <div className="time-label">Hours</div>
                </div>
                <div className="time-separator">:</div>
                <div className="time-unit">
                  <div className="time-value">{String(timeLeft.minutes).padStart(2, '0')}</div>
                  <div className="time-label">Minutes</div>
                </div>
                <div className="time-separator">:</div>
                <div className="time-unit">
                  <div className="time-value">{String(timeLeft.seconds).padStart(2, '0')}</div>
                  <div className="time-label">Seconds</div>
                </div>
              </div>
            </div>
            
            <div className="message-container">
              <p className="countdown-message">
                <i className="fas fa-sparkles"></i>
                Until your most special day arrives!
                <i className="fas fa-sparkles"></i>
              </p>
              <p className="love-message">
                {isOctoberCountdown() ? 
                  "October magic is in the air... ✨🍂💫" : 
                  "Get ready for something absolutely wonderful! 💖"
                }
              </p>
            </div>
            
            {/* Interactive Features Section */}
            <div className="interactive-section">
              <div className="interactive-grid">
                
                {/* Enhanced Miss You Card */}
                <div className="interactive-card miss-you-card enhanced">
                  <div className="card-header">
                    <h3><i className="fas fa-heart-broken"></i> Missing You</h3>
                  </div>
                  <div className="card-content">
                    <div className="stats-grid">
                      <div className="stat-item today">
                        <div className="stat-number">{missYouCount}</div>
                        <div className="stat-label">Today</div>
                      </div>
                      <div className="stat-item total">
                        <div className="stat-number">{getTotalMissCount()}</div>
                        <div className="stat-label">Total</div>
                      </div>
                    </div>
                    
                    <button className="interactive-btn miss-btn" onClick={sendMissYou}>
                      &#128557; Send "I Miss You"
                    </button>
                    
                    {Object.keys(monthlyStats).length > 0 && (
                      <div className="monthly-stats">
                        <h4><i className="fas fa-chart-line"></i> Monthly Misses</h4>
                        <div className="top-months">
                          {getTopMonths().map(([monthKey, data], index) => (
                            <div key={monthKey} className={`month-item rank-${index + 1}`}>
                              <div className="month-rank">#{index + 1}</div>
                              <div className="month-info">
                                <div className="month-name">{data.name}</div>
                                <div className="month-count">{data.count} misses</div>
                              </div>
                              <div className="month-bar">
                                <div 
                                  className="month-fill" 
                                  style={{ 
                                    width: `${(data.count / Math.max(...Object.values(monthlyStats).map(m => m.count))) * 100}%` 
                                  }}
                                ></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <p className="card-subtitle">Because distance is dramatic</p>
                  </div>
                </div>

              </div>
            </div>
          </>
        )}

        {/* Future Memories Wall Section */}
        {activeSection === 'memories' && <FutureMemories />}

      </div>
    </div>
  );
};

export default CountdownPage; 
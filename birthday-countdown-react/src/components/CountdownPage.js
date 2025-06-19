import React, { useState, useEffect } from 'react';

const CountdownPage = ({ birthdayDate, onBirthdayReached }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [dailyMessage, setDailyMessage] = useState('');

  // Daily messages object - organized by date
  const dailyMessages = {
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
    '2025-10-01': "BIRTHDAY MONTH IS HERE! 🎂✨👑 30 days until we celebrate the most wonderful person in existence!",
    '2025-10-02': "Your morning routine in birthday month probably includes extra excitement. The countdown begins now! 🌅🎉",
    '2025-10-03': "28 days until your birthday and I'm starting to vibrate with anticipation. This is going to be EPIC 🎂⚡",
    '2025-10-05': "Your way of organizing things while crying happy tears about your birthday month is so endearing 😭🫂",
    '2025-10-10': "21 days until your birthday! Your late-night planning sessions are probably including gift ideas for everyone else 📱😅",
    '2025-10-15': "16 days until your birthday! Halfway through October and the anticipation is killing me in the best way 🎉⚡",
    '2025-10-20': "11 days until your birthday! Your dramatic excitement about the countdown is giving me butterflies 😭🦋",
    '2025-10-25': "6 days until your birthday! Purple Hearts vibes: 'This feels right' - celebrating you always feels right 💜🎂",
    '2025-10-28': "3 days until your birthday! The Lake House energy: Some moments are worth waiting for - this is one of them 💌✨",
    '2025-10-29': "2 days until your birthday! Your cleaning frenzy is probably in overdrive preparing for celebration mode 😅🧹",
    '2025-10-30': "1 day until your birthday! Tomorrow we celebrate the most amazing, caring, dramatically perfect person ever 😭❤️ I'm so ready to spoil you!",
    '2025-10-31': "HAPPY BIRTHDAY CHE-LYNN! 🎂✨👑 Today is all about celebrating YOU - your beautiful heart, your caring spirit, your dramatic perfection, and the way you make everything feel like home. You deserve all the love, all the joy, and all the perfectly organized birthday magic! Here's to another year of your wonderful chaos 😭❤️🫂 I love you so much it makes me dramatic too!"
  };

  const getDailyMessage = () => {
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
  }, [birthdayDate, onBirthdayReached]);

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
        </header>

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
        

      </div>
    </div>
  );
};

export default CountdownPage; 
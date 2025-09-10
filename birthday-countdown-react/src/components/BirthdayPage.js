import React, { useEffect, useState, useCallback } from 'react';
import confetti from 'canvas-confetti';
import Swal from 'sweetalert2';
import SlideshowCSS from './SlideshowCSS';

const BirthdayPage = () => {
  const [birthdayFacts, setBirthdayFacts] = useState({
    ageDays: '0',
    ageHours: '0',
    heartbeats: '0'
  });

  const [videoError, setVideoError] = useState(false);
  const [spotifyError, setSpotifyError] = useState(false);
  const [spotifyLoaded, setSpotifyLoaded] = useState(false);
  
  // New interactive counters
  const [hugCount, setHugCount] = useState(0);
  const [kissCount, setKissCount] = useState(247); // Starting with all those kisses from chats!
  const [emojiRain, setEmojiRain] = useState(false);

  const memories = [
    {
      title: "When We Started Talking 💕",
      text: "January 10th - who knew that day would lead to so many amazing conversations!",
      image: "💬"
    },
    {
      title: "Your First Voice Note ☔",
      text: "Hearing your voice for the first time and realizing how sweet you sound!",
      image: "🎵"
    },
    {
      title: "Late Night Conversations 👩‍🍳",
      text: "Those 2am chats where time just seems to disappear when we're talking!",
      image: "🌙"
    },
    {
      title: "Your Funny Reactions 😂",
      text: "The way you react to literally everything with crying emojis is so endearing!",
      image: "😭"
    },
    {
      title: "Getting to Know You 🌅",
      text: "Every conversation reveals something new and wonderful about who you are.",
      image: "✨"
    },
    {
      title: "Your Cleaning Stories 🧹",
      text: "Learning about your love for organization and how proud you get of a clean space!",
      image: "✨"
    }
  ];

  const launchConfetti = useCallback(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
    
    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0 }
      });
    }, 200);
    
    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1 }
      });
    }, 400);
  }, []);

  const animateNumber = useCallback((type, finalNumber) => {
    const duration = 2000;
    const steps = 60;
    const increment = finalNumber / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= finalNumber) {
        current = finalNumber;
        clearInterval(timer);
      }
      setBirthdayFacts(prev => ({
        ...prev,
        [type]: Math.floor(current).toLocaleString()
      }));
    }, duration / steps);
  }, []);

  const calculateBirthdayFacts = useCallback(() => {
    const age = 25;
    const ageDays = age * 365;
    const ageHours = ageDays * 24;
    const heartbeats = ageDays * 100000;
    
    animateNumber('ageDays', ageDays);
    animateNumber('ageHours', ageHours);
    animateNumber('heartbeats', heartbeats);
  }, [animateNumber]);

  useEffect(() => {
    launchConfetti();
    calculateBirthdayFacts();
  }, [launchConfetti, calculateBirthdayFacts]);

  const showMemories = () => {
    const randomMemory = memories[Math.floor(Math.random() * memories.length)];
    
    Swal.fire({
      title: randomMemory.title,
      text: randomMemory.text,
      icon: 'success',
      iconHtml: randomMemory.image,
      confirmButtonText: 'More Memories! 💖',
      showCancelButton: true,
      cancelButtonText: 'Close'
    }).then((result) => {
      if (result.isConfirmed) {
        showMemories();
      }
    });
  };

  const showSurprise = () => {
    Swal.fire({
      title: '🎁 Special Surprise!',
      html: `
        <div style="text-align: center; padding: 20px;">
          <h3 style="color: #d63384; margin-bottom: 15px;">💖 A Sweet Note 💖</h3>
          <p style="font-style: italic; line-height: 1.6; color: #333;">
            "Getting to know you these past few months has been incredible.<br>
            Your kindness, your laughter, your beautiful soul -<br>
            they make every conversation brighter.<br><br>
            Happy Birthday Che-Lynn! You're absolutely amazing!<br>
            Here's to many more laughs and memories together! 🌟"
          </p>
          <div style="margin-top: 20px;">
            <span style="font-size: 2rem;">💕✨🎂✨💕</span>
          </div>
        </div>
      `,
      confirmButtonText: "Aww, you're so sweet! 💕"
    });
  };

  const handleVideoError = () => {
    setVideoError(true);
  };

  const handleSpotifyError = () => {
    setSpotifyError(true);
  };

  const handleSpotifyLoad = () => {
    setSpotifyLoaded(true);
  };

  // Auto-fallback if Spotify doesn't load within 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!spotifyLoaded && !spotifyError) {
        setSpotifyError(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [spotifyLoaded, spotifyError]);

  // New interactive functions
  const sendVirtualHug = () => {
    setHugCount(prev => prev + 1);
    launchConfetti();
    Swal.fire({
      title: '&#129303; Virtual Hug Sent!',
      html: `
        <div style="text-align: center; padding: 20px;">
          <div style="font-size: 4rem; margin-bottom: 1rem;">&#129303;</div>
          <p style="font-size: 1.2rem; color: #d63384; margin-bottom: 1rem;">
            Hug #${hugCount + 1} delivered with love! &#128149;
          </p>
          <p style="font-style: italic; color: #666;">
            "If I could teleport right now, I'd be in your arms already" &#129397;
          </p>
        </div>
      `,
      confirmButtonText: "Aww, I felt that! &#128583;",
      timer: 3000,
      timerProgressBar: true
    });
  };

  const sendKisses = () => {
    setKissCount(prev => prev + 10);
    setEmojiRain(true);
    setTimeout(() => setEmojiRain(false), 3000);
    
    Swal.fire({
      title: '&#128522; Kisses Sent!',
      html: `
        <div style="text-align: center; padding: 20px;">
          <div style="font-size: 2rem; margin-bottom: 1rem;">&#128522;&#128522;&#128522;&#128522;&#128522;&#128522;&#128522;&#128522;&#128522;&#128522;</div>
          <p style="font-size: 1.2rem; color: #d63384; margin-bottom: 1rem;">
            +10 kisses added! Total: ${kissCount + 10} &#128139;
          </p>
          <p style="font-style: italic; color: #666;">
            "I want repayment for all those kisses when I see you"
          </p>
          <small style="color: #999;">Repayment due: x10 when we meet! &#128579;</small>
        </div>
      `,
      confirmButtonText: "Can't wait to repay them!",
      timer: 4000,
      timerProgressBar: true
    });
  };

  const triggerEmojiCelebration = () => {
    setEmojiRain(true);
    setTimeout(() => setEmojiRain(false), 4000);
    
    const chelynnEmojis = ['&#129397;', '&#128557;', '&#129303;', '&#10084;', '&#128522;', '&#129325;', '&#128583;'];
    const randomEmoji = chelynnEmojis[Math.floor(Math.random() * chelynnEmojis.length)];
    
    Swal.fire({
      title: `${randomEmoji} Che-lynn's Signature Reactions ${randomEmoji}`,
      html: `
        <div style="text-align: center; padding: 20px;">
          <div style="font-size: 3rem; margin-bottom: 1rem;">${randomEmoji}${randomEmoji}${randomEmoji}${randomEmoji}${randomEmoji}</div>
          <p style="font-size: 1.2rem; color: #d63384; margin-bottom: 1rem;">
            "The way you react to everything with crying emojis is so endearing!" 
          </p>
          <div style="font-size: 1.5rem; margin: 1rem 0;">
            &#129397; Auwww Counter: ${Math.floor(Math.random() * 50) + 100}
          </div>
          <p style="font-style: italic; color: #666;">
            Your adorable reactions make every conversation brighter! &#10024;
          </p>
        </div>
      `,
      confirmButtonText: "Auwww you noticed! &#129397;",
      timer: 5000,
      timerProgressBar: true
    });
  };

  const VideoFallback = () => (
    <div className="video-fallback" style={{
      background: 'linear-gradient(135deg, #ff6b9d, #ffa8cc)',
      height: '300px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '0.8rem',
      color: 'white',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>💕</div>
      <h3 style={{ marginBottom: '0.5rem', fontSize: '1.5rem' }}>Our First Date Memory</h3>
      <p style={{ opacity: 0.9, fontSize: '1rem', lineHeight: '1.5' }}>
        A beautiful video of our special moment together 💫
        <br />
        <small>(Video temporarily unavailable)</small>
      </p>
    </div>
  );

  const SpotifyFallback = () => (
    <div className="spotify-fallback" style={{
      background: 'linear-gradient(135deg, #1db954, #1ed760)',
      borderRadius: '12px',
      padding: '2rem',
      color: 'white',
      textAlign: 'center',
      minHeight: '300px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎵</div>
      <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>Your Birthday Playlist</h3>
      <p style={{ marginBottom: '1.5rem', opacity: 0.9, lineHeight: '1.6' }}>
        A special collection of songs to celebrate you! 💕
      </p>
      <div style={{ 
        background: 'rgba(255,255,255,0.1)', 
        borderRadius: '8px', 
        padding: '1rem',
        marginBottom: '1rem',
        width: '100%',
        maxWidth: '300px'
      }}>
        <div style={{ marginBottom: '0.8rem', fontSize: '1.1rem', fontWeight: 'bold' }}>
          🌟 Featured Song 🌟
        </div>
        <div style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>
          "Constellations" - Your special song ✨
        </div>
        <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>
          Perfect for celebrating beautiful moments 💫
        </div>
      </div>
      <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>
        🎧 Open your favorite music app and search for these vibes! 🎧
      </div>
    </div>
  );

  return (
    <div className="birthday-page">
      <div className="floating-hearts celebration">
        <i className="fas fa-heart"></i>
        <i className="fas fa-heart"></i>
        <i className="fas fa-heart"></i>
        <i className="fas fa-heart"></i>
        <i className="fas fa-heart"></i>
        <i className="fas fa-heart"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        {emojiRain && (
          <>
            <span className="emoji-rain">&#129397;</span>
            <span className="emoji-rain">&#128557;</span>
            <span className="emoji-rain">&#129303;</span>
            <span className="emoji-rain">&#10084;</span>
            <span className="emoji-rain">&#128522;</span>
            <span className="emoji-rain">&#129325;</span>
            <span className="emoji-rain">&#128583;</span>
            <span className="emoji-rain">&#128149;</span>
          </>
        )}
      </div>
      
      <div className="container birthday-container">
        <header className="birthday-header">
          <h1 className="birthday-title">
            🎉 Happy Birthday, Che-Lynn! 🎂
          </h1>
          <p className="birthday-subtitle">
            Today is all about celebrating YOU! 💕
          </p>
        </header>

        {/* Beautiful Photo Slideshow */}
        <div className="slideshow-section">
          <SlideshowCSS />
        </div>

        {/* Our First Date Video Memory */}
        <div className="video-memory-section">
          <div className="video-memory-card">
            <div className="video-header">
              <h2 className="video-title">
                💕 Our First Date 💕
              </h2>
              <p className="video-subtitle">
                The beginning of our beautiful story ✨
              </p>
            </div>
            <div className="video-container">
              {videoError ? (
                <VideoFallback />
              ) : (
                <>
                  <video 
                    className="memory-video"
                    controls
                    preload="metadata"
                    poster="/images/photo1.jpg"
                    onError={handleVideoError}
                  >
                    <source src="/video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="video-overlay">
                    <div className="play-button-overlay">
                      <i className="fas fa-play"></i>
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className="video-footer">
              <div className="video-description">
                <p>
                  💫 Where it all began - our very first date together! 💫
                  <br/>
                  <small>Every love story has a beginning, and this is ours 💕</small>
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="celebration-grid">
          <div className="celebration-card message-card">
            <div className="card-header">
              <h2><i className="fas fa-heart"></i> A Special Message</h2>
            </div>
            <div className="card-content">
              <p className="birthday-message">
                Another year of being absolutely amazing! 🌟<br/>
                These past few months getting to know you have been incredible.<br/>
                I hope your special day is filled with everything that makes you smile! 💖
              </p>
              <button className="memory-btn" onClick={showMemories}>
                <i className="fas fa-photo-video"></i>
                View Our Memories
              </button>
            </div>
          </div>
          
          <div className="celebration-card spotify-card">
            <div className="card-header">
              <h2><i className="fab fa-spotify"></i> Your Birthday Playlist</h2>
            </div>
            <div className="card-content">
              <div className="spotify-embed">
                <p className="spotify-intro">🎵 A special playlist for your birthday! 🎵</p>
                {spotifyError ? (
                  <SpotifyFallback />
                ) : (
                  <>
                    <iframe 
                      style={{borderRadius: '12px'}} 
                      src="https://open.spotify.com/embed/playlist/5KX0iHFwZONKRI960A7mMg?utm_source=generator&theme=0" 
                      width="100%" 
                      height="352" 
                      frameBorder="0" 
                      allowFullScreen="" 
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                      loading="lazy"
                      title="Birthday Playlist"
                      onError={handleSpotifyError}
                      onLoad={handleSpotifyLoad}
                    ></iframe>
                    <p className="spotify-note">
                      💡 Click play to start the music!
                      <br/>
                      <small>(Spotify requires user interaction to start playing)</small>
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
          
          <div className="celebration-card facts-card">
            <div className="card-header">
              <h2><i className="fas fa-birthday-cake"></i> Birthday Facts</h2>
            </div>
            <div className="card-content">
              <div className="fact-item">
                <i className="fas fa-gift"></i>
                <span>Days of pure awesomeness: <strong>{birthdayFacts.ageDays}</strong></span>
              </div>
              <div className="fact-item">
                <i className="fas fa-clock"></i>
                <span>Hours of being incredible: <strong>{birthdayFacts.ageHours}</strong></span>
              </div>
              <div className="fact-item">
                <i className="fas fa-heartbeat"></i>
                <span>Heartbeats of happiness: <strong>{birthdayFacts.heartbeats}</strong></span>
              </div>
            </div>
          </div>

          {/* Virtual Hug & Kiss Counter */}
          <div className="celebration-card hug-kiss-card">
            <div className="card-header">
              <h2><i className="fas fa-heart"></i> Virtual Hugs & Kisses</h2>
            </div>
            <div className="card-content">
              <div className="hug-kiss-stats">
                <div className="stat-item">
                  <span className="stat-emoji">&#129303;</span>
                  <span className="stat-label">Hugs Sent</span>
                  <span className="stat-number">{hugCount}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-emoji">&#128522;</span>
                  <span className="stat-label">Kisses Collected</span>
                  <span className="stat-number">{kissCount}</span>
                </div>
              </div>
              <div className="interaction-buttons">
                <button className="hug-btn" onClick={sendVirtualHug}>
                  <i className="fas fa-heart"></i>
                  Send Virtual Hug
                </button>
                <button className="kiss-btn" onClick={sendKisses}>
                  <i className="fas fa-kiss"></i>
                  Send Kisses (x10)
                </button>
              </div>
              <p className="repayment-note">
                "I miss you too... more than I probably should" &#128583;
                <br/>
                <small>Repayment due when we meet: {kissCount * 10} kisses! &#128579;</small>
              </p>
            </div>
          </div>

          {/* Emoji Personality Gallery */}
          <div className="celebration-card emoji-card">
            <div className="card-header">
              <h2><i className="fas fa-smile"></i> Your Signature Reactions</h2>
            </div>
            <div className="card-content">
              <div className="emoji-gallery">
                <div className="emoji-item">
                  <span className="big-emoji">&#129397;</span>
                  <span className="emoji-label">Auwww Moments</span>
                </div>
                <div className="emoji-item">
                  <span className="big-emoji">&#128557;</span>
                  <span className="emoji-label">Signature Reaction</span>
                </div>
                <div className="emoji-item">
                  <span className="big-emoji">&#129303;</span>
                  <span className="emoji-label">Virtual Hugs</span>
                </div>
                <div className="emoji-item">
                  <span className="big-emoji">&#129325;</span>
                  <span className="emoji-label">Cute & Shy</span>
                </div>
              </div>
              <button className="emoji-celebration-btn" onClick={triggerEmojiCelebration}>
                <i className="fas fa-star"></i>
                Celebrate Your Cuteness!
              </button>
              <p className="emoji-note">
                "The way you react to everything is so endearing!"
              </p>
            </div>
          </div>

          {/* Cozy Moments Corner */}
          <div className="celebration-card cozy-card">
            <div className="card-header">
              <h2><i className="fas fa-coffee"></i> Cozy Moments</h2>
            </div>
            <div className="card-content">
              <div className="cozy-items">
                <div className="cozy-item">
                  <i className="fas fa-mug-hot"></i>
                  <div className="cozy-text">
                    <strong>Perfect Rooibos</strong>
                    <small>With milk & 2 sugars</small>
                  </div>
                </div>
                <div className="cozy-item">
                  <i className="fas fa-bath"></i>
                  <div className="cozy-text">
                    <strong>Relaxing Baths</strong>
                    <small>"It was very very nice"</small>
                  </div>
                </div>
                <div className="cozy-item">
                  <i className="fas fa-bed"></i>
                  <div className="cozy-text">
                    <strong>Fresh Covers</strong>
                    <small>"Fresh covers always hit different"</small>
                  </div>
                </div>
                <div className="cozy-item">
                  <i className="fas fa-moon"></i>
                  <div className="cozy-text">
                    <strong>Peaceful Nights</strong>
                    <small>Away from Friday music</small>
                  </div>
                </div>
              </div>
              <p className="cozy-note">
                All your favorite comfort moments
                <br/>
                <small>"My simple girl"</small>
              </p>
            </div>
          </div>
        </div>
        
        <div className="birthday-actions">
          <button className="celebration-btn" onClick={launchConfetti}>
            <i className="fas fa-rocket"></i>
            More Confetti!
          </button>
          <button className="celebration-btn" onClick={showSurprise}>
            <i className="fas fa-surprise"></i>
            Special Surprise
          </button>
        </div>
      </div>
    </div>
  );
};

export default BirthdayPage; 
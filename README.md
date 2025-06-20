# 🎂 Birthday Countdown Web App 💕

A romantic and adorable two-page birthday countdown web app designed to surprise your special someone! Perfect for celebrating birthdays with style, confetti, and love.

## ✨ Features

### 🕐 Countdown Page (`index.html`)
- **Live countdown timer** to October 8th
- **Floating hearts animation** 
- **Auto-redirect** to birthday page at midnight
- **Beautiful pastel gradient background**
- **Responsive design** for all devices

### 🎉 Birthday Celebration Page (`birthday.html`)
- **Confetti animation** on page load
- **Interactive Chart.js bar chart** showing your journey together
- **Memory pop-ups** with SweetAlert2 
- **Spotify playlist embed** (placeholder included)
- **Fun birthday facts** with animated counters
- **Special surprise love letter** pop-up
- **Mouse sparkle effects**
- **Additional confetti button**

## 🚀 Quick Start

1. **Customize the birthday date** in `script.js`:
   ```javascript
   const birthdayDate = new Date('2024-10-08T00:00:00');
   ```

2. **Add your Spotify playlist** in `birthday.html`:
   - Replace the placeholder with your actual Spotify embed code
   - Uncomment the iframe section and add your playlist ID

3. **Personalize the memories** in `script.js`:
   - Edit the `memories` array with your own special moments
   - Customize the love letter in the `showSurprise()` function

4. **Adjust the age** in `calculateBirthdayFacts()` function

## 🎨 Customization

### Colors & Styling
- **Primary colors**: Pastel pink (`#ff9a9e`) and light purple (`#fecfef`)
- **Accent color**: Rose (`#d63384`)
- **All styles** are in `style.css` for easy customization

### Chart Data
Modify the chart data in `script.js`:
```javascript
data: [287, 156, 1892, 2341, 94, 73], // Your custom numbers
labels: ['Photos Together', 'Dates', 'Laughs Shared', 'Hugs Given', 'Songs Sung', 'Dreams Shared']
```

### Messages
- **Countdown messages**: Edit in `index.html`
- **Birthday messages**: Edit in `birthday.html`  
- **Memory pop-ups**: Edit the `memories` array in `script.js`
- **Love letter**: Edit the `showSurprise()` function

## 📱 GitHub Pages Deployment

### Option 1: Direct Upload
1. **Create a new repository** on GitHub
2. **Upload all files** to the repository
3. **Go to Settings** → **Pages**
4. **Select Source**: Deploy from a branch
5. **Choose**: `main` branch, `/ (root)`
6. **Your app will be live** at: `https://yourusername.github.io/repository-name`

### Option 2: Git Commands
```bash
git init
git add .
git commit -m "🎂 Initial birthday countdown app"
git branch -M main
git remote add origin https://github.com/yourusername/birthday-countdown.git
git push -u origin main
```

Then enable GitHub Pages in repository settings.

## 📁 File Structure

```
birthday-countdown/
├── index.html          # Countdown page
├── birthday.html       # Birthday celebration page  
├── style.css          # All styling
├── script.js          # JavaScript functionality
├── assets/            # For future images/audio
└── README.md          # This file
```

## 🛠️ Technologies Used

- **HTML5** for structure
- **CSS3** with animations and responsive design
- **Vanilla JavaScript** for functionality
- **Chart.js** for beautiful bar charts
- **SweetAlert2** for elegant pop-ups
- **Canvas Confetti** for celebration effects
- **Font Awesome** for icons
- **Google Fonts** (Poppins) for typography

## 💡 Tips & Ideas

### Additional Features You Can Add
- **Photo gallery** in the assets folder
- **Background music** (add audio files)
- **More interactive animations**
- **Custom countdown sounds**
- **Additional memory categories**

### Perfect For
- 🎂 **Birthdays**
- 💕 **Anniversaries** 
- 🎉 **Special occasions**
- 💖 **Romantic surprises**

## 🔧 Browser Support

- ✅ Chrome (recommended)
- ✅ Firefox  
- ✅ Safari
- ✅ Edge
- 📱 Mobile browsers

## 💝 Made with Love

This app was created to spread joy and celebrate special moments. Feel free to customize it and make it uniquely yours!

---

**Happy Birthday! 🎉✨💕** 
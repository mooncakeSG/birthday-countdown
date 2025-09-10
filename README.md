# 💕 Birthday Countdown for Che-Lynn

A beautiful, romantic birthday countdown application built with React, featuring interactive elements, background music, and a future memories wall.

## ✨ Features

### 🎯 **Main Countdown**
- **Live Timer**: Real-time countdown to October 31st, 2025
- **Daily Messages**: Personalized messages that change based on the date
- **October Special**: Special styling and messages during birthday month
- **Floating Hearts**: Animated background elements

### 🎵 **Background Music**
- **"You Stole The Show"** by Sienna Spiro (Instrumental)
- **Play/Pause Controls**: User-friendly music controls
- **Volume Control**: Set to 30% for pleasant background listening
- **Autoplay Handling**: Graceful handling of browser autoplay restrictions

### 💕 **Interactive Features**
- **Enhanced "Missing You" Card**:
  - Today's count and total count tracking
  - Monthly statistics with visual charts
  - Persistent data storage using localStorage
  - Sweet popup notifications

### 🏛️ **Future Memories Wall**
- **Memory Management**: Add, edit, and delete future memories
- **Categories**: 10 different categories (Romance, Travel, Food, Adventure, etc.)
- **Priority Levels**: High, Medium, Low priority with color coding
- **Completion Tracking**: Mark memories as completed with celebrations
- **Statistics Dashboard**: Track total dreams, completed, and pending memories

### 🎨 **Beautiful Design**
- **Romantic Theme**: Pink and purple gradient color scheme
- **Glass Morphism**: Modern backdrop blur effects
- **Smooth Animations**: Hover effects and transitions throughout
- **Mobile Responsive**: Optimized for all screen sizes
- **Navigation System**: Easy switching between countdown and memories

## 🚀 Deployment

### **Vercel Deployment (Recommended)**

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect it's a React app
   - Deploy with default settings

3. **Custom Domain** (Optional):
   - Add your custom domain in Vercel dashboard
   - Update DNS settings as instructed

### **GitHub Pages Deployment**

1. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Deploy**:
   ```bash
   npm run deploy
   ```

### **Manual Deployment**

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy the `build` folder** to your hosting service

## 🛠️ Development

### **Prerequisites**
- Node.js (v14 or higher)
- npm or yarn

### **Installation**
```bash
# Clone the repository
git clone <your-repo-url>
cd birthday-countdown-react

# Install dependencies
npm install

# Start development server
npm start
```

### **Available Scripts**
- `npm start` - Start development server
- `npm run build` - Create production build
- `npm test` - Run tests
- `npm run deploy` - Deploy to GitHub Pages

## 📁 Project Structure

```
birthday-countdown-react/
├── public/
│   ├── images/          # Photo slideshow images
│   ├── video.mp4        # Memory video
│   ├── background-music.mp3  # Background music
│   └── index.html       # Main HTML template
├── src/
│   ├── components/
│   │   ├── BirthdayPage.js      # Birthday celebration page
│   │   ├── CountdownPage.js     # Main countdown page
│   │   ├── FutureMemories.js    # Future memories wall
│   │   └── SlideshowCSS.js      # Photo slideshow
│   ├── App.js           # Main app component
│   ├── App.css          # Main styles
│   └── index.js         # App entry point
├── vercel.json          # Vercel deployment config
└── package.json         # Dependencies and scripts
```

## 🎨 Customization

### **Change Birthday Date**
Edit `src/App.js`:
```javascript
const birthdayDate = useMemo(() => new Date('2025-10-31T00:00:00'), []);
```

### **Update Daily Messages**
Edit the `dailyMessages` object in `src/components/CountdownPage.js`

### **Add More Music**
1. Add audio files to `public/` folder
2. Update the audio source in `src/components/CountdownPage.js`

### **Customize Colors**
Edit the CSS variables in `src/App.css`:
```css
:root {
  --primary-color: #d63384;
  --secondary-color: #ff6b9d;
  --accent-color: #8b5cf6;
}
```

## 📱 Browser Support

- **Chrome** (recommended)
- **Firefox**
- **Safari**
- **Edge**
- **Mobile browsers** (iOS Safari, Chrome Mobile)

## 🔧 Technical Details

### **Dependencies**
- **React 19.1.0** - UI framework
- **SweetAlert2** - Beautiful popup notifications
- **Canvas Confetti** - Confetti animations
- **Font Awesome** - Icons
- **React Slick** - Photo slideshow

### **Features**
- **localStorage** - Persistent data storage
- **Responsive Design** - Mobile-first approach
- **PWA Ready** - Can be installed as app
- **SEO Optimized** - Meta tags and descriptions

## 🎉 Usage

1. **Countdown Page**: View the main countdown timer and daily messages
2. **Future Memories**: Click "Future Memories" tab to access the memory wall
3. **Add Memories**: Click "Add New Memory" to create future plans
4. **Background Music**: Use the play/pause button for romantic atmosphere
5. **Missing You**: Track "I Miss You" messages with detailed statistics

## 💝 Special Features

- **October Magic**: Special styling and messages during birthday month
- **Completion Celebrations**: Confetti and popups when marking memories complete
- **Monthly Statistics**: Visual charts showing miss you patterns
- **Persistent Data**: All data saved locally and persists across sessions
- **Mobile Optimized**: Touch-friendly interface for mobile devices

## 🚀 Performance

- **Optimized Build**: Production build is optimized for performance
- **Lazy Loading**: Components load efficiently
- **Caching**: Static assets are cached for faster loading
- **Compression**: Gzip compression for smaller file sizes

## 📄 License

This project is created with love for a special birthday celebration. Feel free to use and modify for your own romantic projects!

---

**Made with 💕 for Che-Lynn's special day**
=======
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

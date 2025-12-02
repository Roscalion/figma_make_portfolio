# Richard Saunders - AI-Focused Project Professional Portfolio

A modern, responsive portfolio website showcasing 5+ years of experience in optimizing workflows, leading teams, and accelerating operational efficiency, with specific emphasis on Custom GPTs, Jira/Agile project management, and data-driven decision making.

## 🚀 Live Demo

[View Live Portfolio](https://Roscalion.github.io/portfolio) *(update with your actual deployment URL)*

## 📋 Features

- **Responsive Design** - Optimized for all devices (mobile, tablet, desktop)
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Interactive Kanban Logo** - Visual representation of project management expertise
- **Certifications Showcase** - Display of professional credentials and achievements
- **Google AdSense Integration** - Monetization ready with proper ad placement
- **SEO Optimized** - Structured for search engine visibility

## 🛠️ Tech Stack

- **Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Deployment:** GitHub Pages / Vercel / Netlify

## 📦 Installation & Setup

### Prerequisites
- Node.js 16+ and npm installed
- Git installed

### Local Development

1. **Clone the repository**
```bash
git clone https://github.com/Roscalion/portfolio.git
cd portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

4. **Open browser**
Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## 🚀 Deployment Options

### Option 1: GitHub Pages (Free)

1. **Install gh-pages**
```bash
npm install --save-dev gh-pages
```

2. **Update package.json** (already configured)

3. **Deploy**
```bash
npm run deploy
```

Your site will be live at: `https://Roscalion.github.io/portfolio`

### Option 2: Vercel (Recommended - Easiest)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel will auto-detect settings and deploy
5. Get a custom URL like `richard-saunders.vercel.app`

### Option 3: Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Import your GitHub repository
4. Deploy with one click

## 📝 Google AdSense Setup

### Current Status
The portfolio includes Google AdSense integration with publisher ID: `ca-pub-4963930353367900`

### To Complete AdSense Setup:

1. **Deploy your site** to a public URL (see deployment options above)

2. **Verify your site** in Google AdSense
   - Go to [AdSense Dashboard](https://www.google.com/adsense)
   - Add your public site URL
   - Wait for verification (can take 24-48 hours)

3. **Create Ad Units**
   - After verification, create ad units in your AdSense dashboard
   - Replace placeholder slot IDs in the code:
     - `AdUnit` after Hero: Currently `slot="1234567890"`
     - `AdUnit` between Skills and Certifications: Currently `slot="0987654321"`

4. **Update the code**
   - Open `/App.tsx`
   - Replace the placeholder slot IDs with your actual ad unit IDs
   - Commit and redeploy

## 📂 Project Structure

```
portfolio/
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Hero.tsx            # Hero section with Kanban logo
│   ├── Skills.tsx          # Skills showcase
│   ├── Certifications.tsx  # Professional credentials
│   ├── Footer.tsx          # Footer with social links
│   ├── GoogleAdsScript.tsx # AdSense initialization
│   ├── AdUnit.tsx          # Reusable ad component
│   └── ui/                 # UI component library
├── styles/
│   └── globals.css         # Global styles & Tailwind config
├── App.tsx                 # Main application component
├── package.json            # Dependencies & scripts
└── README.md              # This file
```

## 🔧 Customization

### Update Personal Information

1. **Hero Section** (`/components/Hero.tsx`)
   - Update name, title, description
   - Modify LinkedIn and GitHub URLs

2. **Skills** (`/components/Skills.tsx`)
   - Add/remove skills
   - Update skill descriptions

3. **Certifications** (`/components/Certifications.tsx`)
   - Add your certifications
   - Update images and descriptions

4. **Footer** (`/components/Footer.tsx`)
   - Update social media links
   - Modify copyright information

### Styling

- Global styles: `/styles/globals.css`
- Tailwind is configured inline (Tailwind v4)
- Component-specific styles are in each `.tsx` file

## 🌐 Connect With Me

- **LinkedIn:** [Richard Saunders](https://www.linkedin.com/in/richard-saunders-34b227106/)
- **GitHub:** [Roscalion](https://github.com/Roscalion)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

This is a personal portfolio, but suggestions and feedback are welcome! Feel free to open an issue or submit a pull request.

## 💡 Acknowledgments

- Built with React and Vite
- Styled with Tailwind CSS
- Icons from Lucide React
- Hosted on GitHub Pages / Vercel / Netlify

---

**Note:** Remember to replace placeholder AdSense slot IDs with your actual ad unit IDs after your site is verified by Google AdSense.

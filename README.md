# Autoquill AI - AI Voice Agents Platform

![Autoquill AI](https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6)

A modern, high-performance landing page for Autoquill AI - the next-generation AI voice receptionist platform that helps businesses never miss a call again.

## ✨ Features

- **🎨 Modern UI/UX**: Beautiful dark-mode interface with smooth animations powered by Framer Motion
- **📱 Fully Responsive**: Optimized for all devices and screen sizes
- **⚡ Lightning Fast**: Built with Vite and React 19 for optimal performance
- **🎭 Interactive Components**: 
  - Animated meteor effects
  - Mouse-following spotlight
  - Smooth scroll animations
  - Dynamic testimonials
  - Real-time form validation
- **🔗 Integrations**:
  - Calendly appointment scheduling
  - Vapi AI voice agent demo
  - n8n webhook form submissions
  - Multiple CTA touchpoints

## 🚀 Tech Stack

- **Frontend Framework**: React 19.2.3 with TypeScript
- **Build Tool**: Vite 6.2.0
- **Animations**: Framer Motion 12.23.26
- **Icons**: Lucide React
- **Styling**: Tailwind CSS (via CDN)
- **Type Safety**: TypeScript 5.8.2

## 📦 Project Structure

```
autoquill-ai-website/
├── components/
│   ├── Blog.tsx            # Blog listing page
│   ├── CTA.tsx             # Call-to-action section with Calendly
│   ├── Features.tsx        # Feature showcase grid
│   ├── FreeAgent.tsx       # Free FAQ agent signup page
│   ├── Hero.tsx            # Hero section with animated elements
│   ├── MouseFollower.tsx   # Interactive mouse spotlight effect
│   ├── Navbar.tsx          # Navigation bar with routing
│   ├── ROIForm.tsx         # Revenue impact calculator form
│   ├── SocialProof.tsx     # Customer testimonials
│   └── TrustedBy.tsx       # Trusted companies marquee
├── App.tsx                 # Main application component
├── index.tsx               # React entry point
├── index.html              # HTML template with Vapi integration
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js 16+ (recommended: Node.js 18+)
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/AdrianNeely123/autoquill-ai-website.git
   cd autoquill-ai-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables** (Optional)
   
   Create a `.env.local` file in the root directory:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:3000`

## 📜 Available Scripts

- `npm run dev` - Start development server on port 3000
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🎨 Customization

### Colors

The project uses a custom color scheme defined in `index.html`:

- **Primary**: Neutral/Black (`#171717`)
- **Accent**: Violet (`#8b5cf6`)
- **Background**: Dark (`#0a0a0a`)

### Tailwind Configuration

All Tailwind configurations are inline in `index.html` including:
- Custom animations (meteors, marquee, border-beam)
- Extended color palette
- Custom font families (Inter, JetBrains Mono)

### Forms & Webhooks

Forms submit to n8n webhook:
```
https://adrianworksapce.app.n8n.cloud/webhook/website-form
```

Update this URL in:
- `components/ROIForm.tsx`
- `components/FreeAgent.tsx`

### Calendly Integration

Update the Calendly link in:
- `components/Hero.tsx`
- `components/Navbar.tsx`
- `components/CTA.tsx`

Current link: `https://calendly.com/adrian-autoquillai/30min`

### Vapi Voice Agent

Configure the Vapi assistant in `index.html`:
```javascript
const assistant = "9ea45172-b9fd-4bd9-9f91-279a5b910bdd";
const apiKey = "804da6e6-851c-4d3f-9a61-c9bffad0b779";
```

## 🌐 Deployment

### Vercel (Recommended)

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Netlify

1. Build: `npm run build`
2. Deploy the `dist/` folder

### GitHub Pages

1. Update `vite.config.ts` base path
2. Build: `npm run build`
3. Deploy `dist/` to `gh-pages` branch

## 🔐 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `GEMINI_API_KEY` | Google Gemini API key | No |

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Adrian Neely**
- GitHub: [@AdrianNeely123](https://github.com/AdrianNeely123)
- Calendly: [Book a Strategy Call](https://calendly.com/adrian-autoquillai/30min)

## 🙏 Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- Animations by [Framer Motion](https://www.framer.com/motion/)
- Icons from [Lucide](https://lucide.dev/)
- Styling with [Tailwind CSS](https://tailwindcss.com/)
- Voice AI by [Vapi](https://vapi.ai/)

## 📞 Support

For support, email adrian@autoquill.ai or book a call via our [Calendly](https://calendly.com/adrian-autoquillai/30min).

---

Made with ❤️ by the Autoquill Team

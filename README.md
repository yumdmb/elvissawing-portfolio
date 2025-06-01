# Elvis Sawing Portfolio

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Stack**: Next.js 15 App Router, TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first approach with beautiful animations
- **Performance Optimized**: Fast loading with optimized fonts and images
- **SEO Ready**: Enhanced metadata and Open Graph tags
- **Component Architecture**: Modular, reusable components following best practices
- **Type Safe**: Full TypeScript implementation
- **Accessible**: Built with accessibility in mind

## 🛠️ Technologies Used

- [Next.js 15](https://nextjs.org/) - React framework with App Router
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Radix UI](https://www.radix-ui.com/) - Headless UI components
- [Lucide React](https://lucide.dev/) - Beautiful icons
- [shadcn/ui](https://ui.shadcn.com/) - Reusable component library

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Home page
│   ├── loading.tsx       # Loading UI
│   ├── error.tsx         # Error boundary
│   └── not-found.tsx     # 404 page
├── components/            # Reusable components
│   ├── layout/           # Layout components
│   ├── navigation/       # Navigation components
│   ├── sections/         # Page sections
│   └── ui/              # UI components (shadcn/ui)
├── config/               # Configuration files
├── data/                 # Static data
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
└── types/                # TypeScript type definitions
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yumdmb/elvissawing-portfolio.git
   cd elvissawing-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Content

Edit the data files in `src/data/portfolio.ts` to update:
- Personal information
- Work experience
- Education details
- Certifications
- Featured projects

### Styling

- Global styles: `src/app/globals.css`
- Component styles: Tailwind CSS classes
- Theme configuration: `tailwind.config.js`

### Site Configuration

Update `src/config/site.ts` for:
- Site metadata
- Social links
- Personal information

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms

The app can be deployed to any platform that supports Node.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Elvis Sawing Anak Muran**
- LinkedIn: [elvis-sawing](https://www.linkedin.com/in/elvis-sawing)
- GitHub: [yumdmb](https://github.com/yumdmb)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yumdmb/elvissawing-portfolio/issues).

## ⭐ Show Your Support

Give a ⭐️ if this project helped you!

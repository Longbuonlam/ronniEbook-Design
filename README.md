# BookVerse - Modern eBook Platform

A beautiful and responsive eBook platform built with Next.js and Tailwind CSS. Originally designed as a React Native application, this project has been converted to run as a modern web application while maintaining all the original design and functionality.

## 🚀 Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Dark/Light Mode**: Toggle between dark and light themes
- **Search Functionality**: Search for books, authors, and genres
- **Genre Filtering**: Browse books by different categories
- **Interactive UI**: Smooth animations and hover effects
- **Mobile-First**: Mobile menu and touch-friendly interface

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom React components converted from React Native

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager

## ⚡ Quick Start

1. **Clone the repository** (if not already done):
   ```bash
   git clone <repository-url>
   cd ronniEbook-Design
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to:
   ```
   http://localhost:3000
   ```

## 📜 Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the application for production
- `npm run start` - Starts the production server
- `npm run lint` - Runs ESLint to check code quality

## 🏗️ Project Structure

```
ronniEbook-Design/
├── app/                    # Next.js App Router files
│   ├── globals.css        # Global CSS styles
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page component
├── components/            # Reusable React components
│   ├── BookCard.tsx       # Individual book display card
│   ├── BookGrid.tsx       # Grid layout for books
│   ├── BookListPage.tsx   # Book listing page
│   ├── BookVerseApp.tsx   # Main application component
│   ├── FilterSection.tsx  # Filter sidebar component
│   ├── GenreSection.tsx   # Genre browsing section
│   ├── Header.tsx         # Navigation header
│   ├── HeroSection.tsx    # Landing page hero section
│   ├── MobileMenu.tsx     # Mobile navigation menu
│   └── SearchInput.tsx    # Search input component
├── next.config.js         # Next.js configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Project dependencies
```

## 🎨 Features Overview

### Home Page
- Hero section with featured books carousel
- Search functionality
- Genre browsing section
- Top picks book grid

### Book Browsing
- Filter books by genre
- Sort options
- Responsive grid layout
- Book cards with ratings and details

### Mobile Experience
- Hamburger menu for mobile navigation
- Touch-friendly interface
- Responsive design breakpoints

### Dark Mode
- System preference detection
- Manual toggle in header
- Consistent theming throughout

## 🔧 Customization

### Adding New Books
Books are currently defined in the `BookVerseApp.tsx` component. To add new books, modify the `books` array:

```typescript
const books: Book[] = [
  {
    id: 7,
    title: "Your Book Title",
    author: "Author Name",
    genre: "Genre",
    rating: 4.5,
    cover: "https://your-image-url.com",
    description: "Book description..."
  },
  // ...existing books
];
```

### Styling
The project uses Tailwind CSS for styling. You can customize:
- Colors in `tailwind.config.js`
- Global styles in `app/globals.css`
- Component-specific styles in individual component files

### Adding New Genres
Update the `genres` array in `BookVerseApp.tsx`:

```typescript
const genres = ["All", "Sci-Fi", "Mystery", "Romance", "Fantasy", "Thriller", "Drama", "Your New Genre"];
```

## 📱 Browser Support

This application supports all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to a Git repository
2. Connect your repository to Vercel
3. Deploy automatically

### Manual Build
```bash
npm run build
npm run start
```

## 🎯 Performance

The application is optimized for performance with:
- Next.js automatic code splitting
- Optimized images with proper alt tags
- Responsive design for all screen sizes
- Efficient CSS with Tailwind's purging

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Troubleshooting

### Common Issues

**Port already in use:**
```bash
# Kill the process using port 3000
lsof -ti:3000 | xargs kill -9
npm run dev
```

**Dependencies issues:**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Build errors:**
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

## 📞 Support

If you encounter any issues or have questions, please:
1. Check the troubleshooting section above
2. Review the project structure and code
3. Create an issue in the repository

---

Built with ❤️ using Next.js and Tailwind CSS
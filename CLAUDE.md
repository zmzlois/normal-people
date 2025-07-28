# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal website/blog built with Next.js 13+ App Router, featuring:
- Personal portfolio and resume content
- Blog posts written in MDX using Contentlayer
- Interactive animations and components (Framer Motion)
- Custom design elements including dynamic islands, glass effects, and signature animations
- Tailwind CSS for styling with custom components

## Development Commands

```bash
# Development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Lint code
pnpm lint

# Format code with Prettier
pnpm format
```

## Architecture Overview

### Content Management
- **Blog Posts**: Located in `content/blogs/` as MDX files
- **Contentlayer**: Configured in `contentlayer.config.ts` to process MDX files with frontmatter fields (title, date, published, featured, description, author, etc.)
- **Blog Processing**: Contentlayer generates computed fields for URL routing and slugs

### App Structure (Next.js App Router)
- `src/app/`: Main application routes
  - `blogs/`: Blog listing and individual post pages
  - `project/`: Portfolio project showcase
  - `contact/`: Contact page
  - `intro/`, `glass/`, `dynamic-island/`, `shadow/`: Interactive demo pages
  - `api/`: API routes for OG images, fonts, and setup scripts

### Key Components
- `src/components/`: Reusable components including blog cards, animations, and layout components
- `src/components/cv-thing/`: Resume/CV related components
- `src/components/assets/`: SVG assets and signature animations
- Custom toast notifications using a custom implementation in `src/components/stack-toast/`

### Styling
- Tailwind CSS with custom configuration
- Global styles in `src/styles/globals.css`
- Component-specific CSS files for complex animations (glass.css, project.css, shadow.css)
- Uses Geist font family

### State Management
- Zustand store configured in `src/app/store.tsx`
- Context-based state management for global app state

## Content Editing

When editing blog posts:
- Files are in `content/blogs/` with `.mdx` extension
- Required frontmatter: `title`, `date`, `description`, `author`
- Optional frontmatter: `published`, `featured`, `repository`, `ogImage`, `image`
- Content is processed by Contentlayer with syntax highlighting via rehype-highlight

## Special Features

- **OG Image Generation**: Dynamic OG images generated via `/api/og/`
- **Font API**: Custom font serving via `/api/font/`
- **Setup Scripts**: Development environment setup scripts in `/api/setup/`
- **Interactive Elements**: Custom animations using Framer Motion and CSS animations

## Package Manager

Uses pnpm as the package manager (specified in package.json packageManager field).
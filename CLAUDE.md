# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `pnpm dev` - Start the development server with Turbopack at http://localhost:3000

### Build & Production
- `pnpm build` - Build the application for production with Turbopack
- `pnpm start` - Start the production server

## Project Context

This is a personal blog/portfolio website for showcasing work experience as a Full-Stack/Data Analyst Developer.

## Architecture

This is a Next.js 15.5.0 application using the App Router architecture with TypeScript and Tailwind CSS v4.

### Key Structure
- **App Router**: Located in `/app` directory
  - `layout.tsx` - Root layout with Geist font configuration
  - `page.tsx` - Main page component
  - `globals.css` - Global styles with Tailwind directives
  
### Configuration
- **TypeScript**: Strict mode enabled with path alias `@/*` mapping to root
- **Tailwind CSS v4**: Using PostCSS plugin configuration
- **Turbopack**: Enabled for both development and production builds

### Development Notes
- Pages auto-update on file changes during development
- The project uses Next.js Font optimization with Geist font family
- React 19.1.0 with latest React features
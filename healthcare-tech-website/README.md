# Healthcare Tech Website - Project Structure Guide

## Introduction

This document explains how this website is organized and what each file does. It's written for people with no coding experience, so you can understand how everything fits together.

Think of this website like a house:
- The **foundation** is the core structure (app folder)
- The **rooms** are the different sections (components/sections)
- The **furniture** is the reusable elements (components/ui)
- The **wiring** is the interactive functionality (hooks)
- The **decoration** is the styling (globals.css)

## Project Overview

This is a professional website for Michał Zdunek, a Healthcare Tech Business Analyst & AI Specialist. The website features:

- A modern, interactive design with animations
- A dark theme with neon accents
- Responsive layout (works on mobile and desktop)
- Smooth scrolling between sections
- Interactive elements like animated counters and glowing buttons

## Folder Structure Explained

Here's a breakdown of the main folders and what they contain:

### `/app` - The Foundation

This is where the website starts. It contains the core files that set up the basic structure.

- **`page.tsx`**: The main file that brings everything together. Think of it as the blueprint for the entire website.
- **`layout.tsx`**: Sets up the overall structure that wraps around everything else, like the frame of a house.
- **`globals.css`**: Contains all the styling rules for the website, like the paint and decoration.

### `/components` - The Building Blocks

This folder contains all the reusable pieces that make up the website, organized into subfolders:

#### `/components/sections` - The Main Rooms

Each file here represents a major section of the website:

- **`hero-section.tsx`**: The first thing visitors see - introduces Michał.
- **`achievements-section.tsx`**: Showcases key professional accomplishments with animated counters.
- **`experience-section.tsx`**: Shows professional history in a timeline format.
- **`skills-section.tsx`**: Displays professional skills organized by category with animated progress bars.
- **`projects-section.tsx`**: Highlights featured projects with details and metrics.
- **`contact-section.tsx`**: Provides ways to get in touch and includes a contact form.
- **`footer.tsx`**: The bottom section with copyright information.

#### `/components/navigation` - The Pathways

These files handle the navigation menu that helps visitors move around the website:

- **`navigation.tsx`**: The main navigation bar that stays at the top of the screen.
- **`nav-menu.tsx`**: The actual links in the navigation bar.

#### `/components/ui` - The Furniture

These are smaller, reusable elements that appear throughout the website:

- **`glowing-button.tsx`**: Creates interactive buttons with a glowing effect when hovered.
- **`count-up.tsx`**: Animates numbers counting up from zero to a target value.
- **`parallax-section.tsx`**: Creates sections where background elements move at a different speed than content when scrolling.

#### `/components/icons` - The Decorations

Custom icon components used throughout the website:

- **`users.tsx`**: A custom icon representing groups of people.

### `/hooks` - The Wiring

These files contain special functions that add interactive behavior:

- **`use-scroll-spy.ts`**: Tracks which section of the page is currently visible as the user scrolls.

## How It All Works Together

1. When someone visits the website, `app/page.tsx` loads first.
2. This file sets up the overall structure and imports all the section components.
3. Each section component (from `/components/sections`) renders its specific content.
4. These sections use smaller UI components (from `/components/ui`) for buttons, animations, etc.
5. The navigation component stays fixed at the top and highlights the current section.
6. The hooks (from `/hooks`) provide interactive functionality like tracking scroll position.

## Detailed File Descriptions

### Core Files

#### `app/page.tsx`
This is the main file that brings everything together. It:
- Imports all the section components
- Sets up references to each section for scrolling
- Arranges all sections in the correct order
- Tracks which section is currently visible

#### `app/layout.tsx`
This file sets up the overall structure of the website, including:
- The HTML document structure
- The font to use throughout the site
- The page title and description that appear in browser tabs and search results
- The theme provider for dark/light mode

#### `app/globals.css`
This contains all the styling rules for the website, including:
- Color definitions
- Custom animations
- Special effects like glows and gradients
- Scrollbar styling

### Section Components

#### `components/sections/hero-section.tsx`
The first section visitors see. It includes:
- Michał's name and title
- A brief introduction
- Call-to-action buttons
- An avatar placeholder
- Animated entrance effects

#### `components/sections/achievements-section.tsx`
Showcases key professional accomplishments. It includes:
- Three achievement cards with icons
- Animated counters that count up to the achievement values
- Hover effects on the cards

#### `components/sections/experience-section.tsx`
Shows professional history in a timeline format. It includes:
- A vertical timeline with dots for each position
- Cards for each job position with details
- Different styling for the current position
- Alternating left/right layout on larger screens

#### `components/sections/skills-section.tsx`
Displays professional skills organized by category. It includes:
- Four skill categories with icons
- Progress bars for each skill
- Animated filling of the progress bars when scrolled into view

#### `components/sections/projects-section.tsx`
Highlights featured projects. It includes:
- Project cards with titles and descriptions
- Tags showing technologies used
- Key metrics for each project
- Hover effects on the cards

#### `components/sections/contact-section.tsx`
Provides ways to get in touch. It includes:
- Social media buttons
- A contact form with name, email, and message fields
- Animated entrance effects

#### `components/sections/footer.tsx`
The bottom section of the website. It includes:
- Copyright information with the current year
- Additional notes about the website

### UI Components

#### `components/ui/glowing-button.tsx`
Creates interactive buttons with a glowing effect. Features:
- Different styles (solid or outline)
- Custom colors
- Grows slightly when hovered
- Shrinks slightly when clicked
- Glowing effect appears when hovered

#### `components/ui/count-up.tsx`
Animates numbers counting up from zero. Features:
- Starts animation when scrolled into view
- Customizable duration
- Optional prefix and suffix text
- Gradient text effect

#### `components/ui/parallax-section.tsx`
Creates sections with a parallax scrolling effect. Features:
- Background elements move at a different speed than content
- Sections fade in and out as they enter and leave the viewport
- Blurred background circles for visual interest

### Navigation Components

#### `components/navigation/navigation.tsx`
The main navigation bar that stays at the top of the screen. Features:
- Fixed position so it's always visible
- Different layouts for mobile and desktop
- Animated entrance effect
- Mobile menu toggle button

#### `components/navigation/nav-menu.tsx`
The actual links in the navigation bar. Features:
- Highlights the currently active section
- Animated indicator line under the active link
- Different layout in mobile menu

### Hooks

#### `hooks/use-scroll-spy.ts`
A special function that tracks which section is currently visible. Features:
- Monitors scroll position
- Calculates which section takes up most of the viewport
- Updates the active section as the user scrolls
- Provides this information to the navigation component

## How to Navigate This Project

If you're looking to understand or modify something specific:

1. **For overall structure**: Look at `app/page.tsx`
2. **For a specific section**: Find the corresponding file in `/components/sections`
3. **For interactive elements**: Check the files in `/components/ui`
4. **For styling**: Look at `app/globals.css`
5. **For navigation behavior**: See `/components/navigation` and `/hooks/use-scroll-spy.ts`

## Visual Representation

\`\`\`
healthcare_tech_website/
│
├── app/                      # Foundation
│   ├── page.tsx              # Main blueprint
│   ├── layout.tsx            # Overall structure
│   └── globals.css           # Styling rules
│
├── components/               # Building blocks
│   │
│   ├── sections/             # Main rooms
│   │   ├── hero-section.tsx       # Introduction section
│   │   ├── achievements-section.tsx # Accomplishments section
│   │   ├── experience-section.tsx  # Work history section
│   │   ├── skills-section.tsx     # Skills section
│   │   ├── projects-section.tsx   # Projects section
│   │   ├── contact-section.tsx    # Contact section
│   │   └── footer.tsx             # Bottom section
│   │
│   ├── navigation/           # Pathways
│   │   ├── navigation.tsx         # Main navigation bar
│   │   └── nav-menu.tsx           # Navigation links
│   │
│   ├── ui/                   # Furniture
│   │   ├── glowing-button.tsx     # Interactive buttons
│   │   ├── count-up.tsx           # Animated counters
│   │   └── parallax-section.tsx   # Scrolling effect sections
│   │
│   └── icons/                # Decorations
│       └── users.tsx              # People icon
│
└── hooks/                    # Wiring
    └── use-scroll-spy.ts          # Scroll tracking function
\`\`\`

This structure follows the Single Responsibility Principle, where each file has one clear purpose, making the project easier to understand and maintain.

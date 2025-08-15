# Retro Terminal Portfolio Page

My Portfolio page for anyone thats looking to hire me or just get to know me better. It draws inspiration from both the terminals in the Fallout games.


## A little bit more insight on the app

- **Interactive Terminal Interface**: An interactive portfolio page that behaves like a linux terminal with custom commands for each respective sections, each containing important information that recruiters may be looking for.
- **Professional Content**: Complete portfolio with projects, skills, and contact info, as well as some other personal details about me so you can get to know me better.


## Wanna Run this locally?

### Prerequisites

Make sure you have Node.js installed on your machine.

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd ascii-terminal-resume-hub
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Commands

Once the app is running, try these terminal commands:

- `/about` - Learn about me
- `/skills` - View technical skills  
- `/projects` - Browse my projects
- `/resume` - Professional experience
- `/contact` - Get in touch
- `help` - Show all available commands
- `clear` - Clear the terminal
- `send-message --subject="Hello"` - Quick email contact

### Easter Eggs / Extra Stuff
- `whoami` - System user info
- `date` - Current date/time
- `uname` - System information
- `holby` - Special ASCII art
- `ls` - List directory contents

## Technology Stack

- **React 18** - Frontend framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool and dev server
- **Lucide React** - Icons

## Project Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI components
│   ├── PortfolioApp.tsx # Main application component
│   ├── PortfolioSections.tsx # Content sections
│   ├── Terminal.tsx     # Terminal interface
│   └── StartupAnimation.tsx # Boot sequence
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
└── pages/               # Page components
```

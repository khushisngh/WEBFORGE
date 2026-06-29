# WebForge 🔨
> Turn your ideas into production-ready websites using AI — in minutes.

## Live Demo
[Add your deployed link here]

## Screenshots
[Add screenshots of home, generate, and editor pages]

## Features
- AI-powered website generation from text prompts
- Google OAuth authentication
- Live code editor with Monaco
- Real-time preview
- One-click deploy
- Credit-based usage system
- Update/regenerate websites with chat

## Tech Stack
| Frontend | Backend | Services |
|----------|---------|----------|
| React + Vite | Node.js + Express | Firebase Auth |
| Tailwind CSS v4 | MongoDB + Mongoose | OpenRouter AI |
| Redux Toolkit | JWT Auth | Stripe Payments |
| Framer Motion | Cookie Sessions | |

## Architecture
- MERN Stack (MongoDB, Express, React, Node)
- REST API
- AI integration via OpenRouter (DeepSeek/GPT models)
- Firebase Google OAuth popup flow
- Credit deduction system per generation/update

## Getting Started
[installation steps]

## Environment Variables
[list all required env vars without values]

## API Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/auth/google | Google login |
| POST | /api/website/generate | Generate website |
| POST | /api/website/update/:id | Update website |
| GET | /api/website/get-all | Get all websites |
| GET | /api/website/deploy/:id | Deploy website |

## Credits System
- New user: 100 credits
- Generate website: 50 credits
- Update website: 25 credits

## License
MIT © 2026 Khushi

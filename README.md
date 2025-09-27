# Todo Next.js App using NextAuth.js, Prisma and tRPC

A full-stack todo application built with Next.js 15, featuring GitHub authentication via NextAuth.js, tRPC for type-safe API calls, and Prisma for database management.

## 🚀 Features

- ✅ **Todo Management**: Create, read, update, and delete todos
- 🔐 **GitHub Authentication**: Secure sign-in with GitHub OAuth
- 🔒 **Protected Routes**: User-specific todo lists with session-based protection
- 📡 **Type-safe APIs**: End-to-end type safety with tRPC
- 🎨 **Modern UI**: Built with Tailwind CSS and Radix UI components
- 🗄️ **Database Integration**: MySQL database with Prisma ORM
- 📱 **Responsive Design**: Works seamlessly across all devices
- ⚡ **Performance**: Powered by Next.js 15 with Turbopack

## 🛠️ Tech Stack

### Frontend

- **Next.js 15** - React framework with App Router
- **React 19** - Latest React features
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icons
- **Zustand** - State management

### Backend

- **tRPC** - End-to-end type safety
- **NextAuth.js v5** - Authentication solution
- **Prisma** - Modern database toolkit
- **MySQL** - Relational database
- **Zod** - Schema validation

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd todo_next
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:

   ```env
   # Database
   DATABASE_URL="mysql://username:password@localhost:3306/todo_next"

   # NextAuth.js
   NEXTAUTH_SECRET="your-nextauth-secret"
   NEXTAUTH_URL="http://localhost:3000"

   # GitHub OAuth
   GITHUB_AUTH_ID="your-github-client-id"
   GITHUB_AUTH_SECRET="your-github-client-secret"
   ```

4. **Database Setup**

   ```bash
   # Generate Prisma client
   npx prisma generate

   # Run database migrations
   npx prisma db push
   ```

5. **GitHub OAuth Setup**
   - Go to [GitHub Developer Settings](https://github.com/settings/developers)
   - Create a new OAuth App
   - Set Authorization callback URL to: `http://localhost:3000/api/auth/callback/github`
   - Copy Client ID and Client Secret to your `.env` file

## 🚀 Getting Started

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## 📁 Project Structure

```
todo_next/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   ├── auth/          # NextAuth.js endpoints
│   │   └── trpc/          # tRPC endpoint
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── ui/               # UI primitives
│   ├── Header.tsx        # Navigation header
│   ├── Todo.tsx          # Todo component
│   └── ...
├── lib/                  # Utility functions
├── prisma/               # Database schema and migrations
│   └── schema.prisma     # Prisma schema
├── server/               # tRPC server configuration
│   ├── routers/          # API route handlers
│   │   ├── task.ts       # Task-related procedures
│   │   └── user.ts       # User-related procedures
│   ├── index.ts          # Main router
│   └── trpc.ts           # tRPC configuration
├── store/                # Zustand state management
└── auth.ts               # NextAuth.js configuration
```

## 🔧 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🗄️ Database Schema

### User Model

```prisma
model User {
  id            String    @id @default(cuid())
  name          String?
  email         String?   @unique
  emailVerified DateTime?
  image         String?
  tasks         Task[]    // User's todos
  accounts      Account[]
  sessions      Session[]
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
}
```

### Task Model

```prisma
model Task {
  id        String   @id @default(cuid())
  title     String
  completed Boolean  @default(false)
  userId    String
  user      User     @relation(fields: [userId], references: [id])
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

## 📡 API Routes (tRPC)

### Task Operations

- `task.getAll` - Fetch all user's tasks
- `task.create` - Create a new task
- `task.toggle` - Toggle task completion status
- `task.delete` - Delete a task

### User Operations

- `user.getProfile` - Get current user profile

## 🔐 Authentication Flow

1. User clicks "Sign in with GitHub"
2. Redirected to GitHub OAuth
3. GitHub redirects back with authorization code
4. NextAuth.js exchanges code for access token
5. User session is created and stored
6. Protected routes and API calls are now accessible

## 🎨 UI Components

Built with modern, accessible components:

- **Checkbox** - Custom styled checkboxes for task completion
- **Avatar** - User profile pictures from GitHub
- **Input** - Form inputs with proper validation
- **Button** - Various button styles and states

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

Make sure to:

- Set up your MySQL database
- Configure environment variables
- Run database migrations
- Build the application

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org) - The React framework
- [tRPC](https://trpc.io) - End-to-end type safety
- [NextAuth.js](https://next-auth.js.org) - Authentication for Next.js
- [Prisma](https://prisma.io) - Next-generation ORM
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework

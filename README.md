# Web App

A modern full-stack web application built with the T3 stack and bulletproof-react architecture principles.

## Tech Stack

- **Package Manager**: pnpm
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Database**: PostgreSQL with Drizzle ORM
- **Authentication**: NextAuth.js v5
- **API**: tRPC for type-safe APIs
- **State Management**: TanStack Query (React Query)
- **Validation**: Zod
- **Linting/Formatting**: Biome
- **Component Development**: Storybook
- **E2E Testing**: Playwright

## Architecture

This project follows bulletproof-react architecture principles, designed to create a predictable, scalable, and maintainable codebase.

### Bulletproof-React Principles

The core philosophy is to **organize code primarily within feature-based modules** where each feature is self-contained and independent. This promotes:

- **Scalability**: Easy to add new features without affecting existing ones
- **Maintainability**: Clear boundaries and responsibilities
- **Team Collaboration**: Multiple developers can work on different features simultaneously
- **Code Reusability**: Shared components and utilities are clearly separated

### Project Structure

```
src/
├── app/                 # Next.js App Router pages & layouts
├── components/          # Shared UI components used across features
├── features/           # Feature-based modules (core of the architecture)
│   └── [feature-name]/
│       ├── api/        # Feature-specific API calls
│       ├── components/ # Feature-specific components
│       ├── hooks/      # Feature-specific React hooks
│       ├── stores/     # Feature-specific state management
│       ├── types/      # Feature-specific TypeScript types
│       └── utils/      # Feature-specific utility functions
├── hooks/              # Shared React hooks
├── lib/                # Reusable utility libraries & configurations
├── providers/          # React context providers
├── server/             # Backend API, database, and authentication
│   ├── api/           # tRPC routers and procedures
│   ├── auth.ts        # NextAuth.js configuration
│   └── db/            # Database schema and connection
├── stores/             # Global client-side state stores
├── trpc/               # tRPC client configuration
├── types/              # Global TypeScript type definitions
└── utils/              # Shared utility functions
```

### Architectural Rules

1. **Feature Independence**: Features should not import from each other
2. **Unidirectional Flow**: `shared → features → app`
3. **Self-Contained Features**: Each feature contains everything it needs
4. **Minimal Shared Dependencies**: Only truly reusable code goes in shared folders
5. **Composition at App Level**: Different features are composed together at the application layer

### Feature Organization

Each feature should only include the folders it actually needs:

```typescript
// ✅ Good: Only include what you need
src/features/authentication/
├── components/
│   ├── login-form.tsx
│   └── signup-form.tsx
├── hooks/
│   └── use-auth.ts
└── types/
    └── auth.types.ts

// ❌ Avoid: Don't create empty folders
src/features/authentication/
├── api/           # Empty folder
├── components/    # Has components
├── hooks/         # Has hooks  
├── stores/        # Empty folder
└── types/         # Has types
```

## Getting Started

1. **Clone and install dependencies**:
   ```bash
   cd web-app
   pnpm install
   ```

2. **Set up environment variables**:
   ```bash
   cp .env.example .env
   ```
   Fill in your environment variables in `.env`

3. **Set up the database**:
   ```bash
   pnpm db:generate
   pnpm db:migrate
   ```

4. **Start the development server**:
   ```bash
   pnpm dev
   ```

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run Biome linter
- `pnpm lint:fix` - Fix linting issues
- `pnpm format` - Format code with Biome
- `pnpm type-check` - Run TypeScript type checking
- `pnpm db:generate` - Generate database migrations
- `pnpm db:migrate` - Run database migrations
- `pnpm db:push` - Push schema changes to database
- `pnpm db:studio` - Open Drizzle Studio
- `pnpm storybook` - Start Storybook
- `pnpm build-storybook` - Build Storybook
- `pnpm test:e2e` - Run Playwright tests
- `pnpm test:e2e:ui` - Run Playwright tests with UI

## Development Guidelines

### Creating a New Feature

1. Create a new folder in `src/features/[feature-name]`
2. Add only the folders you need (components, hooks, types, etc.)
3. Keep all feature logic contained within its folder
4. Export public APIs from an index file if needed
5. Use the feature in your app by importing from `src/features/[feature-name]`

### Component Organization

- **Shared Components** (`src/components/`): Truly reusable UI components (buttons, modals, forms)
- **Feature Components** (`src/features/*/components/`): Components specific to that feature
- **App Components** (`src/app/`): Page-level components and layouts

### API Layer

- **tRPC Routers**: Define in `src/server/api/routers/`
- **Database Schema**: Centralized in `src/server/db/schema.ts`
- **Feature APIs**: Feature-specific API calls in `src/features/[feature]/api/`

## Learn More

- [T3 Stack Documentation](https://create.t3.gg/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Bulletproof React](https://github.com/alan2207/bulletproof-react)
- [Bulletproof React Architecture Guide](https://github.com/alan2207/bulletproof-react/blob/master/docs/project-structure.md)
- [shadcn/ui](https://ui.shadcn.com/)
- [Drizzle ORM](https://orm.drizzle.team/)
- [tRPC](https://trpc.io/)
- [pnpm](https://pnpm.io/)
# T3 Bulletproof App

A powerful, production-ready full-stack application that combines the best of the **T3 Stack** with **Bulletproof React** architecture patterns and **shadcn/ui** components.

## 🚀 What Makes This Project Special?

This isn't just another starter template - it's a carefully crafted combination of three proven approaches:

1. **T3 Stack** - For type-safe, modern full-stack development
2. **Bulletproof React** - For scalable, maintainable frontend architecture  
3. **shadcn/ui** - For beautiful, accessible UI components

## 🎯 Complete Technology Stack

### **Core Framework (T3 Stack)**
- **Next.js 15** - React framework with App Router, RSC, and streaming
- **tRPC v11** - End-to-end typesafe APIs with zero runtime overhead
- **Drizzle ORM** - Lightweight, type-safe database ORM
- **NextAuth.js 5** - Complete authentication solution
- **TypeScript 5.8** - Full type safety across the stack
- **Tailwind CSS 4** - Utility-first CSS framework

### **UI & Components (shadcn/ui)**
- **shadcn/ui** - Beautiful, accessible components built on Radix UI
- **Radix UI Primitives** - Unstyled, accessible UI primitives
- **Tailwind CSS** - Styling with CSS variables for theming
- **Lucide Icons** - Beautiful, consistent icon set
- **Class Variance Authority** - Type-safe variant styling
- **next-themes** - Dark/light theme support

### **Architecture (Bulletproof React)**
- **Feature-based Structure** - Organized by business domains
- **Component Co-location** - Components, tests, and stories together
- **API Layer Abstraction** - Clean separation of concerns
- **Error Boundaries** - Robust error handling
- **Performance Optimizations** - Built-in best practices

### **Testing & Quality**
- **Vitest** - Fast unit testing framework
- **Playwright** - Reliable E2E testing
- **MSW (Mock Service Worker)** - API mocking for tests
- **Testing Library** - Simple and complete testing utilities
- **Storybook 8** - Component development and documentation

### **Developer Experience**
- **TypeScript** - Full type safety with strict mode
- **Biome** - Fast linter and formatter (replaces ESLint + Prettier)
- **Husky + lint-staged** - Pre-commit hooks
- **Plop.js** - Code generation for components and features
- **React Query DevTools** - Debug server state
- **tRPC DevTools** - Debug API calls

## 📁 Project Architecture

```
t3-bulletproof-app/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (auth)/            # Authentication routes
│   │   ├── (dashboard)/       # Protected dashboard routes
│   │   ├── api/               # API routes (tRPC, NextAuth)
│   │   ├── globals.css        # Global styles
│   │   └── layout.tsx         # Root layout with providers
│   │
│   ├── components/            # Reusable UI Components
│   │   ├── ui/               # shadcn/ui components
│   │   │   ├── button/       # Button component with variants
│   │   │   ├── dialog/       # Modal dialog components
│   │   │   ├── form/         # Form components (input, select, etc.)
│   │   │   └── ...          # All other UI primitives
│   │   ├── layouts/          # Layout components
│   │   └── errors/           # Error boundary components
│   │
│   ├── features/             # Feature-based Organization
│   │   ├── auth/            # Authentication feature
│   │   │   ├── components/  # Auth-specific components
│   │   │   ├── api/         # Auth API functions
│   │   │   └── hooks/       # Auth-related hooks
│   │   ├── discussions/     # Discussions feature
│   │   └── users/          # User management feature
│   │
│   ├── lib/                  # Shared Libraries
│   │   ├── api-client.ts    # HTTP client with error handling
│   │   ├── auth.tsx         # NextAuth configuration
│   │   ├── react-query.ts   # React Query setup
│   │   ├── trpc.ts          # tRPC client setup
│   │   └── utils.ts         # Utility functions (cn, etc.)
│   │
│   ├── server/               # Server-side Code (T3 Stack)
│   │   ├── api/             # tRPC routers and procedures
│   │   │   ├── root.ts      # Main app router
│   │   │   ├── trpc.ts      # tRPC configuration
│   │   │   └── routers/     # Feature-specific routers
│   │   ├── auth/            # NextAuth configuration
│   │   └── db/              # Database setup and schema
│   │
│   ├── hooks/                # Custom React Hooks
│   ├── types/                # TypeScript type definitions
│   ├── utils/                # Utility functions
│   └── config/               # Configuration files
│
├── public/                   # Static assets
├── components.json           # shadcn/ui configuration
├── tailwind.config.cjs       # Tailwind CSS configuration
├── drizzle.config.ts         # Database configuration
└── package.json              # Dependencies and scripts
```

## 🏗️ Key Architectural Decisions

### **1. Feature-based Organization**
Instead of technical grouping (components/, hooks/, utils/), code is organized by business features:

```
features/
├── auth/           # Everything related to authentication
├── discussions/    # Discussion forum functionality
└── users/         # User management
```

**Benefits:**
- ✅ Easy to find related code
- ✅ Better team collaboration
- ✅ Easier to delete features
- ✅ Reduced coupling between features

### **2. Type-safe API with tRPC**
No more API documentation that gets out of sync:

```typescript
// Server-side procedure
const createPost = publicProcedure
  .input(z.object({ title: z.string(), content: z.string() }))
  .mutation(async ({ input }) => {
    return await db.post.create({ data: input });
  });

// Client-side usage (fully typed!)
const { mutate: createPost } = api.post.create.useMutation();
createPost({ title: "Hello", content: "World" }); // ✅ Type-safe!
```

### **3. Component Co-location**
Each component includes everything it needs:

```
components/ui/button/
├── button.tsx         # Component implementation
├── button.stories.tsx # Storybook stories
├── button.test.tsx    # Unit tests
└── index.ts          # Clean exports
```

### **4. Robust Error Handling**
Multiple layers of error handling:
- React Error Boundaries for UI errors
- tRPC error formatting with Zod validation
- Global error toast notifications
- Graceful fallbacks for all components

## 🎨 Design System with shadcn/ui

### **Component Philosophy**
- **Accessible by default** - Built on Radix UI primitives
- **Customizable** - Easy to modify and extend
- **Consistent** - Design tokens via CSS variables
- **Type-safe** - Full TypeScript support with variant props

### **Key Components Available:**
- **Layout**: Container, Separator, Tabs
- **Navigation**: Command Palette, Dropdown Menu
- **Forms**: Input, Select, Switch, Textarea, Label
- **Feedback**: Toast, Dialog, Drawer, Alert
- **Data Display**: Table, Badge, Avatar
- **Interaction**: Button, Link, Pagination

### **Theming Support:**
```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 221.2 83.2% 53.3%;
  /* ... and many more design tokens */
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  /* ... dark mode overrides */
}
```

## 🧪 Testing Strategy

### **Unit Testing (Vitest)**
```typescript
// Component testing with Testing Library
test('button renders with correct variant', () => {
  render(<Button variant="destructive">Delete</Button>);
  expect(screen.getByRole('button')).toHaveClass('bg-destructive');
});
```

### **Integration Testing (MSW)**
```typescript
// Mock API responses for testing
const handlers = [
  http.post('/api/auth/login', () => {
    return HttpResponse.json({ user: mockUser });
  }),
];
```

### **E2E Testing (Playwright)**
```typescript
// Full user workflow testing
test('user can create and delete a post', async ({ page }) => {
  await page.goto('/dashboard');
  await page.click('[data-testid="create-post"]');
  // ... test complete user flows
});
```

## 🚀 Getting Started

### **Prerequisites**
- **Node.js 18+** (20+ recommended)
- **pnpm** (preferred) or npm/yarn
- **PostgreSQL** database
- **Git** for version control

### **Environment Setup**

1. **Clone and Install**
```bash
git clone <repository-url>
cd t3-bulletproof-app
pnpm install
```

2. **Environment Configuration**
```bash
cp .env.example .env
# Edit .env with your database URL and auth secrets
```

3. **Database Setup**
```bash
# Generate database schema
pnpm db:generate

# Apply migrations to your database
pnpm db:push

# (Optional) Open Drizzle Studio to view your data
pnpm db:studio
```

4. **Start Development**
```bash
# Start the development server
pnpm dev

# In another terminal, start Storybook (optional)
pnpm storybook
```

## 📊 Available Scripts

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start development server with hot reload |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm test` | Run unit tests with Vitest |
| `pnpm test:e2e` | Run E2E tests with Playwright |
| `pnpm typecheck` | Run TypeScript type checking |
| `pnpm lint` | Run Biome linter |
| `pnpm lint:fix` | Fix linting issues automatically |
| `pnpm db:generate` | Generate database schema |
| `pnpm db:push` | Push schema changes to database |
| `pnpm db:studio` | Open Drizzle Studio |
| `pnpm storybook` | Start Storybook dev server |
| `pnpm generate` | Generate new components/features |

## 🌟 Why This Combination?

### **T3 Stack Benefits:**
- ✅ **End-to-end type safety** - No runtime surprises
- ✅ **Modern React patterns** - Server Components, Suspense, streaming
- ✅ **Performance optimized** - Built-in caching and optimization
- ✅ **Developer experience** - Hot reload, error overlays, DevTools

### **Bulletproof React Benefits:**
- ✅ **Scalable architecture** - Proven patterns for large applications
- ✅ **Team-friendly** - Clear conventions and co-location
- ✅ **Testing-first** - Built-in testing utilities and patterns
- ✅ **Performance-conscious** - Lazy loading, code splitting, optimization

### **shadcn/ui Benefits:**
- ✅ **Accessible by default** - WCAG compliant components
- ✅ **Customizable design** - Easy to match your brand
- ✅ **Copy-paste friendly** - Own your components, no black box
- ✅ **Type-safe styling** - Variant props with full TypeScript support

## 🔧 Customization Guide

### **Adding New Features**
```bash
# Generate a new feature with Plop
pnpm generate feature

# This creates:
# - src/features/[name]/
# - Components, API functions, hooks
# - Tests and Storybook stories
```

### **Adding New Components**
```bash
# Generate a new component
pnpm generate component

# Or install shadcn/ui components
npx shadcn@latest add dialog
npx shadcn@latest add command
```

### **Database Schema Changes**
```typescript
// 1. Update schema in src/server/db/schema.ts
export const posts = pgTable("posts", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 256 }).notNull(),
  content: text("content").notNull(),
});

// 2. Generate migration
// pnpm db:generate

// 3. Apply changes
// pnpm db:push
```

## 📚 Learn More

- **[T3 Stack Documentation](https://create.t3.gg/)** - Complete T3 guide
- **[Bulletproof React](https://github.com/alan2207/bulletproof-react)** - Architecture patterns
- **[shadcn/ui](https://ui.shadcn.com/)** - Component documentation
- **[Next.js 15](https://nextjs.org/docs)** - Framework documentation
- **[tRPC](https://trpc.io/docs)** - Type-safe APIs
- **[Drizzle ORM](https://orm.drizzle.team/)** - Database toolkit
- **[NextAuth.js](https://next-auth.js.org/)** - Authentication
- **[Tailwind CSS](https://tailwindcss.com/docs)** - Styling framework

## 🤝 Contributing

This project follows the [Bulletproof React](https://github.com/alan2207/bulletproof-react) contribution guidelines with T3 stack conventions. See individual documentation for specific patterns and practices.

---

**Built with ❤️ using T3 Stack + Bulletproof React + shadcn/ui**
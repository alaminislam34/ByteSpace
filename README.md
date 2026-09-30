# ByteSpace

ByteSpace is a modern, responsive learning platform and creator ecosystem built following provided Figma specifications. The application focuses on clean component architecture, reusability, type safety, and responsive design across mobile, tablet, and desktop viewports.

- **Live Application:** [https://bytespace4.vercel.app](https://bytespace4.vercel.app)
- **Repository:** [https://github.com/alaminislam34/ByteSpace](https://github.com/alaminislam34/ByteSpace)

---

## Features

- **Homepage & Sections:**
  - Hero section with interactive badge components and search field
  - Category exploration and learning path grid
  - Creator and student growth showcases with metric cards
  - Testimonial grid and multi-column responsive footer
- **Course Catalog & Filtering:**
  - Category pill filters, search input, and level filtering
  - Paginated course cards displaying rating, lessons count, duration, and pricing
- **Course Detail View:**
  - Hero header with video preview modal
  - Tabbed syllabus navigation (About, Lessons, Reviews)
  - Sticky sidebar enrollment card and creator details
- **Creator Profiles:**
  - Dedicated creator page displaying portfolio, courses, and creator statistics
- **Authentication:**
  - Custom Sign In and Registration views with reusable, accessible form components
- **User Experience Enhancements:**
  - Official brand mark integrated as the favicon and app icon
  - Smooth floating scroll-to-top button with adaptive visibility

---

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Library:** React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS (v4)
- **Icons:** Lucide React & React Icons
- **State & Data Fetching:** TanStack React Query
- **Deployment:** Vercel

---

## Project Structure

```text
client/
├── public/                 # Static assets, images, and brand icons
├── src/
│   ├── app/                # Next.js App Router (pages and layouts)
│   │   ├── (auth)/         # Auth routes (/signin, /join)
│   │   ├── (site)/         # Public site routes (/, /courses, /creators)
│   │   ├── globals.css     # Design tokens and custom utilities
│   │   └── layout.tsx      # Root HTML shell and providers
│   ├── components/
│   │   ├── auth/           # Authentication forms and collage components
│   │   ├── course-catalog/ # Search header and filter bars
│   │   ├── course-detail/  # Hero, tab panels, and sidebar cards
│   │   ├── creator-profile/# Creator header and course filters
│   │   ├── layout/         # Navbar, MobileNavMenu, and Footer
│   │   ├── sections/       # Feature sections for the landing page
│   │   └── ui/             # Atomic reusable components (Button, InputField, etc.)
│   ├── constants/          # Static routes, navigation links, and avatars
│   ├── data/               # Course and creator mock datasets
│   ├── hooks/              # Custom React hooks (e.g., useMediaQuery, useDebounce)
│   ├── lib/                # Utility helpers (clsx, tailwind-merge)
│   ├── providers/          # QueryClient and context providers
│   └── types/              # TypeScript interfaces and domain models
```

---

## Getting Started

### Prerequisites

- Node.js 18.18+ or later
- pnpm (recommended) or npm/yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/alaminislam34/ByteSpace.git
   cd ByteSpace/client
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Start the development server:
   ```bash
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

To create an optimized production build:
```bash
pnpm build
```

To run the linter:
```bash
pnpm lint
```

---

## Git Workflow

Development follows a feature-branching model where distinct capabilities are developed in isolation and merged into `main` via Pull Requests:

- `feature/landing-page-setup`: Core layout, responsive navigation, hero, and sections
- `feature/courses-and-creators`: Course catalog, details view, and creator profiles
- `feature/auth-and-reusable-ui`: Authentication forms, reusable input components, and branding assets

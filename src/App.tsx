import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Header } from "./components/site/Header";
import { Footer } from "./components/site/Footer";

// Code-split page imports with lazy loading
const Home = lazy(() => import("./pages/index"));
const AboutPage = lazy(() => import("./pages/about"));
const TeamPage = lazy(() => import("./pages/TeamPage"));
const ArtSpacePage = lazy(() => import("./pages/art-space"));
const EmergingResidency = lazy(() => import("./pages/EmergingResidency"));
const ProfessionalResidency = lazy(() => import("./pages/ProfessionalResidency"));
const ExchangePage = lazy(() => import("./pages/exchange"));
const ContactPage = lazy(() => import("./pages/contact"));

// Lightweight loading fallback - prevents layout shift
function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-pulse text-foreground/50">Loading...</div>
    </div>
  );
}

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow">Lost in the mangroves</p>
        <h1 className="mt-4 font-serif text-7xl text-foreground">404</h1>
        <h2 className="mt-4 font-serif text-2xl text-foreground">Page not found</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          The path you're following doesn't exist. Let's get you back to the creek.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center rounded-full bg-foreground px-6 py-3 text-xs uppercase tracking-[0.18em] text-background hover:bg-primary transition-colors"
          >
            Return home
          </Link>
        </div>
      </div>
    </div>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-6 left-0 right-0 z-40 px-6 md:hidden">
        <Link
          to="/contact"
          className="flex items-center justify-center gap-3 w-full bg-foreground text-background py-4 px-6 rounded-full shadow-2xl font-medium uppercase tracking-widest text-xs animate-in fade-in slide-in-from-bottom-4 duration-1000"
        >
          Collaborate With Us
        </Link>
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/art-space" element={<ArtSpacePage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/residency/emerging" element={<EmergingResidency />} />
            <Route path="/residency/professional" element={<ProfessionalResidency />} />
            <Route path="/residency" element={<Navigate to="/residency/emerging" replace />} />
            <Route path="/exchange" element={<ExchangePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundComponent />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

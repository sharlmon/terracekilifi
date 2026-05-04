import { Routes, Route, Link } from 'react-router-dom';
import { Header } from "./components/site/Header";
import { Footer } from "./components/site/Footer";

// Pages
import HomePage from './pages/index';
import AboutPage from './pages/about';
import ArtSpacePage from './pages/art-space';
import ResidencyPage from './pages/residency';
import ExchangePage from './pages/exchange';
import ContactPage from './pages/contact';

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
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/art-space" element={<ArtSpacePage />} />
        <Route path="/residency" element={<ResidencyPage />} />
        <Route path="/exchange" element={<ExchangePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundComponent />} />
      </Routes>
    </Layout>
  );
}

export default App;

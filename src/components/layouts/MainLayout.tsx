import type { LayoutProps } from '@customTypes/general.types';
import Header from '@components/navigation/Header';
import Footer from '@components/navigation/Footer';

export default function MainLayout({ children }: LayoutProps) {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <div className="mx-auto max-w-6xl">{children}</div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

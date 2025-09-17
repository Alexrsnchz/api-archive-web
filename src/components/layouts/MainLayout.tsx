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
        <div className="px-6 md:px-16 lg:px-0 mx-auto max-w-4xl">{children}</div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

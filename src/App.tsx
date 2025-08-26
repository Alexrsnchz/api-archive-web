import MainLayout from '@components/layouts/MainLayout';
import Hero from '@components/sections/Hero';

export default function App() {
  return (
    <MainLayout>
      <Hero />
      <div className="min-h-screen"></div>
    </MainLayout>
  );
}

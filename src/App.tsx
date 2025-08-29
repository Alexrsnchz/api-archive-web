import MainLayout from '@components/layouts/MainLayout';
import Hero from '@components/sections/Hero';
import Explorer from '@components/sections/Explorer';

export default function App() {
  return (
    <MainLayout>
      <Hero />
      <Explorer />
      <div className="min-h-screen"></div>
    </MainLayout>
  );
}

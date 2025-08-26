import MainLayout from '@components/layouts/MainLayout';
import Hero from '@components/sections/Hero';
import CategoryList from '@components/sections/CategoryList';

export default function App() {
  return (
    <MainLayout>
      <Hero />
      <CategoryList />
      <div className="min-h-screen"></div>
    </MainLayout>
  );
}

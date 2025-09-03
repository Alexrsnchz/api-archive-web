import MainLayout from '@components/layouts/MainLayout';
import Hero from '@components/sections/Hero';
import Explorer from '@components/sections/Explorer';
import Contribution from '@components/sections/Contribution';

export default function App() {
  return (
    <MainLayout>
      <Hero />
      <Explorer />
      <Contribution />
    </MainLayout>
  );
}

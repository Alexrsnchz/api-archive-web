import { MainLayout } from '@components/structures/Layouts';
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

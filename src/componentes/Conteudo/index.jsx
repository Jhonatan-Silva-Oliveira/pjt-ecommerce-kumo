import SecaoBanner from './SecaoBanner';
import SecaoTrending from './SecaoTrending';
import SecaoClient from './SecaoClient';

export default function Conteudo() {
  return (
    <main>
      <SecaoBanner />
      <SecaoTrending />
      <SecaoClient />
    </main>
  )
}
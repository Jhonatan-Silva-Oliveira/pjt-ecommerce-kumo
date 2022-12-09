import React from 'react';
import SecaoBanner from './SecaoBanner';
import SecaoTrending from './SecaoTrending';
import SecaoClient from './SecaoClient';
import SecaoUpdateNews from './SecaoUpdateNews';

export default function Conteudo() {
  return (
    <main>
      <SecaoBanner />
      <SecaoTrending />
      <SecaoClient />
      <SecaoUpdateNews />
    </main>
  )
}
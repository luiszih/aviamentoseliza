## Objetivo
Corrigir os cards da seção "Tradição certificada" (`Diferenciais` em `src/components/LandingPage.tsx`, linhas ~315–387) para que os logotipos FAMA e ABVTEX virem ícones SVG inline brancos dentro do mesmo container marrom arredondado, mantendo apenas o terceiro card com o ícone `Factory` original.

## Alterações em `src/components/LandingPage.tsx`

1. **Trocar o tipo do array `items`**: substituir o campo `icon: typeof ShieldCheck` por `icon: React.ComponentType<{ className?: string }>` e remover os campos `image` e `imageAlt`.

2. **Criar dois componentes SVG inline** no topo do arquivo (acima de `Diferenciais`), seguindo o mesmo padrão dos ícones Lucide (traço branco, `currentColor`, ~28px via `className`):
   - `FamaIcon` — wordmark estilizado "FAMA" em letras geométricas brancas (paths/rects), minimalista, ocupando o quadrado.
   - `AbvtexIcon` — agulha de costura diagonal atravessada por uma linha curva (representando a marca ABVTEX), traço branco com `stroke-width` consistente com Lucide (~1.75–2).

3. **Atualizar os três itens** do array:
   - Card 1: `icon: FamaIcon`, manter title/desc, sem `image`.
   - Card 2: `icon: AbvtexIcon`, manter title/desc, sem `image`.
   - Card 3: `icon: Factory` (inalterado).

4. **Remover o bloco `{it.image && (<img .../>)}`** do JSX do map.

5. **Remover** os arquivos não utilizados `public/logo-fama.jpg` e `public/logo-abvtex.jpg` (já que a regra de ouro proíbe qualquer raster nesses cards).

## Fora de escopo
Nenhuma outra seção, cor, tipografia ou espaçamento será alterado. O container marrom (`h-14 w-14 rounded-xl`, `background: brown`) e o restante do card permanecem idênticos.

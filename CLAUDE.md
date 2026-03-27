# CLAUDE.md

## Projeto

Website profissional estático para o Psicólogo João Novaes (CRK 00/00000). Single-page, hospedado no Cloudflare Pages.

## Rodar localmente

```bash
python3 -m http.server 8080
# http://localhost:8080
```

## Stack

- HTML/CSS/JS puro, zero dependências
- Google Fonts: Playfair Display (headings) + Inter (body)
- SVG inline para ícones
- Cloudflare Pages para deploy (push na main = deploy automático)

## Estrutura

- `index.html` — Página única com todas as seções
- `src/css/style.css` — Design system completo com CSS Custom Properties
- `src/js/main.js` — Nav mobile, scroll animations, FAQ accordion
- `src/img/` — Foto (webp) e favicon (svg)
- `_headers` / `_redirects` — Config Cloudflare Pages
- `research/` — Documentos de pesquisa (benchmark, abordagens, Instagram, design system, ética CFP)
- `docs/` — Decisões de design e guia de deploy

## Design System

- Primary: `#1B3A2D` (deep forest green)
- Accent: `#C4943A` (golden hour)
- Cream: `#FAF7F2` (ivory background)
- Sand: `#E8DFD5` (cards/alternating sections)
- Todas as variáveis estão em `:root` no topo do `style.css`

## Ética CFP

O copy foi revisado para conformidade com o Código de Ética do Psicólogo. Regras críticas:

- **Sem depoimentos de pacientes** (Art. 20, Resolução CFP 010/2005)
- **Sem promessas de resultado** — não usar "transformação", "mudanças reais", "garantia", "cura"
- **Sem sensacionalismo** — não usar "+500 vidas transformadas", estrelas, ratings
- **Sem preços** como propaganda — vedado "desconto", "promoção", "valor acessível"
- **Linguagem informativa** — descrever abordagens e demandas, não prometer outcomes
- Detalhes completos em `research/05-cfp-ethics-review.md`

## Idioma

- Copy do site: português brasileiro
- Commits e PRs: inglês (Conventional Commits)

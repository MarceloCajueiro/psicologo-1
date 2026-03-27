# Psicólogo João Novaes - Website

Website profissional para o Psicólogo João Novaes (CRK 00/00000), especialista em Hipnose Clínica, PNL e Terapia da Linha do Tempo.

**Site estático** | **Cloudflare Pages** | **Criciúma/SC**

## Rodar localmente

```bash
python3 -m http.server 8080
# Acessar http://localhost:8080
```

## Deploy

Hospedado no **Cloudflare Pages** conectado a este repositório. O deploy é automático a cada push na branch `main`.

- **Build command:** nenhum (site estático)
- **Build output directory:** `/` (raiz)
- **Domínio:** mikaelpsicologo.com.br (a configurar)

## Estrutura

```
.
├── index.html              # Página principal (single-page)
├── src/
│   ├── css/style.css       # Design system + estilos (~1100 linhas)
│   ├── js/main.js          # Navegação, scroll animations, FAQ
│   └── img/
│       ├── mikael.webp     # Foto do profissional
│       └── favicon.svg     # Favicon SVG
├── research/               # Documentos de pesquisa e decisões
│   ├── 01-benchmark.md     # Benchmark internacional de sites de psicólogos
│   ├── 02-therapy-research.md  # Pesquisa sobre Hipnose, PNL e TLT
│   ├── 03-instagram-analysis.md # Análise do perfil @mikaelpsicologo
│   ├── 04-design-system.md # Brand guide e design system
│   └── 05-cfp-ethics-review.md # Revisão ética CFP
├── _headers                # Security headers (Cloudflare Pages)
├── _redirects              # Redirects (/whatsapp, /instagram)
├── robots.txt              # SEO
└── sitemap.xml             # SEO
```

## Stack

- HTML5 semântico
- CSS3 com Custom Properties (variáveis)
- JavaScript vanilla (sem frameworks/dependências)
- Google Fonts: Playfair Display + Inter
- SVG inline para ícones

## Seções do site

1. **Hero** - Headline + CTA WhatsApp
2. **Proof Bar** - Credenciais rápidas
3. **Sobre** - Biografia + foto + valores
4. **Abordagens** - Hipnose, PNL e TLT (3 cards detalhados + bloco de integração)
5. **Como Funciona** - 4 passos + modalidades (presencial/online)
6. **Para Quem** - 3 cards com demandas atendidas
7. **FAQ** - 7 perguntas frequentes (accordion nativo)
8. **CTA Final** - Contato WhatsApp + telefone
9. **Footer** - Links, contato, CRP

## Contato do cliente

- **Nome:** João Novaes
- **CRK:** 00/00000
- **WhatsApp:** (48) 9 9125-3723
- **Instagram:** [@mikaelpsicologo](https://www.instagram.com/mikaelpsicologo/)
- **Localização:** Criciúma/SC

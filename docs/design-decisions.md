# Decisões de Design

Documento que registra as decisões de design tomadas durante o desenvolvimento do site, com suas motivações.

---

## 1. Paleta de Cores

### Decisão: "Deep Forest meets Golden Hour"

| Token | Cor | Uso |
|-------|-----|-----|
| Primary | `#1B3A2D` | Verde floresta profundo - nav, botões, footer, CTA |
| Accent | `#C4943A` | Dourado quente - destaques, tags, hover states |
| Cream | `#FAF7F2` | Marfim aquecido - fundo principal |
| Sand | `#E8DFD5` | Areia - cards, seções alternadas |
| Dark | `#1A1A1A` | Quase preto - texto principal |

### Motivação

- **Por que verde floresta e não azul clínico?** O benchmark internacional mostrou que os melhores sites de psicólogos evitam o azul genérico de saúde. Verde profundo transmite confiança, crescimento e natureza - alinhado com o perfil do Mikael no Instagram (fotos em ambientes naturais, cachoeiras, livros).
- **Por que dourado e não terracotta?** A análise do Instagram revelou que o Mikael já usa tons dourados/âmbar em seus posts profissionais. O dourado reforça a identidade existente.
- **Por que marfim e não branco puro?** O `#FAF7F2` elimina a frieza clínica. A temperatura quente do fundo cria acolhimento imediato - fundamental para um site de psicologia.

---

## 2. Tipografia

### Decisão: Playfair Display (headings) + Inter (body)

### Motivação

- **Playfair Display:** Serif editorial com terminais elegantes. Transmite "profissional sofisticado" sem parecer acadêmico ou frio. O itálico é especialmente bonito para palavras de destaque (*cuidar*, *bem-estar*, *abordagens*).
- **Inter:** Sans-serif otimizada para telas. Alta legibilidade em textos longos (descrições das abordagens, FAQ). X-height grande facilita leitura mobile.
- **Contraste serif/sans-serif:** Cria hierarquia visual clara sem precisar de cores ou tamanhos excessivos.

---

## 3. Layout: Single-Page

### Decisão: Site de página única com seções

### Motivação

- Público-alvo busca informação rápida antes de entrar em contato pelo WhatsApp
- Navegação por scroll é mais natural em mobile (70%+ do tráfego esperado)
- Reduz fricção - não há "próxima página" entre interesse e ação
- Cada seção responde uma pergunta natural: Quem é? > O que faz? > Como funciona? > Para quem? > Dúvidas > Contato

---

## 4. Hero sem Foto

### Decisão: Hero centralizada com texto, sem imagem

### Motivação

- A foto disponível (211x210px) é muito pequena para uso em hero de tela cheia
- Uma hero focada em texto é mais impactante quando a headline é forte
- A foto do Mikael aparece na seção "Sobre", onde há contexto biográfico
- Evita redundância visual (mesma foto aparecendo 2x)
- No mobile, o layout fica mais limpo sem imagem competindo com o CTA

---

## 5. Seção "Para Quem" em vez de Depoimentos

### Decisão: Substituir depoimentos de pacientes por cards informativos

### Motivação

- **Ética CFP:** O Art. 20 do Código de Ética (Resolução CFP 010/2005) e a Nota Técnica CFP 01/2022 desaconselham o uso de depoimentos de pacientes, mesmo anônimos. Configura exposição do atendido e pode implicar previsão taxativa de resultados.
- **Alternativa:** Cards "Para Quem" informam o visitante sobre demandas atendidas sem violar ética profissional.
- **Valor real:** Mais útil para o visitante do que depoimentos - ele se identifica com a demanda descrita.

---

## 6. Compliance Ético (CFP)

### Decisão: Todo o copy foi revisado para conformidade com o CFP

### O que foi removido/ajustado

| Antes | Depois | Motivo |
|-------|--------|--------|
| "+500 vidas transformadas" | Removido | Sensacionalismo (Art. 20) |
| "Mudanças reais e duradouras" | "Autoconhecimento e desenvolvimento pessoal" | Previsão taxativa de resultados |
| "Transformação" como promessa | "Cuidar", "bem-estar", "desenvolvimento" | Garantia de resultado |
| Depoimentos com estrelas | Seção "Para Quem" informativa | Testemunhos vedados (Art. 20) |
| "Técnicas inovadoras e comprovadas" | "Abordagens reconhecidas" | Linguagem sensacionalista |
| "Foco em resultados concretos" | "Foco no seu desenvolvimento" | Implica garantia |
| CRP repetido 6x | CRP apenas no footer legal | Poluição visual |

### Normas consultadas

- Código de Ética Profissional do Psicólogo (Resolução CFP 010/2005) - Art. 20
- Resolução CFP 003/2007 - Art. 52-57 (publicidade)
- Nota Técnica CFP 01/2022 (redes sociais e publicidade digital)
- Resolução CFP 013/2000 (regulamenta hipnose)

---

## 7. Ícones SVG Customizados

### Decisão: Ícones SVG inline com simbologia correta para cada abordagem

| Abordagem | Ícone | Simbologia |
|-----------|-------|-----------|
| Hipnose | Espiral de Arquimedes | Símbolo universal da hipnose - transe, foco, jornada ao inconsciente |
| PNL | Cérebro com rede neural | Programação neurológica - hemisférios conectados por nós e caminhos |
| TLT | Linha do tempo curva ascendente | Passado > presente > futuro com seta e linhas de liberação |

### Motivação

- SVG inline para performance (zero requests HTTP)
- `currentColor` permite que herdem a cor do tema
- Line-art (stroke) para consistência visual elegante
- Pesquisados os símbolos reconhecidos de cada abordagem, não ícones genéricos

---

## 8. SEO Local

### Decisão: Otimização agressiva para SEO local (Criciúma/SC)

### Implementação

- **Schema.org JSON-LD:** ProfessionalService com geo, areaServed, makesOffer
- **Meta tags:** Keywords com "psicólogo criciúma", "hipnose clínica criciúma"
- **Sitemap.xml + robots.txt**
- **Tags semânticas:** header, nav, main, section, footer, article
- **Open Graph + Twitter Cards**

### Motivação

- O público principal busca "psicólogo criciúma" ou "hipnose clínica SC" no Google
- Schema.org ajuda o Google a entender que é um serviço profissional local
- FAQ com `<details>` pode gerar rich snippets no Google

---

## 9. WhatsApp como CTA Principal

### Decisão: WhatsApp é o canal primário, não formulário de contato

### Motivação

- Formulários de contato em sites de psicólogos têm taxa de conversão baixa
- WhatsApp é o canal natural de comunicação no Brasil
- Reduz fricção: 1 clique vs preencher 4+ campos
- O Mikael já divulga o WhatsApp no Instagram
- Botão flutuante garante acesso em qualquer ponto da página

---

## 10. Performance

### Decisão: Zero dependências JS, zero build tools

### Motivação

- Site estático puro = deploy instantâneo no Cloudflare Pages
- Sem framework JS = ~5KB total de JavaScript
- Google Fonts com `display=swap` + `preconnect`
- Imagens em WebP
- CSS Custom Properties em vez de preprocessador
- IntersectionObserver para animações (respeitando `prefers-reduced-motion`)

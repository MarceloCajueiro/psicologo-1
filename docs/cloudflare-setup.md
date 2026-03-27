# Setup Cloudflare Pages

Guia para deploy do site no Cloudflare Pages.

## 1. Conectar repositório

1. Acesse [Cloudflare Pages](https://dash.cloudflare.com/?to=/:account/pages)
2. Clique em **Create a project** > **Connect to Git**
3. Selecione o repositório `MarceloCajueiro/mikaelpsicologo`
4. Configure:
   - **Production branch:** `main`
   - **Build command:** (deixar vazio)
   - **Build output directory:** `/`

## 2. Configurar domínio customizado

1. No painel do projeto, vá em **Custom domains**
2. Adicione `mikaelpsicologo.com.br`
3. Configure o DNS:
   - **CNAME** `mikaelpsicologo.com.br` → `mikaelpsicologo.pages.dev`
   - Ou aponte os nameservers para Cloudflare se o domínio já estiver lá

## 3. Recursos automáticos do Cloudflare Pages

O deploy já inclui:
- **HTTPS** automático (Let's Encrypt)
- **CDN** global
- **`_headers`** aplicados automaticamente (security headers + cache)
- **`_redirects`** aplicados automaticamente (/whatsapp, /instagram)
- **Preview deploys** para cada branch/PR

## 4. Redirects configurados

| Origem | Destino | Código |
|--------|---------|--------|
| `/whatsapp` | WhatsApp do João Novaes | 302 |
| `/instagram` | @mikaelpsicologo | 302 |

## 5. Headers de segurança

Configurados em `_headers`:
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Content-Security-Policy` restritivo
- Cache imutável para assets estáticos

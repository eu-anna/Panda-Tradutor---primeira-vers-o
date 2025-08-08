# Panda Tradutor - Extensão Chrome (padrão)
Extensão demonstrativa que mostra pandas animados antes de tentar traduzir a página para **português (pt-BR)** usando o widget do Google Translate.

## Conteúdo do pacote
- `manifest.json` - configuração da extensão (MV3)
- `popup.html` / `popup.js` - popup com botão "Traduzir página"
- `content.js` - lógica dos pandas e tentativa de tradução automática
- `style.css` - estilos e animações dos pandas
- `panda1.svg` / `panda2.svg` - imagens (SVG) dos pandas
- `README.md` - instruções (este arquivo)

---
## Como usar (localmente) — passo a passo para carregar no Chrome (modo desenvolvedor)

Opção 1 — Baixar e instalar localmente
1. Clique em **Code → Download ZIP** no repositório.
2. Extraia o ZIP e localize a pasta que contém `manifest.json`.
3. Abra o Chrome e vá para `chrome://extensions/`.
4. Ative **Developer mode** (canto superior direito).
5. Clique em **Load unpacked** e selecione a pasta com `manifest.json`.
6. Pronto — clique no ícone da extensão e use "Traduzir página".

### Opção 2 — Instalar via Git (para quem usa terminal)
```bash
git clone https://github.com/SEU_USUARIO/SEU_REPO.git
# Em seguida vá para chrome://extensions/ → Load unpacked → selecione a pasta clonada



**Observações:** alguns sites com políticas de segurança (CSP) ou iframes podem bloquear a injeção do script do Google Translate — nesses casos a extensão mostra um aviso e não traduz automaticamente.]

---

## Personalizações rápidas
- Alterar idioma alvo: editar `const TARGET_LANG = 'pt'` em `content.js`.
- Reduzir/alterar tempo da sequência: editar os `setTimeout` em `content.js` (20s e 5s atualmente).

---

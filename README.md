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

1. **Baixe o pacote** e extraia a pasta `panda_tradutor_extension` num local do seu computador.
2. Abra o Chrome e vá para: `chrome://extensions/`.
3. Ative o **Modo do desenvolvedor** (canto superior direito).
4. Clique em **Carregar sem compactação** (`Load unpacked`) e selecione a pasta `panda_tradutor_extension` extraída.
5. A extensão aparecerá na lista. Abra qualquer página, clique no ícone da extensão (ou na peça do puzzle) e clique em **Traduzir página**.
6. Aguarde a sequência dos pandas. No final, a extensão tentará injetar o widget do Google Translate e traduzir automaticamente a página para português.

**Observações:** alguns sites com políticas de segurança (CSP) ou iframes podem bloquear a injeção do script do Google Translate — nesses casos a extensão mostra um aviso e não traduz automaticamente.]

---

## Personalizações rápidas
- Alterar idioma alvo: editar `const TARGET_LANG = 'pt'` em `content.js`.
- Reduzir/alterar tempo da sequência: editar os `setTimeout` em `content.js` (20s e 5s atualmente).

---

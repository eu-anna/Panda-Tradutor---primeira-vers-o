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

**Observações:** alguns sites com políticas de segurança (CSP) ou iframes podem bloquear a injeção do script do Google Translate — nesses casos a extensão mostra um aviso e não traduz automaticamente.

---
## Como enviar para o GitHub (método rápido via Web)

### Opção A — pelo site (sem usar Git local):
1. Crie um repositório novo no GitHub (ex.: `panda-tradutor-extension`).
2. No repositório, clique em **Add file → Upload files**.
3. Arraste TODO o conteúdo da pasta `panda_tradutor_extension` para a área e clique em **Commit changes**.

### Opção B — usando Git (linha de comando)
```bash
cd /caminho/para/pasta/panda_tradutor_extension
git init
git add .
git commit -m "Panda Tradutor - primeira versão"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/SEU_REPO.git
git push -u origin main
```
Troque `SEU_USUARIO` e `SEU_REPO` pelos seus dados do GitHub. Se usar autenticação com token/SSH, configure conforme seu fluxo.

---
## Publicar na Chrome Web Store (opcional)
1. Crie uma conta de desenvolvedor na Chrome Web Store (há taxa única).
2. Crie um pacote (zip) do diretório e faça upload no painel de desenvolvedor.
3. Preencha descrição, ícones e política de privacidade se necessário.

---
## Personalizações rápidas
- Alterar idioma alvo: editar `const TARGET_LANG = 'pt'` em `content.js`.
- Reduzir/alterar tempo da sequência: editar os `setTimeout` em `content.js` (20s e 5s atualmente).

---
Se quiser eu também posso gerar um `README.md` com instruções em vídeo passo-a-passo ou criar um release no GitHub para você — diga se prefere upload via web ou via git CLI.

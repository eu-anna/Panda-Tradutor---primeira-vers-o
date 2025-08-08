// content.js - escuta o evento 'iniciar-pandas' e executa a sequência
(function() {
  const TARGET_LANG = 'pt'; // mudar aqui se quiser outro idioma (ex: 'es', 'en')
  const PANDA1 = chrome.runtime.getURL('panda1.svg');
  const PANDA2 = chrome.runtime.getURL('panda2.svg');

  function removeExisting() {
    document.querySelectorAll('.panda-container').forEach(e => e.remove());
    const gdiv = document.getElementById('google_translate_element');
    if (gdiv) gdiv.remove();
  }

  function startSequence() {
    try {
      removeExisting();

      // panda bravo
      const panda1 = document.createElement('div');
      panda1.className = 'panda-container panda1';
      panda1.innerHTML = `
        <img src="${PANDA1}" class="panda-img" alt="panda bravo" />
        <div class="placa">Vai estudar</div>
      `;
      document.body.appendChild(panda1);

      // após 20s entra o segundo panda que "expulsa" o primeiro
      setTimeout(() => {
        const panda2 = document.createElement('div');
        panda2.className = 'panda-container panda2';
        panda2.innerHTML = `
          <img src="${PANDA2}" class="panda-img running" alt="panda fofo" />
          <div class="placa">Tradução completa</div>
        `;
        document.body.appendChild(panda2);

        // anima saída do primeiro
        panda1.classList.add('fora');

        // depois de 5s remove e ativa tradução
        setTimeout(() => {
          panda1.remove();
          panda2.classList.add('saiu');
          // breve atraso para permitir animação
          setTimeout(() => {
            panda2.remove();
            attemptTranslate(TARGET_LANG);
          }, 700);
        }, 5000);

      }, 20000);

    } catch (e) {
      console.error("Erro na sequência dos pandas:", e);
    }
  }

  function attemptTranslate(targetLang) {
    try {
      // Cria div oculta para o Google Translate
      const translateDiv = document.createElement('div');
      translateDiv.id = 'google_translate_element';
      translateDiv.style.display = 'none';
      document.body.appendChild(translateDiv);

      // Tenta setar cookie usado pelo widget (pode não funcionar em alguns sites por CSP/segurança)
      try {
        const domain = location.hostname;
        document.cookie = 'googtrans=/auto/' + targetLang + ';path=/;domain=' + domain + ';';
      } catch (e) {
        // falha ao definir cookie: ignorar
      }

      // Callback esperado pelo script do Google
      window.googleTranslateElementInit = function() {
        try {
          new google.translate.TranslateElement({
            pageLanguage: 'auto',
            includedLanguages: targetLang,
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE
          }, 'google_translate_element');
        } catch (err) {
          console.error("Erro ao iniciar google translate:", err);
          fallbackAlert();
        }
      };

      // Injeta o script do Google Translate
      const s = document.createElement('script');
      s.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      s.onerror = function() {
        console.error("Falha ao carregar o script do Google Translate (pode ser bloqueado por CSP).");
        fallbackAlert();
      };
      document.body.appendChild(s);

      // Timeout de segurança: se não traduzir em 10s, mostrar fallback
      setTimeout(() => {
        // verifica se houve alteração na página (tentativa simples)
        const hasTranslate = !!document.querySelector('.goog-te-banner-frame') || !!document.querySelector('#google_translate_element select');
        if (!hasTranslate) fallbackAlert();
      }, 10000);

    } catch (e) {
      console.error("Erro ao tentar traduzir:", e);
      fallbackAlert();
    }
  }

  function fallbackAlert() {
    // fallback simples: avisa o usuário e mantém a página original
    alert('A tradução automática falhou neste site (restrição de segurança). Você pode tentar em outra página ou copiar o texto para um tradutor.');
  }

  // Listener do evento enviado pelo popup
  document.addEventListener('iniciar-pandas', startSequence);

  // Também expõe uma função no window para testes (opcional)
  window.__iniciarPandas = startSequence;

})();

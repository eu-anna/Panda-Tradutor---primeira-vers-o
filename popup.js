document.getElementById("traduzir").addEventListener("click", async () => {
  try {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    // Dispatch an event in the page context (content script listens for it)
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: () => { document.dispatchEvent(new CustomEvent('iniciar-pandas')) }
    });
  } catch (err) {
    console.error("Erro ao tentar iniciar os pandas:", err);
    alert("Ocorreu um erro. Veja o console do navegador para detalhes.");
  }
});

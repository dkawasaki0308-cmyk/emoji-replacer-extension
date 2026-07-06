adocument.querySelectorAll('body *').forEach(el => {
  el.childNodes.forEach(node => {
    if (node.nodeType === Node.TEXT_NODE) {
      node.textContent = node.textContent.replace(/foo/g, "bar");
    }
  });
});
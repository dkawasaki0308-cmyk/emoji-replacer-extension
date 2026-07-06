setTimeout(function () {
  let html = document.body.innerHTML;

  let cnt1 = (html.match(/。/g) || []).length;
  for (let i = 0; i < cnt1; i++) {
    html = html.replace("。", i % 2 === 0 ? "&#x1f917;" : "&#x1f497;");
  }

  let cnt2 = (html.match(/<br>/g) || []).length;
  for (let i = 0; i < cnt2; i++) {
    html = html.replace(
      "<br>",
      i % 2 === 0 ? "&#x1f647;<p style='margin:0;'></p>" : "&#x1f603;<p style='margin:0;'></p>"
    );
  }

  html = html.replace(/、/g, "&#x1f647;<p style='margin:0;'></p>");
  document.body.innerHTML = html;
}, 300);
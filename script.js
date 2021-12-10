var $ = (x) => {
    return document.querySelector(x);
};
var $$ = (x) => {
  return document.querySelectorAll(x);
};
var info = $('.info');
document.addEventListener("scroll", (e) => {
      if (window.scrollY > 700) {
        info.classList.add("pf");
      } else {
        info.classList.remove("pf");
      }
});
var result = $("#result");
var colorBox = $('.color_box');
var wrapper = $('.wrapper');
var copyResult = $('.copyResult');
function fun1() {
  var rng1 = $("#r1");
  var rng2 = $("#r2");
  var rng3 = $("#r3");
  result.textContent =
    "rgb(" + rng1.value + ", " + rng2.value + ", " + rng3.value + ')';
  colorBox.style.background = result.textContent;
}
copyResult.addEventListener("click", () => {
    navigator.clipboard.writeText(result.textContent);
})
document.body.addEventListener('mousemove', (evt) => {
    document.body.style.background =
      `rgb(${evt.pageY / 3.41}, ${evt.pageX / 2.26470588}, ${evt.pageX / 4.52941176})`;
});
var count = 0;
var colors = $('.colors');
var copyBtn = $$('.copyBtn');
var copyText = $$(".Text");
var boxItem = $$('.box_item');
var info = $('.info');
Array.from(copyBtn).forEach((x) => {
    x.dataset.id = count++;
});
colors.addEventListener('click', (e) => {
    if(e.target.className == 'copyBtn'){
        copyBtn[e.target.dataset.id].addEventListener('click', (e) => {
            var ct = copyText[e.target.dataset.id].textContent;
            navigator.clipboard.writeText(ct);
            info.style.background = ct;
            console.log(copyText[e.target.dataset.id].textContent)
        });
    };
});
for (let i = 0; i < 36; i++) {
    boxItem[i].style.background = copyText[i].textContent;
}
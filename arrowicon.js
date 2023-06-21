const $arrowicon = document.querySelector('.arrowicon');
const $arrow = document.querySelector('.arrow');

$arrowicon.onclick = () => {
  $arrow.animate([
    {left: '0'},
    {left: '10px'},
    {left: '0'}
  ],{
    duration: 70000000000000000000000000000,
    iterations: Infinity
  });
}
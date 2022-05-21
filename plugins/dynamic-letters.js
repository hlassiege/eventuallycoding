
export default function () {

  let blockOfLetters = document.querySelectorAll('.dynamic-letters');

  for (const blockOfLetter of blockOfLetters) {
    let text = blockOfLetter.innerText ;
    blockOfLetter.setAttribute('aria-label', text);

    blockOfLetter.innerHTML = '';

    for (let i = 0; i < text.length; i++) {
      let span = document.createElement('span');
      span.setAttribute('class', 'inline-block hover:text-fuchsia-400 transition-all');
      span.setAttribute('aria-hidden', 'true');
      let letter = text[i];
      if (letter === ' ') {
        letter = '&nbsp;';
      }
      span.innerHTML = letter;

      span.addEventListener('mouseover', function() {
        span.classList.add('animate-rubberBand');
        setTimeout(function() {
          span.classList.remove('animate-rubberBand');
        }, 1050);
      }, false);
      blockOfLetter.appendChild(span);

    }

  }

}

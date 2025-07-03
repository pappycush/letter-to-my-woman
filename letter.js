const envelope = document.getElementById('envelope');
const letter = document.getElementById('letter');
const instruction = document.getElementById('instruction');
const container = document.querySelector('.container');
let isOpen = false, timeoutId;

function createConfetti() {
  for(let i=0;i<40;i++) {
    const c = document.createElement('div');
    c.className = 'confetti';
    c.style.left = Math.random()*100+'%';
    c.style.animationDelay = Math.random()*3+'s';
    c.style.backgroundColor = ['#e91e63','#ff4081','#ffc0cb'][Math.floor(Math.random()*3)];
    container.appendChild(c);
    setTimeout(()=>c.remove(),4000);
  }
}

function showLoveText() {
  const love = document.createElement('div');
  love.className = 'love-popup';
  love.textContent = 'LOVE ❤';
  container.appendChild(love);
  setTimeout(()=>love.remove(),2000);
}

function openLetter() {
  envelope.classList.add('open');
  letter.classList.add('visible');
  instruction.textContent = "Your letter is open. It will slide back in 30 seconds.";
  showLoveText(); createConfetti();
  isOpen = true;
  timeoutId = setTimeout(closeLetter, 30000);
}

function closeLetter() {
  envelope.classList.remove('open');
  letter.classList.remove('visible');
  instruction.textContent = "Tap the envelope to reveal your letter 💌";
  isOpen = false;
}

envelope.addEventListener('click', () => {
  if (isOpen) { clearTimeout(timeoutId); closeLetter(); }
  else openLetter();
});

envelope.addEventListener('keydown', e => {
  if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); envelope.click(); }
});

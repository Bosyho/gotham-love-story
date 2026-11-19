const loveThings = [
"I love the way you reassure me. You make my overthinking quieter, my fears smaller, and slowly teach me that I don’t have to be scared of being hurt all the time.",
"I love the way you love me. The way you treat me, care for me, and make me feel loved in all the little ways means more to me than you could ever imagine.",
"I love the way you listen to me. Even when I’m talking about the most random things or telling you the same story for the hundredth time, you always make me feel heard.",
"I love the way you look at me. There’s something about the way your eyes look at me with so much love that makes my heart melt every single time.",
"I love the way you talk to me. I could listen to you for hours, whether you’re telling me about your day, your work, or just talking about absolutely nothing.",
"I love the way you always try to fix things for me. You never make me feel like I’m facing my problems alone, and knowing that I have you by my side makes everything a little easier.",
"I love the way you worry about me. How you always want what’s best for me, look out for me, and care about even the smallest things that happen to me.",
"I love the way you treat me. You make me feel special, appreciated, and so incredibly lucky to be loved by someone like you.",
"I love the way you’re such a gentleman. Your manners, your kindness, your respect, and all those little thoughtful things you do make you even more attractive to me.",
"I love the way you work so hard. The way you keep pushing yourself, never give up, and put in endless effort to build a future where we can be together. I’m so proud of you.",
"I love the way you dream big. Your ambitions, your goals, and the way you always want to become better inspire me more than you know.",
"I love the way you talk about our future. Especially when you talk about your plans and dreams and I’m always a part of them. I can’t explain how much it means to know that you see me in your tomorrow.",
"I love the way you are, in every little detail. Your voice, your smile, your eyes, your face, your style, the way you dress, the way you speak… literally everything about you. You’re so effortlessly handsome.",
"I love the way you make me feel when I’m with you. The comfort, the happiness, the butterflies, and the feeling that I can just be myself without thinking twice.",
"I love the way you’re simply YOU. Every little thing about you, even the things you don’t notice about yourself. You’re my favorite person, my biggest crush, and my most handsome boy. And yes, you’re ridiculously hot too. ♡"
];

function initLetter(){
  const list=document.getElementById('love-list');
  if(list){ loveThings.forEach(t=>{const li=document.createElement('li');li.textContent=t;list.appendChild(li);}); }
  const gate=document.getElementById('letter-gate'), content=document.getElementById('letter-content');
  if(gate && content){
    const unlocked=localStorage.getItem('mission25-puzzle-solved')==='yes';
    gate.classList.toggle('hidden',unlocked); content.classList.toggle('hidden',!unlocked);
  }
}
function initPuzzle(){
  const grid=document.getElementById('puzzle'); if(!grid)return;
  let tiles=[1,2,3,4,5,6,7,8,9], moves=0, selected=-1;
  const count=document.getElementById('move-count'), status=document.getElementById('lock-status'), link=document.getElementById('unlock-link');
  const solved=()=>tiles.every((v,i)=>v===i+1);
  function render(){
    grid.innerHTML='';
    tiles.forEach((v,i)=>{
      const b=document.createElement('button');b.className='puzzle-tile'+(selected===i?' selected':'');b.type='button';b.setAttribute('aria-label',`Puzzle piece ${v}`);
      const n=v-1;b.style.backgroundPosition=`${(n%3)*50}% ${Math.floor(n/3)*50}%`;
      b.addEventListener('click',()=>choose(i));grid.appendChild(b);
    });
    count.textContent=`MOVES: ${moves}`;
    if(solved()){localStorage.setItem('mission25-puzzle-solved','yes');status.textContent='LETTER UNLOCKED ♥';link.classList.remove('disabled-link');link.removeAttribute('aria-disabled');}
  }
  function choose(i){
    if(selected===-1){selected=i;render();return;}
    if(selected===i){selected=-1;render();return;}
    [tiles[selected],tiles[i]]=[tiles[i],tiles[selected]];selected=-1;moves++;render();
  }
  function shuffle(){
    tiles=[1,2,3,4,5,6,7,8,9];
    for(let i=tiles.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[tiles[i],tiles[j]]=[tiles[j],tiles[i]];}
    if(solved())[tiles[0],tiles[1]]=[tiles[1],tiles[0]];
    moves=0;selected=-1;status.textContent='LETTER LOCKED';link.classList.add('disabled-link');link.setAttribute('aria-disabled','true');localStorage.removeItem('mission25-puzzle-solved');render();
  }
  document.getElementById('shuffle-btn').addEventListener('click',shuffle);shuffle();
}
function initDate(){
 const form=document.getElementById('date-form');if(!form)return;
 const other=document.getElementById('other-place'), otherRadio=document.getElementById('other-radio');
 form.querySelectorAll('input[name="place"]').forEach(r=>r.addEventListener('change',()=>{other.classList.toggle('show',otherRadio.checked);if(!otherRadio.checked)other.value='';}));
 form.addEventListener('submit',e=>{e.preventDefault();const place=form.querySelector('input[name="place"]:checked');const match=form.querySelector('input[name="match"]:checked');if(!place||!match)return;const finalPlace=place.value==='Other'?(other.value.trim()||'Other (not specified yet)'):place.value;const colors=[...form.querySelectorAll('input[name="colors"]:checked')].map(x=>x.value);const summary=`RSVP RECEIVED ♥\nPlace: ${finalPlace}\nDate: Friday 4/12 · 5–6 PM\nMatching: ${match.value}\nColors: ${colors.length?colors.join(', '):'You choose!'}`;document.getElementById('rsvp-result').textContent=summary;});
}

function initSoundtrack(){
  if(document.getElementById('soundtrack-dock')) return;
  const dock=document.createElement('aside');dock.id='soundtrack-dock';dock.className='soundtrack-dock';
  dock.innerHTML=`<button class="soundtrack-toggle" type="button" aria-expanded="false" aria-label="Open Be More soundtrack"><span class="mini-vinyl">♥</span><span class="soundtrack-label"><b>BE MORE</b><small>STEPHEN SANCHEZ · SOUNDTRACK</small></span><span class="soundtrack-chevron">⌃</span></button><div class="soundtrack-player" hidden><div class="soundtrack-player-head"><span>NOW PLAYING · BE MORE ♡</span><button type="button" class="soundtrack-close" aria-label="Close player">×</button></div><div class="video-frame"><iframe title="Be More by Stephen Sanchez — official video" src="https://www.youtube-nocookie.com/embed/R95ILhksGt8?rel=0&modestbranding=1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen loading="lazy"></iframe></div><p>Press play in the video to start the song. ♡</p></div>`;
  document.body.appendChild(dock);
  const toggle=dock.querySelector('.soundtrack-toggle'),player=dock.querySelector('.soundtrack-player'),close=dock.querySelector('.soundtrack-close');
  toggle.addEventListener('click',()=>{const open=player.hidden;player.hidden=!open;toggle.setAttribute('aria-expanded',String(open));dock.classList.toggle('is-open',open);});
  close.addEventListener('click',()=>{player.hidden=true;toggle.setAttribute('aria-expanded','false');dock.classList.remove('is-open');});
}
function initEvidenceBoard(){
  document.querySelectorAll('.evidence-photo').forEach((photo)=>{
    photo.addEventListener('click',()=>{
      const item=photo.closest('.evidence-item');const open=!item.classList.contains('revealed');
      item.classList.toggle('revealed',open);photo.setAttribute('aria-expanded',String(open));
      const reveal=photo.querySelector('.evidence-reveal');if(reveal)reveal.textContent=open?'CLUE REVEALED ♥':photo.querySelector('.evidence-label').textContent.split(' · ')[0].replace('EVIDENCE','EXHIBIT');
    });
  });
}

document.addEventListener('DOMContentLoaded',()=>{initLetter();initPuzzle();initDate();initEvidenceBoard();initSoundtrack();});

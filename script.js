const hamburger = document.querySelector('.toggle-btn');
const closeBtn = document.querySelector('.close-btn');
const hamburgerMenu = document.querySelector('#hamburger-menu');
const speakers = document.querySelector('#featured-speakers');
// const footer = document.querySelector('#footer');
// const about = document.querySelector('#about');

// about.addEventListener('click', () => {
//     footer.style.display = 'flex';
// })

hamburger.addEventListener('click', () => {
    hamburgerMenu.style.display = 'block';
    hamburger.style.display = 'none';
});

closeBtn.addEventListener('click', () => {
    hamburger.style.display = 'flex';
    hamburgerMenu.style.display = 'none';
})

const speakersArray = [
    {  
      id: 0,
      face: 'images/benkler.png',  
      name: 'Yochai Benkler',
      job: 'Berkmen Professor of Enterpreneurial Legal Studies at Harvard Law School',
      about: 'Benker studies commons-based peer production, and published his seminal book. The Wealth of Networks in 2006.',  
    },
    {
        id: 1,
        face: 'images/Noh.png',  
        name: 'SohYeong Noh',
        job: 'Director of Art Centre Nabi and a board member of CC Korea',
        about: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understands among science technology, humanities, and the arts.',  
      },
      {
        id: 2,
        face: 'images/tretikov.png',  
        name: 'Lila Tretikov',
        job: 'Executive Director of the Wikimedia Foundation',
        about: 'Lila Tretikov is the Executive Director of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languages and used by nearly half a billion people around the world every month.',  
      },
      {
        id: 3,
        face: 'images/chon.png',  
        name: 'Kilnam Chon',
        about: 'Kilnam Chon helped bring the Internet to Asia and is an outspoken advocate for the open web and digital commons. In 2012, he was inducted into the inagural class of the Inernet Society (ISOC) Internet Hall of Fame.',  
      },
      {
        id: 4,
        face: 'images/reda.png',  
        name: 'Julia Leda',
        job: 'President of Young Pirates of Europe',
        about: 'European ingetration, political democracy and participaiton of youth through online as her major condern, Redas report outlining potential changes to EU copyright law was approved by the Parliament in July.',  
      },
      {
        id: 5,
        face: 'images/merkley.png',  
        name: 'Ryan Merkley',
        job: 'CEO of Creative Commons, ex COO of the Mozilla Foundation',
        about: 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open source movement.',  
      },
   
]

const text = document.createElement('h4');
  text.textContent = 'Featured Speakers';
  speakers.append(text);
// const underline = document.createElement('div');
//   underline.className = 'underline';
//   speakers.append(underline)

 speakersArray.forEach(
  (speaker) => {
  const featuredSpeakers = `
    
       <div class="about-speakers">
        <img class="face" src=${speaker.face} alt="Yochai Benkler's face/picture">
         <h3>${speaker.name}</h3>
         <p class="pink">${speaker.job}</p>
         <p>${speaker.about}</p>
       </div>  `;

//  speakers.insertAdjacentElement ('beforeend', featuredSpeakers);
speakers.innerHTML += featuredSpeakers;
// speakers.style.height = '100vh';
  })
 
//    <h4>Featured Speakers</h4>
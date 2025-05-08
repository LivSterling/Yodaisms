  document.querySelector('button').addEventListener('click', function() {
    fetchAndTranslate()
  } )

function fetchAndTranslate(){
  const zenQoutesUrl = `https://api.realinspire.live/v1/quotes/random`
  const yodaUrl = `https://api.funtranslations.com/translate/yoda.json` 

  document.querySelector('h2').classList.remove('fade-in');

setTimeout(function(){
  document.querySelector('h2').classList.add('fade-in');
},1);



  fetch(zenQoutesUrl)  
      .then(res => res.json())
      .then(data => {
        console.log(data)
       const quoteText = data[0].content
       const quoteAuthor = data[0].author 
  

      return fetch(`${yodaUrl}?text=${encodeURIComponent(quoteText)}`)
      .then(res => res.json())
      .then(yodaData => {
        console.log(yodaData)

         const yodaPhrases = ["Yessss.", "Hmmmm?", "Hmmm yesss.", " ", " "];
        const randomPhrase = yodaPhrases[Math.floor(Math.random() * yodaPhrases.length)];
        let translatedQuote = `"${yodaData.contents.translated} ${randomPhrase}" - ${quoteAuthor}`;

       
       

      
        

        document.querySelector('h2').innerHTML = translatedQuote;
    });
  })    
   
      .catch(err => {
          console.log(`error ${err}`)
          document.querySelector('h2').innerHTML= "Rest now I must... Hmm"

          
      })
    }

    const music = document.getElementById('music');
  const soundbite = document.getElementById('soundbite');
  const button = document.getElementById('playPauseBtn');


  music.play();
  music.volume = 0.2;
  soundbite.volume = 0.3; 

  button.innerHTML = 'Pause';


  setTimeout(function() {
    soundbite.play(); 
  }, 3000);

  
  button.addEventListener('click', togglePlayPause);

  function togglePlayPause() {
    if (music.paused) {
      music.play(); 
      button.innerHTML = 'Play'; 
    } else {
      music.pause(); 
      button.innerHTML = 'Pause'; 
    }
  }

// fetchAndTranslate().then(translatedQuotes => {
//   document.querySelector("button").addEventListener("click",displayRandomQuote(translatedQuotes))
// })

// function fetchAndTranslate() {
//   const zenQoutesUrl = `https://api.allorigins.win/raw?url=https://zenquotes.io/api/random/`
//   const yodaUrl = `https://api.funtranslations.com/translate/yoda.json` 

//   fetch(zenQoutesUrl)
//   .then(res => res.json)
//   .then(data => {
//     console.log(data)
//   })
// }
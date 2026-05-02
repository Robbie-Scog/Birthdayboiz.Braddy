onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };

  setTimeout(() => {
    // Create a new div for the poetry
    const poetryDiv = document.createElement('div');
    poetryDiv.classList.add('poetry');
    poetryDiv.innerHTML = `
    <p style="margin-bottom: 80px; font-size: 16px;">A poem I found:</p>
    <h2 class="poetry-heading" >Gardenia's Veil</h2>
    <p style="font-size: 20px">----- Annu2 -----</p>
    <p>Splish Splash</p>
    <p>Your opinion is trash.</p>
    <p>Nah just kidding ich liebe dich!</p>
    <p style="margin-bottom: 50px;"> <3 </p>
    <p>A flower left for none to see.</p>
    <p>Beneath the moon’s cold, watchful eye,</p>
    <p style="margin-bottom: 80px;">Love hides, yet cannot lie</p>
    <p style="font-size: 16px;"> Alles Gute zum Geburtstag, Schatz....</p>
    `;

    // Append the poetry to the body
    document.body.appendChild(poetryDiv);

    // Make the poetry visible with a fade-in effect
    setTimeout(() => {
      poetryDiv.classList.add('visible');
    }, 50);
  }, 7000); // Delay of 7 seconds
  

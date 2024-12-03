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
    <p style="margin-bottom: 80px; font-size: 16px;">Tặng bạn bài thơ, của người khác làm =))))</p>
    <h2 class="poetry-heading" >Gardenia's Veil</h2>
    <p style="font-size: 20px">----- Annu2 -----</p>
    <p>The stars above in endless night,</p>
    <p>They light the world with silent might.</p>
    <p>So too our dreams, a distant flight,</p>
    <p style="margin-bottom: 50px;">Guiding us onward, out of sight</p>
    <p>In darkened hours, a silent plea,</p>
    <p>A flower left for none to see.</p>
    <p>Beneath the moon’s cold, watchful eye,</p>
    <p style="margin-bottom: 80px;">Lovers hide, yet cannot lie...</p>
    <p style="font-size: 16px;">Thui hết quà rùi đó! Qua feedback lại cho bạn p đi.</p>
    `;

    // Append the poetry to the body
    document.body.appendChild(poetryDiv);

    // Make the poetry visible with a fade-in effect
    setTimeout(() => {
      poetryDiv.classList.add('visible');
    }, 50);
  }, 7000); // Delay of 7 seconds
  

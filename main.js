document.addEventListener('DOMContentLoaded', () => {
    const randomCatImage = document.getElementById('random-cat-image');
    const newCatButton = document.getElementById('new-cat-btn');
    const apiKey = 'live_0kfuShDxrFo1sOUbdzoZ8vBcwCL4nKtPq7AHNYZuyHhmSP5lXSngYNT0SvIRX1SN'; 
  
    async function fetchRandomCat() {
      try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search', {
          headers: {
            'x-api-key': apiKey
          }
        });
        const data = await response.json();
        randomCatImage.src = data[0].url;
        randomCatImage.alt = 'Random Cat Image';
      } catch (error) {
        console.error('Error fetching random cat:', error);
        randomCatImage.alt = 'Failed to load cat image.';
      }
    }
  
    newCatButton.addEventListener('click', fetchRandomCat);
    fetchRandomCat(); // Fetch a random cat image on initial page load
  });
  
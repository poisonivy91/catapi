document.addEventListener('DOMContentLoaded', () => {
    const breedList = document.getElementById('breed-list');
    const apiKey = 'live_0kfuShDxrFo1sOUbdzoZ8vBcwCL4nKtPq7AHNYZuyHhmSP5lXSngYNT0SvIRX1SN'; 
  
    async function fetchCatBreeds() {
      try {
        const response = await fetch('https://api.thecatapi.com/v1/breeds', {
          headers: {
            'x-api-key': apiKey
          }
        });
        const breeds = await response.json();
        breeds.forEach((breed) => {
          const li = document.createElement('li');
          li.textContent = breed.name;
          breedList.appendChild(li);
        });
      } catch (error) {
        console.error('Error fetching breeds:', error);
        breedList.innerHTML = '<li>Failed to load breeds.</li>';
      }
    }
  
    fetchCatBreeds();
  });
  
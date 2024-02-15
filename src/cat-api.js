const url = 'https://api.thecatapi.com/v1';
const api_key = "live_B3xKjh7Hn5IXaE32MQvZNCb57wnfuTDpBvdYrGx95ROB5aX1Y6yXasdtXGPylu9N";

export function fetchBreeds() {
    return fetch(`${url}/breeds?api_key=${api_key}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        });       
};

export function fetchCatByBreed(breedId) {
    return fetch(`${url}/images/search?api_key=${api_key}&breed_ids=${breedId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        });  
};
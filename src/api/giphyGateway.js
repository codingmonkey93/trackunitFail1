const apiKey = "1bkG7ky5cmw5SLyvNfElcR1iYVzs38Zq";

export function getImages(query, limit){
        return fetch(`https://api.giphy.com/v1/stickers/search?q=${query}}&limit=${limit}&rating=g&api_key=${apiKey}`)
        .then(res => res.json())
        .then(
        (result) => {
            return result;
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
            console.log(error);
        }
        )
}
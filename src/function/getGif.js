export const getGif = async( gifName ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=1imQaFG6wu21Ubo6nPIPc9EelYRWSKSy&q=${gifName}&limit=10`

    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map( gif => {
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images.downsized_medium.url
        }
    })
    // console.log(gifs)
    return gifs;
};
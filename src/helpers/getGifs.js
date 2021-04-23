 //Petición de GetGifs
 export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=E4R2nXo3QCL4NxvX2Xo3yvf3BWEP8NrU&q=${ encodeURI( category) }&limit=20`
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;
   
}

const fetchData = async (searchquery) => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: '4472a00c',
            s: searchquery,
        }
    });
    return response.data.Search;
}

const input = document.querySelector('input');

const oninput = async Event => {
    const movies = await fetchData(Event.target.value);
    console.log(movies);
    for(let movie of movies){
        const div = document.createElement('div');
        div.innerHTML = `
            <img src="${movie.Poster}"/>
            <h1>${movie.Title}</h1>
        `;

        document.querySelector('#target').appendChild(div);

    }
}

input.addEventListener('input', debounce(oninput,1000));
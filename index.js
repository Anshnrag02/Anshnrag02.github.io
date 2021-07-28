const fetchData = async (searchquery) => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: '4472a00c',
            s: searchquery,
        }
    });
    if(response.data.Error){
        return [];    
    }
    return response.data.Search;
}

const input = document.querySelector('input');

const oninput = async Event => {
    document.querySelector('#target').innerHTML="";
    const movies = await fetchData(Event.target.value);
    console.log(movies);
    for(let movie of movies){
        const div = document.createElement('div');
        div.innerHTML = `
            <a class="dropdown-item">
                
                <img src="${movie.Poster}"/>
                <h1>${movie.Title}</h1>
            </a>
            <hr class="dropdown-divider">
        `;

        document.querySelector('#target').appendChild(div);

    }
}

input.addEventListener('input', debounce(oninput,1000));
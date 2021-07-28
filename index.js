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
}

input.addEventListener('input', debounce(oninput,1000));
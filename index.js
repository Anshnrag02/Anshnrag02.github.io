const fetchData = async () => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: '4472a00c',
            s: 'avengers',
        }
    });

    console.log(response.data);
}

fetchData();
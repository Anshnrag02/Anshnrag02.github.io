const fetchData = async (searchquery) => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: '4472a00c',
            s: searchquery,
        }
    });

    console.log(response.data);
}

const input = document.querySelector('input');
let timeoutId;

const oninput = (Event)=>{
    if(timeoutId) {
        clearTimeout(timeoutId);
    }
    timeoutId=setTimeout(() => {
        fetchData(Event.target.value)
    },1000);
};

input.addEventListener('input', oninput);
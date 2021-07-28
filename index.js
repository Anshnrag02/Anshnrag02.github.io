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

const debounce = (func,time) => {
    let timeoutId;
    return(...args) => {
        if(timeoutId){
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func.apply(null,args);
        },time);
    };
};

const oninput = Event => {
    fetchData(Event.target.value);
}

input.addEventListener('input', debounce(oninput,1000));
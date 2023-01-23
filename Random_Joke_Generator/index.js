//API NINJA
//EMAIL:-kabic67070@nevyxus.com
//Password:-Password@123

const btnEle = document.getElementById('btn'); 
const jokeEle = document.getElementById('joke');

const apiKey = "HKURbbaF9q2Q02ekq/YiXw==VoqIKXnowyFWI9di";
const options = {
    method: "GET",
    headers: {
        'X-Api-Key': apiKey
    },
};

const apiUrl = "https://api.api-ninjas.com/v1/jokes?limit=1"

async function  getJoke() {
try{
    joke.innerText = "Loading..."
    btnEle.disabled = true;
    btnEle.innerText = "Loading....";
    const response = await fetch(apiUrl, options)
    const data = await response.json();
    btnEle.disabled = false;
    btnEle.innerText = "Tell me a Joke";
    jokeEle.innerText = data[0].joke;
}catch(error) {
    jokeEle.innerText = "An error occured,Try agian later";
    btnEle.disabled = false;
    btnEle.innerText = "Tell me a Joke";
    console.log(error);
}
}

btnEle.addEventListener("click", getJoke)
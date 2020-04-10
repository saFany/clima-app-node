const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=80e2a662442b0ca146d4efeb1487831e`)
    return resp.data.main.temp;
}

module.exports = {
    getClima
}
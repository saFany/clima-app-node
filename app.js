const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad a obtener el clima',
        demand: true
    }
}).argv;

const getInfo = async(direccion) => {

    try {
        const infoLugar = await lugar.getLugarLatLng(direccion);
        const infoClima = await clima.getClima(infoLugar.lat, infoLugar.lng);
        const temp = ((infoClima - 273.15) * 9 / 5) + 32;
        return `El clima de ${direccion} es de ${temp} ºC`;
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`;
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);

/*
lugar.getLugarLatLng(argv.direccion)
    .then(resp => { console.log(resp); })
    .catch(err => { console.log(err); });

clima.getClima('40.750000', '-74.000000')
    .then(resp => { console.log(resp); })
    .catch(err => { console.log(err); })*/
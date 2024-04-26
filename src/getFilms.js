const getFilms = async (event) => {
    try {
        let films = await fetch(process.env.URL_SWAPI + 'films');
        films = await films.json();

        const response = films.results.map(obj => {
            return {
                titulo: obj.title,
                episodio_id: obj.episode_id,
                parrafo_apertura: obj.opening_crawl,
                director: obj.director,
                productor: obj.producer,
                fecha_lanzamiento: obj.release_date,
                especies: obj.species,
                naves_estelares: obj.starships,
                vehiculos: obj.vehicles,
                personajes: obj.characters,
                planetas: obj.planets,
                recurso_url: obj.url,
                creado: obj.created,
                editado: obj.edited,
            }
        })

        return {
            status: 200,
            body: {
                response
            }
        };
    } catch (error) {
        console.log(error);
    }
}
module.exports = {
    getFilms
}

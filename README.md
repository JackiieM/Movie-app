### Movie App - Prueba Técnica


------------

**Objetivo:** Crear una aplocación que permita al usuario buscar información sobre películas utilizando una API externa.

- **API Externa Utilizada:** [The Movie Database API](http:/https://developers.themoviedb.org/3/ "The Movie Database API")


------------

###### Backend

Para desarollar el back de la aplicación utilicé NodeJS y ExpressJS. La API Key se encuentra guardada dentro de un archivo .env para que no sea visualizada y se hace la petición GET utilizando axios.

Se puede iniciar el servidor con el comando *npm start*, una vez levantado, podemos realizar peticiones GET entregando una query.

Como por ejemplo, utilizando Thunder Client: 
[![](https://cdn.discordapp.com/attachments/704073351051870209/1073308012351082557/image.png)](http://https://cdn.discordapp.com/attachments/704073351051870209/1073308012351082557/image.png)

Además de esto, utilicé Jest y Supertest para crear test unitarios para esta petición. Los tests se pueden iniciar con el comando *npm test*.

[![](https://cdn.discordapp.com/attachments/704073351051870209/1073078010783219742/image.png)](http://https://cdn.discordapp.com/attachments/704073351051870209/1073078010783219742/image.png)

######  Frontend

Para el front utilicé ReactJS inicializado con Vite. Podemos levantar el front con el comando *npm run dev* y nos mostrará una UI muy sencilla. 

[![](https://cdn.discordapp.com/attachments/704073351051870209/1073309957719597166/image.png)](http://https://cdn.discordapp.com/attachments/704073351051870209/1073309957719597166/image.png)

El componente contiene una validación para no realizar la petición GET si no se entrega un input.
[![](https://cdn.discordapp.com/attachments/704073351051870209/1073310005496913982/image.png)](http://https://cdn.discordapp.com/attachments/704073351051870209/1073310005496913982/image.png)

En caso de no encontrar matches de la búsqueda realizada, nos muestra: 

[![](https://cdn.discordapp.com/attachments/704073351051870209/1073311742400139417/image.png)](http://https://cdn.discordapp.com/attachments/704073351051870209/1073311742400139417/image.png)

Y una búsqueda y petición exitosa nos devuelve el listado o la película encontrada, con información como: el póster, el título, el año de estreno, y la descripción.

[![](https://cdn.discordapp.com/attachments/704073351051870209/1073311673231867974/image.png)](http://https://cdn.discordapp.com/attachments/704073351051870209/1073311673231867974/image.png)

Para realizar los test unitarios del cliente, utilicé Jest, Testing Library, y Vitest. Los tests se pueden correr con el comando *npm test*.

[![](https://cdn.discordapp.com/attachments/704073351051870209/1073313717460160622/image.png)](http://https://cdn.discordapp.com/attachments/704073351051870209/1073313717460160622/image.png)

Me enfoqué en que la renderización del componente fuera correcta y que se encontraran en el documento las distintas partes de este simulando la interacción con el usuario utilizando userEvent: 
[![](https://cdn.discordapp.com/attachments/704073351051870209/1073314507532795984/image.png)](http:/https://cdn.discordapp.com/attachments/704073351051870209/1073314507532795984/image.png/)

------------

También realicé un deployment de la app en Netlify que se puede ver [aquí](https://jacqueline-movie-app.netlify.app/), y se encuentra funcionando con su propio back desde Render  [aquí](https://movie-app-jacqueline.onrender.com/search?query=cambiar).

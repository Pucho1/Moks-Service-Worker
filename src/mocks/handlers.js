 import {rest} from 'msw'

// SE CREA UN MANEJADOR EN EL CUAL SE MOQUEA LA PETICION Y SE SIMULA UNA RESPONSE SEGUN EL METODO QUE S DESEE SUPLANTAR
// CTX ES EL CONTEXTO DE LA ESPUESTA O SEA LO QUE DEFINE EXACTAMENETE QUE DEVUELVE
// RES -- ES AL REWSPUESTA
// SI NO TENGO ESTO DEFINIDO CUANDO SE INTEPCEPTE DA ERROR POR NO SABER QUE HACER CON LA PETICION QUE SE LANCE
// req ----->>> peticion
export const handlers = [
  rest.get('https://peticiones.online/api/series', (req, res, ctx) =>{
    return res(
      ctx.json([
        {
          "id": 5,
          "title": "Juego de Tronos",
          "creator": "David Benioff, D.B. Weiss",
          "rating": 9.2,
          "dates": "2011-2019",
          "image": "https://es.web.img3.acsta.net/pictures/19/03/22/10/08/5883111.jpg",
          "channel": "HBO"
        }
      ])
    )
  }),
  rest.post('https://peticiones.online/api/series', (req, res, ctx) =>{
    return res(
      ctx.json({
        succes: true
      })
    );
  })
]
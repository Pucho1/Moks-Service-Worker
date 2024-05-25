import { useEffect, useState } from "react";
import useGetSeries from "../services/useGetSeries";

const ListaSeries = () => {

  const [series, setSeries] = useState([]);
  useGetSeries(setSeries);


  return <div className="series">
      {series.map(serie => (
          <div key={serie.id} className="serie">
              <h2>{serie.title}</h2>
              <p>Creador: {serie.creator}</p>
              <img src={serie.image} alt={serie.title} />
              <p>Puntuación: {serie.rating}</p>
              <p>Canal: {serie.channel}</p>
          </div>
      ))}
  </div>;
}

export default ListaSeries;
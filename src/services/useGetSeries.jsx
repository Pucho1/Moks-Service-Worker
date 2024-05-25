import React, { useEffect } from 'react'

const useGetSeries = (setSeries) => {

  useEffect(() => {
    fetch('https://peticiones.online/api/series')
      .then(response => response.json())
      .then(json => setSeries(json))
      .catch(error => console.log(error));
  }, []);
}

export default useGetSeries;
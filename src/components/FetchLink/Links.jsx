import React, { useState, useEffect } from 'react';

function FetchLink({ assets }) {
  const [link, setLink] = useState(null);

  useEffect(() => {
    const apiUrl = `https://github.com/GreiskelS/Assets.proyects/blob/main/assets/DSC08400.JPG?raw=true${assets}`;
            console.log(apiUrl);
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setLink(data.link);
      })
      .catch((error) => {
        console.error('Error al obtener el enlace:', error);
      });
  }, [assets]);

    return link;
}

export default FetchLink
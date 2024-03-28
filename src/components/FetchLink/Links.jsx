import React, { useState, useEffect } from 'react';

function Links({ cardLink }) {

  const [link, setLink] = useState(null);

  useEffect(() => {
    const apiUrl = `https://cdn.glitch.global/1eb2c8f5-eaaf-489e-a99f-7b4f5c5b5810/1.JPG?v=1705420115738${cardLink}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setLink(data.link);
      })
      .catch((error) => {
        console.error('Error al obtener el enlace:', error);
      });
  }, [cardLink]);

  return link;
<>

</>
};

export default Links;

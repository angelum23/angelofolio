import React from 'react';
import Button from '@mui/material/Button';
import eu_transparente from '../assets/eu_transparente.png';

const Home = () => {
  return (
    <div class='corpo'>
      <div class='descricao'>
          <h3 class='texto'>
            HELLO, I AM
          </h3>
          <h1 class='texto'>
            ÂNGELO J. DA ROSA
          </h1>
          <h4 class='texto'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.  <br></br>
          Praesent nec tellus auctor, tincidunt ligula.
          </h4>
          <div class='namorada'>Joyce eu te amo ♥</div>
        </div>
        <img src={eu_transparente} class='imagem' />
    </div>
  );
};
  
export default Home;
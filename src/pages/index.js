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
          Here in my own website you can find my projects,<br/> skills, jobs and fun facts about me 
          </h4>
          <div class='namorada'><br/><br/>Joyce eu te amo ♥</div>
        </div>
        <img src={eu_transparente} class='imagem' />
    </div>
  );
};
  
export default Home;
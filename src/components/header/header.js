import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
 
//header é um component
//cria uma pasta somente para ele pq vai ficar todos arquivos dele em um lugar só
 
//para importar o css, venho direto aqui tbm
import './header.css';
 
//stateless components - criamos componentes por meio de variaveis
//pode tirar os parenteses se desejar
const Header = () => (
    <div class= "alert alert-dark" role="alert">
    <header id="main-header">Sistema</header>
    </div>
   
   );
  

export default Header;

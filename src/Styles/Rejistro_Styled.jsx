import styled from "styled-components";


const Tabla = styled.div`
     background-color: black;
     opacity: 0.9;
     width: 500px;
     text-align: center;
     margin-left: 350px;
     padding-top: 50px;
     border-radius: 50px;
     color: white;
     @import url('https://fonts.googleapis.com/css2?family=Kanit:wght@100&display=swap');
     font-family: 'Kanit', sans-serif;
`;



const FD = styled.body`
     background-image: url(https://legismusic.com/wp-content/uploads/2016/06/musica-para-peliculas-1.jpg);
     position: relative;
`;

const BT = styled.button`
@import url('https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap');
font-family: 'Architects Daughter', cursive;

     background-color: #00a329;
     border: 4px solid #ffffff;
     width: 200px;
     border-radius: 10px;
    

`;


const T = styled.body`

@import url('https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap');
font-family: 'Architects Daughter', cursive;
     background-color: #ffffff;
     width: 500px;
     padding-left: 190px;
     opacity: 0.6;
     border-radius: 30px;
     border: 3px solid #000000;

`;

const Ttemplate = styled.body`

@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
font-family: 'Bebas Neue', cursive;
    font-size: 40px;
     color: white;
     margin: 30px;

`;

const Card = styled.body`
    width: 67rem;
    margin: 5rem;
    display: grid;
    /* display: flex; */
    gap: 2em;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;

const puntos = styled.body`

     margin-top: -250px;
     margin-left: -8px;
     background: #000000;
     border: 4px solid #1faa03;
     width: 120px;
     height: 60px;
    border-radius: 0px 50px 50px 0px;
     text-align: center;
     opacity: 0.6;
`;


const LetraPuntos = styled.body`

     @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
     font-family: 'Bebas Neue', cursive; 
     color: #ffffff;
     margin-top: -60px;
     margin-left: -48px;
     font-size: 40px;
     text-align: center;
     position: relative;
     background: none;
  
`;

const estrella = styled.img`

    width: 50px;
    margin-left: -50px;
   
`;

const Post = styled.img`

    width: 350px;
    border-radius: 30px;
    margin-left: 100px;
    margin-top: -130px;
    
`;

const TitlePost = styled.h1`

    font-size: 50px;
    color: #26b000;
    margin-left: 500px;
   padding-top: 100px;
    
`;

const Act = styled.p`

@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
     font-family: 'Bebas Neue', cursive; 

  color: #ffffff;
  margin-top: 170px;
   
`;


const Hea = styled.header`

  position: fixed;
  z-index: 2;
  width: 100%;
   
`;

const Carrusel = styled.p`

 padding-top: 90px;
   
`;

const descripcionM = styled.p`

 color: #ffffff;
 font-size: 25px;
 width: 55%;
 margin-top: -300px;
 margin-left: 500px;
 padding-bottom: 100px;
   
`;

const Punts = styled.p`

 color: #ffffff;
 font-size: 25px;
 width: 150px;
 margin-top: -780px;
 margin-left: 500px;
 border: 5px solid #14c704;
 text-align: center; 
 border-radius: 0px 30px 30px 0px;
   
`;

const CrudM = styled.main`

  background-color: #686868;
  width: 80%;
  margin-left: 120px;
  border-radius: 80px;
   
`;

const TCrud = styled.h1`

 color: #ffffff;
 text-align: center;
   
`;

const addView = styled.main`

 display: flex;
 gap: 4em;
 margin: 50px;
   
`;

const add = styled.main`

 color: #ffffff;
 text-align: center;
 border-right: 7px solid #ffffffdd;
 padding-right: 90px;
 width: 350px;
 font-size: 25px;
`;

const view = styled.main`

 color: #ffffff;
   margin-left: -30px;
`;

const PeliN = styled.main`

 color: #ffffff;
 width: 290px;
 border-radius: 20px;
`;

const botonesC = styled.main`

 width: 190px;
`;

const btn = styled.button`

 border-radius: 10px;
color: white;
`;




export const BTN = btn
export const PuntosM = Punts
export const BtnCrud = botonesC
export const View = view
export const Peli = PeliN
export const Add = add
export const AddView = addView
export const TitleCrud = TCrud
export const Fondo = FD
export const CrudMain = CrudM
export const Descripcion = descripcionM
export const TitlePoster = TitlePost
export const Poster = Post
export const CARRUSEL = Carrusel
export const HEADER = Hea
export const Activos = Act
export const E = estrella
export const Lpuntos = LetraPuntos
export const Puntos = puntos
export const CardAncho = Card
export const BotonE = BT
export const Table = T
export const TablaCompleta = Tabla
export const TitleTemplate = Ttemplate

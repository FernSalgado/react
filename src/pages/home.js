import React,{useEffect,useState} from "react";
import {Card, CardContent,CardMedia, CardActionArea} from "@material-ui/core";

function Digimon(props){
  return (
  <Card elevation={5} style={{margin:25,width:"20%",display:"inline-block"}}>
    <CardActionArea>
      <CardMedia component="img" src={props.img} alt={`Imagem do digimon ${props.name}`}/>
    </CardActionArea>
    <CardContent style={{textAlign:"center"}}>
    <p>{props.name}</p>
      <p>Level: {props.level}</p>
    </CardContent>
  </Card>
  )
}
export function HomePage(){
  const [data,setData] = useState([]);
  useEffect(function() {
    fetch('https://digimon-api.herokuapp.com/api/digimon')
    .then(response => {
      return response.json();
    })
    .then(response => {
      setData(response);
      console.log("Data apos o fetch:",data);
    })
    .catch(error => {
      console.error(error);
    });
  } , [] );  
  if (data.length > 0){
    return (
      <div>
        {data.map(function(digimon){
          return <Digimon key={digimon.name}{...digimon}/>
        })}
      </div>
    );
  }else{
    return <p>Carregando...</p>;
  }

};
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //CREAR PROMESAS-----------------------
    // const promesa = new Promise((resolve, reject )=>{
    //   if(false){
    //     resolve("hola mundo");
    //   }else{
    //     reject("algo salio mal");
    //   }
    // });
    //USAR PROMESA-------------------------
    // promesa.then((mensaje)=>{
    //   console.log(mensaje);
    // }).catch(err => console.log("hay un error", err))
    //
    // console.log("FIN")

    this.getUsers().then((res)=>{
      console.log(res)
    });

  }

  getUsers(){
    return new Promise((Response)=>{
      fetch("https://reqres.in/api/users")
      .then(res => res.json())
      .then(res => Response(res.data));
    });
    
  }

}

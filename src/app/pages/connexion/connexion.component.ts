import { Component, OnInit } from '@angular/core';
import { IdI,UserI } from 'src/app/modeles/id-i';
import { HttpClient } from '@angular/common/http';
import { Router} from '@angular/router';
import {UserService} from 'src/app/services/user.service'
@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  id:IdI= {id:'',pass:''};
  user:UserI=<UserI>{};
  constructor(private readonly http:HttpClient,private readonly router:Router, private readonly u:UserService) { }
  
  logid()
  {
    console.log(this.id)
  }
  ngOnInit(): void {
  }
  checkid(){
    this.http.get<UserI>("assets/id/"+this.id.id+"@"+this.id.pass+".json").subscribe(
      retour=>{
      console.log('utilisateurs trouvé');
      this.u.user= retour;
      this.router.navigateByUrl("/intranet");
    },erreur=>{
      console.log('erreur');
    })
  }

}

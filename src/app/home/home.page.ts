import { Component } from '@angular/core';
import { ServicioGithub } from '../services/github';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [ ServicioGithub ]
})
export class HomePage 
  {
    public names;
    public username;

    constructor(private githubService: ServicioGithub) {
        this.getRepos();
      }

    getRepos() {
        this.githubService.getRepos(this.username)
          .then((response: any) => {
              this.names=response.json();
             /*ESTE CONSOLE.LOG ES DE PRUEBA console.log(this.names);*/
            })
          .catch((error: any) => {
              alert("Error!")
            });
      }
  }

import { Component } from '@angular/core';
import { Service } from './services/app.service';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'prueba_banco';
  faArrowLeft = faArrowLeft;
  faBars = faBars;
  faCircleExclamation = faCircleExclamation;
  user: any = null; // Información del usuario
  public isUser = false;

  constructor(private Service: Service) { }

  ngOnInit() {
    this.Service.getItemById("800220154").subscribe(
      (response) => {
        this.user = response.Item;
        this.isUser = true;
      },
      (error) => {
        console.log('error', error.error);
        return;
      }

    );
  }
}

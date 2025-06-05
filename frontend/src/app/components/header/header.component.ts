import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: false,
})
export class HeaderComponent  implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}
  handleButtonClick(item: string) {
    console.log(`${item} button clicked`);
    
    if (item === 'Mi cuenta') {
      this.router.navigate(['/login']); // Navega a la ruta login
    }
    // Puedes agregar más condiciones para otros botones
  }
}

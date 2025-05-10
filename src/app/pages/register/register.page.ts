import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false
})
export class RegisterPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  rut: string = '';

  permitirRut(event: KeyboardEvent) {
    const char = event.key;
    const esNumero = /^[0-9]$/.test(char);
    const esGuion = char === '-';

    // Si es un número, permitir
    if (esNumero) return;

    // Si es un guion y no hay ninguno aún, permitir
    if (esGuion && !this.rut.includes('-')) return;

    // Si no es número ni guion, o ya hay un guion, bloquear
    event.preventDefault();
  }

}

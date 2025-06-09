import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false
})
export class RegisterPage implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  rut: string = '';
  usuario = {
    nombre_completo: '',
    rut: '',
    correo: '',
    password: '',
    region_id: '',
    comuna_id: ''

  };

  permitirRut(event: KeyboardEvent) {
    const char = event.key;
    const esNumero = /^[0-9]$/.test(char);
    const esGuion = char === '-';
    
    if (esNumero) return;

    if (esGuion && !this.rut.includes('-')) return;

    event.preventDefault();
  }
  registrarUsuario() {
  this.http.post('http://localhost:3000/api/usuarios/registro', this.usuario)
    .subscribe({
      next: (res) => {
        console.log('✅ Usuario registrado:', res);
        alert('Registro exitoso');
      },
      error: (err) => {
        console.error('❌ Error al registrar:', err);
        alert('Ocurrió un error al registrar usuario');
      }
    });
  }
}

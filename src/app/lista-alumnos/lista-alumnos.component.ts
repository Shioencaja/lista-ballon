import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css'],
})
export class ListaAlumnosComponent implements OnInit {
  public alumnos = [
    { nombre: 'camila ballon Fox', asistencia: false },
    { nombre: 'gabriel ballon fox', asistencia: false },
    { nombre: 'julia ballon fox', asistencia: false },
    { nombre: 'cecilia ballon fox', asistencia: false },
  ];
  nuevoAlumno(event: Event) {
    const nuevo = document.getElementById('nuevo-alumno') as HTMLInputElement;
    this.alumnos.push({ nombre: nuevo.value, asistencia: true });
    console.log('nuevo alumno agregado ' + nuevo.value);
  }
  ngOnInit(): void {}
}

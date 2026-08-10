import { Component, input } from '@angular/core';

@Component({
  selector: 'app-diagnostic-card',
  standalone: true,
  templateUrl: './diagnostic-card.html',
  styleUrl: './diagnostic-card.css'
})
export class DiagnosticCard {
  diagnostic = input.required<{
    titulo: string;
    fecha: string;
    medico: string;
    especialidad: string;
    estado: string;
    notas: string;
    archivoPdf?: { nombre: string; tamano: string };
  }>();
}
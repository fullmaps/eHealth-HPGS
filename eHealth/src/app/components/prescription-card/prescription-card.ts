import { Component, input } from '@angular/core';

@Component({
  selector: 'app-prescription-card',
  standalone: true,
  templateUrl: './prescription-card.html',
  styleUrl: './prescription-card.css'
})
export class PrescriptionCard {
  prescription = input.required<{
    medicamento: string;
    dosis: string;
    frecuencia: string;
    duracion: string;
    estado: string;
    fechaEmision: string;
    medico: string;
  }>();
}
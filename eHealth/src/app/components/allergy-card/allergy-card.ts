import { Component, input } from '@angular/core';

@Component({
  selector: 'app-allergy-card',
  standalone: true,
  templateUrl: './allergy-card.html',
  styleUrl: './allergy-card.css'
})
export class AllergyCard {
  allergy = input.required<{ nombre: string; severidad: string; reaccion: string }>();
}
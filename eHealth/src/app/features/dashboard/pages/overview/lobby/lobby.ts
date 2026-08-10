import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { AllergyCard } from '../../../../../components/allergy-card/allergy-card';
import { DiagnosticCard } from '../../../../../components/diagnostic-card/diagnostic-card';
import { PrescriptionCard } from '../../../../../components/prescription-card/prescription-card';

@Component({
  selector: 'app-lobby',
  standalone: true,
  imports: [
    AllergyCard,
    DiagnosticCard,
    PrescriptionCard
  ],
  templateUrl: './lobby.html',
  styleUrl: './lobby.css'
})
export class Lobby {
  private router = inject(Router);

  activeTab = signal<'alergias' | 'diagnosticos' | 'recetas'>('alergias');

  alergias = signal([
    { id: '1', nombre: 'Penicilina', severidad: 'alta', reaccion: 'Urticaria y dificultad respiratoria' },
    { id: '2', nombre: 'Mariscos', severidad: 'media', reaccion: 'Inflamación de labios' },
    { id: '3', nombre: 'Polvo doméstico', severidad: 'baja', reaccion: 'Congestión nasal' }
  ]);

  diagnosticos = signal([
    {
      id: '1',
      titulo: 'Faringitis bacteriana',
      fecha: '12 May 2026',
      medico: 'Dra. Marisol Cabrera',
      especialidad: 'Medicina General',
      estado: 'Resuelto',
      notas: 'Cultivo positivo. Tratamiento con antibiótico alternativo por alergia a penicilina.',
      archivoPdf: { nombre: 'informe-faringitis-bacteriana.pdf', tamano: '44 KB' }
    },
    {
      id: '2',
      titulo: 'Anemia ferropénica leve',
      fecha: '03 Feb 2026',
      medico: 'Dr. Juan Ramírez',
      especialidad: 'Hematología',
      estado: 'En seguimiento',
      notas: 'Hemoglobina 10.8 g/dL. Repetir hemograma en 3 meses.',
      archivoPdf: { nombre: 'informe-anemia-ferropenica.pdf', tamano: '44 KB' }
    },
    {
      id: '3',
      titulo: 'Rinitis alérgica estacional',
      fecha: '21 Sep 2025',
      medico: 'Dra. Carla Then',
      especialidad: 'Alergología',
      estado: 'Crónico',
      notas: 'Se recomienda evitar exposición a polvo y usar antihistamínico en temporada.',
      archivoPdf: { nombre: 'informe-rinitis-alergica.pdf', tamano: '44 KB' }
    },
    {
      id: '4',
      titulo: 'Cocolitis Pulmonar',
      fecha: '8 Ene 2026',
      medico: 'Dra. Maria Gonzalez',
      especialidad: 'Alergología',
      estado: 'Crónico',
      notas: 'Se recomienda evitar exposicion al sol durante mucho tiempo.',
      archivoPdf: { nombre: 'informe-cocolitis-pulmonar.pdf', tamano: '47 KB' }
    }
  ]);

  recetas = signal([
    {
      id: '1',
      medicamento: 'Azitromicina 500 mg',
      dosis: '1 tableta',
      frecuencia: 'Cada 24 horas',
      duracion: '5 días',
      estado: 'Finalizada',
      fechaEmision: '12 May 2026',
      medico: 'Dra. Marisol Cabrera'
    },
    {
      id: '2',
      medicamento: 'Sulfato ferroso 325 mg',
      dosis: '1 tableta',
      frecuencia: 'Cada 12 horas',
      duracion: '90 días',
      estado: 'Vigente',
      fechaEmision: '03 Feb 2026',
      medico: 'Dr. Juan Ramírez'
    },
    {
      id: '3',
      medicamento: 'Loratadina 10 mg',
      dosis: '1 tableta',
      frecuencia: 'Cada 24 horas',
      duracion: 'Según síntomas',
      estado: 'Vigente',
      fechaEmision: '21 Sep 2025',
      medico: 'Dra. Carla Then'
    }
  ]);

  setTab(tab: 'alergias' | 'diagnosticos' | 'recetas') {
    this.activeTab.set(tab);
  }

  logout() {
    localStorage.removeItem('userSession');
    this.router.navigate(['/auth/login']);
  }
}
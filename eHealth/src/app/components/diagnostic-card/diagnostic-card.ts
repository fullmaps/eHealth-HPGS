import { Component, input } from '@angular/core';

export interface DiagnosticItem {
  id: string;
  titulo: string;
  fecha: string;
  medico: string;
  especialidad: string;
  estado: string;
  notas: string;
  archivoPdf?: {
    nombre: string;
    tamano: string;
    url?: string;
  };
}

@Component({
  selector: 'app-diagnostic-card',
  standalone: true,
  templateUrl: './diagnostic-card.html',
  styleUrl: './diagnostic-card.css'
})
export class DiagnosticCard {
  diagnostic = input.required<DiagnosticItem>();

  verPdf(url?: string): void {
    const targetUrl = url || '/docs/informe-ejemplo.pdf';
    window.open(targetUrl, '_blank');
  }

  descargarPdf(url?: string, nombreArchivo?: string): void {
    const targetUrl = url || '/docs/informe-ejemplo.pdf';
    const link = document.createElement('a');
    link.href = targetUrl;
    link.download = nombreArchivo || 'informe-medico.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
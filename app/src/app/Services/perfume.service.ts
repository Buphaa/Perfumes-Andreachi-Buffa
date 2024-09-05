import { Injectable } from '@angular/core';
import { Perfume } from '../Models/perfume';  // Importa desde la carpeta models

@Injectable({
  providedIn: 'root'
})
export class PerfumeService {
  private perfumes: Perfume[] = [
    // Tu lista de perfumes
  ];

  constructor() { }

  getPerfumes(): Perfume[] {
    return this.perfumes;
  }

  getPerfumeById(id: number): Perfume | undefined {
    return this.perfumes.find(perfume => perfume.id === id);
  }
}

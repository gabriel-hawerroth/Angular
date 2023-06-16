import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/Animal';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent implements OnInit {
  constructor(private listService: ListService) {
    this.getAnimals();
    this.getPacientes();
  }
  ngOnInit(): void {}

  animalDetails: string = '';

  animals: Animal[] = [];
  pacientes: any[] = [];

  showAge(animal: Animal) {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`;
  }

  removeAnimal(animal: Animal) {
    this.animals = this.animals.filter((a) => animal.name !== a.name);
    this.listService.remove(animal.id).subscribe();
  }

  getAnimals(): void {
    this.listService.getAll().subscribe((animals) => (this.animals = animals));
  }

  getPacientes(): void {
    this.listService
      .getAllPacientes()
      .subscribe((pacientes) => (this.pacientes = pacientes));
  }

  getSituacaoPaciente(situacao: any): any {
    if (situacao == 'A') {
      return 'Ativo';
    } else if (situacao == 'I') {
      return 'Inativo';
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Recepie } from '../../models/recepies'; // Adjust the path if needed
import { RecepieService } from '../services/recepie.service'; // Adjust the path if needed
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recepie-list',
  imports: [RouterLink,CommonModule],
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css']
})
export class RecepieListComponent implements OnInit {
  recepies: Recepie[] = [];

  constructor(private recepieService: RecepieService) {}

  ngOnInit() {
    this.fetchRecepies();
  }

  // Fetch recipes from the service
  fetchRecepies(): void {
    this.recepieService.getRecepies().subscribe(recepies => {
      this.recepies = recepies;
      console.log(this.recepies);
    });
  }

  // Delete a recipe by its ID
  deleteRecipe(id: number): void {
    this.recepieService.deleteRecepie(id).subscribe({
      next: () => {
        // After successful deletion, remove the recipe from the list
        this.recepies = this.recepies.filter(recipe => recipe.id !== id);
        console.log(`Recipe with ID ${id} deleted successfully.`);
      },
      error: (err) => {
        console.error('Error deleting recipe:', err);
      }
    });
  }
}

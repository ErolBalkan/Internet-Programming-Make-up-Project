import {Recepie, Ingredient} from '../../models/recepies';
import {Component, OnInit} from '@angular/core';import {FormBuilder,FormArray, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {NgForOf, NgIf} from '@angular/common';import {RecepieService} from '../services/recepie.service';
@Component({
  selector: 'app-recepie-create',
  imports: [ReactiveFormsModule,
    NgForOf],
  templateUrl: './recepie-create.component.html',
  styleUrl: './recepie-create.component.css'
})
export class RecepieCreateComponent implements OnInit {
  recipeForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private recepieService: RecepieService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.recipeForm = this.fb.group({
      id: [null],
      description: ['', Validators.required],
      instructions: ['', Validators.required],
      cooking_time: ['', Validators.required],
      difficulty_level: ['', Validators.required],
      image_URL: ['', [Validators.required, Validators.pattern('https?://.+')]],
      ingredients: this.fb.array([]) // Ingredients will be added dynamically
    });

    // Optionally, initialize the form with some data
    // this.addIngredient(); // Can add initial ingredient if necessary
  }

  get ingredients() {
    return (this.recipeForm.get('ingredients') as FormArray);
  }

  addIngredient(): void {
    const ingredientGroup = this.fb.group({
      quantity: [null, [Validators.required, Validators.min(1)]],
      name: ['', Validators.required]
    });
    this.ingredients.push(ingredientGroup);
  }

  removeIngredient(index: number): void {
    this.ingredients.removeAt(index);
  }

  onSubmit(): void {
    if (this.recipeForm.valid) {
      const recipe: Recepie = this.recipeForm.value;
      this.recepieService.createRecepie(recipe).subscribe({
        next: (createdRecipe) => {
          console.log('Recipe created successfully:', createdRecipe);
          // Optionally navigate to the recipe list page after successful creation
          this.router.navigate(['/recepies']); 
        },
        error: (err) => {
          console.error('Error creating recipe:', err);
        }
      });
    } else {
      console.log('Form is invalid');
    }
  }
}

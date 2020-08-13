import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscriber, of } from 'rxjs';
import { Form, FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoriesService } from 'src/app/shared/services/categories.service';
import { switchMap } from 'rxjs/operators';
import { MaterialService } from 'src/app/shared/classes/material.service';
import { Element } from '@angular/compiler';
import { Category } from 'src/app/shared/interfaces';
import { error } from 'util';

@Component({
  selector: 'app-categories-form',
  templateUrl: './categories-form.component.html',
  styleUrls: ['./categories-form.component.css']
})
export class CategoriesFormComponent implements OnInit {
  @ViewChild('input', {static: false}) inputRef: ElementRef;
  form: FormGroup;
  image: File;
  imagePreview = null ;
  isNew = true;

  category: Category;
  constructor(private route: ActivatedRoute , private categoriesService: CategoriesService
    , private router: Router) { }

  ngOnInit() {
  this.form = new FormGroup({
    name: new FormControl(null, Validators.required)

  });

  // this.route.params.subscribe((params: Params) => {
  //     if (params['id']) {
  //       // editing form
  //       this.isNew = false;
  //     }
  //   });

  this.form.disable();

  this.route.params.pipe(
    switchMap(
      (params: Params) => {
        if (params['id']) {
          this.isNew = false;
          return this.categoriesService.getById(params['id']);
        }
        return of(null);
      }
    )
    ).subscribe (
        (category: Category ) => {
          if (category) {
            this.category = category;
            this.form.patchValue({
              name: category.name
            });
            this.imagePreview = category.imageSrc;
            MaterialService.updateTextInputs();
          }
          this.form.enable();
      },
      error => MaterialService.toast(error.error.message)
    );

  }

  triggerClick() {
    this.inputRef.nativeElement.click();
  }

  deleteCategory() {
    const decision = window.confirm('Are you sure you want to delete this category ? ' + this.category.name);
    if (decision ) {
      this.categoriesService.delete(this.category._id).subscribe(
        response => MaterialService.toast(response.message),
        error => MaterialService.toast(error.error.message),
        () => this.router.navigate(['/categories'])

      );
    }
  }

  onFileUpload(event: any) {
    const file = event.target.files[0];
    this.image = file;

    const reader = new FileReader();

    reader.onload = () => {
      this.imagePreview  = reader.result;
    };

    reader.readAsDataURL(file);

  }

  onSubmit() {
    let obs$;
    if (this.isNew) {
      this.form.disable();
      obs$ = this.categoriesService.create(this.form.value.name, this.image);
     } else {
      obs$ = this.categoriesService.update(this.category._id, this.form.value.name, this.image);
    }

    obs$.subscribe( category => {
      MaterialService.toast('Changes Saved Successfully');
      this.form.enable();
    },
    error => {
      MaterialService.toast(error.error.message);
      this.form.enable();
    });
  }
}

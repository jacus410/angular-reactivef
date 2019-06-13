import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { linia } from './data-model';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent {

  nazwaAA: string;
  typeBB: string;

 adress2 =this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    });

alliases = this.fb.array([
      this.fb.control('')
    ])


adress1 = {
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.adress2,
    aliases: this.alliases

};
  profileForm = this.fb.group(this.adress1);

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  constructor(private fb: FormBuilder) {

    this.nazwaAA = 'aa';
    this.typeBB = 'radio';
   }


  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }

  addAlias() {

 //   this.profileForm.get('aliases').push(
  this.aliases.push(
                            this.fb.group( linia
                                      /* może byś też tak:
                                      {
                                           aa: [33],
                                           bb: [' '],
                                           cc: ['ggg'], 
                                           }  */
                                           )
                           );
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
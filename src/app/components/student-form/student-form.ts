import { Component, effect, input, output, signal } from '@angular/core';
import { Istudent } from '../../interface/Istudent';
import { form, FormField } from '@angular/forms/signals';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [MatFormFieldModule, MatIconModule, FormField, MatButtonModule],
  selector: 'app-student-form',
  styleUrl: './student-form.scss',
  templateUrl: './student-form.html',
})
export class StudentForm {
  isInEditMode: boolean = false;
  getEditObj = input<Istudent>();

  studentModel = signal<Istudent>({
    id: 0,
    stdName: '',
    stdSirname: '',
    stdClass: '',
    stdAddress: '',
    stdPhone: 0,
    stdFees: 0,
  });

  constructor() {
    effect(() => {
      const student = this.getEditObj();
      if (student) {
        this.studentModel.set({
          ...student,
        });
        this.isInEditMode = true;
      }
    });
  }

  studentForm = form(this.studentModel);
  emitNewStudent = output<Istudent>();
  emitUpdatedObj = output<Istudent>();

  addStudent(eve: Event) {
    eve.preventDefault();

    const NEW_STUDENT: Istudent = {
      ...this.studentModel(),
      id: Date.now(),
    };

    this.emitNewStudent.emit(NEW_STUDENT);

    this.studentForm().reset({
      id: 0,
      stdName: '',
      stdSirname: '',
      stdClass: '',
      stdAddress: '',
      stdPhone: 0,
      stdFees: 0,
    });
  }

  onEditStudent() {
    let UPDATED_OBJ: Istudent = {
      ...this.studentModel(),
      id: this.getEditObj()!.id,
    };
    this.emitUpdatedObj.emit(UPDATED_OBJ);
    this.studentForm().reset({
      id: 0,
      stdName: '',
      stdSirname: '',
      stdClass: '',
      stdAddress: '',
      stdPhone: 0,
      stdFees: 0,
    });
    this.isInEditMode = false;
  }
}

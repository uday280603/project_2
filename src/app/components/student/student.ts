import { Component, input, output } from '@angular/core';
import { Istudent } from '../../interface/Istudent';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  imports: [MatButtonModule, MatIconModule],
  selector: 'app-student',
  styleUrl: './student.scss',
  templateUrl: './student.html',
})
export class Student {

  emitStudentForEdit = output<Istudent>();
  emiteRemoveId =  output<number>();

  getAllStudents = input<Istudent[]>();

  onEditStudent(student : Istudent){
    this.emitStudentForEdit.emit(student);

  }

  onRemoveStudent(id : number){
      this.emiteRemoveId.emit(id)
  }
}

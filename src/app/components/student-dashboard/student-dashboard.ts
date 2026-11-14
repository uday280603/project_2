import { Component, OnInit } from '@angular/core';
import { Istudent } from '../../interface/Istudent';
import { students } from '../../const/student';
import { Student } from '../student/student';
import { StudentForm } from '../student-form/student-form';

@Component({
  imports: [Student, StudentForm],
  selector: 'app-student-dashboard',
  styleUrl: './student-dashboard.scss',
  templateUrl: './student-dashboard.html',
})
export class StudentDashboard implements OnInit {
  stduentArr!: Istudent[];
  editedObj!: Istudent;

  ngOnInit(): void {
    this.stduentArr = students;
  }

  getNewStudent(student: Istudent) {
    this.stduentArr = [...this.stduentArr, student];
  }

  getEditedObj(student: Istudent) {
    this.editedObj = student;
  }

  getUpdatedObj(updatedObj: Istudent) {
    let GETINDEX = this.stduentArr.findIndex((s) => s.id === updatedObj.id);

    if (GETINDEX !== -1) {
      this.stduentArr = this.stduentArr.map((s) => (s.id === updatedObj.id ? updatedObj : s));
    }
  }

  getRemoveId(removeId : number){
    let GETINDEX = this.stduentArr.findIndex(s => s.id === removeId);
    this.stduentArr.splice(GETINDEX,1);
  }
}

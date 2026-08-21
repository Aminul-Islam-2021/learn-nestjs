import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
  private students = [
    { id: 1, name: 'Student 1', age: 20 },
    { id: 2, name: 'Student 2', age: 21 },
    { id: 3, name: 'Student 3', age: 22 },
  ];

  getAllStudents() {
    return this.students;
  }
  getStudentById(id: number) {
    const student = this.students.find((student) => student.id === id);
    if (!student) {
      throw new NotFoundException('Student not found');
    }
    return student;
  }
  createStudent(student: { name: string; age: number }) {
    const newStudent = {
      id: this.students.length + 1,
      ...student,
    };
    this.students.push(newStudent);
    return newStudent;
  }

  updateStudent(id: number, student: { name?: string; age?: number }) {
    const existingStudent = this.students.find((s) => s.id === id);
    if (!existingStudent) {
      throw new NotFoundException('Student not found');
    }
    Object.assign(existingStudent, student);
    return existingStudent;
  }

  deleteStudent(id: number) {
    const index = this.students.findIndex((s) => s.id === id);
    if (index === -1) {
      throw new NotFoundException('Student not found');
    }
    this.students.splice(index, 1);
    return { message: 'Student deleted successfully' };
  }
}

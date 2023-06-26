import { Model, Types } from 'mongoose'
import { IAcademicFaculty } from '../academicFaculty/academicFaculty.interface'
import { IAcademicDepartment } from '../academicDepertment/academicDepartment.interface'
import { IAcademicSemester } from '../acedemicSemester/acedemicSemester.interface'

type Guardian = {
  fatherName: string
  fatherOccupation: string
  fatherContactNo: string
  motherName: string
  motherOccupation: string
  motherContactNo: string
  address: string
}

type LocalGuardian = {
  name: string
  occupation: string
  contactNo: string
  address: string
}

export type IStudent = {
  id: string
  name: {
    firstName: string
    middleName: string
    lastName: string
  }
  gender: 'male' | 'female'
  dateOfBirth: string
  email: string
  contactNo: string
  emergencyContactNo: string
  presentAddress: string
  permanentAddress: string
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-'
  guardian: Guardian
  localGuardian: LocalGuardian
  academicFaculty: Types.ObjectId | IAcademicFaculty
  academicDepartment: Types.ObjectId | IAcademicDepartment
  academicSemester: Types.ObjectId | IAcademicSemester
  profileImage?: string
}
export type IStudentModel = Model<IStudent, Record<string, unknown>>

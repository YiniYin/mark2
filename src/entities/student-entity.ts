
import _ from 'underscore'

export interface Student {
    Id: number;
    FirstName: string;
    FamilyName: string;
    BirthDate: string;
    Name: string;
    GradeId: number;
    Grade: Grade;
    IsActive: boolean
}

export interface Grade {
    Id: number;
    Kyu: number;
    Dan: number;
    Description: string;
    SortOrder: number;
}

export class StudentEntity {
    students: Array<Student>

    constructor(students) {
        this.students = this.process(students)
    }

    private process(students) {
        this.setDisplayAttr(students)

        return this.sort(students)
    }

    private setDisplayAttr(students) {
        students.forEach(s => {
            this.setInitials(s)

            this.setBeltColor(s)

            this.setRedTipIfAny(s)
        })
    }
    private setBeltColor(student) {
        let parts = student.Grade.Description.split(' ')

        let color = parts[0].toLowerCase()

        student.beltColor = color
    }

    private setRedTipIfAny(student) {
        if (student.Grade.Description.search('Red Tip') !== -1)
            student.redTip = true
    }

    private setInitials(student) {
        let parts = student.Name.split(' ')

        let initials = parts[0].substring(0, 1).toUpperCase()

        if (parts.length > 1) {
            initials += parts[parts.length - 1].substring(0, 1).toUpperCase();
        }

        student.initials = initials
    }

    private sort(students) {
        return _(students).chain()
            .sortBy(s => {
                return s.Grade.Kyu
            }).sortBy(s => {
                return !s.IsActive
            }).value()
    }

    public search(query: string) {
        if(!query)
            return this.students

        return _.filter<Student>(this.students, s => {
            return s.Name.toLowerCase().indexOf(query) >= 0
        })
    }
}
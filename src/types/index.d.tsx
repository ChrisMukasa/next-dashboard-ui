export type TeacherProps = [
    id       : number,
    teacherId: string,
    name     : string,
    email   ?: string,
    photo    : string,
    phone    : string,
    sudjects : string[],
    classes  : string[],
    address  : string,
]

export type StudentProps = [
    id       : number,
    studentId: string,
    name     : string,
    email   ?: string,
    photo    : string,
    phone    : string,
    grade    : number,
    classes  : string,
    address  : string,
]

export type ParentProps = [
    id       : number,
    name     : string,
    students : string[],
    email   ?: string,
    phone    : string,
    address  : string,
]

export type SubjectsProps = [
    id       : number,
    name     : string,
    teachers : string[],
]

export type ClassesProps = [
    id        : number,
    name      : string,
    capacity  : number,
    grade     : number,
    supervisor: string,
]

export type LessonProps = [
    id        : number,
    subject   : string,
    clas      : string,
    teacher   : string,
]

export type ExamProps = [
    id      : number,
    subject : string,
    clas    : string,
    teacher : string,
    date    : string,
]

export type AssignmentProps = [
    id      : number,
    subject : string,
    clas    : string,
    teacher : string,
    date    : string,
]

export type ResultProps = [
    id     : number,
    subject: string,
    clas   : string,
    teacher: string,
    student: string,
    date   : string,
    type   : 'exam' | 'assigment',
    score  : number,
]

export type EventProps = [
    id       : number,
    title    : string,
    clas     : string,
    date     : string,
    startTime: string,
    endTime  : string,
]

export type AnnouncementProps = [
    id       : number,
    title    : string,
    clas     : string,
    date     : string,
]

export type TableProps = {
    columns: {
        header: string,
        accessor: string,
        className?: string,
    }[],
    renderRow: (item) => void;
    data: any[]
}
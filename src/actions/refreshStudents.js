import { Action } from 'redux';
import { actionType } from '../action-types';
import { store } from '../redux/store';

const baseUrl = 'http://localhost:3001';
const url = baseUrl+'/api/students';

const createRefreshStudentsRequestAction = () => ({
    type: actionType.REFRESH_STUDENTS_REQUEST,
    students: []
});

const createRefreshStudentsDoneAction = (students) => ({
    type: actionType.REFRESH_STUDENTS_DONE,
    students
});

export const refreshStudents = () => {
    store.dispatch(createRefreshStudentsRequestAction());
    fetch(url)
        .then(res => res.json())
        .then(students => {
            store.dispatch(createRefreshStudentsDoneAction(students.data))
        })
        .catch(err => {
            console.error(err);
        });
    }

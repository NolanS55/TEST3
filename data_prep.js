var students = []
var fs = require('fs')
const { resolve } = require('path')

module.exports. init = function () {
    return new Promise((resolve, reject) => {
        fs.readFile('students.json', (err, data)=> {
            if(err) reject('Failed to read students.json')
            students = JSON.parse(data)
            if(!err) {
                resolve('Files read successfully')
            }
        })
    })
}

module.exports. allStudents = function () {
    return new Promise((resolve, reject) => {
        console.log(students)
        if(students.length === 0) reject("No students found")
        resolve(students)
    })
}
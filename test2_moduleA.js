
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

module.exports. getBSD = function () {
    return new Promise((resolve, reject)=> {
        if(students.length === 0) reject("No students found")
        resolve(students)
    })
}

module.exports. highGPA = function () {
    return new Promise((resolve, reject) => {
        if(students.length === 0) reject("Failed to find highest gpa student")
        let hGpa = []
        hGpa = students[0]
        for(let i = 0; i < students.length; i++) {
            if(hGpa.gpa < students[i].gpa) {
                hGpa = students[i]
            }
        }
        resolve(hGpa)
    })
}
function gradingStudents(grades) {
    var roundedGrades = [];
    grades.forEach( function (grade) {
        if (grade < 38) { 
            roundedGrades.push(grade); 
        } else {
            var nextMultipleOf5 = grade + (5 - (grade % 5));
            if ((nextMultipleOf5 - grade) < 3) {
                roundedGrades.push(nextMultipleOf5);
            } else {
                roundedGrades.push(grade);    
            }
        }
    });
    return roundedGrades
}

var a = [73, 67, 38, 33]
console.log(gradingStudents(a))
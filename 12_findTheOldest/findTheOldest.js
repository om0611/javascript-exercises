const findTheOldest = function (people) {
    people.sort(function (person1, person2) {
        let person1_age;
        let person2_age;
        let currYear = new Date().getFullYear();

        if (!("yearOfDeath" in person1)) {
            person1_age = currYear - person1.yearOfBirth;
        } else {
            person1_age = person1.yearOfDeath - person1.yearOfBirth;
        }
        if (!("yearOfDeath" in person2)) {
            person2_age = currYear - person2.yearOfBirth;
        } else {
            person2_age = person2.yearOfDeath - person2.yearOfBirth;
        }
        return person1_age - person2_age;
    });
    return people[people.length - 1];
};

// Do not edit below this line
module.exports = findTheOldest;

// function add(num1,num2){
//     return num1 + num2;
// }

// function doMath(operation, num1,num2){
//     return operation(num1,num2)
// }

// let result = doMath(add,5,10)

// console.log(result)

// let students = [
//     {name:'John Lennon',average:90},
//     {name:'Ringo Starr',average:58},
//     {name:'Paul McCartney',average:83},
// ]

// let passingStudents = students.filter(students=>students.average > 60)
// console.log(passingStudents)
// // passingStudents ===[]

// let students = [
// 	{firstName: 'Cam', lastName: 'Newton'},
// 	{firstName: 'Ted', lastName: 'Ginn'},
// 	{firstName: 'Greg', lastName: 'Olsen'}
// ]

// let fullName = students.map(function(student){
//     return `${student.firstName} ${student.lastName}`
// })

// console.log(fullName)

// let students = [
// 	{firstName: 'Cam', completed: 6},
// 	{firstName: 'Ted', completed: 10},
// 	{firstName: 'Greg', completed: 8}
// ]

// let total = students.reduce(function(sum,current){
//     return sum + current.completed;
// },0)

// console.log("total",total)
// let superHeroes = [
//     ["Batman", "Bruce Wayne"],
//     ["Spiderman", "Peter Parker"],
//     ["The Flash", "Barry Allen"],
// ]

// let secretIdentity = superHeroes.map(function(revealArray){
//     return revealArray.join(" is ")
// })

// console.log(secretIdentity[0])
// console.log(superHeroes[0])

// console.log(secretIdentity.join("\n"))

// let players = [
//   { firstName: "Cam", lastName: "Newton", position: "QB", touchdowns: 32 },
//   { firstName: "Derek", lastName: "Anderson", position: "QB", touchdowns: 0 },
//   {
//     firstName: "Jonathan",
//     lastName: "Stewart",
//     position: "RB",
//     touchdowns: 12,
//   },
//   { firstName: "Mike", lastName: "Tolbert", position: "RB", touchdowns: 8 },
//   { firstName: "Fozzy", lastName: "Whittaker", position: "RB", touchdowns: 3 },
//   { firstName: "Ted", lastName: "Ginn", position: "WR", touchdowns: 9 },
//   { firstName: "Devin", lastName: "Funchess", position: "WR", touchdowns: 2 },
// ];

// console.log(
//   players.find(function (player) {
//     return player.firstName === "Mike";
//   })
// );

// console.log(
//   players.filter(function (player) {
//     return player.position === "RB";
//   })
// );

// console.log(
//   players.map(function (player) {
//     return player.lastName;
//   })
// );

// console.log(
//   players.filter(function (player) {
//     return player.touchdowns > 5 && player.position === "RB";
//   }).map(function(player){
//       return `${player.firstName} ${player.lastName}`
//   })
// );

// let teacher = {name: "Shane"};

// let speak = function(item1, item2){
//     console.log(this.name, item1,item2);
// }

// speak.call(teacher,'coffee','ramen');
// speak.apply(teacher,['coffee','ramen']);

let slideshow = {
    photoList: ['birds', 'puppies', 'rainbows', 'kittens', 'babies'],
 
    currentPhotoIndex: 5,
 
    nextPhoto: function() {
        if(this.currentPhotoIndex < this.photoList.length) {
            console.log('currentPhoto is: '+ this.photoList[this.currentPhotoIndex]);
            this.currentPhotoIndex++;
        } else {
            console.log('End of Slideshow');
            this.pause();
        }
    },
 
    prevPhoto: function() {
        if(this.currentPhotoIndex > -1) {
            console.log('currentPhoto is: ' + this.photoList[this.currentPhotoIndex]);
            this.currentPhotoIndex--;
        } else {
            console.log('Start of Slideshow');
            this.pause();
        }
    },
 
    getCurrentPhoto: function() {
        return this.photoList[this.currentPhotoIndex];  
    },
 
    playInterval: null,
 
    play: function() {
        let self = this;
        this.playInterval = setInterval(function(){self.nextPhoto()}, 2000)
    },
 
    pause: function() {
        clearInterval(this.playInterval);
    }
 
}
slideshow.play()
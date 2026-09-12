let d = new Date();
document.getElementById("currentYear").innerHTML = `&copy;${d.getFullYear()} Bruna Beck`;
document.getElementById("lastModified").textContent = `lastModified:${document.lastModified}`;

const hamButton = document.querySelector("#ham-btn");
const navigation = document.querySelector("#navigation");

hamButton.addEventListener("click", () =>{
    navigation.classList.toggle("show");
    hamButton.classList.toggle("show");
})

const courses = [
    {
        subject: "CSE",
        number: 110,
        title: "Introduction to Programming",
        credits: 2,
        completed: true
    },

    {
        subject: "WDD",
        number: 130,
        title: "Web Fundamentals",
        credits: 2,
        completed: true
    },
     {
        subject: "CSE",
        number: 111,
        title: "Programming with Functions",
        credits: 2,
        completed: true
    },
     {
        subject: "CSE",
        number: 210,
        title: "programming with Classes",
        credits: 2,
        completed: true
    },
     {
        subject: "WDD",
        number: 131,
        title: "Dynamic web Fundamentals",
        credits: 2,
        completed: true
    },
     {
        subject: "WDD",
        number: 231,
        title: "Web Front Development I",
        credits: 0,
        completed: false
    }
]

const list = document.querySelector("#course-list");

function showCourses(courseList) {
    list.innerHTML = "";

    const totalCredits = courseList.reduce(
        (total,course) => total + course.credits, 0
    );
    
        courseList.forEach(function(course){

            const completedText = course.completed
            ? "Completed"
            : " ";

            list.innerHTML += 
           ` <div class="course-card">
           <p>${course.subject} ${course.number}</p>
           <p>${course.title}</p>
           <p>${course.credits}</p>
           <p>${completedText}<p>
           </div>
           `
           ; 
        });

        document.querySelector('#total-credits').textContent = totalCredits;
     }

    document.querySelector("#all-courses").addEventListener("click", function(){
        showCourses(courses.filter(function(course) {
            return course.subject === "WDD";
        }));
    } );
    document.querySelector("#cse-courses").addEventListener("click", function() {
        showCourses(courses);
  });

  document.querySelector('#wdd-courses').addEventListener("click", function() {

    showCourses(courses.filter(function(course){
        return course.subject === "WDD";
    }));

});
showCourses(courses);
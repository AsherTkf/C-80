Name_Of_The_Student_Array = [];

function submit(){
    var Display_Student_Array = [];

    for(var j = 1; j <= 4; j++)

    var Name_Of_The_Student = document.getElementById("name_of_the_student_"+j).value;

    console.log(Name_Of_The_Student);
    
    Name_Of_The_Student_Array.push(Name_Of_The_Student);



console.log(Name_Of_The_Student_Array);

var length_Of_The_Name_Of_Student_Array = Name_Of_The_Student_Array.length;

console.log(length_Of_The_Name_Of_Student_Array);


for(var k = 1; k < length_Of_The_Name_Of_Student_Array; k++)
{
  Display_Student_Array.push("<h4> Name"+ Name_Of_The_Student_Array[k]+"</h4>");

    console.log(Display_Student_Array);
}

console.log(Display_Student_Array);

document.getElementById("display_name_with_commas").innerHTML = Display_Student_Array;

var Remove_Commas = Display_Student_Array.join(" ");

console.log(Remove_Commas);

document.getElementById("display_name_without_commas").innerHTML = Remove_Commas;

document.getElementById("submit_button").style.display = "none";

document.getElementById("sort_button").style.display = "inline-block";
}

function sorting(){
Name_Of_The_Student_Array.sort();

console.log(Name_Of_The_Student_Array);

var Display_Student_Array_Sorting = [];

var length_Of_The_Name_Of_Student_Array = Name_Of_The_Student_Array.length;

console.log(length_Of_The_Name_Of_Student_Array);

for(var k = 1; k < length_Of_The_Name_Of_Student_Array; k++)
{
  Display_Student_Array_Sorting.push("<h4> Name"+ Name_Of_The_Student_Array[k]+"</h4>");

    console.log(Display_Student_Array_Sorting);


}

var Remove_Commas = Display_Student_Array_Sorting.join(" ");

console.log(Remove_Commas);


}



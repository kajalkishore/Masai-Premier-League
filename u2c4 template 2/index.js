// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("#masaiForm").addEventListener("submit",kajal)

var arr=JSON.parse(localStorage.getItem("schedule"))||[]

function kajal(){
    event.preventDefault();

    var obj={
        MatchNumber:masaiForm.matchNum,
    TeamA:masaiForm.teamA.value,
        TeamB:masaiForm.teamB.value,
        date:masaiForm.date.value,
        venue:masaiForm.venue.value
    }

    arr.push(obj)
    localStorage.setItem("schedule",JSON.stringify(arr))
    window.location.href="matches.html"
}

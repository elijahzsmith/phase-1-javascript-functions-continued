// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity2 = "go to the office") {
    return `This Monday, I will ${activity2}.`;
}

function wrapAdjective(string = "*") {
    return function (emphatic = "special") {
        return `You are ${string}${emphatic}${string}!`
    }
} 

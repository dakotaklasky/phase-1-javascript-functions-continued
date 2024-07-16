// code your solution here
function saturdayFun(x = "roller-skate"){
    return `This Saturday, I want to ${x}!`
}

//point of a function expression pointer??
const mondayWork = function(x = 'go to the office'){
    return `This Monday, I will ${x}.`
}

function wrapAdjective(y = "*"){
    return function inner(x = "special"){
        return `You are ${y}${x}${y}!`
    }

}
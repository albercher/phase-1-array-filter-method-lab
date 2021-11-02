// Code your solution here
function findMatching(drivers, str){
    return drivers.filter(word => word.toLowerCase() == str.toLowerCase());
}

function fuzzyMatch(drivers, str){
    return drivers.filter(word => word.startsWith(str));
}

function matchName(drivers, str){
    return drivers.filter(element => element.name == str)
}
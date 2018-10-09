function printPlanets(name) {
    if (typeof name == "string") {
        console.log(name);
    }
    else {
        var i;
        for (i = 0; i < name.length; i++) {
            console.log(name[i]);
        }
    }
}
console.log("===Planets===");
printPlanets(["Mars", "Neptune", "Saturn"]);

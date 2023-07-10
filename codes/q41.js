function make_great(magicians) {
    var great_magicians = [];
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        var great_magician = magician + " the Great";
        great_magicians.push(great_magician);
    }
    return great_magicians;
}
function show_magicians(magicians) {
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        console.log(magician);
    }
}
var magician_names = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
var great_magician_names = make_great(magician_names);
show_magicians(great_magician_names);

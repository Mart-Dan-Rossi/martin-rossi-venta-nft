export function primeraLetraAMayusc(str) {
    if (str != undefined){
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
}
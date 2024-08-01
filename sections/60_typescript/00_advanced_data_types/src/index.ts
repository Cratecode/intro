function uppercaseFirstCharacter(str) {
    return str.substring(0, 1).toUpperCase() + str.substring(1, str.length);
}

// This should log "Test".
console.log(uppercaseFirstCharacter("test"));

// And this should give an error.
console.log(uppercaseFirstCharacter(1));

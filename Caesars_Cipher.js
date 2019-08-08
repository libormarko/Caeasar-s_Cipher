function rot13(str) {
    return str.split("")                            // Split the string into an array of characters
        .map.call(str, function(character) {        // Loop through each character in the array
            let x = character.charCodeAt(0);        // Return an integer between 0 and 65535
                                                        // representing the UTF-16 code unit at the given index
            if (x<65 || x>90) {                     // Check if the character lies between A-Z
                return String.fromCharCode(x);      // Pass any non-alphabetical characters (lies outside A-Z) on
            }
            else if (x<78) {
                return String.fromCharCode(x+13);   // Shift characters A-M 13 places forward
            }
            return String.fromCharCode(x-13);       // Shift characters N-Z 13 places backward
        }).join("");                                // Join the array back to a shifted string
}
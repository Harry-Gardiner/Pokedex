// capitalize the 1st letter of string passed in
export const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
};

// add an id to each pokemon in the API data object
export const addId = (object) => {
    let count = 0;
    object.forEach(element => {
        count += 1;
        element.id = count;
    });
}
export const arraysAreDifferent = (array1, array2) => {
    if (array1.length !== array2.length) {
        return true;
    }

    for (let i = 0; i < array1.length; i++) {
        if (array1[i].id !== array2[i].id || JSON.stringify(array1[i]) !== JSON.stringify(array2[i])) {
            return true;
        }
    }

    return false;
};
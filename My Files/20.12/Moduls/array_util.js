const myName = 'Nir Imber';
const age = 36;

function printArray(arr) {
    for (let i=0; i<arr.length; i++) {
    document.getElementById('output').innerHTML += `${i}. ${arr[i]}`;
    }
}

export default printArray;

// export {
//     myName,
//     printArray 
//     };

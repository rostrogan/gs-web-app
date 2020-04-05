const createItem = (key, value) => sessionStorage.setItem(key, value);

const clearItem = (key) => sessionStorage.removeItem(key);

const getItemValue = (key) => sessionStorage.getItem(key);

export default {
    clearItem,
    createItem,
    getItemValue,
}

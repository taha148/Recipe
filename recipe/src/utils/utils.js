export const ITEMS_PAGINATION = 12
export const HOME_ROUTE = "/home"

export const debounce = (func, delay) => {
    let inDebounce;
    return function () {
        clearTimeout(inDebounce);
        inDebounce = setTimeout(() => {
            func.apply(this, arguments);
        }, delay);
    }
}
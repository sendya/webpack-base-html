const _idsCounter = {}

/**
 * 创建一个唯一 id
 * @param prefix
 * @returns {string}
 */
export function uniqueId(prefix) {
    _idsCounter[prefix] || (_idsCounter[prefix] = 0)
    const id = ++_idsCounter[prefix]
    return prefix + id
}

/**
 * 参数是否为数字
 * @param v
 * @returns {boolean}
 */
export function isNumber(v) {
    return value - parseFloat(value) + 1 >= 0
}

/**
 * 参数是否为数组
 * @param v
 * @returns {boolean}
 */
export function isArray(v) {
    if (typeof v === 'object') {
        return Object.prototype.toString.call(v) === '[object Array]'
    }
    return v instanceof Array
}

/**
 * 获取精确的 现在时间
 * @returns {number}
 */
export function now() {
    if (window.performance && window.performance .now)
        return performance.now()
    return Date.now()
}
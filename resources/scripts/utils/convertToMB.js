export default function convertToMB(sizeInKb) {
    var K_UNIT = 1024
    if (sizeInKb === 0) return 0
    return sizeInKb / Math.pow(K_UNIT, 2)
}
//# sourceMappingURL=convertToMB.js.map

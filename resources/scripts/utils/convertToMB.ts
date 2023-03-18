export default function convertToMB(sizeInKb: number): number {
    const K_UNIT = 1024

    if (sizeInKb === 0) return 0

    return sizeInKb / Math.pow(K_UNIT, 2)
}

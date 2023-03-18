import dayjs from 'dayjs'
export default function formatDate(value, _a) {
    var _b = _a === void 0 ? {} : _a,
        format = _b.format
    return dayjs(value).format(format)
}
//# sourceMappingURL=formatDate.js.map

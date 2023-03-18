import { v4 as uuidV4 } from 'uuid'
export default function generateID(prefix) {
    return ''
        .concat(prefix)
        .concat(prefix ? '-' : '')
        .concat(uuidV4())
}
//# sourceMappingURL=generateID.js.map

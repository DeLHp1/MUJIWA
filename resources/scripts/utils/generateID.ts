import { v4 as uuidV4 } from 'uuid'
export default function generateID(prefix?: string): string {
    return `${prefix}${prefix ? '-' : ''}${uuidV4()}`
}

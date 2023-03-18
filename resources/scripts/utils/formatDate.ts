import dayjs from 'dayjs'

export default function formatDate(value: string, { format }: { format?: string } = {}): string {
    return dayjs(value).format(format)
}

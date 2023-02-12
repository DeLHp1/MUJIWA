export default function Banner({title})
{
    return (
        <>
            <div className={'flex items-center justify-center gap-x-6 bg-slate-900 py-2.5 px-6 sm:px-3.5'}>
                <p className={'text-sm leading-6 text-white'}>
                    {title}
                </p>
            </div>
        </>
    )
}

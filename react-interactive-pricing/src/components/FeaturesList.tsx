import checkIcon from '/assets/icon-check.svg'

const FeaturesList = () => {
    return (
        <div className='pt-6 md:pt-8 md:flex md:justify-between md:items-center md:pl-12 md:pr-[2.75rem]'>
            <ul className='text-[.8rem] font-semibold text-slate-blue md:flex md:flex-col md:gap-[.45rem]
                items-start'>
                <li className='flex justify-center items-center gap-4'>
                    <img src={checkIcon} alt="check icon" />
                    <span >
                        Unlimited websites
                    </span>
                </li>
                <li className='flex justify-center items-center gap-4'>
                    <img src={checkIcon} alt="check icon" />
                    <span>
                        100% data ownership
                    </span>
                </li>
                <li className='flex justify-center items-center gap-4'>
                    <img src={checkIcon} alt="check icon" />
                    <span>
                        Email reports
                    </span>
                </li>
            </ul>
                <button className='mt-8 bg-midnight-blue text-navy-blue text-[.75rem] py-[.75rem] max-w-[10.62rem] 
                    w-full rounded-[1.25rem] hover:text-white md:mt-0'>
                    Start my trial
                </button>
        </div>
    )
}

export default FeaturesList
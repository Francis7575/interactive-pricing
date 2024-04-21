type ToggleButtonProps = {
    isChecked: boolean,
    setIsChecked: (value: boolean) => void
}

const ToggleButton = ({ isChecked, setIsChecked }: ToggleButtonProps) => {
    return (
        <>
            <label className="inline-flex cursor-pointer items-center gap-[.75rem] 
                    text-slate-blue font-semibold text-[.75rem] ">
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => setIsChecked(!isChecked)}
                    className="peer sr-only"
                />
                <span aria-hidden={true} className="">
                    Monthly billing
                </span>
                <span className="peer relative h-5 w-11 rounded-full bg-LightestGrayishBlue 
                after:absolute after:start-[2px] after:top-[2px] after:h-4 after:w-4 md:w-[2.68rem] after:rounded-full after:border 
                after:border-gray-300 after:bg-white after:transition-all after:content-[''] 
                peer-checked:bg-StrongCyan peer-checked:hover:bg-button-hover peer-checked:after:translate-x-6 peer-checked:after:border-white
                peer-focus:ring-1 rtl:peer-checked:after:-translate-x-full" />
                <span className="">
                    Yearly billing
                </span>
            </label>
        </>
    )
}

export default ToggleButton
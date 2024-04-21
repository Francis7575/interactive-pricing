import { ChangeEvent } from "react";

type InputSliderProps = {
    sliderValue: number,
    setSliderValue: (value: number) => void
}

const InputSlider = ({ sliderValue, setSliderValue }: InputSliderProps) => {

    const handleSlider = (e: ChangeEvent<HTMLInputElement>) => {
        const slider = e.target;
        const value = parseFloat(slider.value); // Convert value to a number
        const min = parseFloat(slider.min); // Convert min to a number
        const max = parseFloat(slider.max); // Convert max to a number
        const percentage = ((value - min) / (max - min)) * 100;
        slider.style.setProperty("--slider-value", percentage + "%");
        setSliderValue(value); // Convert value back to string if needed
    };

    return (
        <div className="md:col-span-2">
            <input
                type="range"
                id="input-slider"
                name="price-range-slider"
                min="0"
                max="4"
                defaultValue={sliderValue}
                onChange={handleSlider}
                className="w-full rounded-[.31rem] cursor-pointer"
            />
        </div>
    )
}

export default InputSlider
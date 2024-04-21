import { useState } from "react";
import InputSlider from "./InputSlider";
import ToggleButton from "./ToggleButton";
import FeaturesList from "./FeaturesList";


const Pricing = () => {
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [sliderValue, setSliderValue] = useState<number>(2);

    const monthlyPrices = [8, 12, 16, 24, 36];
    const yearlyPrices = monthlyPrices.map((price) => price * 12 * 0.75);

    const monthlyPageViews = [10, 50, 100, 500, 1000];
    const yearlyPageViews = monthlyPageViews.map((pageview) => pageview * 12);

    const views = isChecked
        ? yearlyPageViews[sliderValue]
        : monthlyPageViews[sliderValue];

    const price = isChecked
        ? yearlyPrices[sliderValue]
        : monthlyPrices[sliderValue];

    return (
        <main>
            <section className="bg-white mt-16 py-8 rounded-[.5rem] shadow-section max-w-[33.75rem] 
                    w-full mx-auto md:mt-[5.75rem]">
                <div className="border-b border-solid border-baby-blue pb-[2.37rem] px-[1.5rem] md:pr-[3rem] 
                    md:pl-[2.875rem] md:pb-[2.813rem]">
                    <div className="grid gap-[1.5rem] md:grid-cols-2 md:grid-rows-2 items-center md:gap-[.8rem]">
                        <h2 className="text-slate-blue text-[.75rem] md:text-[.875rem] font-extrabold uppercase 
                        tracking-[.107rem] md:row-start-1 md:text-left md:tracking-[.125rem]">
                            {views}k pageviews
                        </h2>
                        <InputSlider sliderValue={sliderValue} setSliderValue={setSliderValue} />

                        <div className="flex justify-center md:justify-end items-center gap-[.62rem] md:gap-[.5rem] 
                            md:row-start-1 
                            md:column-start-2">
                            <span className="text-midnight-blue text-[2rem] md:text-[2.5rem] font-extrabold 
                                tracking-[-0.05rem]">
                                ${price}.00
                            </span>
                            <span
                                className="text-slate-blue text-[.87rem] font-semibold md:text-[1rem]">
                                {isChecked ? '/ year' : '/ month'}
                            </span>
                        </div>
                    </div>

                    <div className="flex justify-center items-center mt-[2.25rem] md:mt-[2rem] md:justify-end 
                        md:mr-[1.1rem]">
                        <ToggleButton isChecked={isChecked} setIsChecked={setIsChecked} />
                        <p className="bg-LightGrayishRed text-MediumGrayishRed ml-[.31rem] md:ml-[.56rem] text-[.625rem]
                            py-[.15rem] px-[.5rem] rounded-[.62rem] text-center">
                            <span className="md:hidden">
                                -25%
                            </span>
                            <span className="hidden md:block font-extrabold">
                                25% discount
                            </span>
                        </p>
                    </div>
                </div>

                <FeaturesList />
            </section>
        </main>
    )
}

export default Pricing
import React, { Children } from "react";
import PropTypes, { shape } from "prop-types";

const shapes = {
    square: "rounded-[0px]",
    circle: "rounded-[50%]",
    round: "rounded-tl-[12px] rounded-bl-[12px]",
};
const variants = {
    gradient: {
        white_gray_50: "bg-gradient-to-r from-[#ffffff] to-[#fbfbfb] text-[#7171c1]",
    },
    fill: {
        black_900_07: "bg-[#00000007] text-[#00000099]",
        indigo_400: "bg-[#7171c1] text-[#ffffff]",
        white: "bg-[#ffffff]",
        m3_sys_light_primary_container: "bg-[#eaddff]",
        red_500: "bg-[#f94d2f] text-[#ffffff]",
        base_default: "bg-[#292b32] shadow-[0_3px_5px_0_#00000033] text-[#ffffff]",
        indigo_300_01: "bg-[#878ec4] text-[#ffffff]",
        blue_gray_50_90: "bg-[#ebecef90]",
    },
    outline: {
        secondary_shade_3: "border-[#a5a9bs] border border-solid text-[#292b32]",
        grey_grey_200: "border-[#9f9f9f] border border-solid text-[#2b2b2b]",
        indigo_400_indigo_200:
        "border-[#fffffff] border-[3.66px] border-solid bg-gradient-to-r from-[#7171c1] to-[#aaada] text-[#ffffff]",
        indigo_A100_blue_gray_500:
        "border-[0.67px] border-solid indigo_A100_blue_gray_500_border bg-gradient-to-b from-[#8585d5] to-[#6767b7] shadow-[insect_0_-2.67px_1px_0_#00000019]",
        grey_grey_100: "border-[#bfbfbf] border border-solid text-[#212121]",
        indigo_A100_33_blue_gray_500_33:
         "border border-solid indigo_A100_33_blue_gray_500_33_border bg-gradient-to-b from-[#8585d566] to-[#6767b766] shadow-[insect_0_-3px_1px_0_#00000019] text-[#ffffff]",
        indigo_400: "border-[#7171c1] border border-solid text-[#7171c1]",
    },
};
const sizes ={
 "5xl": "h-[36px] px-2",
 "9xl": "h-[70px] px-1.5",
 xs: "h-[16px]",
 "4xl": "h-[34px] px-2.5 text-[14px]",
 "8xl": "h-[50px] px-3 text-[13px]",
 sm: "h-[22px] px-0.5",
 md: "h-[24px] px-2.5 text-[12px]",
 "7xl": "h-[44px] px-[34px] text-[14px]", 
 xl: "h-[30px] px-1.5 text-[11px]",
 "3xl": "h-[32px] px-1",
 "2xl": "h-[30px] px-2 text-[14px]",
 "6xl": "h-[38px] px-[34px] text-[14px]", 
 lg: "h-[26px] px01.5",
};

const Button =({
    Children,
    className = "",
    leftIcon,
    rightIcon,
    shape,
    variant = "outline",
    size = "lg",
    color = "blue_gray_50_90",
    ...restProps
}) => {
    return (
        <button 
        className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap ${shape && shapes[shape]} ${size && sizes[size]} ${variant && variants[variant]?.[color]}`}
        {...restProps}
        >
        {!!leftIcon && leftIcon}
        {Children}
        {!!rightIcon && rightIcon}
        </button>
    );
};

Button.PropTypes = {
    className: PropTypes.string,
    Children: PropTypes.node,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    shape: PropTypes.oneOf(["square", "circle", "round"]),
    size: PropTypes.oneOf(["5xl", "9xl", "xs", "4xl", "8xl", "sm", "md", "7xl", "xl", "3xl", "2xl","6xl", "lg"]),
    variant:PropTypes.oneOf(["gradient", "fill", "outline"]),
    color: PropTypes.oneOf([
        "white_gray_50",
        "black_900_07",
        "indingo_400",
        "white",
        "m3_sys_light_primary_container",
        "red_500",
        "base_default",
        "indigo_300_01",
        "blue_gray_50_90",
        "secondary_shade_3",
        "grey_grey_200",
        "indigo_400_indigo_200",
        "indigo_A100_blue_gray_500",
        "grey_grey_100",
        "indingo_A100_33_blue_gray_500_33",
    ]),
};

export { Button };
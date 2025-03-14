import React from "react";
import PropTypes from "prop-types";

const variants ={
    primary: " checked:border-[3px]  ",
};
const sizes = {
    xs: "h-[24px] w-[24px]",
};

const CheckBox = React.forwardRef(
    (
        {
            className = "",
            name = "",
            label = "",
            id = "checkbox_id",
            onChange,
            variant = "primary",
            size ="xs",
            ...restProps
        },
        ref,
    ) => {
        const handleChange = (e) => {
            if (onChange) onChange(e?.target?.checked);
        };

        return(
            <>
            <div className={className + " flex items-center gap-[5px] cursor-pointer"}>
                <input 
                className={` ${(size && sizes[size]) || ""} ${(variant && variants[variant]) || ""}`}
                ref={ref}
                type="checkbox"
                name={name}
                onChange={handleChange}
                id={id}
                {...restProps}
                />
                {!!label && <label htmlFor={id}>{label}</label>}
            </div>
            </>
        );
    },
);

CheckBox.displayName = "CheckBox";

CheckBox.propTypes = {
    className:PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func,
    size: PropTypes.oneOf(["xs"]),
    id: PropTypes.string,
    variant: PropTypes.oneOf(["primary"]),
};
export { CheckBox };
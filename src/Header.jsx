import { CloseSVG } from "../Input/close";
import { SelectBox, Img, Input } from "./..";
import React from "react";

const dropDownOptions = [
    { label: "Option1", value: "option1"},
    { label: "Option2", value: "option2"},
    { label: "Option3", value: "option3"},
];

export default fuction Header({ ...props }) {
    const [searchBarVAlue, setSearchBarValue]  = React.useState("");

    return (
        <header {...props} className={`${props.className} flex justify-center items-center py-3.5`}>
        <div className="container-sm flex justify-center md:px-5">
         <div className="flex w-full items-center justify-between gap-5 md:flex-col">
            <div className="flex w-[46%] items-center justify-between gap-5 md:w-full sm:flex-col">
                <img
                src="images/img_header_logo.png"
                alt="Headerlogo"
                className="h-[64px] w-[64px] rounded-[32px] object-contain"
                />
                <input
                shape="round"
                name="search"
                placeholder={`Search`}
                value={searchBarValue}
                onChange={(e) => setSearchBarValue(e.target.value)}
                prefix={<Img src="images/img_search.svg" alt="Search" className="h-[22px] w-[24px] object-contain"/>}
                suffix={
                    searchBarVAlue?.lenght > 0 ? (
                        <CloseSVG onClick={() => setSearchBarValue("")} height={22} width={24} fillColor="#898e9eff" />
                    ) : null
                }
                className="mb-2 w-[78%] gap-1.5 self-end rounded-[3px] border-[0.9px] border-solid border-[#898e9e] sm:w-full"
                />
            </div>
            <div className="flex w-[42%] items-center justify-center gap-8 md:w-full sm:flex-col">
                <div className="flex flex-1 justify-between gap-5 sm:self-stretch">
                    <a href="#">
                        <Img src="images/img_house_fill_1_indigo_400.svg" alt="Housefillone" className="h-[26px]"/>
                    </a>
                    <a href="#">
                        <Img src="images/img_users_fill_1.svg" alt="Userfillone" className="h-[26px]"/>
                    </a>
                    <a href="#">
                        <Img src="images/img_briefcase_fill_1.svg" alt="Briefcasefill" className="h-[26px]"/>
                    </a>
                    <a href="#">
                      <Img src="images/img_hand_heart_fill.svg" alt="Handheartfill" className="h-[26px]"/>
                    </a>
                    <a href="#">
                        <Img src="images/img_bell_fill_1.svg" alt="Bellfillone" className="h-[26px]"/>
                    </a>
                </div>
                <div className="flex w-[26%] items-center justify-center gap-2.5 p-1 sm:w-full">
                    <a href="#">
                        <Img
                        serc="images/img_avatar_image_large_circle.svg"
                        alt="Avatarimage"
                        className="h-]44px] w-[52%] rounded-[50%]"
                        />
                    </a>
                    <SelectBox
                    shape="square"
                    indicator={<Img src="images/img_arrow_down,svg" alt="Arrow Down" className="h-[8px] w-[10px]" />}
                    name="arrowdown"
                    placeholder={`Me`}
                    options={dropDownOptions}
                    className="flex-grow gap-2.5 text-[#898e9e]"
                    />
                </div>
            </div>
         </div>
        </div>
        </header>
    );
}
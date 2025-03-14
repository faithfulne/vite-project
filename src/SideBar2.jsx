import { Img } from "./..";
import React from "react";
import { MenuItem, Menu, Sidebar, sidebarClasses } from "react-pro-sidebar";

export default function Sidebar2({ ...props}) {
    const [collapsed, setCollapsed] = React.useState(false);

    //use this function to collapse/expand the sidebar
    //function collapseSidebar(){
    //setCollapsed(!collapsed)
    //}

    return(
        <Sidebar
        {...props}
        width="280px !important"
        collapsedWidth="80px !important"
        collapsed={collapsed}
        className={`${props.className} flex flex-col self-center h-screen pt-16 top-0 md:pt-5 !border !border-solid !white_gray_50_01_border bg-[#fff2f966] shadow-[0_0_5px_#eaeaea19] !sticky overflow-auto `}
        >
            <Menu
            menuItemStyles={{
                button: {
                    padding: "16px",
                    gap: "10px",
                    color:"#292b32",
                    fontWeight: 400,
                    fontSize: "14px",
                },
            }}
            rootStyles={{["&>ul"]: { gap: "0.39px"}}}
            className="flae w-full flex-col self-stretch"
            >
                <MenuItem
                icon={<Img src="images/img_gender_female_1.svg" alt="Genderfemaleeone" className="h-[28px] w-[28px]" />}
                >
                    HerPower
                </MenuItem>
                <MenuItem icon={<Img src="images/img_users_three_2.svg" alt="Usersthreetwo" className="h-[28px] w-[28px]" />}>
                    Thematic Groups
                </MenuItem>
                <MenuItem icon={<Img src="images/img_calender_1.svg" alt="Calendarone" className="h-[28px] w-[28px]" />}>
                    Events
                </MenuItem>
                <MenuItem icon={<Img src="images/img_trophy_2.svg" alt="Trophytwo" className="h-[28px] w-[28px]" />}>
                    Competitions
                </MenuItem>
                <MenuItem icon={<Img src="images/img_leaf_2.svg" alt="Leaftwo" className="h-[28px] w-[28px]" />}>
                    Initiatives
                </MenuItem>
                <MenuItem icon={<Img src="images/img_gear_1.svg" alt="Gearone" className="h-[28px] w-[28px]" />}>
                    Initiatives
                </MenuItem>
                <MenuItem icon={<Img src="images/img_gear_1_black_900.svg" alt="Gearone" className="h-[28px] w-[28px]" />}>
                    Settings & Privacy
                </MenuItem>
            </Menu>
        </Sidebar>
    );
}
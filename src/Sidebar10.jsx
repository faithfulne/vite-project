import { Img } from "./..";
import React from 'react';
import { MenuItem, Menu, Sidebar, sidebarClasses } from "react-pro-sidebar";

export default function Sidebar10 ({ ...props }) {
 const [collapsed, setCollapsed] = React.useState(false);
    
 //use this function to collapse/expand the sidebar
 //function collapseSidebar() {
 //  setCollapsed(!collapsed)
 //}

 return (
    <Sidebar
     {...props}
     width="280px !important"
     collapsedWidth ="80px !important"
     collapsed={collapsed}
     className={`${props.className} flex flex-col h-screen pt-[50px] top-0 md:pt-5 border-solid gray_50_33_white_A700_33_border bg-[#fff2f966] !sticky overflow-auto`}
    >
        <Menu
        menuItemStyles={{
            button: {
                padding:"12px",
                gap: "10px",
                color:"#292b32",
                fontWeight: 400,
                fontSize: "14px",
                [`&:hover, &.ps-active`]: { color: "#ffffff", backgroundColor: "aaaada !important"},
            },
        }}
        rootStyles={{ ["&>ul"]: { gap: "10px" } }}
        className="flex w-full flex-col self-stretch"
        >
            <MenuItem
            icon={<Img src="images/img_gender_female_1_white.svg" alt="Genderfemaleone" className="h-[28px] w-[28px]" />}
            >
              HerPower
            </MenuItem>
            <MenuItem icon={<Img src="images/img_users_three_2.svg" alt="Usersthreetwo" className="h-[28px] w-[28px]" />}>
              Thematic Groups
            </MenuItem>
            <MenuItem icon={<Img src="images/img_calendar_1.svg" alt="Calendarone" className="h-[28px] w-[28px]" />}>
              Events
            </MenuItem>
            <MenuItem icon={<Img src="images/img_trophy_2.svg" alt="Trophytwo" className="h-[28px] w-[28px]" />}>
              Competitions
            </MenuItem>
            <MenuItem icon={<Img src="images/img_leaf_2.svg" alt="Leaftwo" className="h-[28px] w-[28px]" />}>
              Initiatives
            </MenuItem>
            <MenuItem icon={<Img src="images/img_gear_1.svg" alt="Gearone" className="h-[28px] w-[28px]" />}>
              EmpowerSphere
            </MenuItem>
            <MenuItem icon={<Img src="images/img_gear_1_black_900.svg" alt="Usersthreetwo" className="h-[28px] w-[28px]" />}>
              Settings & privacy
            </MenuItem>
        </Menu>
    </Sidebar>
 );
}
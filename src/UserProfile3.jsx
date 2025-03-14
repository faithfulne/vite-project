import { Img, Text } from "./..";
import React from "react";

export default function UserProfile3({
    userImage = "images/img_shape.png",
    userName = "Jackie Jonnes",
    userTime = "30 mins",
    ...props
}) {
    return (
        <div {...props} className={`${props.className} bg-[#ffffff]`}>
            <div className="flex w-full items-center">
                <div className="flex flex-1 items-center justify-center gap-[18px] px-[22px] sm:px-5">
                    <Img src={userImage} alt="shape" className="h-[40px] rounded-[20px] object-cover" />
                    <div className="flex flex-1 flex-col items-start">
                        <Text as="p" className="text-[14px] font-normal">
                            {userName}
                        </Text>
                        <Text as="p" className="text-[14px] font-normal !text-[#636878]">
                            {userTime}
                        </Text>
                    </div>
                </div>
                <div className="flex w-[8%] flex-col items-start bg-[#ffffff] py-[26%] sm:py-5">
                    <Img src="images/img_frame_2087329241.svg" alt="Image" className="h-[3px]"/>
                </div>
            </div>
        </div>
    )
}
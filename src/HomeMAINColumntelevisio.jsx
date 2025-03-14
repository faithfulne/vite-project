import { Input, Img, Heading, Text } from "./..";
import React from "react";

export default function HomeMAINColumntelevisio({
    cheersCounter ="3 Cheers",
    feedbackCounter = "4 Feedback",
    spreadCounter = "2 Spread",
    linethirtysix,
    televisionOne ="images/img_television.svg",
    cheers = "Cheers",
    userThree,
    feedback,
    sendThree,
    spread,
    likebutton,
    copylink,
    saveOne,
    enterFeedback,
    ...props
}) {
    return (
        <div {...props} className={`${props.className} flex flex-col items-start`}>
            <div className="flex w-[76%] flex-col gap-2 bg-[#ffffff] p-1 sm:gap-2">
               <div>
                <div className="flex flex-col gap-1 sm:gap-1">
                    <div className="ml-3.5 mr-[26px] flex items-center justify-between gap-5 sm:mx-0">
                        <div className="flex flex-1 justify-center">
                            <div className="flex items-center">
                                <Img src="images/img_settings_indigo_400.svg" alt="Settings" className="h-[22px]" />
                                <Text size="texts" as="p" className="self-end text-[11.92px] font-normal !text-[#757575]">
                                    {cheersCounter}
                                </Text>
                            </div>
                            <div className="flex items-center">
                                <Img src="images/img_like_button.svg" alt="Likebutton" className="relative z-[1] h-[22px]" />
                                <Text size="texts" as="p" className=" text-[11.92px] font-normal !text-[#757575]">
                                    {feedbackCounter}
                                </Text>
                            </div>
                            </div>
                            <div className="flex items-center">
                                <Img src="images/img_send.svg" alt="Send" className="h-[22px]" />
                                <Text size="texts" as="p" className="self-end text-[11.92px] font-normal !text-[#757575]">
                                    {spreadCounter}
                                </Text>
                            </div>
                        </div>
                        {!!linethirtysix ? <div className="h-px bg-[#e5e5e5]" /> : null}
                    </div>
                </div>
                <div className="ml-3.5 mr-7 flex justify-center gap-1.5 sm:mx-0">
                    <div className="flex items-start">
                        <Img src={televisionOne} alt="Television" className="h-[26px] self-center"/>
                        <Heading size="headingxs" as="p" className="mt-1 text-[12.96px] font-semibold !text-[#757575]">
                            {cheers}
                        </Heading>
                    </div>
                    <div className="flex flex-1 items-center justify-center gap-0.5 px-[18px]">
                        {!!UserThree ? <Img src={userThree} alt="User" className="h-[26px]" /> : null}
                        {!!feedback ? (
                                       <Heading size="headingxs" as="p" className=" text-[12.96px] font-semibold !text-[#757575]">
                                       {feedback}
                                   </Heading>
                        ) : null}
                    </div>
                    <div className="flex flex-1 items-center px-[18px]">
                        {!!sendThree ? <Img src={sendThree} alt="Send" className="h-[26px]" /> : null}
                        {!!spread ? (
                                       <Heading size="headings" as="p" className="self-end text-[13.01px] font-semibold !text-[#757575]">
                                       {spread}
                                   </Heading>
                        ) : null}
                    </div>
                    <div className="flex  items-center gap-0.5 px-1.5">
                        {!!likebutton ? <Img src={likebutton} alt="Likebutton" className="h-[26px]" /> : null}
                        {!!copylink ? (
                                       <Heading size="headingxs" as="p" className="self-end text-[12.96px] font-semibold !text-[#757575]">
                                       {copylink}
                                   </Heading>
                        ) : null}
                    </div>
               </div>
            </div>
            <div className="flex flex-col items-start self-stretch">
                <div className="flex w-[76%] justify-end bg-[#ffffff] px-11 md:px-5 sm:w-full">
                    {!!saveOne ? <Img src={saveOne} alt="Save" className="mt-[18px] h-[20px]" /> : null}
                </div>
                {!!enterFeedback ? (
                    <Input
                    color="gay_50_04"
                    size="xl"
                    name="enter_feedback"
                    placeholder={`Enter feedback`}
                    className="relative mb-2.5 ml-[26px] mt-[-34px] w-[64%] rounded-[10px] border-[0.5px] border-solid border-[#7171c1] px-3 sm:ml-0"
                    />
                ) : null}
            </div>
        </div>
    );
}

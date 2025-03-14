import { Helmet } from "react-helmet";
import { Img, Text, Button, Input } from "../../components";
import Header from "../../components/Header";
import HomeMAINColumntelevisio from "../../components/HomeMAINColumntelevisio";
import SideBar2 from "../../components/SideBar2";
import UserProfile3 from "../../components/UserProfile3";
import React from "react";

export default function HomeMAINPage(){
    return ( 
        <>
        <Helmet>
            <title></title>
            <meta name="description" content="Web site created using create-react-app"/>
        </Helmet>
        <div className="relative h-;1546px] w-full overflow-x-scroll bg-[#ffffff] md:h-auto">
            <Img src="images/img_group_15.png" alt="Image" className="mt-14 h-[832px] w-full flex-1 object-cover" />
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max flex-1">
                <div className="flex flex-col gap-1">
                    <div>
                        <div className="h-[796px] bg-(/public/images/img_group_2267.png)] bg-cover bg-no-repeat md:h-auto">
                          <div className="flex flex-col gap-5">
                            <Header className="bg-[#ffffff] shadow-[0_4px_0_#0000000c]" />
                            <div className="ml-[90px] mr-24 flex items-start gap-6 md:mx-0" >
                                <SideBar2 />
                                <div className="flex flex-1 flex-col gap-[18px]">
                                    <div className="flex items-start justify-between gap-5 rounded-lg border border-solid border-[#ebecef] bg-[#ffffff] px-3 sm:flex-col">
                                        <div className="flex flex-col rounded-[20px] bg-[#fa53f7] sm:px-5">
                                            <Img
                                              src="images/img_58_1.png"
                                              alt="Image"
                                              className="h-[40px] rounded-tl-[20px] rounded-tr-[20px] object-cover"
                                              />
                                        </div>
                                        <div className="flex flex-1 flex-col gap-3 self-center sm:self-stretch">
                                            <Input
                                              color="white"
                                              size="xl"
                                              shape="round"
                                              name="placeholder"
                                              placeholder={`What's going on...`}
                                              className="rounded border border-solid border-[#ebecef] px-3 tracking-[-0.41px]"
                                              />
                                              <div className="flex items-center justify-center">
                                                <div className="flex flex-1 gap-2">
                                                    <Img src="images/img_user.svg" alt="User" className="h-]32px]" />
                                                    <Img src="images/img_clock.svg" alt="Clock" className="h-]32px]" />
                                                    <Img src="images/img_attach.svg" alt="Attach" className="h-]32px]" />
                                                </div>
                                                <Button
                                                  className="post_border min-w-[70px] rounded-[14px] bg-gradient-to-b from-[#8585d5] to-[#6767b7] px-[19px] text-[#ffffff] shadow-[insect_0_-4px_1px_0_#00000019]"
                                                  size="2xl"
                                                  variant={null}
                                                  >
                                                    Post
                                                  </Button>
                                              </div>
                                            </div>    
                                    </div>
                                    <div className="rounded-lg border border-solid border-[#ebecef] bg-[#ffffff]">
                                        <UserProfile3 />
                                    <div className="flex bg-[#ffffff] p-2">
                                        <Text
                                        size="body_text"
                                        as="p"
                                        className="w-[96%] text-[14px] font-normal leading-[140%] tracking-[-0.41px]"
                                        >
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, hic et minus, reprehenderit odio omnis tempora deleniti eveniet blanditiis perferendis itaqu
                                            e, eaque nesciunt dolorum ipsum 
                                            id tenetur reiciendis. Ut, pariatur.{" "}
                                        </Text>
                                    </div>
                                    <div className="flex bg-[#ffffff] p-2">
                                        <Img
                                         src="images/img_image.png"
                                         alt="Image"
                                         className="h-[328px] w-[96%] rounded-lg object-contain"
                                         />
                                    </div>
                                    <div className="bg-[#ffffff] px-4">
                                        <div className="mb-1.5 h-px bg-[#ebecef]" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex w-[22%] flex-col items-end">
                                <div className="flex flex-col gap-1.5 self-stretch rounded-lg bg-[#ffffff]">
                                    <div className="flex flex-col items-start gap-3.5">
                                        <div className="h-[0.52px] w-full self-stretch bg-[#cbd5e1] ">
                                        <Text
                                        size="body_text"
                                        as="p"
                                        className="ml-[18px] text-[14px] font-normal tracking-[-0.41px] !text-[#000000] md:ml-0"
                                        >
                                            Advertising
                                        </Text>
                                    </div>
                                </div>
                                <Img
                                src="images/img_rectangle_146.png"
                                alt="Image"
                                className="mx-1 h-[240px] rounded-[12px] object-cover md:mx-0"
                                />
                            </div>
                            <Button
                            className="iconbutton_border mr-2 mt-4 w-[42px] !rounded-bl-[12px] !rounded-tl-[12px] bg-gradient-to-b from-[#8585d5] to-[#6767b7] px-1.5 shadow-[inset_0_-2.67px_1px_0_#00000019] md:mr-0"
                            shape="round"
                            variant={null}
                            >
                                <Img src="images/img_component_43_message_white.svg" />
                            </Button>
                            <Img
                            src="images/img_refresh.png"
                            alt="Refresh"
                            className="mr-2 mt-[62px] h-[26px] object-cover md:mr-0"
                            />
                          </div>
                        </div>
                    </div>
                </div>
                <div className="container-sm relative mt-[-52px] flex flex-col items-center px-14 md:px-5">
                    <HomeMAINColumntelevisio className="w-[62%] md:w-full" />
                </div>
            </div>
            <div className="container-sm flex flex-col items-end pl-14 pr-[228px] md:px-5">
                <UserProfile3 className="flex w-[70%] justify-center md:w-full" />
                 <div className="flex w-[70%|] justify-center bg-[#ffffff] p-2 md:w-full">
                    <Text
                    size="body_text"
                    as="p"
                    className="w-[96|%] text-[14px] font-normal leading-[140%] tracking-[-0.41px]"
                    >
                        <span className="text-[#292b32]">
                            Consectetur adipisicingod
                            odio vari
                        </span>
                        <span className="text-[#1054de]">...Read more</span>
                    </Text>
                 </div>
                 <div className="flex w-[70%] flex-col gap-1 bg-[#ffffff] p-2 md:w-full">
                    <Img
                    src="images.img_top.png"
                    alt="Top"
                    className="h-[162px] rounded-tl-lg rounded-tr-lg object-cover"
                    />
                     <div className="flex gap-1 sm:flex-col">
                    <Img
                    src="images.img_bottom_left.png"
                    alt="Bottomleft"
                    className="h-[162px] rounded-bl-lg object-contain sm:w-full"
                    />
                     <Img
                    src="images.img_bottom_right.png"
                    alt="Bottomright"
                    className="h-[162px] rounded-br-lg object-contain sm:w-full"
                    />
                 </div>
            </div>
            <HomeMAINColumntelevisio className="mx-1.5 w-[76%] md:mx-0 md:w-full" />
        </div>
        </div>
        </div>
        </div>
        </>
    );
}
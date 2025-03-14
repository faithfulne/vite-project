import { Helmet } from "react-helmet";
import { Text, Heading } from "../../components";
import Header from "../../components/Header";
import Sidebar10 from "../../components/Sidebar10";
import React from "react";

export default function TcPage(){
    return (
         <>
          <Helmet>
             <title></title>
             <meta name= "description" content="Web site created using create-react-app" />
          </Helmet>
          <div className="w-full overflow-x-scroll bg-[#ffffff]">
            <div>
                <Header className="relative z-[1] bg-[#ffffff] shadow-[0_4px_4px_0_#0000000c]" />
                <div className="relative mt-[38px] h-[776px] bg-[url(/public/images/img_group_2934.png)] bg-cover bg-no-repeat md:h-auto">
                  <div className="flex h-[776px] items-end justify-centerbg-[url(/public/images/img_group_2935.png)] bg-cover bg-no-repeat px-14 md:h-auto md:px-5">
                    <div className="mt-14 flex w-[92%] items-start justify-center gap-6 md:w-full">
                        <Sidebar10 />
                        <div className="flex-1 self-center">
                            <div className="flex flex-col items-center gap-2.5 bg-[#ffffff]">
                                <a href="#" className="bg-[#8787cb] sm:pr-5">
                                    <Heading
                                    size="header_16px_text"
                                    as="h1"
                                    className="py-[18px] pl-5 pr-[34px] text-[16px] font-medium tracking-[-0.50px] !text-[#ffffff]"
                                    >
                                        Terms and Conditions
                                    </Heading>
                                </a>
                                <Text
                                size="body_text"
                                as="p"
                                className="mb-[310px] w-[94%] text-[14px] font-normal leaing-[140%] tracking-[-0.41px] !text-[#3a3a3a] md:w-full md:px-5"
                                >
                                    <>
                                    Last updated March 11,2025
                                    <br />
                                    AGREEMENT TO OUR LEGAL TERMS
                                    <br />
                                     We are Better Women Better World, Inc (&qupt;Company,&quot; &quot;we,&quot; &quot;us,&quot; 
                                     &quot;our&quot;) , a company registered in Delaware, Unisted States at Delaware 651 N Broad St,
                                     suite 201 , Middletown , De 19709 . <br />
                                     We operate the mobile application Better Women Better World (the &quot;App&quot;), as well as 
                                     any other related products and services that refer or link to these legal terms (the &quot;Legal
                                     Terms&quot; ) (collectively, the &quot;Services&quot;).
                                     <br />
                                     Better Women Better World is a resolute plateform that unites women and girls globally, fostering
                                     their empowerment, celebrating their diversity, and igniting their personal and professional 
                                     advancement. Rooted in providing a secure haven with a steadfast stance against bullying,
                                     harrassment, and discrimination, it stands as a nurturing environment dedicated to their growth
                                     and well-being.
                                     < br />
                                     you can contact us by phone +38970314030, email at info@betterwomenbetterworld.com , or by 
                                     mail to Delaware 651 N Broad St, suite 201, Middletown , De 19709 , United States .<br />
                                     These Legal Terms constitute a legally binding agreement made between you, whether personally or 
                                     on behalf of an entity ( &quot;you&quot;), and Better Women Better World, Inc, concerning your 
                                     access to and use of the Services. You agree that by accessing the Services, you have read, 
                                     understood, and agreed to be bound by all of these Legal Terms. IF YOU DO NOT AGREE WITH ALL OF
                                     THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST
                                     DISCONTINUE USE IMMEDIATELY
                                    </>
                                </Text>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
         </>
    )
}
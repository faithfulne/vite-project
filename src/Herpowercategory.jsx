import { Helmet } from "react-helmet";
import { Heading } from "../../components";
import CommunityBanner from "../../components/CommunityBanner";
import Header from "../../components/Header";
import Sidebar10 from "../../components/Sidebar10";
import React, {Suspense} from "react";

const data = [
    {
        communityImage: "images/img_unsplash_jjuyje_oebm.png",
        communityName: "Community Name",
        communityLifestyle: "Lifestyle",
        memberCount: "123 Members",
        descriptionText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet arcu neque...",
    },
    {
        communityImage: "images/img_rectangle_43_174x232.png",
        communityName: "Community Name",
        communityLifestyle: "Lifestyle",
        memberCount: "123 Members",
        descriptionText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet arcu neque...",
    },
    {
        communityImage: "images/img_rectangle_43_1.png",
        communityName: "Community Name",
        communityLifestyle: "Lifestyle",
        memberCount: "123 Members",
        descriptionText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet arcu neque...",
    },
];

export default function HerpowercategoryPage() {
    return (
        <>
        <Helmet>
          <title>Herpower Category</title>
          <meta name="description" content="Web site created using create-react-app" />
        </Helmet>
        <div className="w-full overflow-x-scroll bg-[#ffffff]" >
          <div>
            <Header className="relative z-[1] bg-[#ffffff] shadow-[0_4px_4px_0_#0000000c]" />
             <div className="relative mt-[-38px] h-[776px] bg-[url(/public/images/img_group_2934.png)] bg-cover bg-no-repeat md:h-auto">
              <div className="flex h-[776px] items-end justify-center bg-[url(/publi/images/img_group_2935.png)] bg-cover bg-no-repeat px-14 md:h-auto md:px-5">
               <div className="mt-[58px] flex w-[93%] items-start justify-center gap-[18px] md:w-full">
                <Sidebar10 className="self-center" />
                 <div className="relative h-[560px] flex-1">
                  <div className="absolute bottom-0 left-0 ring-0 top-0 my-auto ml-auto mr-3.5 h-max flex-1 bg-[#ebecee66] px-[22px] pz-[26px] md:mr-0 sm:p-5">
                    <div className="md=[22px] flex flex-col items-start gap-4">
                    <Heading 
                    size="header_16px_text"
                    as="h1"
                    className="ml-1 text-[16px] font-medium tracking-[-0.50px] md:ml-0"
                    >
                    Sports
                    </Heading>
                    <div className="flex gap-3 self-stretch md:flex-col">
                      <Suspense fallback={<div>Loading feed...</div>}>
                      {data.map((d,index) => (
                        <CommunityBanner
                        {...d}
                        key={"herpower" + index}
                        className="w-[32%] justify-center md:w-full"
                        />
                      ))}
                      </Suspense>
                      </div>
                     </div>
                     </div>
                     <CommunityBanner
                     communityImage="images/img_unsplash_qax5y1x_1ko.png"
                     className="absolute bottom-[0.07px] right-[5%] m-auto w-[30%]"
                     /> 
                     <CommunityBanner
                     communityImage="images/img_unsplash_qax5y1x_uzmr0wwfhna.png"
                     className="absolute bottom-[0.07px] left-[23.55px] m-auto w-[30%]"
                     /> 
                     <CommunityBanner
                     communityImage="images/img_unsplash_qax5y1x_jy9mxva15w0.png"
                     className="absolute bottom-[0.07px] left-0 right-0 m-auto w-[30%]"
                     /> 
           </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </>
    );
}

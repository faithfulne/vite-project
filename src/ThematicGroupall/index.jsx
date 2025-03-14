import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import Sidebar5 from "../../components/Sidebar5";
import ThematicgroupallListsettings from "./ThematicgroupallListsettings";
import React from "react";

export default function ThematicgroupallPage(){
    return (
        <>
        <Helmet>
            <title>       </title>
            <meta name="description" content="Web site created using create-react=app" />
        </Helmet>
        <div className="h-[832px] w-full overflow-x-scroll bg-[#ffffff] bg-[url(/public/images/img_group_15.png)] bg-cover bg-no-repeat md:h-auto">
          <div className="h-[832px] bg-[url(/public/images/img_component_69.png)] bg-cover bg-no-repeat md:h-auto">
             <div className="flex flex-col gap-5">
                <Header className="bg-[#ffffff] shadow-[0_4px_4px_0_#0000000c]" />
                <div className="mx-24 flex items-start gap-5 md:mx-0">
                    <Sidebar5 className="gray_50_33_white_A700_33_border border-solid" />
                    <ThematicgroupallListsettings />
                </div>
             </div>
          </div>
        </div>
        </>
    );
}
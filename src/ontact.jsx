import { Helmet } from "react-helment";
import Header from "../../components/Header";
import Slidebar7 from "../../components/Slidebar7";
import React from "react";

export default function ContactPage() {
    return(
        <>
        <Helmet>
            <title></title>
            <meta name="description" content="Web site created using create-react-app" />
        </Helmet>
        <div className="w-full overflow-x-scroll bg-[#ffffff]">
            <Header className="bg-[#ffffff] sha-[0_4px_0_#0000000c]"/>
            <Slidebar7 />
        </div>
        </>
    );
}
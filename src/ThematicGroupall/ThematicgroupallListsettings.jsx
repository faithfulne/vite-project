import SettingsAndCreateGroup from "../../components/SettingsAndCreateGroup";
import React, {Suspense } from 'react';

const data =[
    {subtitleText: "Create Thematic Group", createButtonText: "create"},
    {subtitleText: "Create Thematic Group", createButtonText: "create"},
    {subtitleText: "Create Thematic Group", createButtonText: "create"},
    {subtitleText: "Create Thematic Group", createButtonText: "create"},
    {subtitleText: "Create Thematic Group", createButtonText: "create"},
    {subtitleText: "Create Thematic Group", createButtonText: "create"},
];

export default function ThematicgroupallListsettings() {
    return (
        <div className="ml-5 flex flex-1 flex-col gap-1">
            <Suspense fallback={<div>Loading feed...</div>}>
            {data.map((d, index) => (
                <SettingsAndCreateGroup {...d} key={"listsettings" + index} />
            ))}
            </Suspense>
        </div>
    );
}

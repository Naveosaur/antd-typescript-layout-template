import { CaretRightFilled, CloseOutlined, PlusSquareOutlined } from "@ant-design/icons";
import { Divider } from "antd";
import React from "react";

const dragItems = [
  {
    id: 1,
    name: "Item 1",
  },
  {
    id: 2,
    name: "Item 2",
  },
  {
    id: 3,
    name: "Item 3",
  },
  {
    id: 4,
    name: "Item 4",
  },
  {
    id: 5,
    name: "Item 5",
  },
];

const ProjectSection = () => {
  return (
    <>
      <p className="font-semibold text-xl">Section</p>
      <Divider className="" />
      <div className="flex flex-row">
        {/* Drag */}
        <div className="w-[10vw] flex min-h-screen items-center flex-col gap-5 border-r mr-5">
          <p className="">Drag</p>
          <div className="flex flex-col gap-5">
            {dragItems.map((item) => (
              <div key={item.id} className="flex items-center justify-center h-[50px] w-[150px] border border-primary rounded-xl">
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Drop */}
        <div className="flex flex-row gap-10">
          {/* Source */}
          <div className="w-[35vw] border-2 rounded-lg">
            {/* Header */}
            <div className="flex px-2 items-center h-9 bg-shade2 border-2 rounded-t-md">
              <p className="font-semibold text-[18px] text-white">Source</p>
            </div>
            {/* Body */}
            {/* Section Data Bank */}
            <div className="px-2 mt-5">
              <p className="font-semibold text-[16px]">Section Data Bank</p>
              <div className="flex flex-row gap-5 mt-5">
                <div className="border-2 h-[40px] w-[100vw] px-2 rounded-md flex justify-between">
                  <div className="flex flex-row items-center gap-2">
                    <CaretRightFilled />
                    <p className="text-[16px]">Field 1</p>
                  </div>
                  <CloseOutlined className="!text-red-500 text-[18px]" />
                </div>
              </div>
            </div>

            {/* Unique Field */}
            {/* Section Data Bank */}
            <div className="px-2 mt-5">
              <div className="flex flex-row justify-between">
                <p className="font-semibold text-[16px]">Unique Field :</p>
                <PlusSquareOutlined className="!text-primary text-[22px]" />
              </div>
              <div className="flex flex-row gap-5 mt-5">
                <div className="border-2 h-[40px] w-[100vw] px-2 rounded-md flex justify-between">
                  <div className="flex flex-row items-center gap-2">
                    <CaretRightFilled />
                    <p className="text-[16px]">Field 1</p>
                  </div>
                  <CloseOutlined className="!text-red-500 text-[18px]" />
                </div>
              </div>
            </div>
          </div>

          {/* Target */}
          <div className="w-[35vw] border-2 rounded-lg">
            <div className="flex px-2 items-center h-9 bg-shade2 rounded-t-md">
              <p className="font-semibold text-[16px] text-white">Target</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectSection;

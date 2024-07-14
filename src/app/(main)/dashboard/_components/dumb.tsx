"use client";

import http from "@/utils/AxiosInstance";
import { useEffect } from "react";

const DumbComponent = () => {
  const getData = async () => {
    console.log("get Data Running");
    try {
      const res = await http.get("steps?hospital_id=6");
      console.log("Get Data RUnning");
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
    console.log("useEffect Running");
  }, []);

  return <div>dumb</div>;
};

export default DumbComponent;

import React from "react";
import VerticalUserProfile from "./VerticalUserProfile";
import User from "../../assets/user.png";
import Background from "../../assets/background.png";
import { TimeTable } from "./TimeTable";
import Webinar from "./Webinar";
import P from "./P";
import H1 from "./H1";
const Rightbar = () => {
  return (
    <>
      <div className="w-full h-screen relative">
        <img src={Background} alt="background" className="w-screen " />

        <div className="flex flex-col md:flex-row gap-x-8 items-center">
          <VerticalUserProfile
            img={User}
            name={"Prabhleen Kaur"}
            email={"prabhleen@gmail.com"}
            number={"989998989898"}
            location={"Delhi, India"}
          />

          <div>
            <div className="h-[89px] flex-col justify-start items-start mt-[40px]">
              <P>Monday 26, September</P>
              <H1 name="Prabhleen! " />
            </div>
            <TimeTable />
          </div>

          <Webinar />
        </div>

        {/* <VerticalUserProfile
          img={User}
          name={"Prabhleen Kaur"}
          email={"prabhleen@gmail.com"}
          number={"989998989898"}
          location={"Delhi, India"}
        />

        <TimeTable /> */}
      </div>
    </>
  );
};

export default Rightbar;

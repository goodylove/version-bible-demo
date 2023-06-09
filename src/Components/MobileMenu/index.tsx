import React from "react"
import { Svg } from "../Svg/svg"

const MobileMenu = () => {
  return (
    <section className="w-full h-4 flex justify-center  items-center  px-5  py-10 bg-white  shadow-md md:hidden fixed bottom-0 ">
      <div className="flex justify-between w-full text-[13px]">
        <span className="flex flex-col justify-center items-center">
          {Svg.home()}Home
        </span>

        <span className="flex flex-col justify-center items-center">
          {Svg.bible()}
          Bible
        </span>
        <span className="flex flex-col justify-center items-center">
          {Svg.plans()}
          Plans
        </span>

        <span className="flex flex-col justify-center items-center">
          {Svg.video()}
          videos
        </span>
      </div>
    </section>
  )
}

export default MobileMenu

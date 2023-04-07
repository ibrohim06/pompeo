import React from "react";
import s from "./style.module.scss";
import Text from "../../componets/Text/text";
import Img from "../../componets/image/img";
import Link from "../../componets/Link/link";

export default function Category() {
  return (
    <>
      <div className={s.categ}>
        <div className={s.categ_title}>
          <div className={s.categ_text}>
            <Text
              text={"Product Categories"}
              fsize={14}
              fweight={700}
              color={"#D77474"}
            />
            <Img src={"/assets/&.png"} />
            <Text
              text={`Porcelain  Pottery`}
              fsize={40}
              fweight={700}
              color={"#000000"}
            />
          </div>
        </div>
        <div className={s.categ_img}>
          <Img hover src={"/assets/first.svg"} />
          <Img hover src={"/assets/second.svg"} />
          <Img hover src={"/assets/third.svg"} />
        </div>
        <div className={s.categ_flex}>
          <div className={s.categ_info}>
            <Text
              text={"Hand Grafted Pottery since 1990"}
              fsize={40}
              fweight={700}
              color={"black"}
              align={"start"}
              // width={10}
            />
            <Text
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus posuere."
              }
              color={"#6C6C6C"}
              fweight={400}
              fsize={14}
              width={80}
              align={"justify"}
            />
          </div>
          <div className={s.categ_info}>
            <Text
              text={"We Provide Premium Pottery Produts"}
              fsize={40}
              fweight={700}
              // width={70}
              color={"black"}
              align={"start"}
            />
            <Text
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus posuere."
              }
              color={"#6C6C6C"}
              fweight={400}
              fsize={14}
              width={80}
              align={"justify"}
            />
          </div>
        </div>
      </div>
      <div className={s.info}>
        <div className={s.info_flex}>
          <div className={s.info_img}>
            <Img src={"/assets/vase-1.svg"} />
            {/* <Img src={'/assets/vase-2.svg'}/> */}
          </div>
          <div className={s.info_text}>
            <Text
              text={"Gold & Black Pottery"}
              fweight={900}
              fsize={24}
              color={"#000000"}
              align={"start"}
            />
            <Text
              text={
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore dolore aua. Ut enim ad minim veniam, quis nostrud exercitationulco laboris nisi ut aliquip ex ea commodo consequatuisaute."
              }
              color={"#6C6C6C"}
              fweight={400}
              fsize={18}
              align={"justify"}
            />
            <Link
              href={"#!"}
              text={"View Details"}
              fweight={700}
              fsize={14}
              color={"#000000"}
              align={"start"}
            />
          </div>
        </div>
        <div className={s.info_flex}>
          <div className={s.info_text}>
            <Text
              text={"Orange Ceramic"}
              fweight={900}
              fsize={24}
              color={"#000000"}
              align={"start"}
            />
            <Text
              text={
                "Pri cu dico labores officiis, odio principes complectitur ad sea. Sea id doctus forensibus, nec lorem vocent aliquam eu. Aliquid definitiones id cum, ad meliore perpetua referrentur sed. Quas suscipit ad mea verear vivendo tincidunt."
              }
              color={"#6C6C6C"}
              fweight={400}
              fsize={18}
              align={"justify"}
            />
            <Link
              href={"#!"}
              text={"View Details"}
              fweight={700}
              fsize={14}
              color={"#000000"}
              align={"start"}
            />
          </div>
          <div className={s.info_img}>
            <Img src={"/assets/vase-2.svg"} />
          </div>
        </div>
      </div>
    </>
  );
}

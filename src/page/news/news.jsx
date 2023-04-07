import React from "react";
import s from "./style.module.scss";
import Text from "../../componets/Text/text";
import Img from "../../componets/image/img";
import Button from "../../componets/button/button";

export default function News() {
  return (
    <div className={s.new}>
      <div className={s.new_title}>
        <div className={s.new_img}>
          <Img src={"/assets/news.png"} />
        </div>
        <Text
          text={"Latest news"}
          color={"#D77474"}
          fsize={14}
          fweight={400}
          fontFamily={"Poppins"}
        />
        <div className={s.new_info}>
          <Text
            text={"Latest news"}
            fsize={40}
            fweight={400}
            fontFamily={"Poppins"}
            color={"#000000"}
          />
          <div className={s.new_img}>
            <Img src={"/assets/&.png"} width={40} />
          </div>
          <Text
            text={"New updates"}
            fsize={40}
            fweight={400}
            fontFamily={"Poppins"}
            color={"#000000"}
          />
        </div>
      </div>
      <div className={s.new_input}>
        <form>
          <input type="email" placeholder="Enter your email" />
          <Button
            text={"SUBSCRIBE"}
            width={15}
            height={10}
            color={"white"}
            bg={"#000000"}
            fsize={14}
            fweight={400}
            fontFamily={"Lato"}
            border={"none"}
          />
        </form>
        <form>
          <input type="checkbox" />
          <Text
            text={"Sign up for our newsletter"}
            color={"#A1A1A1"}
            fsize={14}
            fweight={400}
          />
        </form>
      </div>
    </div>
  );
}

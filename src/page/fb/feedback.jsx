import React from "react";
import s from "./style.module.scss";
import Text from "../../componets/Text/text";
import Button from "../../componets/button/button";

export default function Feedback() {
  return (
    <div className={s.fb}>
      <div className={s.fb_bg}>
        <div className={s.fb_text}>
          <Text
            text={"Pompeo Pottery"}
            uppercase={"uppercase"}
            color={"#D77474"}
            fsize={14}
            fweight={400}
            fontFamily={"Poppins"}
            align={"start"}
          />
          <Text
            text={"Ready to start shopping?"}
            color={"black"}
            fsize={40}
            fontFamily={"Poppins"}
            fweight={900}
            align={"start"}
          />
          <Text
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit . Suspendisse varius enim in eros elementum."
            }
            color={"#6C6C6C"}
            width={50}
            fontFamily={"Libre Franklin"}
            fsize={16}
            fweight={700}
            align={"start"}
          />
          <div className={s.fb_btn}>
            <Button
              text={"New Collection"}
              color={"white"}
              bg={"#AC1313"}
              fsize={12}
              fweight={700}
              fontFamily={"Poppins"}
              width={40}
              height={20}
              align={"start"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

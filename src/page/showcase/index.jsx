import React from "react";
import s from "./style.module.scss";
import showcase_img from "./assets/image.svg";
import Button from "../../componets/button/button";

import Img from "../../componets/image/img";
import Text from "../../componets/Text/text";

export default function Showcase() {
  return (
    <div className={s.showcase}>
      <div className={s.showcase_left}>
        <Text
          text={"Pompeo POttery"}
          uppercase={"uppercase"}
          color={"#D77474"}
          fweight={"700"}
          fsize={18}
        />
        <Text text={"Unique Porcelain"} fweight={"700"} fsize={48} />
        <Text text={"Stone Collection"} fweight={"700"} fsize={48} />
        <Text
          text={
            "Unique & modern pottery made by our master in porcelain & stones"
          }
          fsize={14}
          fweight={400}
          color={"#6C6C6C"}
        />
        <Button
          width={"40"}
          height={"20"}
          bg={"#AC1313"}
          color={"white"}
          fsize={12}
          text={" Shop Collection "}
        />
      </div>
      <div className={s.showcase_right}>
        <Img src={showcase_img} alt="" width={"90%"} />
      </div>
    </div>
  );
}

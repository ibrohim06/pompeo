import React from "react";
import s from "./style.module.scss";
import Text from "../../componets/Text/text";
import Img from "../../componets/image/img";
import Button from "../../componets/button/button";

export default function Product() {
  return (
    <div className={s.product}>
      <div className={s.product_title}>
        <Text
          text={"Our online store"}
          color={"#D77474"}
          fsize={14}
          fweight={700}
        />
        <Text
          text={"Pottery Collection"}
          color={"#000"}
          fsize={40}
          fweight={900}
        />
      </div>
      <div className={s.product_flex}>
        <div className={s.product_card}>
          <Img src={"/assets/product-1.png"} />
          <br />
          <Text
            text={"Decor Plate"}
            color={"#6C6C6C"}
            fsize={16}
            fweight={400}
            align={"start"}
          />
          <Text
            text={"$ 65.00 USD"}
            color={"#000000"}
            fsize={14}
            fweight={400}
            align={"start"}
          />
        </div>
        <div className={s.product_card}>
          <Img src={"/assets/product-2.png"} />
          <br />
          <Text
            text={"Decor Plate"}
            color={"#6C6C6C"}
            fsize={16}
            fweight={400}
            align={"start"}
          />
          <Text
            text={"$ 65.00 USD"}
            color={"#000000"}
            fsize={14}
            fweight={400}
            align={"start"}
          />
        </div>
        <div className={s.product_card}>
          <Img src={"/assets/product-3.png"} />
          <br />
          <Text
            text={"Decor Plate"}
            color={"#6C6C6C"}
            fsize={16}
            fweight={400}
            align={"start"}
          />
          <Text
            text={"$ 65.00 USD"}
            color={"#000000"}
            fsize={14}
            fweight={400}
            align={"start"}
          />
        </div>
      </div>
      <div className={s.product_flex}>
        <div className={s.product_card}>
          <Img src={"/assets/product-4.png"} />
          <br />
          <Text
            text={"Decor Plate"}
            color={"#6C6C6C"}
            fsize={16}
            fweight={400}
            align={"start"}
          />
          <Text
            text={"$ 65.00 USD"}
            color={"#000000"}
            fsize={14}
            fweight={400}
            align={"start"}
          />
        </div>
        <div className={s.product_card}>
          <Img src={"/assets/product-5.png"} />
          <br />
          <Text
            text={"Decor Plate"}
            color={"#6C6C6C"}
            fsize={16}
            fweight={400}
            align={"start"}
          />
          <Text
            text={"$ 65.00 USD"}
            color={"#000000"}
            fsize={14}
            fweight={400}
            align={"start"}
          />
        </div>
        <div className={s.product_card}>
          <Img src={"/assets/product-6.png"} />
          <br />
          <Text
            text={"Decor Plate"}
            color={"#6C6C6C"}
            fsize={16}
            fweight={400}
            align={"start"}
          />
          <Text
            text={"$ 65.00 USD"}
            color={"#000000"}
            fsize={14}
            fweight={400}
            align={"start"}
          />
        </div>
      </div>
      <div className={s.btn} style={{ margin: "5% 0 " }}>
        <Button
          text={"View All Products"}
          bg={"#AC1313"}
          color={"#fff"}
          fsize={12}
          fweight={700}
          width={40}
          height={20}
        />
      </div>
    </div>
  );
}

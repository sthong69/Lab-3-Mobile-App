import React from "react";
import CardWithImage from "../components/CardWithImage";
import NYCU from "../assets/National_Yang_Ming_Chiao_Tung_University_20210203.jpg";
import SortableTable from "../components/SortableTable";

const HomePage = () => {
  return (
    <div className="body">
      <CardWithImage
        title="NYCU"
        text="L'université nationale Yang Ming Chiao Tung (chinois traditionnel : 國立陽明交通大學) est une université taïwanaise située à Taipei, Hsinchu, Taoyuan, Tainan et Yilan."
        img={NYCU}
      />
      <SortableTable />
    </div>
  );
};

export default HomePage;

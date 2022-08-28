import React from "react";
import "antd/dist/antd.css";
import { Carousel, Select, Slider, Image } from "antd";

import muji from "./images/muji.png";
import peach from "./images/peach.png";
import ryan from "./images/ryan.png";
import dog from "./images/dog.jpeg";
import dock from "./images/dock.png";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const influType = ["Passion", "Cook", "Skin", "Pets", "Sports"];

const marks = {
  0: "10K",
  25: "50K",
  50: "100K",
  75: "500K",
  100: {
    style: {
      color: "#f50",
    },
    label: <strong>over 1M</strong>,
  },
};

const data = [
  { name: "Prodo", follower: 50, img: dog, category: "Sports" },
  { name: "Apeach", follower: 40, img: peach, category: "Pets" },
  { name: "Muji", follower: 90, img: muji, category: "Cook" },
  { name: "Ryan", follower: 10, img: ryan, category: "Passion" },
  { name: "Donald", follower: 70, img: dock, category: "Skin" },
  { name: "dog", follower: 50, img: dog, category: "Sports" },
  { name: "peach", follower: 40, img: peach, category: "Pets" },
  { name: "muji", follower: 90, img: muji, category: "Cook" },
  { name: "dock", follower: 70, img: dock, category: "Skin" },
  { name: "ryan", follower: 10, img: ryan, category: "Passion" },
  { name: "dog", follower: 50, img: dog, category: "Sports" },
  { name: "peach", follower: 40, img: peach, category: "Pets" },
  { name: "muji", follower: 90, img: muji, category: "Cook" },
  { name: "dock", follower: 70, img: dock, category: "Skin" },
  { name: "ryan", follower: 10, img: ryan, category: "Passion" },
];

function Advertiser() {
  return (
    <div>
      <div style={{ marginLeft: 100 }}>
        <div>Hot Influencers Today</div>
        <Carousel autoplay>
          {data.map((person) => (
            <Image width={150} src={person.img} />
          ))}
        </Carousel>
      </div>
      <div style={styles.center}>
        <div>Find your Influencer</div>

        <div style={styles.margin}>Select the category</div>
        <Select placeholder="Select the category">
          {influType.map((o, i) => (
            <Select.Option key={i} value={o}>
              {o}
            </Select.Option>
          ))}
        </Select>
        <div style={styles.margin}>Influencer's Follower</div>
        <Slider
          style={{ width: "60vw", marginBottom: 40 }}
          marks={marks}
          range
          defaultValue={[15, 40]}
        />
      </div>

      <div style={styles.center}>
        {data.map((person) => (
          <div>
            <Image width={150} src={person.img} />
            <div>{person.name}</div>
            <div>Followers: {person.follower}K</div>
            <div>Category: {person.category}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Advertiser;

const styles = {
  center: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 8,
  },
  margin: {
    margin: 8,
  },
};

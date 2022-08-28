import React from "react";
import { Tabs } from "antd";
import "antd/dist/antd.min.css";
import Advertiser from "./Advertiser";
import Influencer from "./Influencer";

const { TabPane } = Tabs;

function Home() {
  return (
    <div style={styles.main}>
      <div style={styles.logo}>GrowIn</div>
      <Tabs centered>
        <TabPane tab="Bussines Owner" key="Find">
          <Advertiser />
        </TabPane>
        <TabPane tab="Influencer" key="Influencer">
          <Influencer />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default Home;

const styles = {
  main: {
    padding: 8,
  },
  logo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "#06283D",
    fontSize: 20,
    fontWeight: 700,
  },
};

import React, { useState } from "react";
import { Input, Button, Result } from "antd";
import "antd/dist/antd.min.css";

function Influencer() {
  const [okay, setOkay] = useState(false);
  return (
    <div>
      {okay ? (
        <Result
          status="success"
          title="Your Influencer Rank is 999"
          subTitle="You can have 0.1% commision."
          extra={[
            <Button type="primary" key="console">
              Sign Up
            </Button>,
            <Button onClick={() => setOkay(false)} key="try">
              Try Again
            </Button>,
          ]}
        />
      ) : (
        <div style={styles.center}>
          <div>Welcome Influencer</div>
          <Input
            style={styles.input}
            placeholder="Enter your follower number"
          />
          <Input style={styles.input} placeholder="Enter your instagram" />
          <Button style={{ width: 200 }} onClick={() => setOkay(true)}>
            Enter
          </Button>
        </div>
      )}
    </div>
  );
}

export default Influencer;

const styles = {
  center: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 8,
  },
  input: {
    margin: 8,
  },
};

import React from "react";
import { Html, useProgress } from "@react-three/drei";

const Loader = () => {

    const { progress} = useProgress();
    return(
      <Html>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
            background: "rgba(5, 7, 5, 0.65)",
            padding: "14px 18px",
            borderRadius: 12,
          }}
        >
          <span className="canvas-load"></span>
          <p
          style={{
            fontSize: 14,
            color: "#f1f1f1",
            fontWeight: 800,
            margin: 0
          }}
          >{progress.toFixed(2)}%</p>
        </div>
      </Html>
  )
}


export default Loader
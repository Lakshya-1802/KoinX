import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const TokeNomics = () => {
  const percentage = 80;

  return (
    <div className="background mt-3 ">
      <div className="p-4 ">
        <p className="font-semibold text-3xl ">Tokenomies</p>
        <p className="font-semibold text-2xl my-3">Initial Distribution</p>
        <div className="flex gap-4 mb-2">
          <div style={{ width: 200, height: 200 }}>
            <CircularProgressbar
              percentage={percentage}
              value={percentage}
              styles={buildStyles({
                strokeLinecap: "butt",
                pathColor: "blue",
                trailColor: "orange",
              })}
            />
          </div>
          <div className="flex flex-col justify-center ">
            <div className="flex items-center gap-1">
              <div className="bg-blue-600 rounded-full w-4 h-4"></div>
              <div>Crowdsale investor:80%</div>
            </div>
            <div className="flex items-center gap-1">
              <div className="bg-orange-500 rounded-full w-4 h-4"></div>
              <div>Foundation:20%</div>
            </div>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
          quisquam esse illo. Numquam recusandae alias eveniet veritatis
          pariatur quaerat ducimus nemo. Similique quae ab vitae rerum optio
          amet nulla consequatur impedit voluptates. Sequi, aliquam, aliquid
          aperiam eum vero nihil facilis eligendi cum minima corporis doloremque
          placeat nobis, ipsam molestias ducimus. pariatur quaerat ducimus nemo.
          Similique quae ab vitae rerum optio amet nulla consequatur impedit
          voluptates. Sequi, aliquam, aliquid aperiam eum vero nihil facilis
          eligendi cum minima corporis doloremque placeat nobis, ipsam molestias
          ducimus.
        </p>
      </div>
    </div>
  );
};

export default TokeNomics;

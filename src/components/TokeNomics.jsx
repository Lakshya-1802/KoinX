import React from "react";

const TokeNomics = () => {
  return (
    <div className="background">
      <p className="font-bold text-3xl m-3">Tokenomies</p>
      <p className="font-semibold text-2xl mb-3">Initial Distribution</p>
      <div className="flex gap-5 mb-3">
        <div class="circle"></div>
        <div className="flex flex-col justify-center gap-1">
            
          <div className="flex items-center gap-1">
            <div className="bg-blue-600 rounded-full w-4 h-4"></div>
            <div>Crowdsale investor:80%</div>
          </div>
          <div className="flex items-center gap-1">
            <div className="bg-orange-500 rounded-full w-4 h-4"></div>
            <div>Foundation:20%</div>
          </div>

          <div></div>
        </div>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore quisquam esse illo. Numquam recusandae alias eveniet veritatis pariatur quaerat ducimus nemo. Similique quae ab vitae rerum optio amet nulla consequatur impedit voluptates. Sequi, aliquam, aliquid aperiam eum vero nihil facilis eligendi cum minima corporis doloremque placeat nobis, ipsam molestias ducimus.</p>
    </div>
  );
};

export default TokeNomics;

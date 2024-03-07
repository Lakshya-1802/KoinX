import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import img1 from "../assets/images/aa.webp";
import img2 from "../assets/images/ww.jpg";

const BitCoin = () => {
  return (
    <div className="background my-3 p-4">
      <p className="font-bold fs-2">About Bitcoin</p>
      <br />
      <p className="fw-semibold fs-4">What is BitCoin ?</p>
      <p className="text-base">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus
        ex sapiente nihil mollitia laudantium eligendi, exercitationem
        consectetur aspernatur molestiae? Unde placeat, explicabo sed ipsum
        repudiandae expedita beatae cumque perferendis dolore.
      </p>
      <hr className="my-2 " />
      <p className="fw-semibold mb-2 fs-4">Lorem ipsum dolor sit amet.</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
        distinctio ipsam nobis dolore accusamus nisi delectus facilis, rem,
        magnam necessitatibus consequuntur quia deserunt ullam facere minus
        incidunt sunt minima dolor eos aliquam harum. Itaque velit, tenetur sed,
        iste ducimus deserunt nihil dolor necessitatibus quasi voluptates illum
        id. Totam, harum minima.
      </p>

      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi ducimus
        maxime deleniti voluptatum ullam, asperiores quas! Illum esse odio
        cumque rem illo quasi, enim aspernatur alias repudiandae consectetur ad
        voluptatem ut deserunt maxime nesciunt possimus qui eum reprehenderit,
        sit nobis veniam corrupti quia recusandae. Asperiores voluptate quod
        neque et consequuntur. Aspernatur, quidem! Nesciunt soluta minima
        maiores harum nemo quam corporis.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic sit
        dolorum voluptate aspernatur aliquid officia, eos incidunt. Error,
        nesciunt rerum, blanditiis est consequuntur similique delectus esse,
        reprehenderit minus placeat harum!
      </p>
      <hr className="my-2 " />
      <p className="fw-semibold fs-3 mb-1">Already Holding BitCoin?</p>
      <div className="row">
        <div className="col-md-6 mb-2">
          <div className="card1 flex">
            <img
              src={img1}
              alt="Company Logo"
              className="h-40 w-32 rounded-md"
            />
            <div className="flex flex-col ml-5 gap-5">
              <h2 className=" fw-bold text-xl text-white ">
                Calculate Your Profits
              </h2>

              <p class="button">
                Check Now <FaArrowRightLong />
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card2 flex">
            <img
              src={img2}
              alt="Company Logo"
              className="h-40 w-32 rounded-md"
            />
            <div className="flex flex-col ml-5 gap-5">
              <h2 className=" fw-bold text-xl text-white ">
                Calculate Your Profits
              </h2>

              <p class="button">
                Check Now <FaArrowRightLong />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BitCoin;

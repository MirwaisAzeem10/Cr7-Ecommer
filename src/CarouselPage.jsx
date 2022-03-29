import React from "react";
import { Carousel } from "react-carousel-minimal";

function CarouselPage() {
  const data = [
    {
      image: "/image/cr7 pack.jpg",
      caption: `<div>
       UnderWear<br/><span>Next line</span>
      </div>`,
    },
    {
      image: "/image/cr7 underwear.jpg",
      caption: "<div>White Ball</div>",
    },
    {
      image: "/image/cr7boot.jpg",
      caption: "<div>Cr7 Boots</div>",
    },
    // {
    //   image:
    //     "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
    //   caption: "<div>San Francisco</div>",
    // },
    // {
    //   image:
    //     "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
    //   caption: "<div>San Francisco</div>",
    // },
    // {
    //   image:
    //     "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
    //   caption: "Darjeeling",
    // },
    // {
    //   image:
    //     "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
    //   caption: "<div>San Francisco</div>",
    // },
    // {
    //   image:
    //     "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
    //   caption: "<div>San Francisco</div>",
    // },
    // {
    //   image:
    //     "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
    //   caption: "<div>San Francisco</div>",
    // },
  ];
  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };

  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
    <div
      style={{
        borderBottomLeftRadius: 14,
        borderBottomRightRadius: 14,
        overflow: "hidden",
      }}
    >
      <Carousel
        data={data}
        time={2000}
        width="10000px"
        height="600px"
        captionStyle={captionStyle}
        slideNumber={true}
        slideNumberStyle={slideNumberStyle}
        captionPosition="bottom"
        automatic={true}
        dots={true}
        pauseIconColor="white"
        pauseIconSize="40px"
        slideBackgroundColor="darkgrey"
        slideImageFit="cover"
        // thumbnails={true}
        // thumbnailWidth="100px"
        showNavBtn={true}
        style={{
          textAlign: "center",
          // maxWidth: "100%",
        }}
      />
    </div>
  );
}

export default CarouselPage;

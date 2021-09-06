const Cards = () => {
  const data = [
    {
      index: 1,
      img: "/reliance.jpg",
      isAd: true,
      isVerified: true,
      title: "Reliance Industries Ltd.",
      sub: "Digital Marketing Agency",
      points: [
        "Digital Marketing",
        "Web and E-commerce",
        "Gsuite Google Mail",
        "Branding and Creative",
        "Mob Apps Development",
        "iPad Apps",
      ],
      address:
        "504, NBC Complex, Plot # 43, Sector 11, Opp IDBI Bank, CBD Belapur, Navi Mumbai - 400614",
      foundingYear: "2017",
      mobile: "+91 9594 31 5559",
      opan: "8pm",
      close: "8pm",
      currency: "$",
      midOrder: "1000-2200",
      team: "1-1000",
      resRate: "20%",
    },
    {
      index: 1,
      img: "/tata.jpg",
      isAd: true,
      isVerified: true,
      title: "Tata Consultancy Services Ltd.",
      sub: "Digital Marketing Agency",
      points: [
        "Digital Marketing",
        "Web and E-commerce",
        "Gsuite Google Mail",
        "Branding and Creative",
        "Mob Apps Development",
        "iPad Apps",
      ],
      address:
        "504, NBC Complex, Plot # 43, Sector 11, Opp IDBI Bank, CBD Belapur, Navi Mumbai - 400614",
      foundingYear: "2017",
      mobile: "+91 9594 31 5559",
      opan: "8pm",
      close: "8pm",
      currency: "$",
      midOrder: "1000-2200",
      team: "1-1000",
      resRate: "20%",
    },
    {
      index: 1,
      img: "/reliance.jpg",
      isAd: true,
      isVerified: true,
      title: "Reliance Industries Ltd.",
      sub: "Digital Marketing Agency",
      points: [
        "Digital Marketing",
        "Web and E-commerce",
        "Gsuite Google Mail",
        "Branding and Creative",
        "Mob Apps Development",
        "iPad Apps",
      ],
      address:
        "504, NBC Complex, Plot # 43, Sector 11, Opp IDBI Bank, CBD Belapur, Navi Mumbai - 400614",
      foundingYear: "2017",
      mobile: "+91 9594 31 5559",
      opan: "8pm",
      close: "8pm",
      currency: "$",
      midOrder: "1000-2200",
      team: "1-1000",
      resRate: "20%",
    },
    {
      index: 1,
      img: "/reliance.jpg",
      isAd: true,
      isVerified: true,
      title: "Reliance Industries Ltd.",
      sub: "Digital Marketing Agency",
      points: [
        "Digital Marketing",
        "Web and E-commerce",
        "Gsuite Google Mail",
        "Branding and Creative",
        "Mob Apps Development",
        "iPad Apps",
      ],
      address:
        "504, NBC Complex, Plot # 43, Sector 11, Opp IDBI Bank, CBD Belapur, Navi Mumbai - 400614",
      foundingYear: "2017",
      mobile: "+91 9594 31 5559",
      opan: "8pm",
      close: "8pm",
      currency: "$",
      midOrder: "1000-2200",
      team: "1-1000",
      resRate: "20%",
    },
  ];
  return (
    <div className="space-y-1">
      {data.map((each) => {
        return (
          <div key={each.index} className="border border-gray-300">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-9">
                <div className=" p-3 flex flex-col sm:flex-row w-full">
                  <div className="flex items-start justify-between">
                    <div className="w-28 h-28 border border-gray-300">
                      <img
                        className="object-cover w-ful h-full"
                        src={each.img}
                        alt=""
                      />
                    </div>
                    <div className="border border-gray-300 block sm:hidden cursor-pointer">
                      <svg
                        className="h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path
                          d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"
                          fill="rgba(50,152,219,1)"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1 pt-4 sm:pt-0 sm:pl-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="font-semibold text-green-400">Ad</span>
                        <span className="font-semibold">{each.title}</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                        >
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path
                            d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.997-6l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z"
                            fill="rgba(50,152,219,1)"
                          />
                        </svg>
                      </div>
                      <div className="border border-gray-300 hidden sm:block cursor-pointer">
                        <svg
                          className="h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                        >
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path
                            d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"
                            fill="rgba(50,152,219,1)"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex pt-2 items-center space-x-2">
                      <span className="text-gray-400">{each.sub}</span>
                      <span className="text-gray-400 flex items-center">
                        <img className="h-3 mr-1" src="/india.svg" alt="" />
                        IN
                      </span>
                    </div>
                    <div className="mt-4">
                      <ul className="grid grid-cols-1 sm:grid-cols-2 list-disc gap-y-2 gap-x-4 pl-4 lg:pl-5">
                        {each.points.map((each) => {
                          return (
                            <li key={each} className="text-gray-700">
                              <span className="flex-1">{each}</span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    <div className="mt-4">
                      <div className="flex items-start">
                        <svg
                          className="mr-1 h-5 w-5 mt-1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                        >
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path
                            d="M12 20.9l4.95-4.95a7 7 0 1 0-9.9 0L12 20.9zm0 2.828l-6.364-6.364a9 9 0 1 1 12.728 0L12 23.728zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"
                            fill="rgba(50,152,219,1)"
                          />
                        </svg>
                        <span className="flex-1">{each.address}</span>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between flex-wrap">
                      <div className="flex items-center mb-2">
                        <svg
                          className="mr-1 h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                        >
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path
                            d="M11 2c4.968 0 9 4.032 9 9s-4.032 9-9 9-9-4.032-9-9 4.032-9 9-9zm0 16c3.867 0 7-3.133 7-7 0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7zm8.485.071l2.829 2.828-1.415 1.415-2.828-2.829 1.414-1.414z"
                            fill="rgba(50,152,219,1)"
                          />
                        </svg>
                        <span className="flex-1">
                          Founding Year: {each.foundingYear}
                        </span>
                      </div>

                      <div className="flex items-center mb-2">
                        <svg
                          className="mr-1 h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                        >
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path
                            d="M9.366 10.682a10.556 10.556 0 0 0 3.952 3.952l.884-1.238a1 1 0 0 1 1.294-.296 11.422 11.422 0 0 0 4.583 1.364 1 1 0 0 1 .921.997v4.462a1 1 0 0 1-.898.995c-.53.055-1.064.082-1.602.082C9.94 21 3 14.06 3 5.5c0-.538.027-1.072.082-1.602A1 1 0 0 1 4.077 3h4.462a1 1 0 0 1 .997.921A11.422 11.422 0 0 0 10.9 8.504a1 1 0 0 1-.296 1.294l-1.238.884zm-2.522-.657l1.9-1.357A13.41 13.41 0 0 1 7.647 5H5.01c-.006.166-.009.333-.009.5C5 12.956 11.044 19 18.5 19c.167 0 .334-.003.5-.01v-2.637a13.41 13.41 0 0 1-3.668-1.097l-1.357 1.9a12.442 12.442 0 0 1-1.588-.75l-.058-.033a12.556 12.556 0 0 1-4.702-4.702l-.033-.058a12.442 12.442 0 0 1-.75-1.588z"
                            fill="rgba(50,152,219,1)"
                          />
                        </svg>
                        <span className="flex-1">{each.mobile}</span>
                      </div>

                      <div className="flex items-center  mb-2">
                        <svg
                          className="mr-1 h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                        >
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path
                            d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-8h4v2h-6V7h2v5z"
                            fill="rgba(50,152,219,1)"
                          />
                        </svg>
                        <span className="flex-1">
                          Open {each.opan} Close {each.close}
                        </span>
                        <svg
                          className="ml-1 h-5 w-5 cursor-pointer"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                        >
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path
                            d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-300 p-3 flex flex-col sm:flex-row space-y-4 sm:space-y-0 w-full sm:items-center justify-between">
                  <div className="flex items-center flex-wrap">
                    <p className="mr-4">
                      Min Order:
                      <span className="font-semibold">
                        {" "}
                        {each.currency} {each.midOrder}
                      </span>
                    </p>
                    <p className="mr-4">
                      Team:
                      <span className="font-semibold"> {each.team}</span>
                    </p>
                    <p className="mr-4">
                      Response Rate:
                      <span className="font-semibold"> {each.resRate}</span>
                    </p>
                  </div>
                  <div className="flex items-start cursor-pointer">
                    <svg
                      className="h-5 w-5 mr-1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0H24V24H0z" />
                      <path
                        d="M13 2v1h7v2h-7v14h4v2H7v-2h4V5H4V3h7V2h2zM5 6.343l2.828 2.829C8.552 9.895 9 10.895 9 12c0 2.21-1.79 4-4 4s-4-1.79-4-4c0-1.105.448-2.105 1.172-2.828L5 6.343zm14 0l2.828 2.829C22.552 9.895 23 10.895 23 12c0 2.21-1.79 4-4 4s-4-1.79-4-4c0-1.105.448-2.105 1.172-2.828L19 6.343zM5 9.172l-1.414 1.414C3.212 10.96 3 11.46 3 12c0 1.105.895 2 2 2s2-.895 2-2c0-.54-.212-1.04-.586-1.414L5 9.172zm14 0l-1.414 1.414C17.212 10.96 17 11.46 17 12c0 1.105.895 2 2 2s2-.895 2-2c0-.54-.212-1.04-.586-1.414L19 9.172z"
                        fill="rgba(50,152,219,1)"
                      />
                    </svg>
                    <span className="flex-1">Compare</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-3 border-t lg:border-l border-gray-300 p-3 flex flex-col justify-center items-center">
                <div className="flex space-x-1 items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z"
                      fill="rgba(47,204,113,1)"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z"
                      fill="rgba(47,204,113,1)"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z"
                      fill="rgba(47,204,113,1)"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      d="M12 15.968l4.247 2.377-.949-4.773 3.573-3.305-4.833-.573L12 5.275v10.693zm0 2.292l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928L12 18.26z"
                      fill="rgba(47,204,113,1)"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928L12 18.26zm0-2.292l4.247 2.377-.949-4.773 3.573-3.305-4.833-.573L12 5.275l-2.038 4.42-4.833.572 3.573 3.305-.949 4.773L12 15.968z"
                      fill="rgba(47,204,113,1)"
                    />
                  </svg>
                </div>
                <p className="mt-4 text-center text-blue-500">97592 Reviews</p>
                <button className="flex items-center px-6 py-2 border border-gray-500 bg-gray-100 rounded-full mt-4">
                  <svg
                    className="w-6 h-6 mr-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      d="M9.243 19H21v2H3v-4.243l9.9-9.9 4.242 4.244L9.242 19zm5.07-13.556l2.122-2.122a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414l-2.122 2.121-4.242-4.242z"
                      fill="rgba(149,164,166,1)"
                    />
                  </svg>
                  <span>Write Review</span>
                </button>
                <div className="flex items-center justify-center mt-6 space-x-6">
                  <div className="flex flex-col items-center cursor-pointer">
                    <svg
                      className="h-8 w-8"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path
                        d="M2 8.994A5.99 5.99 0 0 1 8 3h8c3.313 0 6 2.695 6 5.994V21H8c-3.313 0-6-2.695-6-5.994V8.994zM14 11v2h2v-2h-2zm-6 0v2h2v-2H8z"
                        fill="rgba(50,152,219,1)"
                      />
                    </svg>
                    <p>Chat Now</p>
                  </div>
                  <div className="flex flex-col items-center cursor-pointer">
                    <svg
                      className="h-8 w-8"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path
                        d="M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455zm4.838-6.879L8.818 9.646l-1.414 1.415 3.889 3.889 5.657-5.657-1.414-1.414-4.243 4.242z"
                        fill="rgba(149,164,166,1)"
                      />
                    </svg>
                    <p>Enquiry</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;

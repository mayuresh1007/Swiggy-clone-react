import React, { useState } from "react";

const Section = ({ name, desc, isVisible, setIsVisible }) => {
  // const [isVisible, setIsVisible] = useState(false); // parent la tranfer coz lifting up
  //   const [text, settext] = useState("Show");
  //   function handleisvisible() {
  //     console.log("called buttun clicked");
  //     if (!isVisible) {
  //       console.log(isVisible);
  //       setIsVisible(true);
  //       settext("Hide");
  //     } else {
  //       settext("Show");
  //       setIsVisible(false);
  //     }
  //   }
  return (
    /*
    - how to point the desc just make dynamic by prop and then wrap in {} ofr js
    - {isVisible  && <p>{desc}</p>}
    --Lifting the stae up
    -- Lifting the stae up giving the control to parent to control child section compo to collaps and not 
    -- this will done in the Accordian component
     */
    <div className="border mx-8 border-black p-2 m-2">
      <h1 className="font-bold">This is section :--{name}</h1>
      {/* <button className=" underline" onClick={handleisvisible}>
        {text}
      </button> */}

      {isVisible ? (
        <>
          <button className=" underline" onClick={() => setIsVisible(false)}>
            Hide
            {console.log(isVisible)}
          </button>
          <p>{desc}</p>
        </>
      ) : (
        <button className=" underline" onClick={() => setIsVisible(true)}>
          Showw
          {console.log(isVisible)}
        </button>
      )}

      {/* {isVisible && <p>{desc}</p>} */}
    </div>
  );
};

const Accordian = () => {
  const [visibleSection, setVisibleSection] = useState("about");
  //   const [isVisible, setIsVisible] = useState(false);
  //   const [sectionConfig, setSectionConfig] = useState({
  //     showAbout: false,
  //     showTeam: false,
  //     showProduct: false,
  //   }); // working but not a good coder identy

  return (
    <div className="border ">
      <Section
        name={"about"}
        desc={
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae porro esse aperiam, fugiat dolores recusandae id omnis dolorem voluptatem rerum temporibus odit unde pariatur rem et nemo? Fuga vel, maxime doloribus itaque iusto laboriosam provident, at, quasi nesciunt soluta voluptatibus sed? Sit libero, iste ea debitis quis eius? Provident dolore veniam nam debitis ut neque !"
        }
        isVisible={visibleSection === "about"}// isVisible controlles visible or not
        setIsVisible={() => setVisibleSection("about")} // setIsVisible controlles what is visible
        // isVisible={sectionConfig.showAbout}
        // setIsVisible={()=>setSectionConfig({
        //   showTeam: false,
        //   showAbout: true,
        //   showProduct: false,
        // })}
      />
      <Section
        name={"teams"}
        desc={
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae porro esse aperiam, fugiat dolores recusandae id omnis dolorem voluptatem rerum temporibus odit unde pariatur rem et nemo? Fuga vel, maxime doloribus itaque iusto laboriosam provident, at, quasi nesciunt soluta voluptatibus sed? Sit libero, iste ea debitis quis eius? Provident dolore veniam nam debitis ut neque !"
        }
        isVisible={visibleSection === "teams"}
        setIsVisible={() => setVisibleSection("teams")}
        // isVisible={sectionConfig.showTeam}
        // setIsVisible={() =>
        //   setSectionConfig({
        //     showTeam: true,
        //     showAbout: false,
        //     showProduct: false,
        //   })
        // }
      />
      <Section
        name={"product"}
        desc={
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae porro esse aperiam, fugiat dolores recusandae id omnis dolorem voluptatem rerum temporibus odit unde pariatur rem et nemo? Fuga vel, maxime doloribus itaque iusto laboriosam provident, at, quasi nesciunt soluta voluptatibus sed? Sit libero, iste ea debitis quis eius? Provident dolore veniam nam debitis ut neque !"
        }
        isVisible={visibleSection === "product"}
        setIsVisible={() => {setVisibleSection("product")}}
        // isVisible={sectionConfig.showProduct}
        // setIsVisible={() =>
        //   setSectionConfig({
        //     showTeam: false,
        //     showAbout: false,
        //     showProduct: true,
        //   })
        // }
      />
    </div>
  );
};

export default Accordian;

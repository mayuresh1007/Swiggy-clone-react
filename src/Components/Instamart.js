import React from "react";

const Instamart = () => {
  return (
    <div className="mt-4 ml-4">
      <h1>Instamart 100 of component inside this </h1>
      <p className="text-ellipsis">
        example for lazy loading and bundling, on demand load, chunking,code
        splitting{" "}
      </p>
      <pre>
        {" "}
        import Instamart from "./Components/Instamart"; // normal import const
        <br />
        Instamart = lazy(() ={">"} import("./Components/Instamart")); 
        <br />// this is
        a dynamic import lazy loading , on dimand loaing, code splitting ,bundle
        chunking <br />
        // on demand loadig react will suspend bcoz there is no any bundle // On
        demand loading ={">"} upon render ={">"} suspend loading <br />
        <p className="text-ellipsis">
        // code yaychy aadhich react try to render thats why error thrown <br/>
        // to handle this case --{">"} Suspense from react library this give the mean <br />
        time loading capability like shimmerui this is done by the
        fallback="this take any jsx / component" </p><hr />
        <p className="text-ellipsis">
          {" "}
          const AppLayout = () ={">"}
          <p>dont do this under the component write import</p>
          const Instamart = lazy(() ={">"} import("./Components/Instamart"));<br /> //
          dont do this<br /> // coz lazy load for every render cycle make import on
          the top lazy loading
        </p>
        <br />
        path: "/instamart", // in between the suspense bcoz its lazy loading to
        avoid quick render and this is promis <br />// fallback is shown in between
        time element:
        <pre>
          <code> Suspense fallback= Shimmerui Instamart Suspense</code>
        </pre>
      </pre>
    </div>
  );
};

export default Instamart;

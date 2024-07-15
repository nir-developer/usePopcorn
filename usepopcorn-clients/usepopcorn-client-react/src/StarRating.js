//  //INLINE CSS - SINCE SHOULD NOT BE DEPEND ON EXTERNAL CSS
//AND ALOS OUTSIDE THE COMPONENT - PREVENT CREATING IT ON ANY RENDER
const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
  backgroundColor: "red",
};

const starContainerStyle = {
  display: "flex",
  gap: "4px",
  backgroundColor: "green",
};

const textStyle = {
  lineHeight: "1",
  margin: "0",
};
export default function StarRating({ maxRating = 3 }) {
  return (
    <div style={containerStyle}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <span>S{i + 1}</span>
        ))}
      </div>
      <p style={textStyle}>NUMBER OF STARS</p>
    </div>
  );
}

/**
 *
 * *******************************************
 *         BUILDING A REUSABLE STAR COMPONENT
 * *******************************************
 *    Requirements:
 *
 *   1.  Create the StarRating.js
 *
 *   index.js:
 *             Update - for now remove the imports of the css and the App.js
 *               (SHOULD NOT BE DEPEND ON ANY CSS OR ANY JS FILE)
 *
            * // import "./index.css";
            // import App from "./App";
            import StarRating from "./StarRating";
            const root = ReactDOM.createRoot(document.getElementById("root"));
            root.render(
            <React.StrictMode>
                <StarRating />
            </React.StrictMode>,
            );


>>>>>>>>>>>>>>>>>>>>>>>>
    Start !!
>>>>>>>>>>>>>>>>>>>>>
 *
    1.Create the The component layout: 
           div Container for all the stars(left) 
           p : for #stars

    2.  Generate 10 stars : Array.from
        {Array.from({ length: 5 }, (_, i) => (
          <span>S{i + 1}</span>
        ))}
     

    3.Inline CSS(since not depend on any external css)
        

    4.Pass the maxRating as a prop - and generate based on this NUMBER

    5.Define a default number of stars(if user did not pass this as a prop)
        
    
            
 *
 */

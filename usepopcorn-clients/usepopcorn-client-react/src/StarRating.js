import { useState } from "react";

//  //INLINE CSS - SINCE SHOULD NOT BE DEPEND ON EXTERNAL CSS
//AND ALOS OUTSIDE THE COMPONENT - PREVENT CREATING IT ON ANY RENDER
const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const starContainerStyle = {
  display: "flex",

  // gap: "4px",
};

// const textStyle = {
//   lineHeight: "1",
//   margin: "0",
// };

////////
//STARS RATING CONTAINER COMPONENT

export default function StarRating({
  maxRating = 3,
  color = "#fcc419",
  size = 48,
}) {
  //STATE (define)
  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);

  const textStyle = {
    lineHeight: "1",
    margin: "0",
    color,
    fontSize: `${size / 1.5}px`,
  };

  //HANDLERS - TO BE PASSED TO CHILD - CHILD PARENT  COMMUNICATION
  function handleRating(rate) {
    setRating(rate);
  }

  return (
    <div style={containerStyle}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            onRate={() => handleRating(i + 1)}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            onHoverIn={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(0)}
            color={color}
            size={size}
          />
        ))}
      </div>
      <p style={textStyle}>{tempRating || rating || ""}</p>
    </div>
  );
}

//STAR COMPONENT
/**
 * CSS - HTML
 *    CSS without the span wrapper on the icon - and apply style directlry - only height is enough
 *       with span wrapper I must both height and width
 *    role HTML attribute for accessablity
 */

// const starStyle = {
//   height: "48px",
//   width: "48px",
//   //WHAT FOR? block?
//   display: "block",
//   cursor: "pointer",
// };
function Star({ onRate, full, onHoverIn, onHoverOut, color, size }) {
  //MOVED THE STYLE OBJECT INTO THE COMPONENT - SINCE PPROPS ARE ACCESSBLE ONLY INSIDE THE COMPONENT
  const starStyle = {
    height: `${size}px`,
    width: `${size}px`,
    //WHAT FOR? block?
    display: "block",
    cursor: "pointer",
    //SET THE COLOR ON THE SVG BELOW!
  };
  return (
    <span
      onClick={onRate}
      onMouseEnter={onHoverIn}
      onMouseLeave={onHoverOut}
      role="button"
      style={starStyle}
    >
      {full ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill={color}
          stroke={color}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke={color}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="{2}"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      )}
    </span>
  );
}

/**
 *git branch --set-upstream-to=origin/<branch-name>


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
-------------------------------------------------
            Creating the stars container components
------------------------------------------------
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


    -------------------------------------
          Creating the Star component
    --------------------------------

    CSS:
      Add the icon svg - and style (witdh = height 48px ) wrapped in span element(set to display block)
    
    STATE: 
      SINCE I WANT THE UI TO BE RENEDRED BASED ON A UI EVENT => I NEED A STATE since I want to display the current rating (#ratings to the right of the stars row))

        
    IMPORTANT!!!!!t
    TASK: DISLAY ALL THE FIRST  STARS IN FULL(<= rating)  and the rest with empty
    
    Star is full <=> i + 1 <= current rating state >= index i of current star + 1 
    [i is the current generated star]



    ----------------------------------
          STAR HOVERING EVENT  FUNCTIONALITY  - SUPER IMPORRTANT - I MESSED UP!
    --------------------------------------
    REQUIREMENT: 
        When user hover on a star i  - then :
        all first i stars arefull , and the text of #stars is set to i

    NOTES: 
        The hovering and #rate - are independent
           => NEW STATE - SINCE SOMETHING  IS CHANGED ON THE  SCREEN(the text and full stars) 
          
        
    SOLUTION: 
       State Management: 
        1. Define tempRating state in StarRating (parent)-(start to 0 as the rating state)

        2. Use the state (JSX)

        3. Handle the hover event (in the child Star)




        MY IDEA -WHEN MOUSE ENTER(hover on a star):
         - Update THE tempRating state to the 

      
         EVENT MUST BE HANDLED ON JSX ELEMENT(and not on a Compoennt - like Star! 
          => BEST PRACRTICE - NAME THE EVENT HANLDER PASSED AS A <PRO</PROP> IN A DIFFERENT NAME THAN THE ACTUAL D

         )
        
    
        MY WRONG SOLUTION 
         full={tempRating ? tempRating + 1 : rating >= i + 1 ? true : false}


        CORRECT SOLUTION: 
          IF THERE IS tempRating , then if tempRating >= i + 1 - set to full 
          ELSE(no tempRating) , than if rating >= i +1  , set to full

            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}

 *    
          IMPORRTANT - THE ORDER IS IMPORTANT! CHECK FIRST THE tempRating(hovering)  before the rating(clicking)



          IMPORTANT - HOW TO DISPLAY THE #RATING TEXT???

          SOLUTION: 
          {tempRating || rating|| ""}

      ********************************************
          COMPONENT PROPS AS API!! (COMPONENT IS AN ABSTRACTION)
      ************************************
            AS A CREATOR :
                THINKS WHAT PROPS TO PASS(API)
                THINKS HOW COMPLEX IS  

                
                FEW PROPS : COMPONENT LESS COMPLEX BUT NOT FLEXIBLE ENOUGH & LESS USABLE

                MANY PROPS: COMPOENT MORE COMPLEX BUT HIGH FLEXIBLE & MORE USFULL 

                EXAMLE: 
                  WEATHER COMPONENT: 
                    PROPS: ONLY LOCATION - LESS COMPLEX , LESS FLEXIBLE AND USEFULL FOR CLIENT
                    PROPS: DAYS, UNITS, ETC,.. MORE COMPLEX, MORE FLEXIBLE BUT HARD TO USE

                  => WHAT IS THE RIGHT BALANCE - FOR BOTH CREATOR AND CONSUMER 

                NOTE: IF PROVIDE MANY PROPS - AT LEAST PROVIDE DEFAULT VALUES TO THE PROPS 


        >>>>>>>>>>>>>>>>>
        IN THE PROJECT: 
          Write now it is not so usefull - I HAVE ONLY THE maxRating prop !
          - I want to make more usable 

        
        STEP 1: STAR RATING 
           DEFINE DEFAULT FOR THE PROPS PASSED FROM THE CLIENT 
           (called from index.js)
              
            export default function StarRating({
                  maxRating = 3,
                  color = "#fcc419",
                  size = 48,
                }) 

        STEP 2: 
            MOVE THE CSS OBJECT INTO THE COMPOENNT (SINCE PROPS ARE ACCESSBLE ONLY FROM THE COMPONENT)
            (below the states)

            const textStyle = {
              lineHeight: "1",
              margin: "0",
              color,
              fontSize: `${size / 1.5}px`,
            };


        STEP 3: PASS DEFAULT PROPS FROM THE StrarContainer INTO THE STAR(color and size)
          <Star
            key={i}
            onRate={() => handleRating(i + 1)}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            onHoverIn={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(0)}
        =>    color={color}
        =>    size={size}
          />




        index.js(client of StarRatring)
         TEST - PASS size and color




        SVG:
             STROKE = PERIMETER
             FILL = INTERNAL





            

 */

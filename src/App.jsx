import React, {useState} from "react"; 
import Icon from "./Components/Icon";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


let tikArray = new Array(9).fill("")
const App = () => {
//    let [arr, setArr] = useState(["", "", "", "", "", "", "", "", ""])
   let [headm , setHead] = useState("Play Tic Tac Toe Enjoy!")
   let [isCross, setIsCross] = useState(true)
   let [winMessage, setWinMessage] = useState("")

   // playAgain
   const playAgain = () => {
       tikArray.fill("")
       setIsCross(true)
       setWinMessage("")
   }

   // FindWinner

  const findWinner = () => {
    const lines = [
      // rows
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      // columns
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      // diagonals
      [0, 4, 8],
      [2, 4, 6]
    ];
  
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (tikArray[a] && tikArray[a] === tikArray[b] && tikArray[a] === tikArray[c]) {
        setWinMessage(`${tikArray[a]} has won`);
        return;
      }
    }
  
    if (!tikArray.includes("")) {
      setWinMessage("Draw"); //
      return toast("Match Draw")
    }
  
    // If no winner and not a draw, do nothing
  };
  
   

   // changeItem

   const changeItem = (index) => {
       // make some changes later

       if(winMessage){
          return  toast("Game has already been over")
       }
       
       if(tikArray[index] !=""){
              return toast("Open your eyes dude where are you tapping")
       }
       else if(tikArray[index] == ""){
           tikArray[index] =  isCross== true ? "cross" : "circle"
        
           setIsCross(!isCross)
           findWinner()
       }
          
   }

//    const getKey=()=>{
//       return Date.now().toString()
//    }
console.log(headm)

    return(
        <div id="main">
              <h1>{headm.toUpperCase()}</h1> 
                <ToastContainer  position="top-right"/>
              {  
                winMessage?(
                  <div>
                        
                           
                         <h1>{winMessage.toUpperCase()}</h1>
                         <button id="btn" onClick={playAgain}>Play Again</button>
                  </div>
                )
                : 
                (<h1> Chance is of {isCross?"Cross": "Circle"}</h1>)
              }
              

                <div className="grid">
                            {
                                tikArray.map((value, index)=>(
                                    <div key={index} className="box" onClick={()=>changeItem(index)}> 
                                        <Icon ic={value}/>
                                    </div>
                                ))
                            }
                </div>


        </div>
    )
} 

export default App;





 // Another Winner Condition

    // const findWinner = () => {
    //     // row 1
    //       if(tikArray[0] == tikArray[1] && tikArray[0]==tikArray[2] && tikArray[0] != ""){
    //           setWinMessage(tikArray[0]+" has won")
    //       }
    //       // row 2: 
    //         else if(tikArray[3] == tikArray[4] && tikArray[3]==tikArray[5] && tikArray[3] != ""){
    //             setWinMessage(tikArray[3]+" has won")
    //         }
    //         // row 3:
    //         else if(tikArray[6] == tikArray[7] && tikArray[6]==tikArray[8] && tikArray[6] != ""){
    //             setWinMessage(tikArray[6]+" has won")
    //         }
    //         // column 1: 
    //         else if(tikArray[0] == tikArray[3] && tikArray[0]==tikArray[6] && tikArray[0] != ""){
    //             setWinMessage(tikArray[0]+" has won")
    //         }
    //         // column 2:
    //         else if(tikArray[1] == tikArray[4] && tikArray[1]==tikArray[7] && tikArray[1] != ""){
    //             setWinMessage(tikArray[1]+" has won")
    //         }
    //         // column 3:
    //         else if(tikArray[2] == tikArray[5] && tikArray[2]==tikArray[8] && tikArray[2] != ""){
    //             setWinMessage(tikArray[2]+" has won")
    //         }
    //         // diagonal 1:
    //         else if(tikArray[0] == tikArray[4] && tikArray[0]==tikArray[8] && tikArray[0] != ""){
    //             setWinMessage(tikArray[0]+" has won")
    //         }
    //         // diagonal 2:
    //         else if(tikArray[2] == tikArray[4] && tikArray[2]==tikArray[6] && tikArray[2] != ""){
    //             setWinMessage(tikArray[2]+" has won")
    //         }
    
    //        else if(tikArray.indexOf("") == -1) {
    //           setWinMessage("Draw")
    //        }
    
    //    }
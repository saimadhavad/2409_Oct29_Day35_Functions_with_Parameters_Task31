import React, { useRef } from 'react'

function SecondaryEducationMarkSheet() {

    let firstNameInputRef = useRef();
    let lastNameInputRef = useRef();
    let teluguMarksInputRef = useRef();
    let hindiMarksInputRef = useRef();
    let englishMarksInputRef = useRef();
    let mathsMarksInputRef = useRef();
    let scienceMarksInputRef = useRef();
    let socialMarksInputRef = useRef();
    let resultLabelRef = useRef();

    let firstNameSpanResultRef = useRef();
    let lastNameSpanResultRef = useRef();
    let teluguMarksSpanResult = useRef();
    let hindiMarksSpanResult = useRef();
    let englishMarksSpanResult = useRef();
    let mathsMarksSpanResult = useRef();
    let scienceMarksSpanResult = useRef();
    let socialMarksSpanResult = useRef();

    
    let calculateResult = () => {
        let firstName = firstNameInputRef.current.value;
        let lastName = lastNameInputRef.current.value;

        let teluguMarks = Number(teluguMarksInputRef.current.value);
        let hindiMarks = Number(hindiMarksInputRef.current.value);
        let englishMarks = Number(englishMarksInputRef.current.value);
        let mathsMarks = Number(mathsMarksInputRef.current.value);
        let scienceMarks = Number(scienceMarksInputRef.current.value);
        let socialMarks = Number(socialMarksInputRef.current.value);

        let totalMarks = teluguMarks+hindiMarks+englishMarks+mathsMarks+scienceMarks+socialMarks;

        let percentage = (totalMarks/600)*100;

        resultLabelRef.current.innerHTML = `${firstName} ${lastName} 's Total Marks ${totalMarks} with (${percentage.toFixed(2)}%)`;
    }

    let inputOnFocus = (inputRef) => {
        inputRef.current.style.backgroundColor = "#757f9a";
        inputRef.current.style.color = "white";
    }
    let inputOnBlur = (inputRef) => {
        inputRef.current.style.backgroundColor = "";
        inputRef.current.style.color = "";
    }
    let inputOnChange = (inputRef,spanRef) => {
        let marks = inputRef.current.value;
        if(marks>=0 && marks<=100) {
            if (marks>=35){
                spanRef.current.innerHTML = "✔️ Pass";
            }
            else {
                spanRef.current.innerHTML = "❌ Fail";
            }

        }else {
            spanRef.current.innerHTML = "❎ Invalid";
        }
    }

    // OnFocus
    // let firstNameOnFocus = () => {
    //     firstNameInputRef.current.style.backgroundColor = "#757f9a";
    //     firstNameInputRef.current.style.color = "white";
    // }
    //  let lastNameOnFocus = () => {
    //     lastNameInputRef.current.style.backgroundColor = "#757f9a";
    //     lastNameInputRef.current.style.color = "white";
    // }
    // let teluguMarksOnFocus = () => {
    //     teluguMarksInputRef.current.style.backgroundColor = "#757f9a";
    //     teluguMarksInputRef.current.style.color = "white";
    // }
    // let hindiMarksOnFocus = () => {
    //     hindiMarksInputRef.current.style.backgroundColor = "#757f9a";
    //     hindiMarksInputRef.current.style.color = "";
    // }
    // let englishMarksOnfocus = () => {
    //     englishMarksInputRef.current.style.backgroundColor = "#757f9a";
    //     englishMarksInputRef.current.style.color ="white";
    // }
    // let mathsMarksOnFocus = () => {
    //     mathsMarksInputRef.current.style.backgroundColor = "#757f9a";
    //     mathsMarksInputRef.current.style.color = "white";
    // }
    // let scienceMarksOnFocus = () => {
    //     scienceMarksInputRef.current.style.backgroundColor = "#757f9a";
    //     scienceMarksInputRef.current.style.color = "white";
    // }
    // let socialMarksOnFocus = () => {
    //     socialMarksInputRef.current.style.backgroundColor = "#757f9a";
    //     socialMarksInputRef.current.style.color = "white";
    // }

    // OnBlur
    // let firstNameOnBlur = () => {
    //     firstNameInputRef.current.style.backgroundColor = "";
    //     firstNameInputRef.current.style.color = "";
    // }   
    // let lastNameOnBlur = () => {
    //     lastNameInputRef.current.style.backgroundColor = "";
    //     lastNameInputRef.current.style.color = "";
    // }
    // let teluguMarksOnBlur = () => {
    //     teluguMarksInputRef.current.style.backgroundColor = "";
    //     teluguMarksInputRef.current.style.color = "";
    // }
    // let hindiMarksOnBlur = () => {
    //     hindiMarksInputRef.current.style.backgroundColor = "";
    //     hindiMarksInputRef.current.style.color = "";
    // }
    // let englishMarksOnBlur = () => {
    //     englishMarksInputRef.current.style.backgroundColor = "";
    //     englishMarksInputRef.current.style.color = "";
    // }
    // let mathsMarksOnBlur = () => {
    //     mathsMarksInputRef.current.style.backgroundColor = "";
    //     mathsMarksInputRef.current.style.color = "";        
    // }
    // let scienceMarksOnBlur = () => {
    //     scienceMarksInputRef.current.style.backgroundColor = "";
    //     scienceMarksInputRef.current.style.color = "";
    // }
    // let socialMarksOnBlur = () => {
    //     socialMarksInputRef.current.style.backgroundColor = "";
    //     socialMarksInputRef.current.style.color = "";
    // }

    // OnChange
    // let teluguMarksOnChange = () => {
    //     let marks = teluguMarksInputRef.current.value;
    //     if(marks>=0 && marks<=100) {
    //         if (marks>=35){
    //             teluguMarksSpanResult.current.innerHTML = "✔️ Pass";
    //         }
    //         else {
    //             teluguMarksSpanResult.current.innerHTML = "❌ Fail";
    //         }

    //     }else {
    //         teluguMarksSpanResult.current.innerHTML = "❎ Invalid";
    //     }
    //     //2nd WAY
    //     //let marks = Number(hindiMarksInputRef.current.value);
    //     // if(marks>=35) {
    //     //     teluguMarksSpanResult.current.innerHTML ="✔️ Pass";
    //     // }
    //     // else {
    //     //     teluguMarksSpanResult.current.innerHTML ="❌ Fail";
    //     // }
    //     // 1st WAY
    //     //let marks = Number( teluguMarksInputRef.current.value);
    //     //teluguMarksSpanResult.current.innerHTML= marks>=35?"✅ Pass":" ❌ Fail";
    // }    
    // let hindiMarksOnChange = () => {
    //     let marks = Number(hindiMarksInputRef.current.value);
    //     if(marks>=0 && marks<=100) {
    //         if(marks>=35) {
    //             hindiMarksSpanResult.current.innerHTML = "✔️ Pass";
    //         }
    //         else {
    //             hindiMarksSpanResult.current.innerHTML = "❌ Fail";
    //         }
    //     }
    //     else {
    //         hindiMarksSpanResult.current.innerHTML = "❎ Invalid";
    //     }
    //     // 2nd WAY
    //     // let marks = Number(hindiMarksInputRef.current.value);
    //     // if(marks>=35) {
    //     //     hindiMarksSpanResult.current.innerHTML = "✔️ Pass";
    //     // }
    //     // else {
    //     //     hindiMarksSpanResult.current.innerHTML = "❌ Fail";
    //     // }
    //     // 1st WAY
    //     // let marks = Number(hindiMarksInputRef.current.value);
    //     // hindiMarksSpanResult.current.innerHTML = marks>=35?"✅ Pass":" ❌ Fail";
    // }    
    // let englishMarksOnChange = () => {
    //     let marks = englishMarksInputRef.current.value;
    //     if(marks>=0 && marks<=100) {
    //         if(marks>=35) {
    //             englishMarksSpanResult.current.innerHTML = "✔️ Pass";
    //         }
    //         else {
    //             englishMarksSpanResult.current.innerHTML = "❌ Fail"; 
    //         }
    //     }
    //     else {
    //         englishMarksSpanResult.current.innerHTML = "❎ Invalid"; 
    //     }
    //     // 2nd WAY
    //     // let marks = englishMarksInputRef.current.value;
    //     // if(marks>=35) {
    //     //     englishMarksSpanResult.current.innerHTML = "✔️ Pass";
    //     // }
    //     // else {
    //     //     englishMarksSpanResult.current.innerHTML = "❌ Fail";
    //     // }
    //     // 1st WAY
    //     // let marks = englishMarksInputRef.current.value;
    //     // englishMarksSpanResult.current.innerHTML = marks>=35?"✅ Pass":" ❌ Fail";
    // }   
    // let mathsMarksOnChange = () => {
    //     let marks = mathsMarksInputRef.current.value;
    //     if(marks>=0 && marks<=100){
    //         if(marks>=35) {
    //             mathsMarksSpanresult.current.innerHTML ="✔️ Pass";
    //         }
    //         else {
    //             mathsMarksSpanresult.current.innerHTML ="❌ Fail";
    //         }
    //     }
    //     else {
    //         mathsMarksSpanresult.current.innerHTML = "❎ Invalid";
    //     }
    //     // 2nd WAY
    //     // let marks = mathsMarksInputRef.current.value;
    //     // if(marks>=35) {
    //     //     mathsMarksSpanresult.current.innerHTML = "✔️ Pass";
    //     // }
    //     // else {
    //     //     mathsMarksSpanresult.current.innerHTML = "❌ Fail";
    //     // }
    //     // 1st WAY
    //     // let marks = mathsMarksInputRef.current.value;
    //     // mathsMarksSpanresult.current.innerHTML = marks>=35?"✅ Pass":" ❌ Fail";
    // }
    // let scienceMarksOnChange = () => {
    //     let marks = scienceMarksInputRef.current.value;
    //     if(marks>=0 && marks<=100) {
    //         if(marks>=35) {
    //             scienceMarksSpanResult.current.innerHTML = "✔️ Pass";
    //         }
    //         else{
    //             scienceMarksSpanResult.current.innerHTML = "❌ Fail";
    //         }
    //     }
    //     else {
    //         scienceMarksSpanResult.current.innerHTML = "❎ Invalid";
    //     }
    //     // 2nd WAY
    //     // let marks = scienceMarksInputRef.current.value;
    //     // if(marks>=35) {
    //     //     scienceMarksSpanResult.current.innerHTML = "✔️ Pass";
    //     // }
    //     // else {
    //     //     scienceMarksSpanResult.current.innerHTML = "❌ Fail";
    //     // }
    //     // 1st WAY
    //     // let marks = scienceMarksInputRef.current.value;
    //     // scienceMarksSpanResult.current.innerHTML = marks>=35?"✅ Pass":" ❌ Fail";
    // }
    // let socialMarksOnChange = () => {
    //     let marks = socialMarksInputRef.current.value;
    //     if(marks>=0 && marks<=100){
    //         if(marks>=35){
    //             socialMarksSpanResult.current.innerHTML = "✔️ Pass";
    //         }
    //         else {
    //             socialMarksSpanResult.current.innerHTML = "❌ Fail";
    //         }
    //     }
    //     else {
    //         socialMarksSpanResult.current.innerHTML = "❎ Invalid";
    //     }
    //     // 2nd WAY
    //     // let marks = socialMarksInputRef.current.value;
    //     // if(marks>=35) {
    //     //     socialMarksSpanResult.current.innerHTML = "✔️ Pass";
    //     // }
    //     // else {
    //     //     socialMarksSpanResult.current.innerHTML = "❌ Fail";
    //     // }
    //     // 1st WAY
    //     // let marks = socialMarksInputRef.current.value;
    //     // socialMarksSpanResult.current.innerHTML = marks>=35?"✅ Pass":" ❌ Fail";
    // }
    
  return (
    <div>
        <form>
            <h1>Secondary Education MarkSheet</h1>
           <fieldset className='fLName'>
            <legend>Personal Details</legend>
           <div className='firstName'>
                <label>First name</label>
                <span className='spanColon'>:</span>
                <input type='text' ref={firstNameInputRef}
                    onFocus={ () => {inputOnFocus(firstNameInputRef);}}
                    onBlur={ () => {inputOnBlur(firstNameInputRef);}}
                ></input>
                <span className="spanResult" ref={firstNameSpanResultRef}></span>
            </div>
            <div className='lastName'>
                <label>Last name</label>
                <span className='spanColon'>:</span>
                <input type='text' ref={lastNameInputRef}
                    onFocus={ () => {inputOnFocus(lastNameInputRef);}}
                    onBlur={ () => {inputOnBlur(lastNameInputRef);}}                
                ></input>
                <span className="spanResult" ref={lastNameSpanResultRef}></span>
            </div>
           </fieldset>
           <fieldset>
            <legend>Marks Details</legend>
           <div className='teluguMarks'>
                <label>Telugu</label>
                <span className='spanColon'>:</span>
                <input type='number' ref={teluguMarksInputRef}
                    onFocus={ () => {inputOnFocus(teluguMarksInputRef);}}
                    onChange={ () => {inputOnChange(teluguMarksInputRef,teluguMarksSpanResult);}}
                    onBlur={ () => {inputOnBlur(teluguMarksInputRef);}}                
                ></input>
                <span className="spanResult" ref={teluguMarksSpanResult}></span>
            </div>
            <div className='hindiMarks'>
                <label>Hindi</label>
                <span className='spanColon'>:</span>
                <input type='number' ref={hindiMarksInputRef}
                    onFocus={ () => {inputOnFocus(hindiMarksInputRef);}}
                    onChange={ () => {inputOnChange(hindiMarksInputRef,hindiMarksSpanResult)}}
                    onBlur={ () => {inputOnBlur(hindiMarksInputRef);}}                
                ></input>
                <span className="spanResult" ref={hindiMarksSpanResult}></span>
            </div>
            <div className='englishMarks'>
                <label>English</label>
                <span className='spanColon'>:</span>
                <input type='number' ref={englishMarksInputRef}
                    onFocus={ () => {inputOnFocus(englishMarksInputRef);}}
                    onChange={ () => {inputOnChange(englishMarksInputRef,englishMarksSpanResult)}}
                    onBlur={ () => {inputOnBlur(englishMarksInputRef);}}                
                ></input>
                <span className="spanResult" ref={englishMarksSpanResult}></span>
            </div>
            <div className='mathsMarks'>
                <label>Maths</label>
                <span className='spanColon'>:</span>
                <input type='number' ref={mathsMarksInputRef}
                    onFocus={ () => {inputOnFocus(mathsMarksInputRef);}}
                    onChange={ () => {inputOnChange(mathsMarksInputRef,mathsMarksSpanResult)}}
                    onBlur={ () => {inputOnBlur(mathsMarksInputRef);}}
                ></input>
                <span className="spanResult" ref={mathsMarksSpanResult}></span>
            </div>
            <div className='scienceMarks'>
                <label>Science</label>
                <span className='spanColon'>:</span>
                <input type='number' ref={scienceMarksInputRef}                
                    onFocus={ () => {inputOnFocus(scienceMarksInputRef);}}
                    onChange={ () => {inputOnChange(scienceMarksInputRef,scienceMarksSpanResult)}}
                    onBlur={ () => {inputOnBlur(scienceMarksInputRef);}}                
                ></input>
                <span className="spanResult" ref={scienceMarksSpanResult}></span>
            </div>
            <div className='socialMarks'>
                <label>Social</label>
                <span className='spanColon'>:</span>
                <input type='number' ref={socialMarksInputRef}
                    onFocus={ () => {inputOnFocus(socialMarksInputRef);}}
                    onChange={ () => {inputOnChange(socialMarksInputRef,socialMarksSpanResult)}}
                    onBlur={ () => {inputOnBlur(socialMarksInputRef);}}                
                ></input>
                <span className="spanResult" ref={socialMarksSpanResult}></span>
            </div>
           </fieldset>
            <div>
                <button className='buttonColor' type='button'
                    onClick={ () => { calculateResult();}}
                >Calculate Result</button>
            </div>
            <div>
            <label className = "innerLabel" ref={resultLabelRef}></label>
        </div>
        </form>
    </div>
  )
}

export default SecondaryEducationMarkSheet

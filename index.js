// Application to check Admission 

const candGender = ["male", "female"];
const candState = ["Abia",
    "Adamawa", "Akwa Ibom", "Anambra",
    "Bauchi", "Bayelsa", "Benue", "Borno",
    "Cross River", "Delta",
    "Ebonyi", "Edo", "Ekiti", "Enugu",
    "FCT - Abuja", "Gombe", "Imo",
    "Jigawa", "Kaduna", "Kano", "Katsina",
    "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa",
    "Niger", "Ogun", "Ondo", "Osun", "Oyo",
    "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara"];
const catchmentState = ["Lagos", "Edo" , "Kogi" , "Ogun" , "Ekitti" , "oyo" , "ondo"]
const candSub = ["chemistry", "Agric", "Physics", "C.R.S", "Igbo"];
const candSub1 = ["Biology", "Accounting", "Commerce", "furthermaths", "Government"];
const candSub2 = ["litrature", "History", "Fine Arts", "French", "Yoruba"];

const candGrade = ["A1", "B2", "B3", "C4", "C5", "C6", "D7", "E8", "F9"];

const mailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const btn = document.getElementsByClassName("container1_error")
let addChecker = {
    ErrorMessage: "",
    personal: {
        FirstName: "",
        LastName: "",
        DateOfBirth: "",
        gender: 0,
        Email: "",
        MobileNumber: "",
        StateOfOrigin: 0,
        IsValid: function () {
            this.FirstName = document.getElementById("candName").value
            this.LastName = document.getElementById("candLastName").value
            this.DateOfBirth = document.getElementById("Date").value
            this.Email = document.getElementById("candMail").value
            this.MobileNumber = document.getElementById("mobileNumber").value;
            this.StateOfOrigin = candState[Number(this.StateOfOrigin)-1]
            this.gender = document.getElementById("ddGender").value


            if (this.FirstName.length < 3) {
                addChecker.ErrorMessage = "Kindly!!! Input a valid name..."
                return 0;
            }
            if (this.LastName.length < 3) {
                addChecker.ErrorMessage = "Kindly!!! Input a valid Last Name..."
                return 0;
            }
            if (!this.DateOfBirth) {
                addChecker.ErrorMessage = "Kindly!!! Choose Your Date Of Birth..."
                return 0;
            }
            let age = (new Date().getFullYear()) - (new Date(this.DateOfBirth).getFullYear())
            if (age < 16) {
                addChecker.ErrorMessage = "Sorry!!! You Must Be Above 16..."
                return 0;
            } 
            console.log("wahala");
            if (!mailRegex.test(this.Email)) {
                addChecker.ErrorMessage = "Kindly!!! Input a valid Email..."
                return 0;
            }
            console.log("wahala");
            if (this.MobileNumber.length !== 11) {
                addChecker.ErrorMessage = "Kindly!!! Input a valid Mobile Number..."
                return 0;
            }
            if (this.gender == '0') {
                addChecker.ErrorMessage = "Kindly!!! Choose your Gender..."
                return 0;
            }
            
            if (this.StateOfOrigin == '0') {
                addChecker.ErrorMessage = "Kindly!!! Choose a State..."
                return 0;
            }
            console.log('boo')
            return 1
        },
    },


    Pervisity: {
        Utme: 0,
        putme: 0,
        totalScore: 0,
        calculateUtmeScore: 0,
        IsValid: function () {

            // this.Utme= Number(candUtme);
            //  this.putme = Number(candPutme);

            this.Utme = Number(document.getElementById("candUtme").value)
            this.putme = Number(document.getElementById("candPutme").value)
            //    console.log(Utme);

            if (this.Utme === 0 || isNaN(Number(this.Utme))) {
                addChecker.ErrorMessage = "Kindly...Input a valid UTME Score"
                return 0;
            } if (this.Utme > 400) {
                addChecker.ErrorMessage = "Your Score is above 400...Kindly input a valid score"
                return 0;
            } if (this.Utme < 180) {
                addChecker.ErrorMessage = "I Am SORRY, YOU DID NOT MEET CUT OFF MARK"
                return 0;
            } if (this.putme === 0 || isNaN(Number(this.putme))) {
                addChecker.ErrorMessage = "Kindly...Input a valid Putme Score"
                return 0;
            } if (this.putme > 20) {
                addChecker.ErrorMessage = "Your Score is above 20...Kindly input a valid score"
                return 0;
            } if (this.putme < 12) {
                addChecker.ErrorMessage = "I Am Sorry, You Did not Meet The Cut Off Mark"
                return 0;
            }
                
            // CALCULATING UTME & PUTME

            this.totalUtmeScore = Math.round(this.Utme / 8);
            this.totalScore = this.totalUtmeScore + this.putme;
            addChecker.ErrorMessage = "";
            console.log(this.totalScore);
            return 1
            
            
        }
    },


    OlevelScore: {
        oneSitting: 0,
        Maths: 0,
        English: 0,
        Subjects1: 0,
        Subjects1gr: 0,
        Subjects2: 0,
        Subjects2gr: 0,
        Subjects3: 0,
        Subjects3gr: 0,
        candTotalOlevelScore: 0,

        IsValid: function () {
            oneSitting = Number(document.getElementById("candSittings").value);
            Maths = Number (document.getElementById("grsubj1").value);
            English = Number(document.getElementById("grsubj2"). value);
            Subjects1 = document.getElementById("subj1"). value;
            Subjects1gr = Number (document.getElementById("grsubj3").value)
            Subjects2 = document.getElementById("subj2"). value;
            Subjects2gr = Number(document.getElementById("grsubj4"). value);
            Subjects3 = document.getElementById("subj3"). value;
            Subjects3gr = Number(document.getElementById("grsubj5"). value);

            ;console.log(Maths);
            console.log(English);
            console.log(Subjects1)
            console.log(Subjects1gr)
            console.log(Subjects2gr)
            console.log(Subjects2)
            console.log(Subjects3)
            console.log(Subjects3gr);
            console.log(Subjects3gr)
            //One sitting

            // if (oneSitting > 3) {
            //     addChecker.ErrorMessage = "Sorry You Can't go Further!!! You Have More Than 3 Sittings "
            //     return 0
            // }

            // Olevel score
               if (Maths === -1) {
                addChecker.ErrorMessage = "Kindly, Choose Your Maths Grade"  
            } if (English === -1)  {
                addChecker.ErrorMessage = "Kindly, Choose Your ENGLISH Grade"
            } if (Number(Subjects1) === 0) {
                addChecker.ErrorMessage = "Kindly, Choose A Subject"
            } if  (Subjects1gr === -1) {
                addChecker.ErrorMessage = "Kindly, Choose Your  Grade"
            } if (Number(Subjects2) === 0){
                addChecker.ErrorMessage = "Kindly, Choose Your  Grade"
            } if (Subjects2gr === -1) {
                addChecker.ErrorMessage = "Kindly, Choose Your  Subject" 
            } if (Number(Subjects3) === 0){
                addChecker.ErrorMessage = "Kindly, Choose Your  Subject"
            } if (Subjects3gr === -1) {
                addChecker.ErrorMessage = "Kindly, Choose Your  Grade"
                
            }
            //Caculation of Olevel
              candTotalOlevelScore = Math.round((Maths + English + Subjects1gr +  Subjects2gr + Subjects3gr  / 50)*30)
            // candidate_store.finalScore = Math.round((olevelMerit / 50) * 30 
            //   console.log(this.candTotalOlevelScore);
        }
        },

         Eligibility:{
            finalResult: document.getElementById("display_result"),
            finalScore: 0,
            toggleState : false,
            IsValid: function () {
                // let stateIndex = getElementById('')

                finalScore = addChecker.OlevelScore.candTotalOlevelScore +  addChecker.Pervisity.calculateUtmeScore;
                // if (FirstName.length === 0|| candMail.length === 0) {
                //     return (result.innerHTML = "ERROR...Fill In All Details");
                console.log(finalScore);
                     if (finalScore >= 70 && finalScore <= 75) {
                    return  " Qualified for MERIT SCORE!!!";
                  } else if (finalScore >= 60 && finalScore < 64) {
                    return "Qualified for CONCESSIONARY!!!";
                  } else if ((finalScore > 55 && finalScore < 60) && ["Ekiti", "Lagos", "Oyo", "Edo", "Osun", "Ogun", "Edo", "Kogi"].includes(this.personal.StateOfOrigin)) {
                    return "Qualified for CATCHMENT!!!";
                  } else if (finalScore > 51 && finalScore < 55) {
                    return" Qualified for VC'S!!!";
                  } 
                   else {
                    return "you are disqualified";
                  }
                
            }
                 

         }










}

let stateDDown5 = document.getElementById("candState");
stateDDown5.innerHTML = `<option value="0">---Please Select---</option>`


window.addEventListener('DOMContentLoaded', () => {
    let dropdown = document.getElementById("ddGender");
    dropdown.innerHTML = `<option value="0">---Please Select---</option>`

    candGender.forEach((gender, index) => {
        dropdown.innerHTML += `<option value="${index + 1}"> ${gender} </option>`
    });
    console.log(dropdown);


    //-----------------------------------Subject dropdown------------------+

    let subDDown = document.getElementById("subj1");
    subDDown.innerHTML = `<option value="0">---Please Select---</option>`

    candSub.forEach((subject, index) => {
        subDDown.innerHTML += `<option value="${index + 1}"> ${subject} </option>`
    });

    let subDDown1 = document.getElementById("subj2");
    subDDown1.innerHTML = `<option value="0">---Please Select---</option>`

    candSub1.forEach((subject, index) => {
        subDDown1.innerHTML += `<option value="${index + 1}"> ${subject} </option>`
    });

    let subDDown2 = document.getElementById("subj3");
    subDDown2.innerHTML = `<option value="0">---Please Select---</option>`

    candSub2.forEach((subject, index) => {
        subDDown2.innerHTML += `<option value="${index + 1}"> ${subject} </option>`
    })

    //----------------------------------------Grade dropdown----------------

    let gradeDDown1 = document.getElementById("grsubj1");
    gradeDDown1.innerHTML = `<option value="-1">---Please Select---</option>`
    let a = 10
    candGrade.forEach((grade, index) => {
        if (index === candGrade.length - 1) {
            gradeDDown1.innerHTML += `<option value="0"> ${grade} </option>`
            return
        }
        gradeDDown1.innerHTML += `<option value="${a--}"> ${grade} </option>`
    })

    let gradeDDown2 = document.getElementById("grsubj2");
    gradeDDown2.innerHTML = `<option value="-1">---Please Select---</option>`
    let i = 10
    candGrade.forEach((grade, index) => {
        if (index === candGrade.length - 1) {
            gradeDDown2.innerHTML += `<option value="0"> ${grade} </option>`
            return
        }
        gradeDDown2.innerHTML += `<option value="${i--}"> ${grade} </option>`
    })
    let gradeDDown3 = document.getElementById("grsubj3");
    gradeDDown3.innerHTML = `<option value="-1">---Please Select---</option>`
    let b = 10
    candGrade.forEach((grade, index) => {
        if (index === candGrade.length - 1) {
            gradeDDown3.innerHTML += `<option value="0"> ${grade} </option>`
            return
        }
        gradeDDown3.innerHTML += `<option value="${b--}"> ${grade} </option>`

    })

    let gradeDDown4 = document.getElementById("grsubj4");
    gradeDDown4.innerHTML = `<option value="-1">---Please Select---</option>`
    let c = 10
    candGrade.forEach((grade, index) => {
        if (index === candGrade.length - 1) {
            gradeDDown4.innerHTML += `<option value="0"> ${grade} </option>`
            return
        }
        gradeDDown4.innerHTML += `<option value="${c--}"> ${grade} </option>`
    })
    let gradeDDown5 = document.getElementById("grsubj5");
    gradeDDown5.innerHTML = `<option value="-1">---Please Select---</option>`
    let d = 10
    candGrade.forEach((grade, index) => {
        if (index === candGrade.length - 1) {
            gradeDDown5.innerHTML += `<option value="0"> ${grade} </option>`
            return
        }
        gradeDDown5.innerHTML += `<option value="${d--}"> ${grade} </option>`
    })

    //--------------------------------------STATE DROPDOWN------------------------



    candState.forEach((state, index) => {
        stateDDown5.innerHTML += `<option value="${index + 1}"> ${state} </option>`
    })




})





let Finish = document.getElementById("cN1");
let Finish2 = document.getElementById("cN2");
let Finish3 = document.getElementById("cN3");



document.getElementById("submit_cn_1").addEventListener("click", () => {
    console.log("Booyah!!!")
    if (!addChecker.personal.IsValid()) {
        document.getElementsByClassName("container1_error")[0].innerHTML = addChecker.ErrorMessage;
        return;
    }
    Finish.classList.toggle('hide')
    Finish2.classList.toggle('hide')
    
})

document.getElementById("submit_cn_2").addEventListener("click", () => {
    console.log("Booyah!!!")
    if (!addChecker.Pervisity.IsValid()) {
        document.getElementsByClassName("container1_error")[0].innerHTML = addChecker.ErrorMessage;
        return;
    }
    Finish2.classList.toggle('hide')
    Finish3.classList.toggle('hide')
})
document.getElementById("submit_cn_3").addEventListener("click", () => {
    if (!addChecker.OlevelScore.IsValid()) {
        document.getElementsByClassName("container1_error")[0].innerHTML = addChecker.ErrorMessage;
    }
    
    document.getElementById('display_result').classList.remove('hide')
    document.getElementById('display_result').innerText = addChecker.Eligibility.IsValid()

})
import { Component, OnInit } from '@angular/core';
import { questions_and_responses,invalid_responses,byMistake_responses } from '../../questions_and_responses/questions_responses';
import {ChatBotService} from '../../services/chat-bot.service';

@Component({
  selector: 'app-pizel-chat-bot',
  templateUrl: './pizel-chat-bot.component.html',
  styleUrls: ['./pizel-chat-bot.component.css']
})
export class PizelChatBotComponent implements OnInit {

  slideOpen = false;
  heightChecked = false;
  initHeight = 315;

  title = 'PizzaDelivery';
  bot_question1;bot_question;bot_options;
  options1;
  currentQuestion;currentOptions;currentQuestionIndex:number;
  correctUserInput:boolean;
  addedPizzaCount=1;
  userCity='';userPizzaOrderedDateTime;
  userSelectedPizza='';userSelectedAddOns='No Toppings';userSelectedPizzaSize='';userSelectedPizzaPrice=0;userTotalPriceOfPizza=0;userNumberOfPizza=0;
  userPaymentMode='Cash On Delivery (COD)';
  billID;billingName;billingMobileNumber;billingEmailAddress;billingAddress;billingDateTime;
  connectRequestTime;connectReason;
  bulkOrderID;bulkOrderPeopleExpected;bulkOrderExpectedDate;bulkOrderRequestTime;
  selectedOption1:boolean = false;selectedOption2:boolean = false;selectedOption3:boolean = false;
  userAlreadyExists;emailAlreadyExists;
  checkuserLoginID;checkUserLoginPassword;
  checkBillID;
  userId;userLoginPassword;
  validOrderID='';
  count1;count2;count2_1;count4;count6;count10;
  count11;count12;count13;count14;count15;count16;count17;count18;count20;
  count31;count35;count39;
  count41;count42;count43;count44;count44_1;count46;count47;count47_1;count48;count49;count50_1;
  count51_1;

  constructor(private chatBotService:ChatBotService) { }

  clearUserPizzaDetails(){
    this.userSelectedPizza='';
    this.userSelectedAddOns='No Toppings';
    this.userSelectedPizzaSize='';
    this.userSelectedPizzaPrice=0;
    this.userTotalPriceOfPizza=0;
    this.userNumberOfPizza=0;
    this.addedPizzaCount=1;
    this.selectedOption1=false;
    this.selectedOption2=false;
    this.selectedOption3=false;
  }

  currentTime(){
    let d = new Date();
    return d.toLocaleTimeString([],{hour:'2-digit', minute:'2-digit', hour12:true});
  }

  currentDateTime(){
    let dt = new Date();
    return dt.toLocaleString();
  }

  randomOrderID(){
    let max=100000,min=10000;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  randomByMistakeResponses(){
    let temp = byMistake_responses[0].byMistakeResponses;
    return temp[Math.floor(Math.random()*(Object.keys(temp).length))];
  }

  randomInvalidResponses(){
    let temp = invalid_responses[0].invalidRespones;
    //console.log(temp[Math.floor(Math.random()*(Object.keys(temp).length))]);
    return temp[Math.floor(Math.random()*(Object.keys(temp).length))];
  }

  createBotMessage(botQuestion:any,botOptions:any,response:any){
    // console.log("botQuestion: "+botQuestion);
    // console.log("botOptions: "+botOptions);
    // console.log("response: "+response);
    if(botQuestion!==''){
      //console.log("Inside createBotMEssage IF");
      let firstDiv = document.createElement('div');
      firstDiv.className = "bot-div chat-message";
      let botPicture = document.createElement('img');
      botPicture.className = "bot-pic";
      botPicture.src = "../assets/avataar1.png";
      let secondDiv = document.createElement('div');
      secondDiv.className = "chat-message-content bot-message";
      let insideParagraph = document.createElement('p');
      insideParagraph.innerHTML+=botQuestion;
      // insideParagraph.scrollIntoView();
      let timeSpan = document.createElement('span');
      timeSpan.className = "bot-time chat-time";
      timeSpan.innerHTML= this.currentTime();
      secondDiv.appendChild(insideParagraph);
      firstDiv.appendChild(botPicture);
      firstDiv.appendChild(secondDiv);
      firstDiv.appendChild(timeSpan);
      if(botOptions!= ''){
        let buttonLength = botOptions.length;
        for(let i=0;i<buttonLength;i++){
          let optionButtons = botOptions[i];  
          optionButtons = document.createElement('input');
          optionButtons.type = "submit";
          //optionButtons.id = botOptions[i];
          optionButtons.className = "options";
          if(i==0){
            optionButtons.classList.add("option1");
          }
          optionButtons.value = botOptions[i];
          optionButtons.scrollIntoView();
          firstDiv.appendChild(optionButtons);
          optionButtons.addEventListener("click",($event)=>this.option_Clicked($event));      
        }
      }
      let appendElem = document.getElementsByTagName("div")[5];
      appendElem.appendChild(firstDiv);

      this.currentQuestion = botQuestion;
      this.currentOptions = botOptions;
      //return;
    }
    else{
      //console.log("response inside else: "+response);
      let firstDiv = document.createElement('div');
      firstDiv.className = "bot-div chat-message";
      let botPicture = document.createElement('img');
      botPicture.className = "bot-pic";
      botPicture.src = "../assets/avataar1.png";
      let secondDiv = document.createElement('div');
      secondDiv.className = "chat-message-content bot-message";
      let insideParagraph = document.createElement('p');
      insideParagraph.innerHTML+=response;
      let timeSpan = document.createElement('span');
      timeSpan.className = "bot-time chat-time";
      timeSpan.innerHTML= this.currentTime();
      secondDiv.appendChild(insideParagraph);
      firstDiv.appendChild(botPicture);
      firstDiv.appendChild(secondDiv);
      firstDiv.appendChild(timeSpan);
      let appendElem = document.getElementsByTagName("div")[5];
      appendElem.appendChild(firstDiv);
    }
    //console.log(appendElem);
  }
  

  createUserMessage(selectedValue){
    let firstDiv = document.createElement('div');
    //firstDiv.classList.add('user-div','chat-message','space');
    firstDiv.className = "user-div chat-message space";
    let secondDiv = document.createElement('div');
    //secondDiv.classList.add('chat-message-content','human-message');
    secondDiv.className = "chat-message-content human-message";
    let insideParagraph = document.createElement('p');
    insideParagraph.innerHTML = selectedValue;
    let timeSpan = document.createElement('span');
    timeSpan.className = 'chat-time user-time';
    timeSpan.innerHTML = this.currentTime();
    secondDiv.appendChild(insideParagraph);
    firstDiv.appendChild(secondDiv);
    firstDiv.appendChild(timeSpan);
    //console.log(firstDiv);

    let mainDiv = document.getElementById("chatHistory");
    mainDiv.appendChild(firstDiv);
    let hideElement = document.getElementsByClassName('options');
    for(let i=0;i<hideElement.length;i++){
      let tempVariable = hideElement[i] as HTMLElement;
      tempVariable.style.display='none';
    }
    // if(this.currentOptions[0]=="Check My Order"){
    //   if((selectedValue).toLowerCase().includes((this.currentOptions[0]).toLowerCase())){
    //     this.checkMyOrder();
    //     return;
    //   }
    // }
    // this.typingGif();
    // let temp = window.setTimeout(function(){
    //   this.checkUserMessage(selectedValue);    
    // },2000);
    this.checkUserMessage(selectedValue); 
  }

  sendImageVisibility(event){
    let textBoxValue = event.target.value;
    //console.log("textBoxValue :"+textBoxValue);
    if(textBoxValue=='' || textBoxValue.trim().length==0){
      document.getElementById("sendImg").style.display='none';
      return;
    }
    document.getElementById("sendImg").style.display='block';
  }

  sendButtonClick(){
    let userTextBoxValue = ((document.getElementById("userInput") as HTMLInputElement).value);
    if(userTextBoxValue=='' || userTextBoxValue.trim().length==0 || userTextBoxValue.trim().length==1 || !(userTextBoxValue)){
      return;
    }
    this.createUserMessage(userTextBoxValue);
    (document.getElementById("userInput") as HTMLInputElement).value = '';
  }

  userTextBox(event){
    let textBoxValue = event.target.value;
    //To eliminate null and space characters
    if(textBoxValue=='' || textBoxValue.trim().length==0 || textBoxValue.trim().length==1 || !(textBoxValue)){
      return;
    }
    this.sendButtonClick();
  }
  
  randomArrayValue(arrayItem){
    return arrayItem[Math.floor(Math.random()*arrayItem.length)];
  }

  minMaxWindow(){
    let chatWindow = document.getElementById('chat');
    if(this.slideOpen) {
        this.slideOpen = false;
        chatWindow.style.height = '0px';
    }
    else {
        this.slideOpen = true;
        chatWindow.style.height = this.initHeight + 'px';
    }
  }

  option_Clicked(clickedOption){
    let clickedValue = clickedOption.currentTarget.value;
    this.createUserMessage(clickedValue);
  }

  checkUserMessage(userText){
    //userText = userText.toLowerCase();
    let optionsLength = this.currentOptions.length;
    this.correctUserInput = false;
    var textPlaceHolder:any = <HTMLInputElement>document.getElementById("userInput");//TextBox
    //console.log("this is checkusermessage:");
    //console.log("this currentquestionindex: "+this.currentQuestionIndex);
    
    //this.typingGif();
    if(this.currentQuestionIndex==39){
      QuestionIndex39:{
        let question39 = questions_and_responses[0][39];
          if(userText.toLowerCase().includes(question39.options[8].toLowerCase())){
            let response = this.randomArrayValue(questions_and_responses[0][40].questions);
            //let nextQuestOptions = questions_and_responses[0][9].options;
            this.correctUserInput=true;
            this.createBotMessage('','',response);
            this.currentQuestionIndex=39;
            this.bot_question=this.randomArrayValue(questions_and_responses[0][39].questions);
            this.bot_options = questions_and_responses[0][39].options;
            this.createBotMessage(this.bot_question,this.bot_options,'');
            this.count39 = 0;
            break QuestionIndex39;
          }
          for(let i=0;i<question39.questions.length;i++){
            //console.log("i: "+i);        
              for(let j=0;j<question39.options.length-1;j++){
                //console.log("j: "+j);
                if(userText.toLowerCase().includes(question39.options[j].toLowerCase())){
                  this.userCity = question39.options[j];
                  this.correctUserInput=true;
                  //console.log("currentQuestionIndex: "+this.currentQuestionIndex);
                  this.loadNextQuestion();
                  this.count39 = 0;
                  break QuestionIndex39;
                }
              }
          }
      }
    }
    else if(this.currentQuestionIndex==41){
      //QuestionIndex41:{
        if(userText.toLowerCase().includes(this.currentOptions[0].toLowerCase())){
          this.selectedOption1=true;
          this.count41=0;
          this.correctUserInput = true;
          let response = "🚧 BILLING DETAILS, SHIPPING DETAILS AND USER DETAILS ARE SAME ! <br><br>🚧 DETAILS ONCE ENTERED CANNOT BE CHANGED AT ANY TIME ! <br><br>🚧 YOU CANNOT SIGNUP FOR ANOTHER ACCOUNT WITH THE SAME EMAIL WHICH IS USED HERE ! ";
          this.createBotMessage('','',response);
          textPlaceHolder.placeholder = "Enter Your Cool Name Here : ";
          this.loadNextQuestion();
          //break QuestionIndex41;
        }
        else if(userText.toLowerCase().includes(this.currentOptions[1].toLowerCase())){
          this.selectedOption2=true;
          this.count41=0;
          this.correctUserInput = true;
          textPlaceHolder.placeholder = "Enter Here : ";
          this.loadNextQuestion();
          //break QuestionIndex41;
        }
        else{
          if(this.count41<1){
            this.count41++;
            this.correctUserInput = true;
            let invalidResp = "Seriously ? Come On, Give Me Proper Input !<br>";
            console.log("Input is wrong ; inside else");
            this.createBotMessage('','',invalidResp);
            this.bot_question=this.randomArrayValue(questions_and_responses[0][41].questions);
            this.bot_options = questions_and_responses[0][41].options;
            this.currentQuestionIndex = 41;
            this.createBotMessage(this.bot_question,this.bot_options,'');
            this.selectedOption1=false;
            this.selectedOption2=false;
          }
        }
      //}
    }
    else if(this.currentQuestionIndex==42){
      //QuestionIndex42:{
        let regEx ="^[a-zA-Z ]{2,}$"; //only alphabets and spaces //min 2 characters
        if(userText.match(regEx)!=null){
          this.billingName=userText;
          this.correctUserInput = true;
          this.count42 = 0;
          this.loadNextQuestion();
          textPlaceHolder.placeholder="Enter Your Mobile Number Here: ";
          //break QuestionIndex21;
        }
        else{
          if(this.count42<1){
            this.count42++;
            this.correctUserInput = true;
            let invalidResp = this.randomByMistakeResponses();
            console.log("Input is wrong ; inside else");
            this.createBotMessage('','',invalidResp);
            this.bot_question=this.randomArrayValue(questions_and_responses[0][42].questions);
            this.currentQuestionIndex = 42;
            this.createBotMessage('','',this.bot_question);
          }
        }
      //}
    }
    else if(this.currentQuestionIndex==43){
      //QuestionIndex43:{
        let regEx = /^\d{10}$/; //10 digit number
          if(regEx.test(userText)==true){
            this.billingMobileNumber = userText;
            this.correctUserInput = true;
            this.count43=0;
            this.loadNextQuestion();
            textPlaceHolder.placeholder="Enter Your Billing Email ID Here: ";
          }
          else{
            if(this.count43<1){
              this.count43++;
              this.correctUserInput = true;
              let invalidResp = this.randomInvalidResponses();
              console.log("Input is wrong ; inside else");
              this.createBotMessage('','',invalidResp);
              this.bot_question=this.randomArrayValue(questions_and_responses[0][43].questions);
              this.currentQuestionIndex = 43;
              this.createBotMessage('','',this.bot_question);
            }
          }
      //}
    }
    else if(this.currentQuestionIndex==44){
      //QuestionIndex44:{
        let regEx = /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/; //checks null and some email validations
        if(regEx.test(userText)==true){
          this.billingEmailAddress=userText;
          this.checkEmailExistsAlready();
          this.correctUserInput = true;
          this.count44 = 0;
          textPlaceHolder.placeholder="Enter Your Address Here: ";
          //this.loadNextQuestion();
        }
        else{
          if(this.count44<1){
            this.count44++;
            this.correctUserInput = true;
            let invalidResp = this.randomInvalidResponses();
            console.log("Input is wrong ; inside else");
            this.createBotMessage('','',invalidResp);
            this.bot_question=this.randomArrayValue(questions_and_responses[0][44].questions);
            this.currentQuestionIndex = 44;
            this.createBotMessage('','',this.bot_question);
          }
        }
      //}
    }
    else if(this.currentQuestionIndex==45){
      //as of now, no validations for billing address
      this.billingAddress = userText;
      this.correctUserInput = true;
      textPlaceHolder.placeholder = "Enter Here: "
      this.loadNextQuestion();
    }
    else if(this.currentQuestionIndex==46){
      if(userText.toLowerCase().includes(this.currentOptions[0].toLowerCase())){
        this.correctUserInput = true;
        this.count46 = 0;
        textPlaceHolder.placeholder="Enter a UserId: ";
        this.loadNextQuestion();
      }
      else if(userText.toLowerCase().includes(this.currentOptions[1].toLowerCase())){
        this.currentQuestionIndex=44;
        textPlaceHolder.placeholder="Enter Your Address Here: ";
        this.correctUserInput = true;
        this.count46 = 0;
        this.loadNextQuestion();
      }
      else{
        if(this.count46<1){
          this.count46++;
          this.correctUserInput = true;
          let invalidResp = this.randomInvalidResponses();
          console.log("Input is wrong ; inside else");
          this.createBotMessage('','',invalidResp);
          this.bot_question=this.randomArrayValue(questions_and_responses[0][46].questions);
          this.bot_options = questions_and_responses[0][46].options;
          this.currentQuestionIndex = 46;
          this.createBotMessage(this.bot_question,this.bot_options,''); 
        }
      }
    }
    else if(this.currentQuestionIndex==47){
      //QuestionIndex47:{
        let regEx = "^[a-zA-Z](?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\\S+$).{4,10}$";
        if(userText.match(regEx)!=null){
          this.userId = userText;
          this.checkUserIdExistsAlready();
          //console.log("this.userAlreadyExists inside checkusermsg: "+this.userAlreadyExists);
          this.correctUserInput = true;
          this.count47=0;
          textPlaceHolder.placeholder = "Enter a Login Password: ";
          //this.loadNextQuestion();
          // break QuestionIndex47;
        }
        else{
          if(this.count47<1){
            this.count47++;
            this.correctUserInput = true;
            let invalidResp = this.randomInvalidResponses();
            console.log("Input is wrong ; inside else");
            this.createBotMessage('','',invalidResp);
            this.bot_question=this.randomArrayValue(questions_and_responses[0][47].questions);
            this.currentQuestionIndex = 47;
            this.createBotMessage('','',this.bot_question); 
            this.bot_question = questions_and_responses[0][47].subquestion;
            this.createBotMessage('','',this.bot_question); 
          }
        }
      //}
    }
    else if(this.currentQuestionIndex==48){
      let regEx = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\\S+$).{5,20}$";
        if(userText.match(regEx)!=null){
          this.userLoginPassword = userText;
          this.correctUserInput = true;
          this.count48=0;
          textPlaceHolder.placeholder = "Enter Here: ";
          this.insertUserDetails();
          this.loadNextQuestion();
          // let response = "Yay, Your Account is Successfully Created ! Kindly Login Now !";
          // this.bot_options = 'Login'
          //this.loadNextQuestion();
        }
        else{
          if(this.count48<1){
            this.count48++;
            this.correctUserInput = true;
            let invalidResp = this.randomInvalidResponses();
            console.log("Input is wrong ; inside else");
            this.createBotMessage('','',invalidResp);
            let response=this.randomArrayValue(questions_and_responses[0][48].questions);
            this.currentQuestionIndex = 48;
            this.createBotMessage('','',response);
            response = questions_and_responses[0][48].subquestion;
            this.createBotMessage('','',response);
          }
        }
    }
    else if(this.currentQuestionIndex==49){
      if(userText.toLowerCase().includes(this.currentOptions[0].toLowerCase())){
        this.correctUserInput = true;
        this.count49=0;
        textPlaceHolder.placeholder = "Enter Your User ID/Login ID Here :";
        this.loadNextQuestion();
      }
      else{
        if(this.count49<1){
          this.count49++;
          this.correctUserInput = true;
          let invalidResp = "Kindly Give Me Proper Input this Time !<br>";
          console.log("Input is wrong ; inside else");
          this.createBotMessage('','',invalidResp);
          this.bot_question=this.randomArrayValue(questions_and_responses[0][49].questions);
          this.bot_options = questions_and_responses[0][49].options;
          this.currentQuestionIndex = 49;
          this.createBotMessage(this.bot_question,this.bot_options,'');
        }
      }      
    }
    else if(this.currentQuestionIndex==50){
      this.userId = userText;
      this.checkLoginUserId();
      this.correctUserInput = true;
      textPlaceHolder.placeholder="Enter Your Login Password Here: ";
    }
    else if(this.currentQuestionIndex==51){
      this.userLoginPassword = userText;
      this.checkLoginPassword();
      this.correctUserInput = true;
      textPlaceHolder.placeholder="Enter Here: ";
    }
    else if(this.currentQuestionIndex==1){  
        if((userText).toLowerCase().includes((this.currentOptions[0]).toLowerCase())){
          this.currentQuestionIndex = 1.2;
          //console.log("user is typing right");
          this.correctUserInput = true;
          this.count1=0;
          sessionStorage.clear();
          this.clearUserPizzaDetails();
          this.loadNextQuestion();
        }
        else if((userText).toLowerCase().includes((this.currentOptions[1]).toLowerCase())){
          // this.currentQuestionIndex = 1;
          //console.log("user is typing right");
          this.count1=0;
          this.correctUserInput = true;
          sessionStorage.clear();
          this.clearUserPizzaDetails();
          this.loadNextQuestion();
        }
        else if((userText).toLowerCase().includes((this.currentOptions[2]).toLowerCase())){
          this.currentQuestionIndex = 30;
          //console.log("user is typing right");
          this.correctUserInput = true;
          this.count1=0;
          sessionStorage.clear();
          this.clearUserPizzaDetails();
          this.loadNextQuestion();
        }

        else if((userText).toLowerCase().includes((this.currentOptions[3]).toLowerCase())){
          this.currentQuestionIndex = 34;
          //console.log("user is typing right");
          this.correctUserInput = true;
          this.count1=0;
          sessionStorage.clear();
          this.clearUserPizzaDetails();
          this.loadNextQuestion();
        }
        else{
          if(this.count1<1){
            this.count1++;
            this.correctUserInput = true;
            let invalidResp = this.randomByMistakeResponses();
            console.log("Input is wrong ; inside else");
            this.createBotMessage('','',invalidResp);
            this.bot_question=this.randomArrayValue(questions_and_responses[0][1].questions);
            this.bot_options = questions_and_responses[0][1].options;
            this.currentQuestionIndex = 1;
            this.createBotMessage(this.bot_question,this.bot_options,'');
          }
        }    
        
    }
    else if(this.currentQuestionIndex==2){
      QuestionIndex2:{        
          userText = parseInt(userText);
          if(typeof userText == "number"){
            this.checkBillID = userText;
            this.correctUserInput = true;
            this.count2=0;
            this.validOrderID='';
            this.checkMyOrder();            
            //this.loadNextQuestion();
            break QuestionIndex2;
          }
          if(this.count2<1){
            this.count2++;
            this.correctUserInput = true;
            let invalidResp = "Invalid Order ID ! Kindly Check the Given Order ID !";
            console.log("Input is wrong ; inside else");
            this.createBotMessage('','',invalidResp);
            this.bot_question=this.randomArrayValue(questions_and_responses[0][2].questions);
            this.currentQuestionIndex = 2;
            this.createBotMessage('','',this.bot_question);
          }
      }
    }
    else if(this.currentQuestionIndex==4){
      if(userText.toLowerCase().includes(this.currentOptions[0].toLowerCase())){
        this.selectedOption1=true;
        this.correctUserInput = true;
        this.count4=0;
        this.loadNextQuestion();
      }
      else if(userText.toLowerCase().includes(this.currentOptions[1].toLowerCase())){
        this.selectedOption2=true;
        this.correctUserInput = true;
        this.count4=0;
        this.loadNextQuestion();
      }
      else{
        if(this.count4<1){
          this.count4++;
          this.correctUserInput = true;
          let invalidResp = "Come On, Please Give Me Correct Input !<br>";
          console.log("Input is wrong ; inside else");
          this.createBotMessage('','',invalidResp);
          this.bot_question = questions_and_responses[0][4].options;
          this.bot_options = questions_and_responses[0][4].options;
          this.currentQuestionIndex = 4;
          this.selectedOption1=false;
          this.selectedOption2=false;
          this.createBotMessage(this.bot_question,this.bot_options,'');
        }
      }
    }
    else if(this.currentQuestionIndex==10){
      QuestionIndex10:{        
          if(userText.toLowerCase().includes(this.currentOptions[0].toLowerCase())){
            //console.log("inside second if");
            //console.log("user is typing right");
            this.correctUserInput = true;
            this.loadNextQuestion();
            this.count10=0;
            break QuestionIndex10;
          }
          if(this.count10<1){
          this.count10++;
            this.correctUserInput = true;
            let invalidResp = "Seriously ? Come On, Give Me Proper Input !<br>";
            console.log("Input is wrong ; inside else");
            this.createBotMessage('','',invalidResp);
            this.bot_question=this.randomArrayValue(questions_and_responses[0][10].questions);
            this.bot_options = questions_and_responses[0][10].options;
            this.currentQuestionIndex = 10;
            this.createBotMessage(this.bot_question,this.bot_options,'');
        }
      }
    }
    else if(this.currentQuestionIndex==11){
        let question11 = questions_and_responses[0][11];
          if(userText.toLowerCase().includes(question11.options[0].toLowerCase())){
            this.selectedOption1=true;
            this.correctUserInput=true;
            this.count11 = 0;
            //console.log("currentQuestionIndex: "+this.currentQuestionIndex);
            this.loadNextQuestion();
          }
          else if(userText.toLowerCase().includes(question11.options[1].toLowerCase())){
            this.selectedOption2=true;
            this.correctUserInput=true;
            this.count11 = 0;
            //console.log("currentQuestionIndex: "+this.currentQuestionIndex);
            this.loadNextQuestion();
          }
          else if(userText.toLowerCase().includes(question11.options[2].toLowerCase())){
            this.selectedOption3=true;
            this.correctUserInput=true;
            this.count11 = 0;
            this.loadNextQuestion();
          }
          else{
            if(this.count11<1){
              this.count11++;
              this.correctUserInput = true;
              let invalidResp = "Oh, Come On ! Just Tell me which Pizza Do you Like !";
              console.log("Input is wrong ; inside else");
              this.createBotMessage('','',invalidResp);
              this.bot_question=this.randomArrayValue(questions_and_responses[0][11].questions);
              this.bot_options = questions_and_responses[0][11].options;
              this.currentQuestionIndex = 11;
              this.selectedOption1=false;this.selectedOption2=false;this.selectedOption3=false;
              this.createBotMessage(this.bot_question,this.bot_options,'');
            }
          }
    }
    else if(this.currentQuestionIndex==12){
      QuestionIndex12:{
          for(let i=0;i<optionsLength;i++){
            if((userText).toLowerCase().includes((this.currentOptions[i]).toLowerCase())){
              //console.log("user is typing right");
              this.userSelectedPizza = this.currentOptions[i];
              this.correctUserInput = true;
              this.loadNextQuestion();
              this.count12=0;
              break QuestionIndex12;
            }
          }
          if(this.count12<1){
            this.count12++;
            this.correctUserInput = true;
            let invalidResp = "Hey ! We are planning to add mroe pizzas in the near Future !<br><br> As of Now, Kindly Select a Pizza From the List of Available Pizzas !<br>";
            console.log("Input is wrong ; inside else");
            this.createBotMessage('','',invalidResp);
            this.bot_question=this.randomArrayValue(questions_and_responses[0][12].questions);
            this.bot_options = questions_and_responses[0][12].options;
            this.currentQuestionIndex = 12;
            this.createBotMessage(this.bot_question,this.bot_options,'');
        }
      }
    }
    else if(this.currentQuestionIndex==13){
      QuestionIndex13:{        
          for(let i=0;i<optionsLength;i++){
            if((userText).toLowerCase().includes((this.currentOptions[i].toLowerCase()))){
              this.userSelectedPizza = this.currentOptions[i];
              //console.log("user is typing right");
              this.correctUserInput = true;
              this.loadNextQuestion();
              this.count13=0;
              break QuestionIndex13;
            }
          }
          if(this.count13<1){
            this.count13++;
            this.correctUserInput = true;
            let invalidResp = "As of Now, We are Preparing only the Vegetable Pizzas which are shown on the list ! <br><br> So Kindly Select One Among the List !<br> ";
            console.log("Input is wrong ; inside else");
            this.createBotMessage('','',invalidResp);
            this.bot_question=this.randomArrayValue(questions_and_responses[0][13].questions);
            this.bot_options = questions_and_responses[0][13].options;
            this.currentQuestionIndex = 13;
            this.createBotMessage(this.bot_question,this.bot_options,'');
        }
      }
    }
    else if(this.currentQuestionIndex==14){
      QuestionIndex14:{        
          for(let i=0;i<optionsLength;i++){
            if((userText).toLowerCase().includes((this.currentOptions[i].toLowerCase()))){
              this.userSelectedPizza = this.currentOptions[i];
              //console.log("user is typing right");
              this.correctUserInput = true;
              this.loadNextQuestion();
              this.count14=0;
              break QuestionIndex14;
            }
          }
          if(this.count14<1){
            this.count14++;
            this.correctUserInput = true;
            let invalidResp = "We ask you to Pick Up a Pizza From the Above List !";
            console.log("Input is wrong ; inside else");
            this.createBotMessage('','',invalidResp);
            this.bot_question=this.randomArrayValue(questions_and_responses[0][14].questions);
            this.bot_options = questions_and_responses[0][14].options;
            this.currentQuestionIndex = 14;
            this.createBotMessage(this.bot_question,this.bot_options,'');
        }
      }
    }
    else if(this.currentQuestionIndex==15){
      QuestionIndex15:{
          this.hidePizzaSizePrices();
          for(let i=0;i<optionsLength;i++){
            if((userText).toLowerCase().includes((this.currentOptions[i].toLowerCase()))){
              this.userSelectedPizzaSize = this.currentOptions[i];
              //console.log("user is typing right");
              this.correctUserInput = true;
              this.loadNextQuestion();
              this.count15 = 0;
              break QuestionIndex15;
            }
          }
          if(this.count15<1){
          this.count15++;
          this.correctUserInput = true;
          let invalidResp = "Oh, Come On! <br><br> Seriously ? Just Select a Pizza Size !";
          console.log("Input is wrong ; inside else");
          this.createBotMessage('','',invalidResp);
          this.bot_question=this.randomArrayValue(questions_and_responses[0][15].questions);
          this.bot_options = questions_and_responses[0][15].options;
          this.currentQuestionIndex = 15;
          this.createBotMessage(this.bot_question,this.bot_options,'');
        }
      }
    }
    else if(this.currentQuestionIndex==16){
      QuestionIndex16:{
          this.hidePizzaAddOnPrices();
          if((userText.toLowerCase().includes(this.currentOptions[4].toLowerCase()))){
            //console.log("user is typing right");
            this.correctUserInput = true;
            //this.calculatePizzaPrice();
            this.loadNextQuestion();
            this.count16 = 0;
            textPlaceHolder.placeholder = "Enter the Number of Pizzas(1-5):";
            break QuestionIndex16;
          }
          //else{
            this.hidePizzaAddOnPrices();
            for(let i=0;i<optionsLength-1;i++){
              if((userText.toLowerCase().includes(this.currentOptions[i].toLowerCase()))){
                this.userSelectedAddOns = this.currentOptions[i];
                //console.log("user is typing right");
                this.correctUserInput = true;
                this.loadNextQuestion();
                this.count16 = 0;
                //textPlaceHolder.placeholder = "Enter the Number of Pizzas(1-5):";
                break QuestionIndex16;
              }
            }
            if(this.count16<1){
              this.count16++;
              this.correctUserInput = true;
              let invalidResp = this.randomInvalidResponses();
              console.log("Input is wrong ; inside else");
              this.createBotMessage('','',invalidResp);
              this.bot_question=this.randomArrayValue(questions_and_responses[0][16].questions);
              this.bot_options = questions_and_responses[0][16].options;
              this.currentQuestionIndex = 16;
              this.createBotMessage(this.bot_question,this.bot_options,'');
          //}
        }
      }
    }
    else if(this.currentQuestionIndex==17){
      QuestionIndex17:{        
          for(let i=0;i<optionsLength;i++){
            if((userText).includes(this.currentOptions[i])){
              this.userNumberOfPizza = userText;
              this.calculatePizzaPrice();
              this.storeInSession();
              console.log("No of Pizza: "+this.userNumberOfPizza);
              this.correctUserInput = true;
              this.loadNextQuestion();
              this.count17=0;
              textPlaceHolder.placeholder = "Enter Here";//default placeholder
              break QuestionIndex17;
            }
          }
          if(this.count17<1){
            this.count17++;
            this.correctUserInput = true;
            let invalidResp = "You Can Select Only 5 Pizzas Per Order ! <br><br> So Kindly Select One from the List !<br>";
            console.log("Input is wrong ; inside else");
            this.createBotMessage('','',invalidResp);
            this.bot_question=this.randomArrayValue(questions_and_responses[0][17].questions);
            this.bot_options = questions_and_responses[0][17].options;
            this.currentQuestionIndex = 17;
            this.createBotMessage(this.bot_question,this.bot_options,'');  
        }
      }      
    }
    else if(this.currentQuestionIndex==18){
      QuestionIndex18:{
          for (let i=0;i<optionsLength;i++){
              if((userText.toLowerCase().includes(this.currentOptions[i].toLowerCase()))){
                if(userText.toLowerCase().includes(this.currentOptions[0].toLowerCase())){
                  this.currentQuestionIndex=10;
                  this.addedPizzaCount++;
                }
                //this.currentQuestionIndex=18;
                this.correctUserInput = true;
                this.userPizzaOrderedDateTime = new Date().toLocaleString();//get current date with time
                this.loadNextQuestion();
                this.count18=0;
                break QuestionIndex18;
              }
          }
          if(this.count18<1){
            this.count18++;
            this.correctUserInput = true;
            let invalidResp = this.randomInvalidResponses();
            console.log("Input is wrong ; inside else");
            this.createBotMessage('','',invalidResp);
            this.bot_question=this.randomArrayValue(questions_and_responses[0][18].questions);
            this.bot_options = questions_and_responses[0][18].options;
            this.currentQuestionIndex = 18;
            this.createBotMessage(this.bot_question,this.bot_options,'');
        }    
      }
    }
    else if(this.currentQuestionIndex==20){
      QuestionIndex20:{
          if((userText.toLowerCase().includes(this.currentOptions[0].toLowerCase()))){
            //this.userSelectedAddOns = this.currentOptions[];
            //console.log("user is typing right");
            this.correctUserInput = true;
            textPlaceHolder.placeholder="Enter Here: ";
            this.count20 = 0;
            this.pizzaOrder();//inserting Order Details into DataBase
            this.loadNextQuestion();
            break QuestionIndex20;
          }
          else if((userText.toLowerCase().includes(this.currentOptions[1].toLowerCase()))){
            sessionStorage.clear();
            //default values
            this.clearUserPizzaDetails();

            this.currentQuestionIndex = 10;
            this.correctUserInput = true;
            this.loadNextQuestion();
            this.count20 = 0;
            break QuestionIndex20;
          }
          if(this.count20<1){
            this.count20++;
            this.correctUserInput = true;
            let invalidResp = this.randomByMistakeResponses();
            console.log("Input is wrong ; inside else");
            this.createBotMessage('','',invalidResp);
            this.bot_question=this.randomArrayValue(questions_and_responses[0][20].questions);
            this.bot_options = questions_and_responses[0][20].options;
            this.currentQuestionIndex = 20;
            this.createBotMessage(this.bot_question,this.bot_options,'');
        }
      }
    }
    else if(this.currentQuestionIndex==6){
      QuestionIndex6:{
        if(userText.toLowerCase().includes(this.currentOptions[0].toLowerCase())){
          //console.log("inside second if");
          //console.log("user is typing right");
          this.correctUserInput = true;
          this.loadNextQuestion();
          this.count6=0;
          break QuestionIndex6;
        }
        if(this.count6<1){
        this.count6++;
          this.correctUserInput = true;
          let invalidResp = "Seriously ? Come On, Give Me Proper Input !<br>";
          console.log("Input is wrong ; inside else");
          this.createBotMessage('','',invalidResp);
          this.bot_question=this.randomArrayValue(questions_and_responses[0][10].questions);
          this.bot_options = questions_and_responses[0][10].options;
          this.currentQuestionIndex = 10;
          this.createBotMessage(this.bot_question,this.bot_options,'');
      }
      }
    }
    else if(this.currentQuestionIndex==31){
      QuestionIndex31:{
        console.log("OptionsLength : "+optionsLength);
        console.log("Current Options:"+this.currentOptions);
          for (let i=0;i<optionsLength;i++){
            if((userText.toLowerCase().includes(this.currentOptions[i].toLowerCase()))){
              this.bulkOrderPeopleExpected = this.currentOptions[i];
              console.log("bulk order expected!!!");
              this.correctUserInput = true;
              this.loadNextQuestion();
              textPlaceHolder.type="date";
              textPlaceHolder.min = new Date().toISOString().slice(0,10);//format : "2018-08-03"
              textPlaceHolder.max = new Date(new Date().getFullYear(),new Date().getMonth()+3,new Date().getDate()).toISOString().slice(0,10);//3 months from current date
              this.count31=0;
              break QuestionIndex31;
            }
          }
              if(this.count31<1){
                this.count31++;
                this.correctUserInput = true;
                let invalidResp = this.randomByMistakeResponses();
                console.log("Input is wrong ; inside else");
                this.createBotMessage('','',invalidResp);
                this.bot_question=this.randomArrayValue(questions_and_responses[0][31].questions);
                this.bot_options = questions_and_responses[0][31].options;
                this.currentQuestionIndex = 31;
                this.createBotMessage(this.bot_question,this.bot_options,''); 
            }
          
         
      } 
    }
    else if(this.currentQuestionIndex==32){   
      //console.log("this.currentQuestionIndex==32 "+userText);      
      this.bulkOrderExpectedDate = userText;   
      this.correctUserInput = true;
      textPlaceHolder.type="text";
      textPlaceHolder.placeholder = "Enter Here : ";      
      this.bulkOrderDetails();//insert into bulk order table      
      let response = "Kindly, Note Down Your Bulk Order ID: '"+this.bulkOrderID+"'";
      this.createBotMessage('','',response);
      this.loadNextQuestion();
    }
    else if(this.currentQuestionIndex==35){
      QuestionIndex35:{
        for(let i=0; i<optionsLength;i++){
          if(userText.toLowerCase().includes(this.currentOptions[i].toLowerCase())){
            this.connectReason = this.currentOptions[i];
            this.correctUserInput = true;
            this.connectUserDetails();
            this.loadNextQuestion();
            textPlaceHolder.placeholder = "Enter Here : ";
            break QuestionIndex35;
          }
        }
        if(this.count35<1){
          this.count35++;
          this.correctUserInput = true;
          let invalidResp = this.randomByMistakeResponses();
          console.log("Input is wrong ; inside else");
          this.createBotMessage('','',invalidResp);
          this.bot_question=this.randomArrayValue(questions_and_responses[0][35].questions);
          this.bot_options = questions_and_responses[0][35].options;
          this.currentQuestionIndex = 35;
          this.createBotMessage(this.bot_question,this.bot_options,''); 
        }
      }
    }

    if(this.correctUserInput==false){
      textPlaceHolder.placeholder = "Enter Here";//default placeholder
      //let invalidResp = this.randomInvalidResponses();
      console.log("Input is wrong");
      //this.createBotMessage('','',invalidResp);
      let invalidResp = "I guess you are Struck ! Taking You to Main Menu ! <br>";
      this.createBotMessage('','',invalidResp);
      this.bot_question1=this.randomArrayValue(questions_and_responses[0][39].questions);
      this.options1 = questions_and_responses[0][39].options;
      this.currentQuestionIndex = 39;
      this.createBotMessage(this.bot_question1,this.options1,'');
      sessionStorage.clear();
      this.clearUserPizzaDetails();
      this.selectedOption1=false;this.selectedOption2=false;this.selectedOption3=false;
    }
  }

  loadNextQuestion(){
    let nextQuestion,nextOptions,response;
    //console.log("currentQuestionIndex in loadNextQuest: "+this.currentQuestionIndex);
    if(this.currentQuestionIndex==39){
      nextQuestion = this.randomArrayValue(questions_and_responses[0][41].questions);
      nextOptions = questions_and_responses[0][41].options;
      this.currentQuestionIndex = 41;
      this.createBotMessage(nextQuestion,nextOptions,'');
    }

    else if(this.currentQuestionIndex==41){
      if(this.selectedOption1==true){
        response = this.randomArrayValue(questions_and_responses[0][42].questions);
        this.currentQuestionIndex = 42;
        this.createBotMessage('','',response);
      }
      else if(this.selectedOption2==true){
        response = questions_and_responses[0][50].questions;
        this.currentQuestionIndex=50;
        this.createBotMessage('','',response);
      }
    }

    else if(this.currentQuestionIndex==42){
      response = this.randomArrayValue(questions_and_responses[0][43].questions);
      this.currentQuestionIndex = 43;
      this.createBotMessage('','',response);
    }

    else if(this.currentQuestionIndex==43){
      response = this.randomArrayValue(questions_and_responses[0][44].questions);
      this.currentQuestionIndex = 44;
      this.createBotMessage('','',response);
    }

    else if(this.currentQuestionIndex==44){
      response = this.randomArrayValue(questions_and_responses[0][45].questions);
      this.currentQuestionIndex = 45;
      this.createBotMessage('','',response);
    }

    else if(this.currentQuestionIndex==45){
      nextQuestion = this.randomArrayValue(questions_and_responses[0][46].questions);
      nextOptions = questions_and_responses[0][46].options;
      this.currentQuestionIndex = 46;
      this.createBotMessage(nextQuestion+"<br><br> '"+this.billingAddress+"'"+" <br> ",nextOptions,'');
    }

    else if(this.currentQuestionIndex==46){
      response = (questions_and_responses[0][47].questions);
      this.currentQuestionIndex = 47;
      this.createBotMessage('','',response);
      response = questions_and_responses[0][47].subquestion;
      this.createBotMessage('','',response);
    }

    else if(this.currentQuestionIndex==47){
      response = (questions_and_responses[0][48].questions);
      this.currentQuestionIndex = 48;
      this.createBotMessage('','',response);
      response = questions_and_responses[0][48].subquestion;
      this.createBotMessage('','',response);
    }

    else if(this.currentQuestionIndex==48){
      nextQuestion = questions_and_responses[0][49].questions;
      nextOptions = questions_and_responses[0][49].options;
      this.currentQuestionIndex=49;
      this.createBotMessage(nextQuestion,nextOptions,'');
    }

    else if(this.currentQuestionIndex==49){
      response = questions_and_responses[0][50].questions;
      this.currentQuestionIndex=50;
      this.createBotMessage('','',response);
    }

    else if(this.currentQuestionIndex==50){
      response = questions_and_responses[0][51].questions;
      this.currentQuestionIndex=51;
      this.createBotMessage('','',response);
    }

    else if(this.currentQuestionIndex==51){
      nextQuestion = this.randomArrayValue(questions_and_responses[0][1].questions);
      nextOptions = questions_and_responses[0][1].options;
      this.currentQuestionIndex=1;
      this.createBotMessage(nextQuestion,nextOptions,'');
    }

    else if(this.currentQuestionIndex == 1){
      nextQuestion = this.randomArrayValue(questions_and_responses[0][10].questions);
      nextOptions = questions_and_responses[0][10].options;
      this.currentQuestionIndex = 10;
      this.createBotMessage(nextQuestion,nextOptions,'');
      //return;
    }

    else if(this.currentQuestionIndex == 1.2){
      this.currentQuestionIndex = 2;
      response = this.randomArrayValue(questions_and_responses[0][2].questions);
      this.createBotMessage('','',response);
    }

    else if(this.currentQuestionIndex == 2){
      //console.log("Inside LoadQuestion 2");//3 & 4 are combined questions
      //this.checkMyOrder();
      //this.currentQuestionIndex = 3;
      //response = this.randomArrayValue(questions_and_responses[0][3].questions);
      //this.createBotMessage('','',response);
      response = " Have an Awesome Day 😉";
      this.createBotMessage('','',response);
      this.currentQuestionIndex = 4;
      nextQuestion=questions_and_responses[0][4].questions;
      nextOptions = questions_and_responses[0][4].options;
      this.count2_1=0;
      this.userId='';
      this.clearUserPizzaDetails();
      sessionStorage.clear();
      this.createBotMessage(nextQuestion,nextOptions,'');
    }

    else if(this.currentQuestionIndex==4){
      if(this.selectedOption1==true){
        this.currentQuestionIndex=1;
        nextQuestion = this.randomArrayValue(questions_and_responses[0][1].questions);
        nextOptions = questions_and_responses[0][1].options;
        this.createBotMessage(nextQuestion,nextOptions,'');
        this.clearUserPizzaDetails();
        sessionStorage.clear();
      }
      else if(this.selectedOption2==true){
        response = "You have been Logged Out Successfully !";
        this.createBotMessage('','',response);
        this.bot_question1=this.randomArrayValue(questions_and_responses[0][39].questions);
        this.options1 = questions_and_responses[0][39].options;
        this.currentQuestionIndex = 39;
        this.createBotMessage(this.bot_question1,this.options1,'');
        sessionStorage.clear();
        this.clearUserPizzaDetails();
      }
    }

    else if(this.currentQuestionIndex == 8){
      //console.log("userCity: "+this.userCity);
      //console.log("I am inside currentQuestionIndex 8");
      nextQuestion = this.randomArrayValue(questions_and_responses[0][10].questions);
      //console.log("nextQuestion: "+nextQuestion);
      nextOptions = questions_and_responses[0][10].options;
      this.currentQuestionIndex = 10;
      this.createBotMessage(nextQuestion,nextOptions,'');
      //return;
    }

    else if(this.currentQuestionIndex == 10){
      nextQuestion = this.randomArrayValue(questions_and_responses[0][11].questions);
      nextOptions = questions_and_responses[0][11].options;
      this.currentQuestionIndex = 11;
      this.createBotMessage(nextQuestion,nextOptions,'');
      //return;
    }

    else if(this.currentQuestionIndex==11){
      if(this.selectedOption1==true){
        nextQuestion = this.randomArrayValue(questions_and_responses[0][12].questions);
        nextOptions = questions_and_responses[0][12].options;
        this.currentQuestionIndex = 12;
        this.createBotMessage(nextQuestion,nextOptions,'');
      }
      else if(this.selectedOption2==true){
        nextQuestion = this.randomArrayValue(questions_and_responses[0][13].questions);
        nextOptions = questions_and_responses[0][13].options;
        this.currentQuestionIndex = 13;
        this.createBotMessage(nextQuestion,nextOptions,'');
      }
      else if(this.selectedOption3==true){
        nextQuestion = this.randomArrayValue(questions_and_responses[0][14].questions);
        nextOptions = questions_and_responses[0][14].options;
        this.currentQuestionIndex = 14;
        this.createBotMessage(nextQuestion,nextOptions,'');
      }
      this.selectedOption1=false;
      this.selectedOption2=false;
      this.selectedOption3=false;
    }

    else if(this.currentQuestionIndex==12 || this.currentQuestionIndex==13 || this.currentQuestionIndex==14){
      this.updatePizzaSizePrices();
      nextQuestion = this.randomArrayValue(questions_and_responses[0][15].questions);
      nextOptions = questions_and_responses[0][15].options;
      this.currentQuestionIndex=15;
      this.createBotMessage(nextQuestion,nextOptions,'');
    }

    else if(this.currentQuestionIndex==15){
      this.updateAddOnPrices();
      nextQuestion = this.randomArrayValue(questions_and_responses[0][16].questions);
      nextOptions = questions_and_responses[0][16].options;      
      this.currentQuestionIndex=16;
      this.createBotMessage(nextQuestion,nextOptions,'');
    }

    else if(this.currentQuestionIndex==16){
      nextQuestion = questions_and_responses[0][17].questions;
      nextOptions = questions_and_responses[0][17].options;
      this.currentQuestionIndex=17;
      this.createBotMessage(nextQuestion,nextOptions,'');
    }

    else if(this.currentQuestionIndex==17){
      if(this.addedPizzaCount<5){
        nextQuestion = questions_and_responses[0][18].questions;
        nextOptions = questions_and_responses[0][18].options;
        this.currentQuestionIndex=18;
        this.createBotMessage(nextQuestion,nextOptions,'');
      }
      else{
        this.question19();//19 & 20 are combined 1 question
      }
    }

    else if(this.currentQuestionIndex==18){
      //console.log("Inside Load  Question inDEX 18");
      this.question19();//19 & 20 are combined 1 question
    }

    else if(this.currentQuestionIndex==20){
      nextQuestion=this.randomArrayValue(questions_and_responses[0][6].questions);
      nextOptions = questions_and_responses[0][6].options;
      this.currentQuestionIndex = 6;
      this.createBotMessage(nextQuestion,nextOptions,'');
    }

    else if(this.currentQuestionIndex==6){
      // response=questions_and_responses[0][27].questions;
      // this.currentQuestionIndex = 27;
      // this.createBotMessage('','',response);
      this.storeDetails();
      response = this.randomArrayValue(questions_and_responses[0][27].questions);
      response += this.billID;
      this.createBotMessage('','',response);
      sessionStorage.clear();
      this.clearUserPizzaDetails();
      // console.log("CHECK-----");
      // console.log("userNumberOfPizza: "+this.userNumberOfPizza);
      // console.log("userSelectedPizza: "+this.userSelectedPizza);
      // console.log("userSelectedPizzaSize: "+this.userSelectedPizzaSize);
      // console.log("userSelectedAddOns: "+this.userSelectedAddOns);
      // console.log("userSelectedPizzaPrice: "+this.userSelectedPizzaPrice);
      // console.log("SESSION CHECK");
      // console.log("sessionstorageLength: "+sessionStorage.length);
      // console.log("SESSION CHECK");
      // console.log("-----CHECK");
      nextQuestion=(questions_and_responses[0][4].questions);
      nextOptions = questions_and_responses[0][4].options;
      this.currentQuestionIndex = 4;
      this.createBotMessage(nextQuestion,nextOptions,'');
    }

    else if(this.currentQuestionIndex==26){
      this.storeDetails();
      response = this.randomArrayValue(questions_and_responses[0][27].questions);
      response += this.randomOrderID();
      this.createBotMessage('','',response);
      sessionStorage.clear();
      this.clearUserPizzaDetails();
      // console.log("CHECK-----");
      // console.log("userNumberOfPizza: "+this.userNumberOfPizza);
      // console.log("userSelectedPizza: "+this.userSelectedPizza);
      // console.log("userSelectedPizzaSize: "+this.userSelectedPizzaSize);
      // console.log("userSelectedAddOns: "+this.userSelectedAddOns);
      // console.log("userSelectedPizzaPrice: "+this.userSelectedPizzaPrice);
      // console.log("SESSION CHECK");
      // console.log("sessionstorageLength: "+sessionStorage.length);
      // console.log("SESSION CHECK");
      // console.log("-----CHECK");
      nextQuestion=this.randomArrayValue(questions_and_responses[0][4].questions);
      nextOptions = questions_and_responses[0][4].options;
      this.currentQuestionIndex = 4;
      this.createBotMessage(nextQuestion,nextOptions,'');
    }

    else if(this.currentQuestionIndex==27){
      nextQuestion = this.randomArrayValue(questions_and_responses[0][4].questions);
      nextOptions = questions_and_responses[0][4].options;
      this.currentQuestionIndex=4;
      this.createBotMessage(nextQuestion,nextOptions,'');
    }

    else if(this.currentQuestionIndex==30){
      //console.log("I am inside currentQuestionIndex==30");
      this.currentQuestionIndex = 31;
      nextQuestion = questions_and_responses[0][31].questions;
      nextOptions = questions_and_responses[0][31].options;
      this.createBotMessage(nextQuestion,nextOptions,'');
    }

    else if(this.currentQuestionIndex==31){
      this.currentQuestionIndex=32;
      response = questions_and_responses[0][32].questions;
      this.createBotMessage('','',response);
    }

    else if(this.currentQuestionIndex==32){
      this.currentQuestionIndex=34;
      response = this.randomArrayValue(questions_and_responses[0][34].questions);
      this.createBotMessage('','',response);
      nextQuestion=this.randomArrayValue(questions_and_responses[0][4].questions);
      nextOptions = questions_and_responses[0][4].options;
      this.currentQuestionIndex = 4;
      this.createBotMessage(nextQuestion,nextOptions,'');
    }

    else if(this.currentQuestionIndex==34){
      this.currentQuestionIndex = 35;
      nextQuestion = questions_and_responses[0][35].questions;
      nextOptions = questions_and_responses[0][35].options;
      this.createBotMessage(nextQuestion,nextOptions,'');
    }

    else if(this.currentQuestionIndex == 35){
      this.currentQuestionIndex = 38;
      response = this.randomArrayValue(questions_and_responses[0][38].questions);
      this.createBotMessage('','',response);
      this.currentQuestionIndex=4;
      nextQuestion = questions_and_responses[0][4].questions;
      nextOptions = questions_and_responses[0][4].options;
      this.createBotMessage(nextQuestion,nextOptions,'');
    }

    else if(this.currentQuestionIndex==37){
      this.currentQuestionIndex = 38;
      response = questions_and_responses[0][38].questions;
      this.createBotMessage('','',response);
      nextQuestion=this.randomArrayValue(questions_and_responses[0][4].questions);
      nextOptions = questions_and_responses[0][4].options;
      this.currentQuestionIndex = 4;
      this.createBotMessage(this.bot_question1,this.options1,'');
    }

  }

  checkMyOrder(){
    this.userTotalPriceOfPizza=0;
    console.log("inside my 'check my order' function");
    console.log("Order ID: "+this.checkBillID);
    this.chatBotService.getOrderDetails(this.checkBillID).subscribe(data=>{
      console.log(data)
      for(let i=0;i<data.length;i++){
        if(data[i]["orderId"]==this.checkBillID){
        this.validOrderID="true";
        break;
        }
      }
      this.checkMyOrderInsideSubscribe();
    });
  }

  checkMyOrderInsideSubscribe(){
    console.log("this.validOrderID inside checkMyOrderInsideSubscribe: "+this.validOrderID);
    if(this.validOrderID!="true"){
      if(this.count2_1<1){
        this.count2_1++;
        this.userId='';
        let response = "🛑 The Entered OrderID DOES NOT Exists ! <br><br>Kindly Enter a valid OrderID !";
        this.createBotMessage('','',response);
        this.bot_question=this.randomArrayValue(questions_and_responses[0][2].questions);
        this.currentQuestionIndex = 2;
        this.createBotMessage('','',this.bot_question); 
      }
      else{
        this.count2_1=0;
        this.userId='';
        let invalidResp = "I guess you are Struck ! Taking You to Main Menu ! <br>";
        this.createBotMessage('','',invalidResp);
        this.bot_question1=this.randomArrayValue(questions_and_responses[0][39].questions);
        this.options1 = questions_and_responses[0][39].options;
        this.currentQuestionIndex = 39;
        this.createBotMessage(this.bot_question1,this.options1,'');
        sessionStorage.clear();
        this.clearUserPizzaDetails();
        this.selectedOption1=false;this.selectedOption2=false;this.selectedOption3=false;
      }
    }
    else if(this.validOrderID=="true"){
      this.correctUserInput = true;
      let botResponse='ORDERED PIZZA(S): <br>';
      this.chatBotService.getOrderDetails(this.checkBillID).subscribe(data=>{
        console.log(data)
        for(let i=0;i<data.length;i++){
          botResponse+= " " + data[i]["quantity"] + " - " +"'"+ data[i]["pizzaName"] +"'"+ " pizza of " + "'" +data[i]["pizzaSize"] +"'"+ " size with " + "'"+ data[i]["pizzaAddOns"] +"'" +" ; "+ " Pizza Price : ' INR " + data[i]["pizzaPrice"]+ "'"+" <br><br> ";
          this.userTotalPriceOfPizza +=  data[i]["pizzaPrice"];          
        }
        botResponse+= " <br> Total Cost : ' INR " + this.userTotalPriceOfPizza +"'"+ " <br> ";
        this.createBotMessage('','',botResponse);
        var that = this;
            setTimeout(function () {
                console.log('Test 111');
                this.count2_1=0;
                this.validOrderID='';
                that.loadNextQuestion();
            }, 1000);
      });
    }
  }

  pizzaOrder(){
    console.log("I am Inside PizzaOrder()");
    this.billID = this.randomOrderID();
    this.billingDateTime = this.currentDateTime();
    console.log("order ID:"+this.billID);
    console.log("ordered Date Time : "+this.billingDateTime);
    console.log("Inside pizzorder() ; PizzaCount: "+this.addedPizzaCount);
    let tempCount = this.addedPizzaCount;
    let temp = 1 ;
    let botRes='';
    while(temp<=tempCount){
      //this.billID = this.randomOrderID();
      let res = JSON.parse(sessionStorage.getItem("pizzaDetails"+temp.toString()));
      botRes+= " <br> " + res["numberofPizza"] + " - " +"'"+ res["pizza"] +"'"+ " pizza of " + "'" +res["pizzaSize"] +"'"+ " size with " + "'"+ res["pizzaToppings"] +"'" +" ; "+ " Pizza Price : ' INR " + res["pizzaPrice"]+ "'"+" <br> ";
      //session to DB Insertion
      this.chatBotService.insertOrderDetails(this.billID,res["pizza"],res["pizzaSize"],res["pizzaToppings"],res["numberofPizza"],res["pizzaPrice"],this.billingDateTime);
      this.userTotalPriceOfPizza +=  res["pizzaPrice"];
      temp++;
    }
    console.log("OUTSIDE WHILE LOOP OF PizzaOrder()");
    botRes+= " <br> Total Cost : ' INR " + this.userTotalPriceOfPizza +"'"+ " <br> ";
    console.log("Bot RES inside pizzaOrder(): "+botRes);    
  }

  updatePizzaSizePrices(){
    //console.log("Inside updatePizzaSizePrices");
    
    let currentOption = questions_and_responses[0][15].options;    
    if(this.userSelectedPizza=="Margherita"){
        currentOption[0]+= " : INR 69";
        currentOption[1]+= " : INR 149";
        currentOption[2]+= " : INR 299";
    }
    else if(this.userSelectedPizza=="Peppy Paneer"){
      currentOption[0]+= " : INR 79";
      currentOption[1]+= " : INR 159";
      currentOption[2]+= " : INR 309";
    }
    else if(this.userSelectedPizza=="Paneer Makhani"){
      currentOption[0]+= " : INR 89";
      currentOption[1]+= " : INR 179";
      currentOption[2]+= " : INR 359";
    }
    else if(this.userSelectedPizza=="Pepper Barbecue Chicken"){
      currentOption[0]+= " : INR 89";
      currentOption[1]+= " : INR 179";
      currentOption[2]+= " : INR 359";
    }
    else if(this.userSelectedPizza=="Indi Chicken Tikka"){
      currentOption[0]+= " : INR 99";
      currentOption[1]+= " : INR 189";
      currentOption[2]+= " : INR 369";
    }
    else if(this.userSelectedPizza=="Chicken Fiesta"){
      currentOption[0]+= " : INR 109";
      currentOption[1]+= " : INR 199";
      currentOption[2]+= " : INR 379";
    }
  }

  updateAddOnPrices(){
    let currentQuestion16_Option = questions_and_responses[0][16].options;    
      currentQuestion16_Option[0]+= " : INR 10";
      currentQuestion16_Option[1]+= " : INR 15";
      currentQuestion16_Option[2]+= " : INR 20";
      currentQuestion16_Option[3]+= " : INR 25";
      currentQuestion16_Option[4]+= " : INR 0";    
  }

  hidePizzaSizePrices(){
    let question15_Options = (questions_and_responses[0][15].options);
    question15_Options[0] = "Regular";
    question15_Options[1] = "Medium";
    question15_Options[2] = "Large";
  }

  hidePizzaAddOnPrices(){
    let question16_Options = (questions_and_responses[0][16].options);
    question16_Options[0] = "Vegatable Toppings";
    question16_Options[1] = "Tomato Sausage";
    question16_Options[2] = "Cheese Toppings";
    question16_Options[3] = "Chicken Sausage";
    question16_Options[4] = "No Toppings";
  }

  storeInSession(){
    console.log("UserNumberOfPizza in storeInSsssion():"+this.userNumberOfPizza);
    let userOrderedPizzaDetails = {'numberofPizza':this.userNumberOfPizza,'pizza':this.userSelectedPizza,'pizzaSize':this.userSelectedPizzaSize,'pizzaToppings':this.userSelectedAddOns,'pizzaPrice':this.userSelectedPizzaPrice};
    sessionStorage.setItem('pizzaDetails'+(this.addedPizzaCount).toString(),JSON.stringify(userOrderedPizzaDetails));
    console.log("Session Items:"+sessionStorage.getItem('pizzaDetails'+(this.addedPizzaCount).toString()));
  }

  question19(){
    console.log("Inside q19");
    console.log("NUMBER OF PIZZA: "+this.userNumberOfPizza);
    console.log("Inside q19 ; PizzaCount: "+this.addedPizzaCount);
    //this.currentQuestionIndex = 19;
    let nextQuestion,nextOptions;
    let botResponse = "";      
    botResponse = "Summarising Your Order:<br>";
    let tempCount = this.addedPizzaCount;
    let temp = 1 ;
    while(temp<=tempCount){
      let res = JSON.parse(sessionStorage.getItem("pizzaDetails"+temp.toString()));
      botResponse+= " <br> " + res["numberofPizza"] + " - " +"'"+ res["pizza"] +"'"+ " pizza of " + "'" +res["pizzaSize"] +"'"+ " size with " + "'"+ res["pizzaToppings"] +"'" +" ; "+ " Pizza Price : ' INR " + res["pizzaPrice"]+ "'"+" <br> ";
      this.userTotalPriceOfPizza +=  res["pizzaPrice"];
      temp++;
    }
    console.log("OUTSIDE WHILE LOOP OF QUESTION19");
    botResponse+= " <br> Total Cost : ' INR " + this.userTotalPriceOfPizza +"'"+ " <br> ";
    this.createBotMessage('','',botResponse);
    this.currentQuestionIndex = 20;
    nextQuestion = questions_and_responses[0][20].questions;
    nextOptions = questions_and_responses[0][20].options;
    //this.currentQuestionIndex=20;
    this.createBotMessage(nextQuestion,nextOptions,'');
  }

  calculatePizzaPrice(){

    if(this.userSelectedPizza=="Margherita"){
      if(this.userSelectedPizzaSize=="Regular"){
        this.userSelectedPizzaPrice = 69;
      }
      else if(this.userSelectedPizzaSize=="Medium"){
        this.userSelectedPizzaPrice = 149;
      }
      else if(this.userSelectedPizzaSize=="Large"){
        this.userSelectedPizzaPrice = 299;
      }
    }

    else if(this.userSelectedPizza=="Peppy Paneer"){
      if(this.userSelectedPizzaSize=="Regular"){
        this.userSelectedPizzaPrice = 79;
      }
      else if(this.userSelectedPizzaSize=="Medium"){
        this.userSelectedPizzaPrice = 159;
      }
      else if(this.userSelectedPizzaSize=="Large"){
        this.userSelectedPizzaPrice = 309;
      }
    }

    else if(this.userSelectedPizza=="Paneer Makhani"){
      if(this.userSelectedPizzaSize=="Regular"){
        this.userSelectedPizzaPrice = 89;
      }
      else if(this.userSelectedPizzaSize=="Medium"){
        this.userSelectedPizzaPrice = 169;
      }
      else if(this.userSelectedPizzaSize=="Large"){
        this.userSelectedPizzaPrice = 319;
      }
    }

    else if(this.userSelectedPizza=="Pepper Barbecue Chicken"){
      if(this.userSelectedPizzaSize=="Regular"){
        this.userSelectedPizzaPrice = 89;
      }
      else if(this.userSelectedPizzaSize=="Medium"){
        this.userSelectedPizzaPrice = 179;
      }
      else if(this.userSelectedPizzaSize=="Large"){
        this.userSelectedPizzaPrice = 359;
      }
    }

    else if(this.userSelectedPizza=="Indi Chicken Tikka"){
      if(this.userSelectedPizzaSize=="Regular"){
        this.userSelectedPizzaPrice = 99;
      }
      else if(this.userSelectedPizzaSize=="Medium"){
        this.userSelectedPizzaPrice = 189;
      }
      else if(this.userSelectedPizzaSize=="Large"){
        this.userSelectedPizzaPrice = 369;
      }
    }

    else if(this.userSelectedPizza=="Chicken Fiesta"){
      if(this.userSelectedPizzaSize=="Regular"){
        this.userSelectedPizzaPrice = 109;
      }
      else if(this.userSelectedPizzaSize=="Medium"){
        this.userSelectedPizzaPrice = 199;
      }
      else if(this.userSelectedPizzaSize=="Large"){
        this.userSelectedPizzaPrice = 379;
      }
    }

    if(this.userSelectedAddOns=="Vegatable Toppings"){
      this.userSelectedPizzaPrice += 10;
    }

    else if(this.userSelectedAddOns=="Tomato Sausage Toppings"){
      this.userSelectedPizzaPrice += 15;
    }

    else if(this.userSelectedAddOns=="Cheese Toppings"){
      this.userSelectedPizzaPrice += 20;
    }

    else if(this.userSelectedAddOns=="Chicken Sausage Toppings"){
      this.userSelectedPizzaPrice += 25;
    }

    else if(this.userSelectedAddOns=="No Toppings"){
      this.userSelectedPizzaPrice += 0;
    }

    this.userSelectedPizzaPrice = (this.userNumberOfPizza * this.userSelectedPizzaPrice);
    console.log("this.userSelectedPizzaPrice : "+this.userSelectedPizzaPrice);

  }

  storeDetails(){
    console.log("This is inside storeDetails");
    console.log("This is inside storeDetails ; this.addedPizzaCount: "+this.addedPizzaCount);
    console.log("Number of Pizza (inside storeDetails):"+this.userNumberOfPizza);
    // console.log("Order ID: "+this.randomOrderID());
    // console.log("Order Amount: "+this.userTotalPriceOfPizza);
    // console.log("Ordered Items: ");
    let tempCount = this.addedPizzaCount;
    let temp = 1 ;
    while(temp<=tempCount){
      let res = JSON.parse(sessionStorage.getItem("pizzaDetails"+temp.toString()));
      console.log("\n " + res["numberofPizza"] + " - " +"'"+ res["pizza"] +"'"+ " pizza of " + "'" +res["pizzaSize"] +"'"+ " size with " + "'"+ res["pizzaToppings"] +"'" +" ; "+ " Pizza Price : ' INR " + res["pizzaPrice"]+ "'"+" \n ");
      //this.userTotalPriceOfPizza +=  res["pizzaPrice"];
      temp++;
    }
    // console.log("Order Date and Time: "+this.userPizzaOrderedDateTime);
    // console.log("Ordered Address: "+this.billingAddress);
    // console.log("Order Given By: "+this.billingName);
    // console.log("Contact Number: "+this.billingMobileNumber);
    // console.log("Contact Email: "+this.billingEmailAddress);
  }

  connectUserDetails(){
    console.log("userID: "+this.userId);
    console.log("connect reason: "+this.connectReason);
    console.log("connect request time: "+this.currentDateTime());
    this.connectRequestTime = this.currentDateTime();
    this.chatBotService.insertContactUsDetails(this.userId,this.connectReason,this.connectRequestTime);
  }

  bulkOrderDetails(){
    this.bulkOrderID = this.randomOrderID();// a random bulk order ID
    this.bulkOrderRequestTime = this.currentDateTime();
    // console.log("user ID: "+this.userId);
    // console.log("BulkOrder ID: "+this.bulkOrderID);
    // console.log("people expected: "+this.bulkOrderPeopleExpected);
    // console.log("bulk order expected date: "+this.bulkOrderExpectedDate);
    // console.log("bulkOrderRequestTime: "+this.bulkOrderRequestTime);
    this.chatBotService.insertBulkOrderDetails(this.userId,this.bulkOrderID,this.bulkOrderPeopleExpected,this.bulkOrderExpectedDate,this.bulkOrderRequestTime);
  }

  checkEmailExistsAlready(){
    console.log("Inside checkEmailExistsAlready() ");
    console.log("Email: "+this.billingEmailAddress);
    this.chatBotService.getUserDetails().subscribe(data => {
      for(let i=0;i<data.length;i++){
        console.log("data[i].userEmail: "+data[i].userEmail);
        if((data[i].userEmail)==this.billingEmailAddress.toString()){
          this.emailAlreadyExists = "true";
          console.log("emailAlreadyExists inside if: "+this.emailAlreadyExists);
          break;
        }
      }
      this.checkEmailExistsAlreadyInsideSubscribe();  
      this.emailAlreadyExists=''; 
    },
    errors => console.log(errors)
    );
  }

  checkEmailExistsAlreadyInsideSubscribe(){
    console.log("this.userAlreadyExists inside dosomething: "+this.emailAlreadyExists);
    if(this.emailAlreadyExists=="true"){
      if(this.count44_1<1){
        this.count44_1++;
        this.userId='';
        let response = "🛑 The Entered Email Already Exists ! <br><br>Kindly Enter a New EmailID !";
        this.createBotMessage('','',response);
        this.bot_question=this.randomArrayValue(questions_and_responses[0][44].questions);
        this.currentQuestionIndex = 44;
        //this.createBotMessage('','',this.bot_question); 
        //this.bot_question = questions_and_responses[0][44].questions;
        this.createBotMessage('','',this.bot_question);
      }
      else{
        this.count44_1=0;
        this.billingEmailAddress='';
        let invalidResp = "I guess you are Struck ! Taking You to Main Menu ! <br>";
        this.createBotMessage('','',invalidResp);
        this.bot_question1=this.randomArrayValue(questions_and_responses[0][39].questions);
        this.options1 = questions_and_responses[0][39].options;
        this.currentQuestionIndex = 39;
        this.createBotMessage(this.bot_question1,this.options1,'');
        sessionStorage.clear();
        this.clearUserPizzaDetails();
        this.selectedOption1=false;this.selectedOption2=false;this.selectedOption3=false;
      }
    }
    else if(this.emailAlreadyExists!="true"){
      this.loadNextQuestion();
    }
  }

  checkUserIdExistsAlready(){
    // let userAlreadExists;
    console.log("Inside checkUserIdExistsAlready() ");
    console.log("User ID: "+this.userId);
    this.chatBotService.getUserDetails().subscribe(data => {
      for(let i=0;i<data.length;i++){
        console.log("data[i].userId: "+data[i].userId);
        if((data[i].userId)==this.userId.toString()){
          this.userAlreadyExists = "true";
          console.log("userAlreadyExists inside if: "+this.userAlreadyExists);
          break;
        }
      }
      this.checkUserIdExistsAlreadyInsideSubscribe();  
      this.userAlreadyExists=''; 
    },
    errors => console.log(errors)
    );
  }

  checkUserIdExistsAlreadyInsideSubscribe(){
    console.log("this.userAlreadyExists inside dosomething: "+this.userAlreadyExists);
    if(this.userAlreadyExists=="true"){
      if(this.count47_1<1){
        this.count47_1++;
        this.userId='';
        let response = "🛑 The Entered UserID Already Exists ! <br><br>Kindly Enter a New UserID !";
        this.createBotMessage('','',response);
        this.bot_question=this.randomArrayValue(questions_and_responses[0][47].questions);
        this.currentQuestionIndex = 47;
        this.createBotMessage('','',this.bot_question); 
        this.bot_question = questions_and_responses[0][47].subquestion;
        this.createBotMessage('','',this.bot_question);
      }
      else{
        this.count47_1=0;
        this.userId='';
        let invalidResp = "I guess you are Struck ! Taking You to Main Menu ! <br>";
        this.createBotMessage('','',invalidResp);
        this.bot_question1=this.randomArrayValue(questions_and_responses[0][39].questions);
        this.options1 = questions_and_responses[0][39].options;
        this.currentQuestionIndex = 39;
        this.createBotMessage(this.bot_question1,this.options1,'');
        sessionStorage.clear();
        this.clearUserPizzaDetails();
        this.selectedOption1=false;this.selectedOption2=false;this.selectedOption3=false;
      }
    }
    else if(this.userAlreadyExists!="true"){
      this.loadNextQuestion();
    }
  }

  insertUserDetails(){
    console.log("User ID: "+this.userId);
    console.log("User Password: "+this.userLoginPassword);
    console.log("User Name: "+this.billingName);
    console.log("User Email: "+this.billingEmailAddress);
    console.log("User Contact: "+this.billingMobileNumber);
    console.log("User Address: "+this.billingAddress);
    //inserting user details into api->db
    this.chatBotService.insertUserDetails(this.userId,this.userLoginPassword,this.billingName,this.billingEmailAddress,this.billingMobileNumber,this.billingAddress);    
  }

  checkLoginUserId(){
    console.log("Inside checkLoginUserId() ");
    console.log("User ID: "+this.userId);
    this.chatBotService.getUserDetails().subscribe(data => {
      for(let i=0;i<data.length;i++){
        console.log("data[i].userId: "+data[i].userId);
        if((data[i].userId)==this.userId.toString()){
          this.checkuserLoginID = "true";
          console.log("checkLoginUserId inside if: "+this.checkuserLoginID);
          break;
        }
      }
      this.checkLoginUserIdInsideSubscribe();  
      this.checkuserLoginID=''; 
    },
    errors => console.log(errors)
    );
  }

  checkLoginUserIdInsideSubscribe(){
    console.log("this.checkuserLoginID inside dosomething: "+this.checkuserLoginID);
    if(this.checkuserLoginID!="true"){
      if(this.count50_1<1){
        this.count50_1++;
        this.userId='';
        let response = "🛑 The Entered UserID DOES NOT Exists ! <br><br>Kindly Enter Correct UserID !";
        this.createBotMessage('','',response);
        this.bot_question=this.randomArrayValue(questions_and_responses[0][50].questions);
        this.currentQuestionIndex = 50;
        this.createBotMessage('','',this.bot_question); 
        //this.bot_question = questions_and_responses[0][47].subquestion;
        //this.createBotMessage('','',this.bot_question);
      }
      else{
        this.count50_1=0;
        this.userId='';
        let invalidResp = "I guess you are Struck ! Taking You to Main Menu ! <br>";
        this.createBotMessage('','',invalidResp);
        this.bot_question1=this.randomArrayValue(questions_and_responses[0][39].questions);
        this.options1 = questions_and_responses[0][39].options;
        this.currentQuestionIndex = 39;
        this.createBotMessage(this.bot_question1,this.options1,'');
        sessionStorage.clear();
        this.clearUserPizzaDetails();
        this.selectedOption1=false;this.selectedOption2=false;this.selectedOption3=false;
      }
    }
    else if(this.checkuserLoginID=="true"){
      this.loadNextQuestion();
    }
  }

  checkLoginPassword(){
    console.log("Inside checkLoginPassword() ");
    console.log("Login Password: "+this.userLoginPassword);
    this.chatBotService.getUserDetails().subscribe(data => {
      for(let i=0;i<data.length;i++){
        console.log("data[i].userPassword: "+data[i].userPassword);
        if((data[i].userId)==this.userId.toString()){
          if((data[i].userPassword)==this.userLoginPassword.toString()){
            this.checkUserLoginPassword = "true";
            console.log("checkLoginUserId inside if: "+this.checkUserLoginPassword);
            break;
          }
        }
      }
      this.checkLoginPasswordInsideSubscribe();  
      this.checkUserLoginPassword=''; 
    },
    errors => console.log(errors)
    );
  }

  checkLoginPasswordInsideSubscribe(){
    console.log("this.checkUserLoginPassword inside dosomething: "+this.checkUserLoginPassword);
    if(this.checkUserLoginPassword!="true"){
      if(this.count51_1<1){
        this.count51_1++;
        this.userLoginPassword='';
        let response = "🛑 The Entered User Password DOES NOT Exists ! <br><br>Kindly Give Correct Password !";
        this.createBotMessage('','',response);
        this.bot_question=this.randomArrayValue(questions_and_responses[0][51].questions);
        this.currentQuestionIndex = 51;
        this.createBotMessage('','',this.bot_question); 
        //this.bot_question = questions_and_responses[0][47].subquestion;
        //this.createBotMessage('','',this.bot_question);
      }
      else{
        this.count51_1=0;
        this.userLoginPassword='';
        let invalidResp = "I guess you are Struck ! Taking You to Main Menu ! <br>";
        this.createBotMessage('','',invalidResp);
        this.bot_question1=this.randomArrayValue(questions_and_responses[0][39].questions);
        this.options1 = questions_and_responses[0][39].options;
        this.currentQuestionIndex = 39;
        this.createBotMessage(this.bot_question1,this.options1,'');
        sessionStorage.clear();
        this.clearUserPizzaDetails();
        this.selectedOption1=false;this.selectedOption2=false;this.selectedOption3=false;
      }
    }
    else if(this.checkUserLoginPassword=="true"){
      this.loadNextQuestion();
    }
  }

  typingGif(){
    let firstDiv = document.createElement('div');
      firstDiv.id="tempDiv";
      firstDiv.className = "bot-div chat-message";
      let botPicture = document.createElement('img');
      botPicture.className = "bot-pic";
      botPicture.src = "../assets/avataar1.png";
      let secondDiv = document.createElement('div');
      secondDiv.className = "chat-message-content bot-message gif-message";
      //let insideParagraph = document.createElement('p');
      let gifImage = document.createElement('img');
      gifImage.className='gif-Image';
      gifImage.src='../assets/typing-dot1.gif';
      secondDiv.appendChild(gifImage);
      firstDiv.appendChild(botPicture);
      firstDiv.appendChild(secondDiv);
      //firstDiv.appendChild(timeSpan);
      let appendElem = document.getElementsByTagName("div")[5];
      appendElem.appendChild(firstDiv);
      setTimeout(function() {
        let hideDivElement = document.getElementById("tempDiv");
        hideDivElement.style.display="none";
      }, 1000);     
  }

  ngOnInit(): void {
     //hiding send button
     document.getElementById("sendImg").style.display = 'none';
     //creating bot message
     this.bot_question1=this.randomArrayValue(questions_and_responses[0][39].questions);
     this.options1 = questions_and_responses[0][39].options;
     this.currentQuestionIndex = 39;
     this.createBotMessage(this.bot_question1,this.options1,'');
     sessionStorage.clear();
     this.clearUserPizzaDetails();
     //console.log(this.randomOrderID());
 
     this.count1=0;this.count2=0;this.count2_1=0;this.count4=0;this.count6=0;this.count10=0;
     this.count11=0;this.count12=0;this.count13=0;this.count14=0;this.count15=0;this.count16=0;this.count17=0;this.count18=0;this.count20=0;
     this.count31=0;this.count35=0;this.count39=0;
     this.count41=0;this.count42=0;this.count43=0;this.count44=0;this.count44_1=0;this.count46=0;this.count47=0;this.count47_1=0;this.count48=0;this.count49=0;this.count50_1=0;
     this.count51_1=0;

    //  this.chatBotService.getOrderDetails("72723").subscribe(data=>{console.log(data[0])});
    
    //this.userAlreadyExists = '';
     //this.userId='';
      // this.userId="JJd3155";
      // this.checkUserIdExistsAlready();
      // console.log("Inside Oninit: "+this.userAlreadyExists);
  }

}

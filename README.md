# Pizel, The PizzaDeliveryChatBot V1

![a small bg](https://user-images.githubusercontent.com/66553883/101830306-52f7d080-3b5a-11eb-986a-46c3ff6225a1.png)

Pizel is one of the cool chatbots which is developed for Ordering Pizzas. Pizel is developed using Full Stack Web Technologies.

## Technologies Used:

<a href="https://angular.io/" target="_blank"><img title="Angular 10" height="64" width="64" src="https://cdn.svgporn.com/logos/angular-icon.svg" /></a>&nbsp;&nbsp;&nbsp;<a href="https://www.w3schools.com/html/" target="_blank"><img title="HTML 5" height="64" width="64" src="https://cdn.svgporn.com/logos/html-5.svg" /></a>&nbsp;&nbsp;&nbsp;<a href="https://www.w3schools.com/css/" target="_blank"><img title="CSS" height="64" width="64" src="https://cdn.svgporn.com/logos/css-3.svg" /></a>&nbsp;&nbsp;&nbsp;<a href="https://www.typescriptlang.org/" target="_blank"><img title="TypeScript" height="64" width="64" src="https://cdn.svgporn.com/logos/typescript-icon.svg" /></a>&nbsp;&nbsp;&nbsp;<a href="https://nodejs.org/en/about/" target="_blank"><img title="Node JS" height="64" width="64" src="https://cdn.svgporn.com/logos/nodejs-icon.svg" /></a>&nbsp;&nbsp;&nbsp;<a href="https://www.mysql.com/" target="_blank"><img title="MySQL" height="64" width="64" src="https://cdn.svgporn.com/logos/mysql.svg" /></a><br/><br/>

## Validations:

1. User Cannot Enter WhiteSpaces alone. WhiteSpaces have been trimmed.
2. User Cannot Give 1 length character. 
#### 3. UserID/LoginID :
 * First character should be an alphabet.
 * A digit must occur at least once.
 * A Lower case letter must occur at least once.
 * An Upper case letter must occur at least once.
 * No Whitespace allowed in the entire string.
 * From second character, there should be at least 4 characters and maximum of 10 characters.
 #### 4. User Login Password :
 * A digit must occur at least once.
 * A Lower case letter must occur at least once.
 * An Upper case letter must occur at least once.
 * A Special character must occur at least once.
 * No Whitespace allowed in the entire string.
 * There should be at least 5 characters and maximum of 20 characters.
 #### 5. A Basic Email Validation.
 #### 6. Contact Number/ Mobile Number of user should have Exactly 10 numbers.
 #### 7. User Name should contain minimum of 2 characters and no numbers.
 
 ## Features:
 ## Note:
 
 * Auto Focus or Auto Scroll is yet to implemented in this application. So, Kindly **SCROLL TO THE BOTTOM OF THE CHAT WINDOW USING SCROLL BAR to see the latest messages/chats**. This issue would be fixed in the next Version.   
 
 * _Responsive Design_ would be implemented in the next Version. So, As of Now, Kindly _Access my application from a Desktop or a Laptop_
 
 ## Testing :
 
 For Testing Purposes, If you want to speed up the process of testing, then kindly follow the given Instructions:

#### 1. City :
* Select any one among the given List of Cities (_Except 'Others'_)
#### 2. SignUp Module: (If you would like, you can use an existing Login Credentials which is given below and you can skip this step !)
* Enter any name(_Must be of atleast 2 characters_ ; preferably 10 charcters at maximum; space is allowed)
* Enter a _Exact_ 10 digit number.
* Enter a sample email like jd@gmail.com or something (_EMAIL IS UNIQUE_ which means you cannot have 2 accounts with same email)
* As of Now, Address doesn't have any validations. So you can enter some 'street name, city name - pincode' etc.
* In the Next Step, If you want to change the address, you can do it else click on the button 'Yes, I confirm'. 
* Create a ***User ID*** like **jd2K02 or saM1996 or gkK123** etc
* Create a ***Login Password*** like **jd@2K02 or saM@1996 or gkK@234** etc
#### 3. Login Module:
* Existing UserID/Login ID : __as2K20__  ; Existing Login Password: __as@2K20__ ;
* Kindly Use the Above Credentials or the credentials which you have used in SignUp Module to _Login_
* You can select any one among the given 4 options:

 * __Check My Order__:
 
   * You must _Make a New Order_ to get a Order ID ( or you can use an exisiting Order ID such as __72721__)
   
   * Once you entered a valid Order ID, the following details would be displayed:
     * All the Following Details would be displayed __Per 1 Order__
       * _Number of Pizza_
       * _Pizza Name_
       * _Pizza Size_
       * _Pizza AddOns_
       * _Pizza Price_

       * Total Cost of All Orders
   
   
 * __Make a New Order__:
 
  * Click on _yeah_ to see the Pizza Menu.
  * You can chose your Pizza classification such as _Vegetarian or Non - Vegetarian or Both_.
  * You can select :
       * _a Pizza_
       * _Its Size_
       * _AddOns which you would like to be added with your selected Pizza_
       * _Quantity of Selected Pizza_
       
  * If you want to add more pizzas to your current Order, Click on _'Oh Yeah'_ button "**" 
  * If you are satisfied with the current order, Click on _'No Thanks, Proceed Next'_ button
  
    

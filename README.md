# Pizel, The PizzaDeliveryChatBot - Version 1

![a small bg](https://user-images.githubusercontent.com/66553883/101830306-52f7d080-3b5a-11eb-986a-46c3ff6225a1.png)

Pizel is one of the cool chatbots which is developed for Ordering Pizzas. Pizel is developed using Full Stack Web Technologies.

## Technologies Used:

<a href="https://angular.io/" target="_blank"><img title="Angular 10" height="64" width="64" src="https://cdn.svgporn.com/logos/angular-icon.svg" /></a>&nbsp;&nbsp;&nbsp;<a href="https://www.w3schools.com/html/" target="_blank"><img title="HTML 5" height="64" width="64" src="https://cdn.svgporn.com/logos/html-5.svg" /></a>&nbsp;&nbsp;&nbsp;<a href="https://www.w3schools.com/css/" target="_blank"><img title="CSS" height="64" width="64" src="https://cdn.svgporn.com/logos/css-3.svg" /></a>&nbsp;&nbsp;&nbsp;<a href="https://www.typescriptlang.org/" target="_blank"><img title="TypeScript" height="64" width="64" src="https://cdn.svgporn.com/logos/typescript-icon.svg" /></a>&nbsp;&nbsp;&nbsp;<a href="https://nodejs.org/en/about/" target="_blank"><img title="Node JS" height="64" width="64" src="https://cdn.svgporn.com/logos/nodejs-icon.svg" /></a>&nbsp;&nbsp;&nbsp;<a href="https://www.mysql.com/" target="_blank"><img title="MySQL" height="64" width="64" src="https://cdn.svgporn.com/logos/mysql.svg" /></a><br/><br/>

## Demo :

 This Application is Hosted on <a href="https://aws.amazon.com/" title="Amazon Web Services" target="_blank">AWS. </a>You can run this application by clicking on : http://52.14.5.14/
 
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
 
 * The "__Key Feature__" of this application is, Inspite of many Validations, the User would be __Entering their Details__ "__only once__". 
 
 * Upon Entering the details _correctly once_, User doesn't want to enter it again. 
 
 * As a user response, user can __either Click__ on the Available Buttons __or__ user can __type__ on the TextBox.
 
 * User can type their response on the TextBox but __REMEMBER__ that user have to '__Type__' __ALL THE CHARACTERS WHICH ARE SHOWN in the GIVEN OPTONS__ to avoid errors.
 
 * '__In Case Of Wrong Input(s)__' For Every Question, I am giving __1 Oppurtunity__ to give a correct and proper mentioned input. If not, It will take the user to the first and foremost of the chat process.  
 
 ## Note:
 
 * Auto Focus or Auto Scroll is yet to implemented in this application. So, Kindly **SCROLL TO THE BOTTOM OF THE CHAT WINDOW USING SCROLL BAR to see the latest messages/chats**. This issue would be fixed in the next Version.   
 
 * _Responsive Design_ would be implemented in the next Version. So, As of Now, Kindly _Access my application from a Desktop or a Laptop_
 
 ## Instructions :
 
Kindly follow the given Instructions to avoid any errors:

##### 1. City :
* Select any one among the given List of Cities (_Except 'Others'_)
#### 2. SignUp Module: (If you would like, you can use an existing Login Credentials which is given below and you can skip this step !)
* Enter any name(_Must be of atleast 2 characters_ ; preferably 10 charcters at maximum; space is allowed)
* Enter a _Exact_ 10 digit number.
* Enter a sample email like _jd@gmail.com_ or something (_EMAIL IS UNIQUE_ which means user cannot have 2 accounts with same email)
* As of Now, Address doesn't have any validations. So user can enter some 'street name, city name - pincode' etc.
* In the Next Step, If the user want to change the address, the user can do it else click on the button 'Yes, I confirm'. 
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
       
  * If you want to add more pizzas to your current Order, Click on _'Oh Yeah'_ button __##__ 
  * If you are satisfied with the current order, Click on _'No Thanks, Proceed Next'_ button
  * Then Your Order Pricing would be displayed. Here you can either _'Confirm'_ or _'Reset'_ your order by clicking on _'Thats Right'_ or _'Reset my Order'_ buttons.
  * If you chose to _Reset_ your order, then you would be taken to _step 1 in Make a New Order_
  * If you chose to _Confirm_ your order, it would ask you to confirm a Payment Method. In the further versions, I would be implementing a payment gateway for this application. But as of now _"Cash On Delivery(COD)"_ is the available payment method.
    * Because of this only, 
    
      __##__ : You __can't__ able to add __more than 5 orders__ once !
      
       Since COD is the available option as of now, limiting the user to 5 orders would helps me to avoid the risk of _'CANCELLATION AT LAST MOMENT FOR BULK ORDERS'_
       
  * Kindly note down your __'Order ID'__
    * This 'Order ID' is used to know your Ordered Items with the Pricing Details in __Check My Order__
  
 * __Make Bulk Orders__:
 
  * For Giving Bulk Orders or for Private Party Orders, You have to let us know. Thats the objective of this Module:
   
    * Since you are Logged In, I know your Details from the UserID. Since I already know it, I am asking you _'For How Many Persons are you ordering ?'_
    * After selecting it, you have to _'give me a date'_ on when you would like to have your bulk order delivered by clicking on the '_Date Picker_' icon which will appear before the _Send Icon_ ; After selecting a Date, Kindly Click on 'Send' Icon or press 'Enter' Key.
    * You can notedown your __Bulk Order Request ID__ and we would call you back in the shortest time possible.
    
 * __Connect with us__:
 
   > Customer Satisfaction is one of the most important key factors on running a business successfully !
  
   " So, If you have any '_queries or issues_' regarding this appilcation usage, you can make a request to connect with us and we will respond to it ASAP "
   
   The above is the objective of this module:
   
  * (Like Bulk Orders, since I know the details of you by your User ID) I am asking you directly and only about the Issue. 
  
  * You have to click either '_Issue with Ordering Pizza_' or '_Issue with Ordered Pizza_'
  
   * Once you gave a connect request, we would be notified and we will call you in the _Shortest Time Possible_.
   
   __Upon Completion on any of these modules, You can chose either to Browse the Application by clicking 'Go Back To Main Menu' or If you plant to revisit us laters, kindly click on the option 'Log Out' and close the whole application window.__  
   
   ## Pizza(s) Price Design:
   
   ![price plan](https://user-images.githubusercontent.com/66553883/101896477-14e8c400-3bcf-11eb-9051-b5b4d8841197.png)
   
   ## DataBase Screenshots:
   
   ![DB1](https://user-images.githubusercontent.com/66553883/101896703-6002d700-3bcf-11eb-9485-c1eda65cb179.png)

   ![DB2](https://user-images.githubusercontent.com/66553883/101896824-90e30c00-3bcf-11eb-8346-710dc3708ed6.png)
   
   ![DB3](https://user-images.githubusercontent.com/66553883/101896994-dacbf200-3bcf-11eb-91ea-b2dc0a5c8fe8.png)

   ![DB4](https://user-images.githubusercontent.com/66553883/101897095-0818a000-3bd0-11eb-83fe-ca15417238a8.png)
   
   ![DB5](https://user-images.githubusercontent.com/66553883/101897185-2a122280-3bd0-11eb-985d-f0d314a5f3eb.png)


export const questions_and_responses=[
    {
        1:{
            questions:['Hey there, Lets Get Started Right Away !','Please tell us how can we help you today ?'],
            options:['Check My Order','Make a New Order','Make Bulk Orders','Connect with us']
        },
            // question -> check my order
        2:{
            questions:['May I know your Order ID to get started ?','Can I have a look at your order ID ?']
             // IF VALID
        },

        3:{
            questions:['Order Details Based On the Given Order ID: <br><br> ORDER ID: <br> ORDER USER NAME:<br> ORDER EMAIL: <br> ORDERED ITEM: <br> ORDERED DATE AND TIME: <br> ORDERED ADDRESS: <br> ORDERED PAYMENT METHOD: <br>'],
            //order details
        },

        4:{            
            questions:['What are you planning to do now ?'],
            options:['Go Back to Main Menu','Log Out']           
        },
            
        5:{
            // dummy
        },
                //after 20 // showing user about COD payment
        6:{
            questions:['Pizel asks you to chose a Payment Method ?','Can you please Confirm Your Payment Method ?'],
            options:['Cash On Delivery (COD)']
            //after 6, go to 21
        },

        7:{
            // dummy   
        },
            //  question -> make a new order
            //IF  question -> YES
        8:{
            //questions:['May I Know your Residence City ?','Can you tell me in which City you are living in ?'],
            //options:['Chennai','Coimbatore','Kochi','Hyderabad','Bangalore','Mumbai','Kolkata','New Delhi','Others']
        },
            //IF  Question -> Others
        9:{
            //questions:['We are currently having our Franchise only in Limited Cities !',' As of now, our Franchise is available only in Limited Shown Cities, But We are Expanding !'],
            //options:['Be Awesome Stay Awesome !']
        },
            // IF ANY CITY
        10:{
            questions:['Hi, BTW, I am Pizel, one of the Hunger Saviours. Wanna know whats in the Menu Today ?'],
            options:['Yeah']
        },

        11:{
            questions:['May I know whether you have any preference ?','Can you share me your preference ?'],
            options:['Show Me All Available Pizzas','Only Vegetarian Pizzas','Only Non-Vegetarian Pizzas']
        },
            //Show me All Available Pizzas
        12:{
            questions:['Here is our Pizza Menu for Today:'],
            options:['Margherita','Peppy Paneer','Paneer Makhani','Pepper Barbecue Chicken','Indi Chicken Tikka','Chicken Fiesta']
        },
            //Only Vegetarian Pizzas
        13:{
            questions:['Available Vegetarian Pizzas For Today:'],
            options:['Margherita','Peppy Paneer','Paneer Makhani']
        },
            //Only Non-Vegetarian Pizzas
        14:{
            questions:['Available Non-Vegetarian Pizzas For Today:'],
            options:['Pepper Barbecue Chicken','Indi Chicken Tikka','Chicken Fiesta']
        },

        15:{
            questions:['Now tell me about your Pizza Size Preferences !','What about the Pizza size ?'],
            options:['Regular','Medium','Large']
        },

        16:{
            questions:['What would you like to be added in your pizza as Add Ons ?','Now is the Time to Share Your Toppings Preference !'],
            options:['Vegatable Toppings','Tomato Sausage','Cheese Toppings','Chicken Sausage','No Toppings']
        },

        17:{
            questions:['May I know number of Pizzas you want ?'],
            options:[1,2,3,4,5]
        },

        18:{
            questions:['Would you like to order More Pizzas ?'],
            options:['Oh Yeah','No Thanks, Proceed Next']
        },

        19:{
            //questions:['Summarising it:'],    input is given in the typescript
            //options:[]
        },

        20:{
            questions:['Can you Confirm this order?'], //19 & 20 are combined 1 question
            options:['Thats Right','Reset my Order']
            //after 20 go to 6
        },
            // IF Confirmed
        21:{
            //questions:['Can I have your Billing Name Please?'],
            //options:[]
            // User TextBox
        },

        22:{
            //questions:['Can you share me your Billing Mobile No ?','Can I have your Billing Mobile Number Please ?'],
            //options:[]
            // User TextBox
        },

        23:{
           // questions:['Would you like to share your email for the bill details ? (OPTIONAL)'],
            //options:['Sure','Maybe Not Now']
        },
            //IF SURE
        24:{
            //questions:['So, Whats Your Email Address ?'],
            //options:[]
            // User TextBox
        },

        25:{
            //questions:['May I know your Address with Pincode ?',"Billing Address's with PinCode Please ?"],
            //options:[]
            // User TextBox
        },

        26:{
            //questions:['Can you confirm the Given the Address ?'],
            //options:['Yes, I Confirm','No, I need to Edit it']
        },
            //if yes
        27:{
            questions:['Yay, Order is Placed ! <br><br> Here is your order ID :','Your Order is Placed Successfully !<br><br> Kindly Note Your Order ID:'],
            //options:['']

            //Repeat Question 6
        },
            //bulk order
        28:{
            //questions:['May I Know your Residence City ?','Can you tell me in which City you are living in ?'],
            //options:['Chennai','Coimbatore','Kochi','Hyderabad','Bangalore','Mumbai','Kolkata','New Delhi','Others']
        },
                //IF  Question -> Others
        29:{
            //questions:['We are currently having our Franchise only in Limited Cities !',' As of now, our Franchise is available only in Limited Shown Cities, But We are Expanding !'],
            //options:['Be Awesome Stay Awesome !']
        },

        30:{
            //questions:['May I know your wonderful Name ?','Can you tell me What is your Cool Name ?']
            //textbox input
        },

        31:{
            questions:['How many people are you Expecting ?'],
            options:['5-10','10-30','30-50','50-60','More Than 60']
        },

        32:{
            questions:['When do you Need the Pizzas ? Pick a Date !'],
            //textbox date input
        },

        33:{
            //questions:['Can I have your Contact Number ?','May I know your Mobile Number ?'],
            //textbox input
        },

        34:{
            questions:['One of our Team Members will Contact you ASAP !']
            //thank you ; have a wonderful day !
        },
                //contact us
        35:{
            questions:['Hi There, May I know where you are facing Issue ?'],
            options:['Issue with Ordering Pizzas','Issues with Ordered Pizzas']
        },

        36:{
            //questions:['May I know your wonderful Name ?','Can you tell me What is your Cool Name ?'],
            //textbox input
        },

        37:{
            //questions:['Can I have your Contact Number ?','May I know your Mobile Number ?'],
            
        },

        38:{
            questions:['One of our Team Members will Connect with you ASAP !']
            //thank you ; have a wonderful day !
        },

        //<--------------------------QUESTIONS START HERE------------------------------->

        39:{
            questions:['May I Know your Residence City ?','Can you tell me in which City you are living in ?'],
            options:['Chennai','Coimbatore','Kochi','Hyderabad','Bangalore','Mumbai','Kolkata','New Delhi','Others']
        },
               //if others
        40:{
            questions:['SORRY ! We are currently having our Franchise only in Limited Cities !',' SORRY ! As of now, our Franchise is available only in Limited Shown Cities, But We are Expanding !'],
        },
            //if chosen any available cities
        41:{
            questions:["Kindly SignUp and Login to Proceed Further ! We assure you we ask only few Necessary Details !","Use our 1-Time Hassle-Free SignUp and Login to Get Started ! Its Gonna take only a couple of Minutes !"],
            options:['1-Time SignUp','Login Now']
        },
                //if signup
        42:{
            questions:['Can I have your Lovely Name Please?','May I know your Cool Name Please ?']
            // user textbox input -> This is also the Biling Name !
        },

        43:{
            questions:['Can you share me your Mobile No ?','Can I have your Contact Number Please ?']
            // user textbox input -> This is also the Biling Mobile No !
        },

        44:{
            questions:['Can I have your Email Please ?','Can you share me your Email ID ?'],
            // user textbox input -> This is also the Biling Email !
        },

        45:{
            questions:['May I know your Address with Pincode ?']
            // user textbox input -> This is also the Biling Address !
        },

        46:{
            questions:['Can you confirm the Given the Address ?'],
            options:['Yes, I Confirm','No, I need to Edit it']
        },
                //if confirm
        47:{
            questions:['Enter a Login ID/User ID : '],
            subquestion:['🚥 First character should be an alphabet ! <br><br>🚥 It must contain atleast 1 Number ! <br><br>🚥 Excluding the First Character, It must contain atleast 1 Lower Case Letter ! <br><br>🚥 Excluding the First Character, It must contain atleast 1 Upper Case Letter ! <br><br>🚥 It MUST NOT contain any Blank Spaces ! <br><br>🚥 It should be of MINIMUM 5 charaters and MAXIMUM 10 characters !']
            // user TextBox -> User ID/Login ID
        },

        48:{
            questions:["Enter Your Login Password : "],
            subquestion:['🚥 It must contain atleast 1 Number ! <br><br>🚥 It must contain atleast 1 Lower Case Letter ! <br><br>🚥 It must contain atleast 1 Upper Case Letter ! <br><br>🚥 It MUST NOT contain any Blank Spaces ! <br><br>🚥 It must contain one of these special characters "@#$%^&+=" ! <br><br>🚥 It should be of MINIMUM 5 charaters and MAXIMUM 20 characters !']
            // user TextBox -> Login Password
        },

            //if success
        49:{
            questions:['🥳 Yay, Your Account is Successfully Created ! Kindly Login Now !'],
            options:['Login']
        },

            //account created successfully ! now login or chose Login at the beginning
        50:{
            questions:['Enter your Login ID/User ID : ']
            // user TextBox -> User ID/Login ID
        },

        51:{
            questions:['Enter your Login Password : ']
            // user TextBox -> Login Password
        }
    }
];

export const invalid_responses = [
    {
        invalidRespones:['Pardon ? Give a Valid Input Please !<br>','Come Again ? Can you kindly give Correct Response for the given question ?<br>','Lol, We Can Do This All Day. Please give me right reply !<br>']
    }
];

export const byMistake_responses = [
    {
        byMistakeResponses : ['I guess You have might Entered Wrongly ! <br><br> Kindly Answer Properly this Time !','Kindly Read the Question and Please Enter Correctly This Time !<br>']
    }
];
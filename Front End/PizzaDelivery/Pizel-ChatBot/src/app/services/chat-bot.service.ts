import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatBotService {

  private url = "http://localhost:8050/";
  constructor(private http:HttpClient) { }

  getUserDetails():Observable<any>{
    return this.http.get(`${this.url+"userDetails"}`);
  }

  insertUserDetails(userId_arguement:String,userPassword_arguement:String,userName_arguement:String,userEmail_arguement:String,userContact_arguement:String,userAddress_arguement:String){
    const resultObject = {userId:userId_arguement,userPassword:userPassword_arguement,userName:userName_arguement,userEmail:userEmail_arguement,userContact:userContact_arguement,userAddress:userAddress_arguement};
    return this.http.post(`${this.url+"insertUserDetails"}`,resultObject).subscribe();
  }

  insertOrderDetails(OrderID,PizzaName,PizzaSize,PizzaAddOns,Quantity,PizzaPrice,OrderedTime){
    const resultObject = {orderId:OrderID,pizzaName:PizzaName,pizzaSize:PizzaSize,pizzaAddOns:PizzaAddOns,quantity:Quantity,pizzaPrice:PizzaPrice,orderedDateTime:OrderedTime};
    return this.http.post(`${this.url+"insertOrderDetails"}`,resultObject).subscribe();
  }

  getOrderDetails(OrderID):Observable<any>{
    return this.http.get(`${this.url+"showOrderDetails"}/${OrderID}`);
  }

  insertBulkOrderDetails(userID,bulkOrderID,peopleExpected,bulkOrderedDate,orderedDateTime){
    const resultObject = {userId:userID,bulkOrderId:bulkOrderID,peopleExpected:peopleExpected,bulkOrderExpectedDate:bulkOrderedDate,orderedDateTime:orderedDateTime};
    return this.http.post(`${this.url+"insertBulkOrderDetails"}`,resultObject).subscribe();
  }

  insertContactUsDetails(userID,issueType,contactDateTime){
    const resultObject = {userId:userID,contactUsIssue:issueType,contactRequestTime:contactDateTime};
    return this.http.post(`${this.url+"insertContactUsDetails"}`,resultObject).subscribe();
  }
}

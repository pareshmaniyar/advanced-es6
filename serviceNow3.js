/*

Swiggy

Features
- Delivery boy location
- restaurant location

Flow:
1. Order placed for a restaurant
2. Assign placed order to delivery boy

Req
1. Extensible to assigning -> round robin could change
2. Code minimal
3. Abstract

CLASSES

location
    - lat
    - lng
user
    - name
restaurant
    - name
    - location class
payment class
    - details
order -> user details, restaurant details
    - orderId
    - userId
    - restaurantId
    - paymentId
    - items
Agent -> delivery boy
    - agentId
    - name
    - ratings
    - location
    - status: AVAILABLE | GOT_THE_PACKAGE 

Order -> assigned
Order class
    - store order in DB

DeliveryController class
    - strategy = new AssignDelivery('roundrobin');
    - assignee = startegy.assignOrder(order);
    - store assignee DB

abstract class DeliveryStratergy
    - assignOrder(order): assignee

AssignDelivery
    switch(statergy)
        - RoundRobin
        - Leastdistance
        - Leasttime

Redis
location1: {dev1, dev2}
location2: {dev3, dev4}

dev1: location1 -> location2 - track - cache
DB: append-only


*/



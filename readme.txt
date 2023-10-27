client ======== our server ========= weather api server


step 1 = Create express server


fetch data in our server from weather api server .................. 


step 2 = Get Api Link From Weatherapi.com
         make Request from Our Server (Express Server) To External Server [link] (Weatherapi Server) by HTTP Module (http.get)

step 3 = by step 2 , we get api data fetch in our server

step 4 = in http.get ,in response.on ,we parse data in Json and store in variable weadata

step 5 = using weadata ,we store specific data like temperature in variable 


showing data in our client side from our server .......................

step 6 =  send spiecific data using res.write && res.send()

make changeable..............

step 7 = make a html sturture for take city name input 

step 8 = by form post method , we send post data after submiting

step 9 = take input in our terminal using req.body.input {body Parser}

step 10 = seperate api link , for changing city , & send by res.send




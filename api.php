<?php

header("Access-Control-Allow-Origin:*");
if(isset($_REQUEST['getCurrency']) && $_REQUEST['getCurrency']=='all')
{

  
   $curl = curl_init();

   curl_setopt_array($curl, array(
     CURLOPT_URL => "https://api.apilayer.com/exchangerates_data/latest?base=GBP&symbols=INR,USD,EUR,CHF,AUD,CAD",
     CURLOPT_HTTPHEADER => array(
       "Content-Type: text/plain",
       "Access-Control-Allow-Origin: http://localhost:3000",
       "apikey: 49awdoJoif7Z5egTSAGlWtA1A6YFhAhO"
     ),
     CURLOPT_RETURNTRANSFER => true,
     CURLOPT_ENCODING => "",
     CURLOPT_MAXREDIRS => 10,
     CURLOPT_TIMEOUT => 0,
     CURLOPT_FOLLOWLOCATION => true,
     CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
     CURLOPT_CUSTOMREQUEST => "GET"
   ));
   
   $response = curl_exec($curl);
   
   curl_close($curl);
   echo $response;
   die();
}
?>
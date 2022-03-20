#include <ESP8266WiFi.h>
#include <FirebaseArduino.h>
#include <ArduinoJson.h>
#include <ESP8266HTTPClient.h>
#include "DHT.h"

#define WIFISSID "" 
#define PASSWORD ""  
#define FIREBASEHOST ""
#define FIREBASEAUTH ""

#define DHTPIN 4
#define LED 2 
#define DHTTYPE DHT11

DHT dht(DHTPIN, DHTTYPE); 

void setup() 
{
  Serial.begin(115200);
  dht.begin();
               
  WiFi.begin(WIFISSID, PASSWORD);                                  
  Serial.print("Connecting to ");
  Serial.print(WIFISSID);
  while (WiFi.status() != WL_CONNECTED) {
    digitalWrite(LED, LOW);
    delay(250);
    digitalWrite(LED, HIGH);
    delay(250);
  }
  digitalWrite(LED, HIGH);
  Serial.println();
  Serial.print("Connected");
  Serial.print("IP Address: ");
  Serial.println(WiFi.localIP());                           
  Firebase.begin(FIREBASEHOST, FIREBASEAUTH);                
 
}
 
void loop() 
{
  float h = dht.readHumidity();                                 
  float t = dht.readTemperature();                              
  
  if (isnan(h) || isnan(t)) {                                   
    Serial.println("Failed to read from DHT sensor!");
    return;
  } 
  Serial.print("Humidity: ");  
  Serial.print(h);
  String fireHumid = String(h) + String("%");                   
  
  Serial.print("%  Temperature: ");  
  Serial.print(t);  
  Serial.println("°C ");
  String fireTemp = String(t) + String("°C");
  delay(5000);
 
  
  Firebase.pushString("/DHT11/Humidity", fireHumid);            
  Firebase.pushString("/DHT11/Temperature", fireTemp);         
  if (Firebase.failed()) {
    Serial.print("pushing /logs failed:");
    Serial.println(Firebase.error()); 
    return;
  }
}

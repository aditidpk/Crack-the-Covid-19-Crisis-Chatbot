# Crack-the-Covid-19-Crisis-Chatbot
This project provides an insight to the chatbot created to provide solution for Covid-19 Crisis.

## Authors
Team Name - _init_iators
- [Aditi Deepak](aditi.dpk17@gmail.com) - Team Leader
- [Devendra Singhi](singhidevendra0298@gmail.com)
- [Harshit Harsh](hharshit27@gmail.com)

## Overview

### What's the problem?
When a new disease emerges, communication systems are one of the first systems to become stressed and overwhelmed by the bevy of requests, emergencies, and panics that are attributed to the unknown. Addressing crisis communication is crucial.

### How can technology help?
Whether via text, phone, websites, or communication apps, conversing with chatbots and other AI-enabled resources can play a critical role in helping communities quickly understand crucial information and free up customer service resources to focus on higher-level issues.
Therefore we have come up with a chatbot called "Medic" which addresses frequently asked questions related to the crisis and tries to provide answers to them.
Medic can help address the issues that our users face while trying to gather accurate, relevant information. Whether you're trying to learn the latest news about Covid-19 or learn where there's testing in your area, Medic can play a major role in helping communities quickly understand crucial information and free up customer service resources to focus on higher-level issues.
Medic also identifies symptoms based on user response and tells them if they could be infected or not. It provides a dynamic count of patients in India and around the world. It also gives news updates related to Covid-19 from various sources. 
Medic has a database for various hospitals in India that provide treatment for Covid-19 and recommends them to the user based on the states/zones.

## Video

[![Crack the Covid-19 Crisis - Medic Chatbot](https://i9.ytimg.com/vi/PicTEpzLEoY/mqdefault.jpg?time=1590246196217&sqp=CPD0pPYF&rs=AOn4CLDIwturHbmG02UvninFjmaI_iSREQ)](https://www.youtube.com/watch?v=PicTEpzLEoY)

## The idea
COVID-19 has citizens looking for answers about symptoms and testing sites as well as current status of schools, transportation, and other public services.Medic a virtual assistant pre-loaded to understand and respond to common questions about COVID-19, scan COVID-19 news articles using Watson Discovery and respond to COVID statistics inquires with data from trusted sources.

Medic is integrated to an IBM Cloud hosted web server by using Slack Integration

It can:
- Respond by sharing consistent, accurate COVID-19 information
- Help citizens quickly and easily access the latest information
- Free valuable resources by automating answers to common COVID-19 questions
- Dynamically update information with the latest developments and recommendations
- Check for symptoms in the users and predict if they could be possibly infected with Corona Virus
- Provides information on Covid-19 hospitals located in different states of India and different helpline numbers.

### Integration of Medic and Telegram with Node-RED
- Creating a Telegram bot:
- After installing Telegram on a mobile phone of your choice, search for botFather.
- Once found, send a /newbot command and follow these instructions:
- Set a name.
- Set a username.
- Save the access token for future use.

## Creating Assistant Service:
- Login to your IBM Cloud account and go to the link provided in the Prerequisites section for Watson Assistant service.
- Set your service name (should be an unique name), then click Create.
- After creating the Assistant service you will be directed to the Service Details page. Click on Launch tool. Leave the Service - - - Details page open, you will need this page later.
- After launching the Assistant service, create a new workspace. Name your workspace as you wish.
- Click on the Deploy menu on the left and save your Workspace ID, you will need that in later sections.
- Go to the Intents tab then select Add intent.
- After creating intents go to the Dialog tab and click Create to create a dialog.
- Welcome and Anything else nodes come by default. The Welcome node is for the opening message, the Anything else node is for the unhandled text input.
- Now you can test your chat bot by clicking the upper right conversation icon.

## Creating and Configuring Node-RED instance:
- Create an instance of Node-RED and name the instance as you want then create it. It can take up to 5 minutes for the instance to be ready.
- When you see the Running state click on Visit App URL.
- After going to your App URL follow the follow the instructions provided. You need to set Username and Password for accessing your Node-RED application. After setting your credentials you will be able to access the Node-RED interface.
- Select manage palette from the top right menu.
- At the manage palette menu click on the Install tab then search for telegram.
- Install node-red-contrib-telegrambot. After installation is completed close the palette menu.
- Search for telegram from the upper left filter section then drag and drop Telegram receiver and Telegram sender nodes. node Double click on the Telegram receiver node and click on the pencil icon for configuring your bot credentials
- Fill the bot-name and token fields according to the bot credentials you created earlier.
- In Telegram sender node select the bot credentials you created in Telegram receiver node.
- Now you have configured the Telegram part on Node-RED. You can test it by connecting the Telegram receiver node to the Telegram sender node.
- You can send a message to your bot on Telegram and it will echo the message you wrote. That’s because we forwarded the message payload directly to the Telegram sender.
- Now that bot interface is ready, let’s start the integration of Watson Assistant service. In the first part there was a Service Details page for the Assistant service. Go to that page and find the Connections tab.
- After opening the Connections tab, click on Create connection and find the Node-RED application you created, then make the connection.
- After making the connection go back to your Node-RED interface and search for conversation in the search bar in the upper left corner. After finding the conversation node just drag and drop it.
- We need 2 function nodes for preparing the message object in Json format. One is for preparing the message before sending it to the conversation node. The other one is for preparing the message before sending it to the Telegram sender node.
- Search for function in the upper right search bar as before, then drag and drop 2 function nodes. Name your function nodes Prepare1 and Prepare2.
- Content of the function nodes:
- Finally, your Nodes should look like the one below:
![Image](https://github.com/aditidpk/Crack-the-Covid-19-Crisis-Chatbot/blob/master/Screenshot%20(196).png)
- Click on Deploy button in the upper right, then test your application on Telegram.
- The bot can be accessed by searching for Almeida27 on Telegram app.

![Image1](https://github.com/aditidpk/Crack-the-Covid-19-Crisis-Chatbot/blob/master/Screenshot%20(197).png)
![Image2](https://github.com/aditidpk/Crack-the-Covid-19-Crisis-Chatbot/blob/master/Screenshot%20(198).png)

## Documents

### Trusted sources for COVID-19 information
- [CDC COVID-19 FAQ](https://www.cdc.gov/coronavirus/2019-ncov/faq.html)
- https://www.mohfw.gov.in/#
- https://covid-19india-api.herokuapp.com/v2.0/helpline_numbers
- https://api.rootnet.in/covid19-in/stats/latest

## Datasets
- [covid19api](https://covid19api.com/)
- [covid19_stats_indian_states](https://api.rootnet.in/covid19-in/stats/latest)

## Technology

### IBM technology

- [IBM Watson Assistant](https://www.ibm.com/cloud/watson-assistant/)
- [Watson Discovery](https://www.ibm.com/cloud/watson-discovery)
- [IBM Cloud Functions](https://cloud.ibm.com/functions/)
- [Continuous Delivery](https://cloud.ibm.com/services/continuous-delivery/)
- [Node-RED](https://cloud.ibm.com/developer/appservice/apps)

### Open source technology
- [Node.js](https://nodejs.org/en/)

## Disclosures
Medic is populated with data that is sourced from the following resources:

- Most static responses provide information found on the CDC's COVID FAQ Page: https://www.cdc.gov/coronavirus/2019-ncov/faq.html
- Dynamic infection and death counts are sourced from Johns Hopkins University via the following API: https://www.covid19api.com/
- Dynamic infection and death counts of Indian states are sourced from Ministry of Health and Family Welfare Page: https://api.rootnet.in/covid19-in/stats/latest
- Helpline numbers for Indian States Page: https://covid-19india-api.herokuapp.com/v2.0/helpline_numbers



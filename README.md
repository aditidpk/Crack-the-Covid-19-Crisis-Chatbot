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

![Crisis Comms Architecture diagram](https://raw.githubusercontent.com/Call-for-Code/Solution-Starter-Kit-Communication-2020/master/images/Crisis-Comms-Architecture-Nodejs-WebServer.png)

1. User invokes a COVID-19 Telegram integration chatbot app and asks a question.
2. Slack app calls the Watson Assistant service hosted in IBM Cloud.
3. Watson Assistant uses natural language understanding and machine learning to extract entities and intents of the user question.
4. Source COVID-19 FAQ information from trusted CDC data
5. Watson Assistant invokes an OpenWhisk open source powered IBM Cloud Function.
6. IBM Cloud Function calls the Watson Discovery service running in IBM Cloud.
7. Watson Discovery scans news articles and responds with relevant articles.
8. Watson Assistant invokes an OpenWhisk open source powered IBM Cloud Function.
9. IBM Cloud Function calls the COVID-19 API to get statistics.
10. Watson Assistant replies to the Slack application.
11. Slack app displays the chat answer to the user.

The bot can be accessed by searching for Almeida27 on Telegram app.

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



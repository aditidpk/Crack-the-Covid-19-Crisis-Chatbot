/**
 *
 * main() will be run when you invoke this action
 *
 * @param Cloud Functions actions accept a single parameter, which must be a JSON object.
 *
 * @return The output of this action, which must be a JSON object.
 *
 */
var request = require("request-promise");
const DiscoveryV1 = require("watson-developer-cloud/discovery/v1");

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const statesMap = {
andaman_and_nicobar_islands: "Andaman and Nicobar Islands",
andhra_pradesh: "Andhra Pradesh" ,
arunachal_pradesh: "Arunachal Pradesh",
assam: "Assam",
bihar: "Bihar",
chandigarh: "Chandigarh",
chhattisgarh: "Chhattisgarh",
dadar_nagar_haveli: "Dadar Nagar Haveli",
daman_and_diu: "Daman and Diu",
delhi: "Delhi",
goa: "Goa",
gujarat: "Gujrat",
haryana: "Haryana",
himachal_pradesh: "Himachal Pradesh",
jammu_and_kashmir: "Jammu and Kashmir",
jharkhand: "Jharkhand",
karnataka: "Karnataka",
kerala: "Kerala",
ladakh: "Ladakh",
lakshadweep: "Lakshadweep",
madhya_pradesh: "Madhya Pradesh",
maharashtra: "Maharashtra",
manipur: "Manipur",
meghalaya: "Meghalaya",
mizoram: "Mizoram",
nagaland: "Nagaland",
odisha: "Odisha",
puducherry: "Puducherry",
punjab: "Punjab",
rajasthan: "Rajasthan",
sikkim: "Sikkim",
tamil_nadu: "Tamil Nadu",
telangana: "Telengana",
tripura: "Tripura",
uttarakhand: "Uttarakhand",
uttar_pradesh: "Uttar Pradesh",
west_bengal: "West Bengal",
};

function formatStates(state) {
  state = state.toLowerCase();
  state = state.replace(" ", "_");
  return state;
}

async function main(params) {
  if (params.type === "api") {
    try {
      const summary = await request({
        method: "GET",
        uri: "https://api.covid19api.com/summary",
        json: true,
      });

      if (params.location) {
        // country was the old param, could be states in India.
        state = formatStates(params.location);
        if (state in statesMap) {

          const data = await request({
            method: "GET",
            uri: "https://api.rootnet.in/covid19-in/stats/latest",
            json: true,
          });
            for (var j = 0; j < data.data.regional.length; j++) {
                if (data.data.regional[j].loc.toLowerCase() === statesMap[state].toLowerCase()) {
                    return {
                        result: `Here are the stats for ${data.data.regional[j].loc}:\n Total Cases: ${data.data.regional[j].totalConfirmed}\nTotal Deaths: ${data.data.regional[j].deaths}\nTotal Recovered: ${data.data.regional[j].discharged}\n\nSource: Ministry of Health and Family Welfare`,
                    };
                }
            }
        }
        for (var i = 0; i < summary.Countries.length; i++) {
          if (summary.Countries[i].Country.toLowerCase() ===
              params.location.toLowerCase() ||
            summary.Countries[i].CountryCode.toLowerCase() ===
              params.location.toLowerCase()) {
            return {
              result: `Here are the stats for ${summary.Countries[i].Country}:\n Total Cases: ${summary.Countries[i].TotalConfirmed}\nTotal Deaths: ${summary.Countries[i].TotalDeaths}\nTotal Recovered: ${summary.Countries[i].TotalRecovered}\n\nSource: Johns Hopkins CSSE`,
            };
          }
        }
        return { error: "did not find location" };
      }
      let totalCases = summary.Global.TotalConfirmed;
      let totalDeaths = summary.Global.TotalDeaths;
      let totalRecovered = summary.Global.TotalRecovered;

      return {
        result: `This is all the confirmed cases I found:\nTotal Cases: ${totalCases}\nTotal Deaths: ${totalDeaths}\nTotal Recovered: ${totalRecovered}\n\nSource: Johns Hopkins CSSE`,
      };
    } catch (err) {
      return { error: "it failed : " + err };
    }
  } 
  else if (params.type === "helpline") {
      try{
          if (params.location) {
        // country was the old param, could be states in India.
        state = formatStates(params.location);
        if (state in statesMap) {

          const data = await request({
            method: "GET",
            uri: "https://covid-19india-api.herokuapp.com/v2.0/helpline_numbers",
            json: true,
          });
            for (var j = 0; j < data[1].contact_details.length; j++) {
                if (data[1].contact_details[j].state_or_UT.toLowerCase() === statesMap[state].toLowerCase()) {
                    return {
                        result: `Here are the helpline numbers for ${data[1].contact_details[j].state_or_UT}:\n Helpline No.: ${data[1].contact_details[j].helpline_number}\n Central Helpline Number: ${data[1].helpline_number}\n Email ID: ${data[1].helpline_email}\n\nSource: Ministry of Health and Family Welfare`,
                    };
                }
            }
            return { error: "did not find location" };
        }
      }
      }catch (err) {
      return { error: "it failed : " + err };
    }
  }
  else {
    const discovery = new DiscoveryV1({
      version: "2019-03-25",
      iam_apikey: params.api_key,
      url: params.url,
    });

    const offset = getRandomInt(50);

    const queryParams = {
      environment_id: params.env_id,
      collection_id: params.collection_id,
      natural_language_query:
        "corona virus " + params.input || "corona virus news",
      count: 3,
      offset: offset,
    };
    try {
      data = await discovery.query(queryParams);
      let response = data.results.map((v, i) => {
        return `${v.title}
                 ${v.text}
                 ${v.url}`;
      });
      return {
        result:
          "Here are some news articles we found. We can’t verify the accuracy of all of these sources.\n\n" +
          response.join("\n\n"),
      };
    } catch (err) {
      return { error: "it failed : " + err };
    }
  }
}

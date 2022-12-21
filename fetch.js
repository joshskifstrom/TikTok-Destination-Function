import fetch from "node-fetch";

let addMappingBody = {
  advertiser_ids: ["7178918106775994370"],
  action: "add",
  id_schema: ["EMAIL_SHA256"],
  batch_data: [
    [
      {
        id: "5f8110be1826465198ec9e49891f9479d83a6acb545bcc25c02c02b3e0285657",
        audience_ids: ["167290896"],
      },
    ],
    [
      {
        id: "e8a6d82cce0dde45c573b33da6c81b969fb42e27c2473c16b38d57fdeb2fbf29",
        audience_ids: ["167290896"],
      },
    ],
  ],
};

httpRequest(addMappingBody);

//HTTP Request
async function httpRequest(body) {
  let endpoint =
    "https://business-api.tiktok.com/open_api/v1.3/segment/mapping/";
  let settings = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Token": "49d3067637418943352b1ce489001deaad94d1ab",
    },
    body: JSON.stringify(body),
  };
  try {
    let response = await fetch(endpoint, settings);
    console.log(response);
    if (response.status == 200) return response.status;
    else {
      throw Error("ERROR: " + response.status + " " + response.statusText);
    }
  } catch (error) {
    // Retry on connection error
    //throw new RetryError(error.message);
    console.log(error.message);
  }
}

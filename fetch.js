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

let settings = {
  advertiserIds: "7178918106775994370",
  idSchema: "EMAIL_SHA256",
  accessToken: "49d3067637418943352b1ce489001deaad94d1ab",
  audienceId: "167290896",
  endpoint: "https://business-api.tiktok.com/open_api/v1.3/segment/mapping/",
};

httpRequest(addMappingBody, settings);

//Lesson Learn try block catches fetch function errors. It does not catch http response errors. 
//That's why the if statement is outside of the try block.
//HTTP Request
async function httpRequest(body, set) {
  let endpoint = set.endpoint;
  let settings = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Token": set.accessToken,
    },
    body: JSON.stringify(body),
  };
  
  let res;
  try {
    res = await fetch(endpoint, settings);
  } catch (err) {
    // Retry on connection error
    throw new RetryError(`RetryError ${err}`)
  }
  console.log(res);
  if (res.status == 200) return res.json();
  if (res.status >= 500 || res.status === 429) {
    // Retry on 5xx and 429s (ratelimits)
    throw new RetryError(`RetryError ${res.status} ${res.statusText}`)
  } else {
    //throw new ValidationError(`ValidationError ${res.status} ${res.statusText}`)
    throw new Error(`ValidationError ${res.status} ${res.statusText}`)
  }
}

import fetch from "node-fetch";
import crypto from "crypto";

let body = [
  {
    context: {
      library: {
        name: "unknown",
        version: "unknown",
      },
      personas: {
        computation_class: "audience",
        computation_id: "aud_21MUOyH49Miu5XJFuXcZ8xTDSAH",
        computation_key: "tiktok_all_members",
        namespace: "spa_fbHVnPsSCwpwc4mdH5dJhZ",
        space_id: "spa_fbHVnPsSCwpwc4mdH5dJhZ",
      },
    },
    integrations: {
      All: false,
      Warehouses: {
        all: false,
      },
    },
    messageId: "personas_2JANV8r3BBV4KbRhJIWAbAZcMvr",
    originalTimestamp: "2022-12-20T06:15:48.929272685Z",
    receivedAt: "2022-12-20T06:15:58.569Z",
    sentAt: null,
    timestamp: "2022-12-20T06:15:48.929Z",
    traits: {
      tiktok_all_members: true,
      email: "vortexdrift150@fake.com",
    },
    type: "identify",
    userId: "ab4840a5-fd5e-4892-88eb-ebbf39b78247",
    writeKey: "8aVWE9WnRgWrDW6AIX4wrEJEVlFjiYkJ",
  },
  {
    context: {
      library: {
        name: "unknown",
        version: "unknown",
      },
      personas: {
        computation_class: "audience",
        computation_id: "aud_21MUOyH49Miu5XJFuXcZ8xTDSAH",
        computation_key: "tiktok_all_members",
        namespace: "spa_fbHVnPsSCwpwc4mdH5dJhZ",
        space_id: "spa_fbHVnPsSCwpwc4mdH5dJhZ",
      },
    },
    integrations: {
      All: false,
      Warehouses: {
        all: false,
      },
    },
    messageId: "personas_2JANV7BcNvaaSufSXSUs1baKlL0",
    originalTimestamp: "2022-12-20T06:15:48.923647215Z",
    receivedAt: "2022-12-20T06:15:58.379Z",
    sentAt: null,
    timestamp: "2022-12-20T06:15:48.923Z",
    traits: {
      tiktok_all_members: true,
      email: "ijokmcx@fake.com",
    },
    type: "identify",
    userId: "fde7bd62-093f-4383-903b-e8bb7369f90f",
    writeKey: "8aVWE9WnRgWrDW6AIX4wrEJEVlFjiYkJ",
  },
  {
    context: {
      library: {
        name: "unknown",
        version: "unknown",
      },
      personas: {
        computation_class: "audience",
        computation_id: "aud_21MUOyH49Miu5XJFuXcZ8xTDSAH",
        computation_key: "tiktok_all_members",
        namespace: "spa_fbHVnPsSCwpwc4mdH5dJhZ",
        space_id: "spa_fbHVnPsSCwpwc4mdH5dJhZ",
      },
    },
    integrations: {
      All: false,
      Warehouses: {
        all: false,
      },
    },
    messageId: "personas_2JANVBSlrYMkf7Mbx12Sad93csF",
    originalTimestamp: "2022-12-20T06:15:48.643106191Z",
    receivedAt: "2022-12-20T06:15:58.379Z",
    sentAt: null,
    timestamp: "2022-12-20T06:15:48.643Z",
    traits: {
      tiktok_all_members: true,
      email: "a0903939867@fake.com",
    },
    type: "identify",
    userId: "ff3ca2d5-d44f-40ab-86ca-d127ae0adfad",
    writeKey: "8aVWE9WnRgWrDW6AIX4wrEJEVlFjiYkJ",
  },
  {
    context: {
      library: {
        name: "unknown",
        version: "unknown",
      },
      personas: {
        computation_class: "audience",
        computation_id: "aud_21MUOyH49Miu5XJFuXcZ8xTDSAH",
        computation_key: "tiktok_all_members",
        namespace: "spa_fbHVnPsSCwpwc4mdH5dJhZ",
        space_id: "spa_fbHVnPsSCwpwc4mdH5dJhZ",
      },
    },
    integrations: {
      All: false,
      Warehouses: {
        all: false,
      },
    },
    messageId: "personas_2JANVA3HUnPt9A0eKgldy189Jlq",
    originalTimestamp: "2022-12-20T06:15:48.632659021Z",
    receivedAt: "2022-12-20T06:15:58.569Z",
    sentAt: null,
    timestamp: "2022-12-20T06:15:48.632Z",
    traits: {
      tiktok_all_members: true,
      email: "ryan.wang168168@gmail.com",
    },
    type: "identify",
    userId: "dd55248e-934c-406c-8775-39d05a893027",
    writeKey: "8aVWE9WnRgWrDW6AIX4wrEJEVlFjiYkJ",
  },
];

let settings = {
  advertiserIds: "7178918106775994370",
  idSchema: "EMAIL_SHA256",
  accessToken: "49d3067637418943352b1ce489001deaad94d1ab",
  audienceId: "167290896",
  endpoint: "https://business-api.tiktok.com/open_api/v1.3/segment/mapping/",
};

let addMappingArray = [];
let deleteMappingArray = [];

function onBatch(body, settings) {
  //get computation key
  let computationKey = body[0].context.personas.computation_key;

  let result = body.map(function (user) {
    //update computation key to boolean value
    let computationKeyValue = user.traits[computationKey];

    //console.log("computationKeyValue", computationKeyValue);

    if (computationKeyValue) {
      addMappingArray.push([
        {
          id: sha256Hash(user.traits.email), // This is the SHA256 of email for User 1
          audience_ids: [settings.audienceId],
        },
      ]);
    } else {
      deleteMappingArray.push([
        {
          id: sha256Hash(user.traits.email), // This is the SHA256 of email for User 1
          audience_ids: [settings.audienceId],
        },
      ]);
    }
  });
  //console.log("addMappingArray", addMappingArray);
  //console.log("deleteMappingArray", deleteMappingArray);

  //add batch data body to tiktok json payload
  let addMappingBody = {
    advertiser_ids: [settings.advertiserIds],
    action: "add",
    id_schema: [settings.idSchema],
    batch_data: addMappingArray,
  };

  //add batch data body to tiktok json payload
  let deleteMappingBody = {
    advertiser_ids: [settings.advertiserIds],
    action: "delete",
    id_schema: [settings.idSchema],
    batch_data: deleteMappingArray,
  };

  console.log("addMappingBody", JSON.stringify(addMappingBody, null, 2));
  //console.log("deleteMappingBody", deleteMappingBody.batch_data.length);

  //only send if there is data in addMappingBody or deleteMappingBody
  if (addMappingBody.batch_data.length > 0)
    httpRequest(addMappingBody, settings);
  if (deleteMappingBody.batch_data.length > 0)
    httpRequest(deleteMappingBody, settings);
}

onBatch(body, settings);

//Utility Functions
//SHA256 Hashing
function sha256Hash(value) {
  return crypto
    .createHash("sha256")
    .update(value)
    .digest("hex")
    .toLocaleLowerCase();
}

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

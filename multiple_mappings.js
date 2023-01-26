import fetch from "node-fetch";
import crypto from "crypto";
import btoa from "btoa";

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
    userId: "3456",
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
    anonymousId: "A3456",
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
  mappings: ["email", "phone", "idfa"],
  engageSpaceId: "spa_7NoLrHoQfgv2NzMpNucoPs",
  engageProfileApiKey:
    "GRwo-tFjy6trqcEpDSkgLaWhnN7t3OZ497YE5vCRFSduPBvqNEISoIQmQIOaIudO7kkW1G_cLPuVJgjGXiZXbWMBFWNn3UpFQ95GY4Eiy4SXOvN3qLkpLgGryMBRPovR5NnGvBOAf9Y2CDIZ771pa6-3o2cgWLjUlQLAYn6bfX5KPopHOEU4nYcKCMCwiHnY-XttrsjUQ6v_JYi4dbWFn5QSkpwfwuPxJ1UcPkzU9Vg7lNEBxuMgLScfU5K4UVtDGmHxNv2fr9txodeO7QNNyxlgX2k=",
};

let addMappingArray = [];
let deleteMappingArray = [];
let externalId;
let externalIdsArray;

async function onBatch(body, settings) {
  //get computation key
  let computationKey = body[0].context.personas.computation_key;

  body.forEach((user) => {
    //update computation key to boolean value
    let computationKeyValue = user.traits[computationKey];

    //console.log("computationKeyValue", computationKeyValue);
    // 1. check if they have more than email in mappings
    // 2. get the profile api to collect additional fields that match mappings
    // 3. build object

    //check if userId exists if not query profile api with anonymousId
    if (user.userId) externalId = user.userId;
    else externalId = user.anonymousId;

    let result = get_additional_mappings(externalId, settings);
    console.log("addMappingArray", addMappingArray);
    console.log("result", result);
    //THIS IS WHERE YOU STOPPED TRYING TO CREATE IDEAL PAYLOAD WITHIN THIS CODEBLOCK JUST STARTED NEED CONSOLE.LOG TO WORK
    if (computationKeyValue) {
      addMappingArray.push([
        {
          id: sha256Hash(user.traits.email), // This is the SHA256 of email for User 1
          id_type: "EMAIL_SHA256",
          audience_ids: [settings.audienceId],
        },
      ]);
    } else {
      deleteMappingArray.push([
        {
          id: sha256Hash(user.traits.email), // This is the SHA256 of email for User 1
          id_type: "EMAIL_SHA256",
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

  //console.log("addMappingBody", JSON.stringify(addMappingBody, null, 2));
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
    throw new RetryError(`RetryError ${err}`);
  }
  //console.log(res);
  if (res.status == 200) return res.json();
  if (res.status >= 500 || res.status === 429) {
    // Retry on 5xx and 429s (ratelimits)
    throw new RetryError(`RetryError ${res.status} ${res.statusText}`);
  } else {
    //throw new ValidationError(`ValidationError ${res.status} ${res.statusText}`)
    throw new Error(`ValidationError ${res.status} ${res.statusText}`);
  }
}

async function get_additional_mappings(externalId, settings) {
  let engage_url = `https://profiles.segment.com/v1/spaces/${settings.engageSpaceId}/collections/users/profiles/user_id:${externalId}/external_ids?limit=25`;
  let profile_api_request = await fetch(engage_url, {
    headers: {
      Authorization: "Basic " + btoa(settings.engageProfileApiKey + ":"),
      "Content-Type": "application/json",
    },
    method: "get",
  });
  if (profile_api_request.ok) {
    let external_ids_json = await profile_api_request.json();
    // a user can have multiple IDFA values, or both ios.idfa and android.idfa, so we push all idfa's into array
    //console.log("external_ids_json", external_ids_json)
    let idsMappingArray = external_ids_json.data.map(function (ids) {
      let matchMapping = settings.mappings.find(
        (mapping) => mapping == ids.type
      );
      console.log("matchMapping", matchMapping);
      if (matchMapping != undefined) {
        addMappingArray.push([
          {
            id: sha256Hash(ids.id), // This is the SHA256 of email for User 1
            id_type: "create a mapping for type to call to",
            audience_ids: [settings.audienceId],
          },
        ]);
      } // build out objects here
      //console.log('ids.type',ids.type, 'matchMapping', matchMapping)
    });
    console.log("idsMappingArray", idsMappingArray);
    return idsMappingArray;
  } else {
    if (
      profile_api_request.status == 429 ||
      profile_api_request.status >= 500
    ) {
      console.log(
        "Profile API retryable error. " +
          profile_api_request.status +
          profile_api_request.statusText
      );
      throw new Error(
        //throw new RetryError(
        "Profile API retryable error. " +
          profile_api_request.status +
          profile_api_request.statusText
      );
    } else if (profile_api_request.status == 404) {
      console.log(
        "User not found, userId=" +
          externalId +
          ". Error " +
          profile_api_request.status +
          profile_api_request.statusText
      );
      return;
    } else {
      console.log(
        "Profile API non-retryable error. " +
          profile_api_request.status +
          profile_api_request.statusText
      );
      throw new Error(
        //throw new RetryError(
        "Profile API non-retryable error. " +
          profile_api_request.status +
          profile_api_request.statusText
      );
    }
  }
}

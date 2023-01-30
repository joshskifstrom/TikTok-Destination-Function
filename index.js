import fetch from "node-fetch";
import crypto from "crypto";
import btoa from "btoa";
import lodash from "lodash";

let body = [
  {
    anonymousId: "1a1fd9fd-124f-4e73-bf53-2dc565a62ccf",
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
    writeKey: "8aVWE9WnRgWrDW6AIX4wrEJEVlFjiYkJ",
  },
  {
    anonymousId: "7dd7f26a-759d-4fed-8fd5-1f7529eb06e8",
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
    userId: "358013",
    writeKey: "8aVWE9WnRgWrDW6AIX4wrEJEVlFjiYkJ",
  },
  {
    anonymousId: "JOSH5140d27-a498-4c24-b9d9-a157172b315bc",
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
      tiktok_all_members: false,
      email: "a0903939867@fake.com",
    },
    type: "identify",
    writeKey: "8aVWE9WnRgWrDW6AIX4wrEJEVlFjiYkJ",
  },
  {
    anonymousId: "ec293dcf-abff-46d0-8811-179d1d42e77a",
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
    userId: "547161",
    writeKey: "8aVWE9WnRgWrDW6AIX4wrEJEVlFjiYkJ",
  },
];

let settings = {
  advertiserIds: "7178918106775994370",
  idSchema: ["EMAIL_SHA256", "PHONE_SHA256"],
  accessToken: "49d3067637418943352b1ce489001deaad94d1ab",
  audienceId: "167290896",
  endpoint: "https://business-api.tiktok.com/open_api/v1.3/segment/mapping/",
  engageSpaceId: "spa_7NoLrHoQfgv2NzMpNucoPs",
  engageAccessToken:
    "VB6nH1QRiz_xEjdkKSvlFskk9FvtmMe38-MaVDTLjVT8tRCfor81gYw0VDXmApVXgkGOCMXeOs5jwv4Z3wmT9FB-7ECsOXyQWevg-Rzal-6mfhQIVjauTq3l_36t9f5pjyCTpZ-w0gecPWanJVgwpGJ-7htEkImEBpmRNDOcvOJcUYFQ_0H7f0yM_0hYNn_AzjxA7KeGxCYWFHUkVtc_XNIw1mXTLPG3p9SQrtUAt4d51gAv8xeK6sX5JM6_TwrOSK8Lhk_6nQhkpo6bd4QOf-yMT_Q=",
};

let addMappingArray = [];
let deleteMappingArray = [];

async function onBatch(body, settings) {
  //get computation key based on first object in the array
  let computationKey = body[0].context.personas.computation_key;
  for (const user of body) {
    if (user.type == "identify") {
      //to collect telephone (profile api) if userId is not present use anonId to set externalId
      let externalId;
      if (!user.userId) {
        externalId = `anonymous_id:${user.anonymousId}`;
      } else {
        externalId = `user_id:${user.userId}`;
      }

      let phoneNumber = await (
        await getPhoneNumber(externalId, settings)
      ).toString();
      console.log("Phone Number", phoneNumber);

      //update computation key to boolean value
      let computationKeyValue = user.traits[computationKey];

      //account for blank email scenario
      if (typeof user.traits.email === "undefined") {
        user.traits.email = "";
      }

      if (computationKeyValue) {
        addMappingArray.push([
          {
            id: sha256Hash(user.traits.email), // This is the SHA256 of email for User 1
            id_type: "EMAIL_SHA256",
            audience_ids: [settings.audienceId],
          },
          {
            id: sha256Hash(phoneNumber), // This is the SHA256 of phone for User 1
            id_type: "PHONE_SHA256",
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
          {
            id: sha256Hash(phoneNumber), // This is the SHA256 of email for User 1
            id_type: "PHONE_SHA256",
            audience_ids: [settings.audienceId],
          },
        ]);
      }
    }
  }

  //add batch data body to tiktok json payload
  let addMappingBody = {
    advertiser_ids: [settings.advertiserIds],
    action: "add",
    id_schema: settings.idSchema,
    batch_data: addMappingArray,
  };

  //add batch data body to tiktok json payload
  let deleteMappingBody = {
    advertiser_ids: [settings.advertiserIds],
    action: "delete",
    id_schema: settings.idSchema,
    batch_data: deleteMappingArray,
  };

  console.log("addMappingBody", JSON.stringify(addMappingBody, null, 2));

  //only send if there is data in addMappingBody or deleteMappingBody
  if (addMappingBody.batch_data.length > 0)
    tiktokHttpRequest(addMappingBody, settings);
  if (deleteMappingBody.batch_data.length > 0)
    tiktokHttpRequest(deleteMappingBody, settings);
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
async function tiktokHttpRequest(body, set) {
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
  console.log(res);
  if (res.status == 200) return res.json();
  if (res.status >= 500 || res.status === 429) {
    // Retry on 5xx and 429s (ratelimits)
    throw new RetryError(`RetryError ${res.status} ${res.statusText}`);
  } else {
    //throw new ValidationError(`ValidationError ${res.status} ${res.statusText}`)
    throw new Error(`ValidationError ${res.status} ${res.statusText}`);
  }
}

//HTTP Request
async function getPhoneNumber(externalId, settings) {
  let endpoint = `https://profiles.segment.com/v1/spaces/${settings.engageSpaceId}/collections/users/profiles/${externalId}/traits?verbose=true&limit=200`;

  let profile_api_response = await fetch(endpoint, {
    headers: {
      //		headers: new Headers({ UPDATE FOR FUNCTION CODE
      Authorization: "Basic " + btoa(settings.engageAccessToken + ":"),
      "Content-Type": "application/json",
    },
    method: "GET",
  });

  if (profile_api_response.ok) {
    let json = await profile_api_response.json();
    let traits = json.traits;
    //extract all phone / mobile numbers from traits object
    const obj = traits;
    let newObj = Object.keys(obj).reduce((acc, key) => {
      if (
        key.slice(0, 5).toLowerCase() == "phone" ||
        key.slice(0, 6).toLowerCase() == "mobile"
      ) {
        acc.push(obj[key]);
      }
      return acc;
    }, []);

    let newArr = [{ updated_at: "1900-01-10" }]; //default old date to start so array isn't empty
    //collect last updated phone number
    newObj.forEach((value) => {
      if (Date.parse(newArr[0].updated_at) < Date.parse(value.updated_at)) {
        newArr.pop();
        newArr.push(value);
      }
    });
    if (newArr[0].value != undefined) {
      // in case there is no phone number build undefined logic
      return newArr[0].value;
    } else return "";
  } else {
    console.log(
      "ERROR",
      profile_api_response.status + " " + profile_api_response.statusText
    );
    if (
      profile_api_response.status == 429 ||
      profile_api_response.status >= 500
    ) {
      console.log(
        `${id_type}=${id}  Profile API retryable error:  ${profile_api_response.status}  ${profile_api_response.statusText}`
      );
      throw new RetryError(
        `${id_type}=${id}  Profile API retryable error:  ${profile_api_response.status}  ${profile_api_response.statusText}`
      );
    } else {
      console.log(
        `${id_type}=${id}  Profile API non retryable error:  ${profile_api_response.status}  ${profile_api_response.statusText}`
      );
      throw new ValidationError(
        `${id_type}=${id}  Profile API non retryable error:  ${profile_api_response.status}  ${profile_api_response.statusText}`
      );
    }
  }
}

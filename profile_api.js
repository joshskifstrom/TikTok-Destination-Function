import fetch from "node-fetch";
import crypto from "crypto";
import btoa from "btoa";

let body = [
  {
    anonymousId: "3cc730e6-60b6-4da7-861e-bcb463b9e8dd",
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
      tiktok_all_members: true,
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
  idSchema: ["EMAIL_SHA256"],
  accessToken: "49d3067637418943352b1ce489001deaad94d1ab",
  audienceId: "167290896",
  endpoint: "https://business-api.tiktok.com/open_api/v1.3/segment/mapping/",
  engageSpaceId: "spa_7NoLrHoQfgv2NzMpNucoPs",
  engageAccessToken:
    "VB6nH1QRiz_xEjdkKSvlFskk9FvtmMe38-MaVDTLjVT8tRCfor81gYw0VDXmApVXgkGOCMXeOs5jwv4Z3wmT9FB-7ECsOXyQWevg-Rzal-6mfhQIVjauTq3l_36t9f5pjyCTpZ-w0gecPWanJVgwpGJ-7htEkImEBpmRNDOcvOJcUYFQ_0H7f0yM_0hYNn_AzjxA7KeGxCYWFHUkVtc_XNIw1mXTLPG3p9SQrtUAt4d51gAv8xeK6sX5JM6_TwrOSK8Lhk_6nQhkpo6bd4QOf-yMT_Q=",
};

for (const user of body) {
  //if userId is not present use anonId to set externalId
  let externalId;
  if (!user.userId) {
    externalId = `anonymous_id:${user.anonymousId}`;
  } else {
    externalId = `user_id:${user.userId}`;
  }

  let phoneNumber = await profileApiHttpRequest(externalId, settings);
  console.log("Phone Number", phoneNumber);
}

async function profileApiHttpRequest(externalId, settings) {
  let endpoint = `https://profiles.segment.com/v1/spaces/${settings.engageSpaceId}/collections/users/profiles/${externalId}/traits?limit=200`;

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
    let phone;

    //check to see if phone number is a trait on the user
    if (traits.hasOwnProperty("phone")) phone = traits.phone;
    else if (traits.hasOwnProperty("phone_number")) phone = traits.phone_number;
    else if (traits.hasOwnProperty("mobile")) phone = traits.mobile;
    else if (traits.hasOwnProperty("mobile_number"))
      phone = traits.mobile_number;
    else phone = undefined;

    return phone;
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

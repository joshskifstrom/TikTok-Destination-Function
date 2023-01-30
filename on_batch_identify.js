let events = [
  {
    channel: "server",
    context: {
      library: {
        name: "unknown",
        version: "unknown",
      },
      personas: {
        computation_class: "audience",
        computation_id: "aud_25I6NXa76CEohttvFzn2YavFeC6",
        computation_key: "pur_all_nike_react_infinity_purchasers_all_time",
        namespace: "spa_1bsKVj68gbOu4d0zGtG5pBsMGKw",
        space_id: "spa_1bsKVj68gbOu4d0zGtG5pBsMGKw",
      },
      traits: {
        email: "mctosone@gmail.com",
      },
    },
    event: "Audience Exited",
    integrations: {
      All: false,
      "PERSONAS - Facebook Ads": true,
      Warehouses: {
        all: false,
      },
    },
    messageId: "personas_2AM8OK6XaaX2J71igbSSZOTRKrE",
    originalTimestamp: "2022-06-09T20:54:20.23207995Z",
    projectId: "PCnsD3DLKr",
    properties: {
      audience_key: "second_audience",
      externalId: "23851015719620426",
      pur_all_nike_react_infinity_purchasers_all_time: false,
    },
    receivedAt: "2022-06-09T20:54:20.487Z",
    sentAt: null,
    timestamp: "2022-06-09T20:54:20.232Z",
    type: "track",
    userId: "90356980-0a45-4e67-8091-04478b6714aa",
    version: 2,
    writeKey: "js83KCTTCjY5R7hbDFcNUiB9J0Gd6VkZ",
  },
  {
    channel: "server",
    context: {
      library: {
        name: "unknown",
        version: "unknown",
      },
      personas: {
        computation_class: "audience",
        computation_id: "aud_25I6NXa76CEohttvFzn2YavFeC6",
        computation_key: "pur_all_nike_react_infinity_purchasers_all_time",
        namespace: "spa_1bsKVj68gbOu4d0zGtG5pBsMGKw",
        space_id: "spa_1bsKVj68gbOu4d0zGtG5pBsMGKw",
      },
      traits: {
        email: "jstosone@gmail.com",
      },
    },
    event: "Audience Exited",
    integrations: {
      All: false,
      "PERSONAS - Facebook Ads": true,
      Warehouses: {
        all: false,
      },
    },
    messageId: "personas_2AM8OK6XaaX2J71igbSSZOTRKrE",
    originalTimestamp: "2022-06-09T20:54:20.23207995Z",
    projectId: "PCnsD3DLKr",
    properties: {
      audience_key: "second_audience",
      externalId: "23851015719620426",
      pur_all_nike_react_infinity_purchasers_all_time: false,
    },
    receivedAt: "2022-06-09T20:54:20.487Z",
    sentAt: null,
    timestamp: "2022-06-09T20:54:20.232Z",
    type: "track",
    userId: "90356980-0a45-4e67-8091-04478b6714aa",
    version: 2,
    writeKey: "js83KCTTCjY5R7hbDFcNUiB9J0Gd6VkZ",
  },
  {
    anonymousId: "707996A9-D383-4913-8573-CB77A151B857",
    channel: "server",
    context: {
      library: {
        name: "unknown",
        version: "unknown",
      },
      personas: {
        computation_class: "audience",
        computation_id: "aud_1mnR54LTOPazyQTzAben1JPsISp",
        computation_key: "aff_sportswear_affinity_all_time",
        namespace: "spa_1bsKVj68gbOu4d0zGtG5pBsMGKw",
        space_id: "spa_1bsKVj68gbOu4d0zGtG5pBsMGKw",
      },
      traits: {
        email: "arnoldwong@yahoo.com",
      },
    },
    event: "Audience Entered",
    integrations: {
      All: false,
      "Snapchat Audiences": true,
      Warehouses: {
        all: false,
      },
    },
    messageId: "personas_2AayIwNBVUBCvWZkASHLZQ77qJp",
    originalTimestamp: "2022-06-15T02:58:34.372244219Z",
    projectId: "BJzGQl35Wd",
    properties: {
      aff_sportswear_affinity_all_time: true,
      audience_key: "aff_sportswear_affinity_all_time",
      externalId: "5129976901496030",
      schemaType: "email",
    },
    receivedAt: "2022-06-15T02:58:36.005Z",
    sentAt: null,
    timestamp: "2022-06-15T02:58:34.372Z",
    type: "track",
    userId: "980877944",
    version: 2,
    writeKey: "Xx7tLATRyffQGKUCzImTJbXe8HNWH7ay",
  },
];

const eventsByType = {};

for (const event of events) {
  if (!(event.type in eventsByType)) {
    eventsByType[event.type] = [];
  }
  eventsByType[event.type].push(event);
}

console.log(eventsByType);

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
      // email: "vortexdrift150@fake.com",
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

for (const user of body) {
  if (typeof user.traits.email === "undefined") {
    user.traits.email = "";
  }
  console.log(user.traits.email);
}

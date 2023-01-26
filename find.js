let external_ids_json = {
    data: [
      {
        id: '817838f3-1d37-4458-88e4-a911c73635ec',
        type: 'anonymous_id',
        source_id: 'qzkE7xznoPkrwUYTyfrUXD',
        collection: 'users',
        created_at: '2022-01-05T22:04:56.361186552Z',
        encoding: 'none'
      },
      {
        id: '2342340930',
        type: 'phone_number',
        source_id: 'qzkE7xznoPkrwUYTyfrUXD',
        collection: 'users',
        created_at: '2022-01-05T22:04:56.934658419Z',
        encoding: 'none'
      },
      {
        id: 'dh@gmail.com',
        type: 'email',
        source_id: 'qzkE7xznoPkrwUYTyfrUXD',
        collection: 'users',
        created_at: '2022-01-05T22:04:56.934655285Z',
        encoding: 'none'
      },
      {
        id: '7009b62f-68db-4b42-9be0-76dcd34d4868',
        type: 'anonymous_id',
        source_id: 'qzkE7xznoPkrwUYTyfrUXD',
        collection: 'users',
        created_at: '2022-01-05T18:44:47.982943588Z',
        encoding: 'none'
      },
      {
        id: '52ee6b64-821e-44b8-a8d6-6fb6973c7009',
        type: 'anonymous_id',
        source_id: 'qzkE7xznoPkrwUYTyfrUXD',
        collection: 'users',
        created_at: '2022-01-05T18:36:28.258553614Z',
        encoding: 'none'
      },
      {
        id: 'jared.pleto@gmail.com',
        type: 'email',
        source_id: 'qzkE7xznoPkrwUYTyfrUXD',
        collection: 'users',
        created_at: '2022-01-05T18:36:28.258551332Z',
        encoding: 'none'
      },
      {
        id: '3456',
        type: 'user_id',
        source_id: 'qzkE7xznoPkrwUYTyfrUXD',
        collection: 'users',
        created_at: '2022-01-05T18:36:28.258549188Z',
        encoding: 'none'
      },
      {
        id: '3102839072',
        type: 'phone_number',
        source_id: 'qzkE7xznoPkrwUYTyfrUXD',
        collection: 'users',
        created_at: '2022-01-05T18:36:28.258556682Z',
        encoding: 'none'
      }
    ],
    cursor: { url: '', has_more: false, next: '', limit: 25 }
  }

  let settings = {
    advertiserIds: "7178918106775994370",
    idSchema: "EMAIL_SHA256",
    accessToken: "49d3067637418943352b1ce489001deaad94d1ab",
    audienceId: "167290896",
    endpoint: "https://business-api.tiktok.com/open_api/v1.3/segment/mapping/",
    mappings: [
        "email", 
        "phone_number",
        "idfa"
    ],
    engageSpaceId: "spa_7NoLrHoQfgv2NzMpNucoPs",
    engageProfileApiKey: "GRwo-tFjy6trqcEpDSkgLaWhnN7t3OZ497YE5vCRFSduPBvqNEISoIQmQIOaIudO7kkW1G_cLPuVJgjGXiZXbWMBFWNn3UpFQ95GY4Eiy4SXOvN3qLkpLgGryMBRPovR5NnGvBOAf9Y2CDIZ771pa6-3o2cgWLjUlQLAYn6bfX5KPopHOEU4nYcKCMCwiHnY-XttrsjUQ6v_JYi4dbWFn5QSkpwfwuPxJ1UcPkzU9Vg7lNEBxuMgLScfU5K4UVtDGmHxNv2fr9txodeO7QNNyxlgX2k="
  };
  external_ids_json.data.forEach((ids) => {

  let idsMappingArray = settings.mappings.find(mapping => mapping == ids.type)
        console.log('idsMappingArray',idsMappingArray)
    })
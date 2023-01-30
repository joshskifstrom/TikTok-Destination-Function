let json = {
  traits: {
    email: {
      value: "dh@gmail.com",
      source_id: "",
      updated_at: "2022-01-12T22:57:20.114Z",
      resolution: "last_updated",
    },
    name: {
      value: "Don Henley",
      source_id: "",
      updated_at: "2022-01-05T22:04:54.263Z",
      resolution: "last_updated",
    },
    phoneNumber: {
      value: "3102839072",
      source_id: "",
      updated_at: "2022-01-08T18:51:23.567Z",
      resolution: "last_updated",
    },
    phone_number: {
      value: "2342340930",
      source_id: "",
      updated_at: "2022-02-01T22:04:54.263Z",
      resolution: "last_updated",
    },
    mobile_number: {
      value: "123430923",
      source_id: "",
      updated_at: "2023-01-06T22:51:05.496Z",
      resolution: "last_updated",
    },
    user_registered: {
      value: false,
      source_id: "",
      updated_at: "2022-01-12T22:57:20.114Z",
      resolution: "last_updated",
    },
    velma_lakes: {
      value: "Velma Lakes",
      source_id: "",
      updated_at: "2022-01-05T22:26:05.497Z",
      resolution: "last_updated",
    },
    velma_lakes_audience: {
      value: true,
      source_id: "",
      updated_at: "2022-01-06T22:50:09.496Z",
      resolution: "last_updated",
    },
  },
  cursor: {
    url: "",
    has_more: false,
    next: "",
    limit: 10,
  },
};
let traits = json.traits;

//extract all phone / mobile numbers from traits object
const obj = traits;
let newObj = Object.keys(obj).reduce((acc, key) => {
  if (key.slice(0, 4) == "phon" || key.slice(0, 4) == "mobi") {
    acc.push(obj[key]);
  }
  return acc;
}, []);

//console.log(newObj);

let newArr = [{ updated_at: "1900-01-10" }]; //default old date to start so array isn't empty
newObj.forEach((value) => {
  if (Date.parse(newArr[0].updated_at) < Date.parse(value.updated_at)) {
    newArr.pop();
    newArr.push(value);
  }
});

console.log("newARR", newArr[0].value.toString());

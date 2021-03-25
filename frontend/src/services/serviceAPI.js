const url = "http://localhost:5000/getdata";

function getServiceData() {
  console.log("in service name ##########");
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        response
          .json()
          .then((result) => {
            console.log("getAllUsers result", result);
            resolve(result);
          })
          .catch((err) => {
            reject("Parsing Error");
          });
      })
      .catch((err) => {
        reject("Communication Error");
      });
  });
}
export default getServiceData;

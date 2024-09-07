// let isXEquals2 = new Promise((resolve, reject) => {
//   let x = 1 + 2;
//   if (x == 2) {
//     resolve("SUCCESS");
//   } else {
//     reject("FAILED");
//   }
// });

// isXEquals2
//   .then((msg) => {
//     console.log(msg + "This Promise is RESOLVED");
//   })
//   .catch(() => console.log(msg + "This Promise is REJECTED"));

const isStudentPlaying = true;
const isStudentSleep = false;

function studentStudyPromise(callback, errorCallback) {
  return new Promise((resolve, reject) => {
    if (isStudentPlaying) {
      reject({
        name: "Student is Playing",
        message: "Student is playing and cannot study",
      });
    } else if (isStudentSleep) {
      reject({
        name: "Student is Playing",
        message: "Student is playing and cannot study",
      });
    } else {
      resolve("Student is studying");
    }
  });
}

studentStudyCallback(
  (msg) => {
    console.log(msg);
  },
  (msg) => {
    console.log(msg);
  }
);

// function studentStudyCallback(callback, errorCallback) {
//     if (isStudentPlaying) {
//       errorCallback({
//         name: "Student is Sleeping",
//         message: "",
//       });
//     } else if (isStudentSleep) {
//       errorCallback({
//         name: "Student is Sleeping",
//         message: "",
//       });
//     } else {
//       callback("Congrats student is studying");
//     }
//   }

//   studentStudyCallback(
//     (msg) => {
//       console.log(msg);
//     },
//     (msg) => {
//       console.log(msg);
//     }
//   );

// Async Await

function makeRequest(location) {
  return new Promise((resolve, reject) => {
    if (location === "Google") {
      resolve("You are now at Google");
    } else {
      reject("You are not at Google");
    }
  });
}

function processRequest(response) {
  return new Promise((resolve, reject) => {
    resolve("Extra Information" + response);
  });
}

// makeRequest("Google")
//   .then((response) => {
//     console.log("Response Received");
//     return processRequest(response);
//   })
//   .then((processRequest) => {
//     console.log(processRequest);
//   });

async function doWork() {
  try {
    const response = await makeRequest("Google");
    console.log("Response Received");
    const processRequest = await processRequest(response);
    console.log(processRequest);
  } catch (error) {
    console.log(error);
  }
}
doWork();

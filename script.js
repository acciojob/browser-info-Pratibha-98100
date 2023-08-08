//your JS code here. If required.
//your JS code here. If required.
const browserName = navigator.userAgent;
const version =  navigator.appVersion;
// console.log(browser);
// console.log(version);

const box = document.createElement("div");
box.id = "browser-info";
box.innerText = "You are using " + browserName + " version " + version;
document.body.append(box);
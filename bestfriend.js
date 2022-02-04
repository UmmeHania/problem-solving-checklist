//৪. একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে। 

function bestFriend(friendList) {

}
let friendList = ['fabiha', 'maisha', 'nabiha', 'rubaba doula radifa', 'sabiha', 'humaira', 'topossha', 'musarrat e sami']

function bestFriend(friendList) {
    let largestName = '';
    for (let i = 0; i < friendList.length; i++) {
        if (friendList[i].length > largestName.length) {
            largestName = friendList[i];
        }
    }
    return largestName;

}
let result = bestFriend(friendList);
console.log(result);



let friendList = ['fabiha', 'maisha', 'nabiha', 'syeda afnan mubara nabira', 'rubaba doula radifa', 'sabiha', 'humaira', 'topossha', 'musarrat e sami']

function bestFriend(friendList) {
    let biggestName = '';
    for (let i = 0; i < friendList.length; i++) {
        if (friendList[i].length > biggestName.length) {
            biggestName = friendList[i];
        }
    }
    return biggestName;
}
let result = bestFriend(friendList);
console.log(result);
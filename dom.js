// // 1. আমি জানি কীভাবে HTML DOM কাজ করে এবং JavaScript দিয়ে DOM traversal করতে পারি (getElementById, querySelector)
// const title = document.getElementById("main-title");
// title.innerText = "Hello, DOM!";

// const box = document.querySelector(".box");
// box.style.backgroundColor = "lightblue";

// const allBoxes = document.querySelectorAll(".box");
// allBoxes.forEach(function (el) {
//   console.log(el.innerText);
// });

// // 2. আমি JavaScript দিয়ে HTML elements তৈরি করতে পারি এবং appendChild() বা remove() দিয়ে DOM-এ যোগ/মুছে ফেলতে পারি
// const newParagraph = document.createElement("p");
// newParagraph.innerText = "This paragraph was added by JavaScript.";
// document.body.appendChild(newParagraph);

// const oldItem = document.querySelector(".item");
// oldItem.remove();

// // 3. আমি DOM থেকে innerText, innerHTML, getAttribute, setAttribute ব্যবহার করে কনটেন্ট ও স্টাইল নিয়ন্ত্রণ করতে পারি
// const link = document.querySelector("a");
// link.setAttribute("href", "https://example.com");
// const href = link.getAttribute("href");
// console.log(href);

// const info = document.getElementById("info");
// info.innerText = "Updated with innerText";
// info.innerHTML = "<strong>Updated with innerHTML</strong>";

// // 4. আমি বুঝি CSS ক্লাস JavaScript দিয়ে অ্যাড বা রিমুভ করার কৌশল এবং কীভাবে ডাইনামিক স্টাইল প্রয়োগ করা যায়
// const card = document.querySelector(".card");
// card.classList.add("active");
// card.classList.remove("hidden");
// card.classList.toggle("highlight");
// card.style.fontSize = "18px";

// // 5. আমি JS ইভেন্ট বুঝি এবং ব্যবহার করতে পারি — onclick, addEventListener, Event Object
// const btn = document.getElementById("my-btn");
// btn.addEventListener("click", function (event) {
//   console.log("Clicked element:", event.target);
//   alert("Button clicked!");
// });

// const inputField = document.getElementById("username");
// inputField.addEventListener("input", function (event) {
//   console.log("Current value:", event.target.value);
// });

// document.addEventListener("keydown", function (event) {
//   console.log("Key pressed:", event.key);
// });

// // 6. আমি ইভেন্ট বাবলিং এবং Event Delegation বুঝি এবং stopPropagation দিয়ে Propagation থামাতে পারি
// const list = document.getElementById("my-list");
// list.addEventListener("click", function (event) {
//   if (event.target.tagName === "LI") {
//     event.target.style.color = "red";
//   }
// });

// const parent = document.querySelector(".parent");
// parent.addEventListener("click", function () {
//   console.log("Parent clicked");
// });

// const child = document.querySelector(".child");
// child.addEventListener("click", function (event) {
//   event.stopPropagation();
//   console.log("Child clicked — bubble stopped");
// });

// // 7. আমি একটি কমেন্ট বক্স তৈরি করতে পারি যেখানে ইউজার কমেন্ট দিয়ে তা রিয়েল টাইমে DOM-এ দেখতে পাবে
// const commentForm = document.getElementById("comment-form");
// const commentInput = document.getElementById("comment-input");
// const commentList = document.getElementById("comment-list");

// commentForm.addEventListener("submit", function (event) {
//   event.preventDefault();
//   const text = commentInput.value.trim();
//   if (text === "") return;

//   const li = document.createElement("li");
//   li.innerText = text;
//   commentList.appendChild(li);
//   commentInput.value = "";
// });

// // 8. আমি জানি কিভাবে Payooo মোবাইল ব্যাংক প্রজেক্ট তৈরি করতে হয় — balance যুক্ত/বিয়োগ এবং পিন ভেরিফিকেশন
// let balance = 1000;
// const CORRECT_PIN = "1234";

// function verifyPin() {
//   const pin = document.getElementById("pin-input").value;
//   return pin === CORRECT_PIN;
// }

// document.getElementById("add-money-btn").addEventListener("click", function () {
//   if (!verifyPin()) {
//     document.getElementById("bank-msg").innerText = "Wrong PIN!";
//     return;
//   }
//   const amount = Number(document.getElementById("amount-input").value);
//   balance += amount;
//   document.getElementById("balance-display").innerText = "Balance: " + balance;
// });

// document.getElementById("cash-out-btn").addEventListener("click", function () {
//   if (!verifyPin()) {
//     document.getElementById("bank-msg").innerText = "Wrong PIN!";
//     return;
//   }
//   const amount = Number(document.getElementById("amount-input").value);
//   if (amount > balance) {
//     document.getElementById("bank-msg").innerText = "Insufficient balance!";
//     return;
//   }
//   balance -= amount;
//   document.getElementById("balance-display").innerText = "Balance: " + balance;
// });

// // 9. আমি JavaScript ফাংশন দিয়ে কোড রিইউজ করতে পারি — ইনপুট ফিল্ড থেকে ভ্যালু আনার জন্য ফাংশন ব্যবহার
// function getInputValue(id) {
//   return document.getElementById(id).value.trim();
// }

// const username = getInputValue("username");
// const email = getInputValue("email");
// console.log(username, email);

// // 10. আমি Transaction data handle, validation, এবং UI তে Show করতে পারি সব JavaScript ও DOM দিয়ে
// const transactions = [];

// function addTransaction(type, amount) {
//   if (!amount || isNaN(amount) || amount <= 0) {
//     document.getElementById("tx-msg").innerText = "Enter a valid amount!";
//     return;
//   }
//   transactions.push({ type, amount: Number(amount) });
//   renderTransactions();
// }

// function renderTransactions() {
//   const txList = document.getElementById("tx-list");
//   txList.innerHTML = "";
//   transactions.forEach(function (tx) {
//     const li = document.createElement("li");
//     li.innerText = tx.type + ": " + tx.amount;
//     txList.appendChild(li);
//   });
// }

// // 11. আমি জানি কীভাবে ফর্ম সাবমিশন রোধ (preventDefault) করে JavaScript দিয়ে ইউজার ইনপুট হ্যান্ডেল করতে হয়
// const form = document.getElementById("my-form");
// form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   const value = document.getElementById("name-input").value;
//   console.log("Submitted name:", value);
// });

// // 12. আমি নিজে ডাইনামিক ব্যালেন্স হিসাব করতে পারি — ইউজারের অ্যাকশন অনুযায়ী (Add Money বা Cash Out)
// let currentBalance = 5000;

// function updateBalance(action, amount) {
//   if (action === "add") {
//     currentBalance += amount;
//   } else if (action === "cashout") {
//     currentBalance -= amount;
//   }
//   document.getElementById("balance-display").innerText = "BDT " + currentBalance;
// }

// // 13. আমি বুঝি HTMLCollection ও NodeList এর মধ্যে পার্থক্য এবং কোনটি কখন ব্যবহার করব
// const byClass = document.getElementsByClassName("item"); // HTMLCollection — live
// const byQuery = document.querySelectorAll(".item");       // NodeList — static

// console.log(byClass instanceof HTMLCollection);
// console.log(byQuery instanceof NodeList);

// byQuery.forEach(function (el) {    // NodeList has forEach
//   console.log(el.innerText);
// });

// // 14. আমি জানি কীভাবে relative এবং absolute position দিয়ে বিভিন্ন সেকশন বা এলিমেন্ট সাজাতে হয়
// const wrapper = document.getElementById("wrapper");
// wrapper.style.position = "relative";

// const badge = document.getElementById("badge");
// badge.style.position = "absolute";
// badge.style.top = "10px";
// badge.style.right = "10px";

// / 15. আমি Tailwind CSS ব্যবহার করে একটি Tea House ওয়েবসাইট ডিজাইন করতে পারি (Banner, Feature, Team, Footer)
// // Tailwind CSS is applied in HTML using utility classes — no JS needed.
// // Example: <section class="bg-green-100 py-16 text-center text-2xl font-bold">Welcome to Tea House</section>

// // 16. আমি JavaScript দিয়ে confirmation button তৈরি করতে পারি — GitHub-এর মতো ডিলিট নিশ্চিতকরণ
// const deleteBtn = document.getElementById("delete-btn");
// deleteBtn.addEventListener("click", function () {
//   const confirmed = confirm("Are you sure you want to delete this?");
//   if (confirmed) {
//     document.getElementById("delete-target").remove();
//     console.log("Item deleted.");
//   }
// });

// // 17. আমি জানি মাল্টিপল ইভেন্ট হ্যান্ডলার যোগ করার কৌশল — একটি বাটনে একাধিক কাজ করানো যায়
// const multiBtn = document.getElementById("multi-btn");

// multiBtn.addEventListener("click", function () {
//   console.log("Handler 1: log clicked");
// });

// multiBtn.addEventListener("click", function () {
//   multiBtn.style.backgroundColor = "coral";
// });

// multiBtn.addEventListener("click", function () {
//   alert("Handler 3: alert fired");
// });

// // 18. আমি JavaScript দিয়ে UI এর অংশ হাইড/শো (toggle) করতে পারি
// const toggleBtn = document.getElementById("toggle-btn");
// const panel = document.getElementById("panel");

// toggleBtn.addEventListener("click", function () {
//   if (panel.style.display === "none") {
//     panel.style.display = "block";
//   } else {
//     panel.style.display = "none";
//   }
// });

// // 19. আমি জানি dynamic error message বা success message দেখাতে — UX ভালো করার জন্য
// function showMessage(type, text) {
//   const msg = document.getElementById("message-box");
//   msg.innerText = text;
//   msg.style.display = "block";
//   msg.style.color = type === "error" ? "red" : "green";

//   setTimeout(function () {
//     msg.style.display = "none";
//   }, 3000);
// }

// showMessage("success", "Done! Your action was successful.");
// showMessage("error", "Something went wrong. Please try again.");
const liCollection = document.getElementsByTagName('li');
console.log(liCollection);
for (const li of liCollection) {
  console.log(li.innerText);
}
const allHeadings = document.getElementsByTagName('h2');
console.log(allHeadings);
for (const h2 of allHeadings) {
  console.log(h2.innerText);
}
const myName = document.getElementById('mesh');
console.log(myName.innerText);
myName.innerText = 'sharmin bashar';
console.log(myName.innerText);

const allList = document.getElementsByClassName('lis-t');
console.log(allList);
for (const li of allList) {
  console.log(li.innerText);
  li.style.color = 'blue';
  li.style.fontSize = '20px';
}

// using css selector we can always use querySelector and querySelectorAll to select elements. querySelector will return the first matching element, while querySelectorAll will return a NodeList of all matching elements.
const itemLst = document.querySelectorAll('#item-list  span');
console.log(itemLst);
for (const item of itemLst) {
  console.log(item.innerText);
  item.style.color = 'red';
  item.style.fontSize = '18px';
  item.style.backgroundColor = 'yellow';
}

// Change background color of all demo-box sections
const demoBoxes = document.querySelectorAll('section.demo-box');
for (const section of demoBoxes) {
  section.classList.add('section-card');
}
const allh1 = document.querySelectorAll('h1');
for (const h1 of allh1) {
  h1.style.color = 'green';
  h1.style.fontSize = '40px';
}
const bg = document.getElementsByTagName('section');
for (const section of bg) {
  section.classList.add('section-card');
}

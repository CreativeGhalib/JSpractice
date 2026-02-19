// 1. আমি জানি কীভাবে HTML DOM কাজ করে এবং JavaScript দিয়ে DOM traversal করতে পারি (getElementById, querySelector)
const title = document.getElementById("main-title");
title.innerText = "Hello, DOM!";

const box = document.querySelector(".box");
box.style.backgroundColor = "lightblue";

const allBoxes = document.querySelectorAll(".box");
allBoxes.forEach(function (el) {
  console.log(el.innerText);
});


// 2. আমি JavaScript দিয়ে HTML elements তৈরি করতে পারি এবং appendChild() বা remove() দিয়ে DOM-এ যোগ/মুছে ফেলতে পারি
const newParagraph = document.createElement("p");
newParagraph.innerText = "This paragraph was added by JavaScript.";
document.body.appendChild(newParagraph);

const oldItem = document.querySelector(".item");
oldItem.remove();


// 3. আমি DOM থেকে innerText, innerHTML, getAttribute, setAttribute ব্যবহার করে কনটেন্ট ও স্টাইল নিয়ন্ত্রণ করতে পারি
const link = document.querySelector("a");
link.setAttribute("href", "https://example.com");
const href = link.getAttribute("href");
console.log(href);

const info = document.getElementById("info");
info.innerText = "Updated with innerText";
info.innerHTML = "<strong>Updated with innerHTML</strong>";


// 4. আমি বুঝি CSS ক্লাস JavaScript দিয়ে অ্যাড বা রিমুভ করার কৌশল এবং কীভাবে ডাইনামিক স্টাইল প্রয়োগ করা যায়
const card = document.querySelector(".card");
card.classList.add("active");
card.classList.remove("hidden");
card.classList.toggle("highlight");
card.style.fontSize = "18px";


// 5. আমি JS ইভেন্ট বুঝি এবং ব্যবহার করতে পারি — onclick, addEventListener, Event Object
const btn = document.getElementById("my-btn");
btn.addEventListener("click", function (event) {
  console.log("Clicked element:", event.target);
  alert("Button clicked!");
});

const inputField = document.getElementById("username");
inputField.addEventListener("input", function (event) {
  console.log("Current value:", event.target.value);
});

document.addEventListener("keydown", function (event) {
  console.log("Key pressed:", event.key);
});


// 6. আমি ইভেন্ট বাবলিং এবং Event Delegation বুঝি এবং stopPropagation দিয়ে Propagation থামাতে পারি
const list = document.getElementById("my-list");
list.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    event.target.style.color = "red";
  }
});

const parent = document.querySelector(".parent");
parent.addEventListener("click", function () {
  console.log("Parent clicked");
});

const child = document.querySelector(".child");
child.addEventListener("click", function (event) {
  event.stopPropagation();
  console.log("Child clicked — bubble stopped");
});


// 7. আমি একটি কমেন্ট বক্স তৈরি করতে পারি যেখানে ইউজার কমেন্ট দিয়ে তা রিয়েল টাইমে DOM-এ দেখতে পাবে
const commentForm = document.getElementById("comment-form");
const commentInput = document.getElementById("comment-input");
const commentList = document.getElementById("comment-list");

commentForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const text = commentInput.value.trim();
  if (text === "") return;

  const li = document.createElement("li");
  li.innerText = text;
  commentList.appendChild(li);
  commentInput.value = "";
});


// 8. আমি জানি কিভাবে Payooo মোবাইল ব্যাংক প্রজেক্ট তৈরি করতে হয় — balance যুক্ত/বিয়োগ এবং পিন ভেরিফিকেশন
let balance = 1000;
const CORRECT_PIN = "1234";

function verifyPin() {
  const pin = document.getElementById("pin-input").value;
  return pin === CORRECT_PIN;
}

document.getElementById("add-money-btn").addEventListener("click", function () {
  if (!verifyPin()) {
    document.getElementById("bank-msg").innerText = "Wrong PIN!";
    return;
  }
  const amount = Number(document.getElementById("amount-input").value);
  balance += amount;
  document.getElementById("balance-display").innerText = "Balance: " + balance;
});

document.getElementById("cash-out-btn").addEventListener("click", function () {
  if (!verifyPin()) {
    document.getElementById("bank-msg").innerText = "Wrong PIN!";
    return;
  }
  const amount = Number(document.getElementById("amount-input").value);
  if (amount > balance) {
    document.getElementById("bank-msg").innerText = "Insufficient balance!";
    return;
  }
  balance -= amount;
  document.getElementById("balance-display").innerText = "Balance: " + balance;
});


// 9. আমি JavaScript ফাংশন দিয়ে কোড রিইউজ করতে পারি — ইনপুট ফিল্ড থেকে ভ্যালু আনার জন্য ফাংশন ব্যবহার
function getInputValue(id) {
  return document.getElementById(id).value.trim();
}

const username = getInputValue("username");
const email = getInputValue("email");
console.log(username, email);


// 10. আমি Transaction data handle, validation, এবং UI তে Show করতে পারি সব JavaScript ও DOM দিয়ে
const transactions = [];

function addTransaction(type, amount) {
  if (!amount || isNaN(amount) || amount <= 0) {
    document.getElementById("tx-msg").innerText = "Enter a valid amount!";
    return;
  }
  transactions.push({ type, amount: Number(amount) });
  renderTransactions();
}

function renderTransactions() {
  const txList = document.getElementById("tx-list");
  txList.innerHTML = "";
  transactions.forEach(function (tx) {
    const li = document.createElement("li");
    li.innerText = tx.type + ": " + tx.amount;
    txList.appendChild(li);
  });
}


// 11. আমি জানি কীভাবে ফর্ম সাবমিশন রোধ (preventDefault) করে JavaScript দিয়ে ইউজার ইনপুট হ্যান্ডেল করতে হয়
const form = document.getElementById("my-form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const value = document.getElementById("name-input").value;
  console.log("Submitted name:", value);
});




var percentage = document.getElementById("percentage1");
var percentage_text = document.getElementById('percentage_text1')
var percent = percentage_text.dataset.percent ;
percentage.style.strokeDashoffset = 301-(3.01*percent);
console.log(percentage_text.dataset.percent);
percentage_text.innerHTML = percent;
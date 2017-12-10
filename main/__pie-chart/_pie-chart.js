function pie(perc, color){
var pie_svg = document.getElementById("pie_svg");
var circle1 = document.createElementNS('http://www.w3.org/2000/svg','circle');
var percValue = 301-(3.01*perc);
pie_svg.appendChild(circle1);
circle1.setAttribute('cx' , 50);
circle1.setAttribute('cy' , 50);
circle1.setAttribute('r' , 39.5);
circle1.setAttribute('fill' , 'none');
circle1.setAttribute('stroke' , color);
circle1.setAttribute('stroke-width' , '17px');
circle1.setAttribute('stroke-dasharray' , 300);
circle1.setAttribute('stroke-dashoffset' , percValue);
}
//percentage.style.strokeDashoffset = 301-(3.01*percent);
console.log(pie_svg);
pie(70, 'green');
pie(60, 'red');
pie(20, 'orange');

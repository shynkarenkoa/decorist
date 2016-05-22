(() =>
{
'use strict'

let promice = document.querySelector('#promice');
let order = document.querySelector('.order');
let payment = document.querySelector('.payment');
let quantity = document.querySelector('.quantity input');
let total = document.querySelector('.total');
let subtotal = document.querySelector('.subtotal');
let items = document.querySelector('.items');
let nextButton = document.querySelector('.nextPayment button');

let promo = document.querySelector('#promo');
let inputPromo = document.querySelector('#promo input');
let buttonPromo = document.querySelector('#promo button')

let additional = document.querySelector('.additional');



function clicker (selector, callback)
{
	selector += "";
	document.querySelector(selector).addEventListener("click", callback);
}

function changeStepColor(selector, color)
{
	Array.prototype.slice.call(document.querySelectorAll('.step'+ selector + ' *')).forEach((el) => {el.style.color= el.style.borderColor= color})
}

function result () {subtotal.innerHTML= total.innerHTML= '$' + quantity.value * 69 + '.00'}

clicker('.guarantee', () => promice.hidden = false)
clicker('.background', () => {if (promice.hidden == false) promice.hidden = true})
clicker('.promo', () => promo.hidden = false)
clicker('#promo button', () => {
		if (buttonPromo.innerHTML=='apply') {
		inputPromo.value = 'PROMO CODE ' + inputPromo.value + ' APPLIED';
		buttonPromo.innerHTML=`remove`
		} else {
			inputPromo.value = "";
			buttonPromo.innerHTML='apply';
			promo.hidden = true;}
})

clicker('.minus', () => {
	quantity.value--; 
	result();
	if (quantity.value == 0) items.style.visibility = "hidden";
	})
clicker('.plus', () => {quantity.value++; result()} )
clicker('.remove', () => items.style.visibility = "hidden")


var f = true;
changeStepColor('1','#222222');

clicker('.nextPayment button', () => {
	if (nextButton.innerHTML == 'next payment') {
		if (items.style.visibility == "hidden") alert("Your Shoping cart is empty!")
			else {
				order.style.display = 'none' ; 
				payment.style.display = 'block';
				changeStepColor('2','#222222');
				changeStepColor('1','#999999');
				nextButton.innerHTML = 'place order'
		}
	}
		
	else if (nextButton.innerHTML == 'place order')
	{	
		Array.prototype.slice.call(document.querySelectorAll('.payment input[id]')).forEach((el) => {
			if (el.value == "") {alert('Your ' + el.id + ' data is empty!'); f = false}
				else f = true});

		if (f) {
			payment.style.display = 'none';
			additional.style.display= 'flex';
			changeStepColor('3','#222222');
			changeStepColor('2','#999999');
			}
	}
})

clicker('.step1', () => {
	order.style.display = 'block'; changeStepColor('1','#222222');
	additional.style.display= payment.style.display = 'none'; 
	changeStepColor('2','#999999'); changeStepColor('3','#999999');
	nextButton.innerHTML = 'next payment'
})
clicker('.step2', () => {
	additional.style.display= order.style.display = 'none'; 
	changeStepColor('1','#999999'); changeStepColor('3','#999999');
	payment.style.display = 'block'; changeStepColor('2','#222222');
	nextButton.innerHTML = 'place order'
})
clicker('.step3', () => {
	payment.style.display= order.style.display = 'none';
	changeStepColor('2','#999999'); changeStepColor('1','#999999');
	additional.style.display= 'flex'; changeStepColor('3','#222222');
})

})()
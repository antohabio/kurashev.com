$(document).ready(function() {
	var queryhash = window.location.hash
	switch (queryhash) {
		case "#about":
			document.title = "Обо мне";
			initialShowAbout();
			break;
		case "#contact":
			document.title = "Контакты";
			initialShowContact();
			break;
		case "#internet":
			document.title = "В сети";
			initialShowInternet();
			break;
		case "#photo":
			document.title = "Фото";
			initialShowPhoto();
			break;
		case "#teka":
			document.title = "Теки";
			initialShowTeka();
			break;
		case "#networks":
			document.title = "Проекты";
			initialShowNetworks();
			break;
			case "#locator":
			document.title = "Где я?";
			initialShowLocator();
			break;
		default:
			initialShowAbout();
			break;
	}
	$("h2").hide();
	$("#vcard a").hover(showVcardLabel, hideVcardLabel);
	$("#nav-about a").click(showAbout);
	$("#nav-internet a").click(showInternet);
	$("#nav-photo a").click(showPhoto);
	$("#nav-teka a").click(showTeka);
	$("#nav-networks a").click(showNetworks);
	$("#nav-contact a").click(showContact);
	$("#nav-locator a").click(showLocator);
});

function showVcardLabel() {
	$("#vcard a span").show();
	$("#vcard a span").animate({
		top: "-40px",
		opacity: 1
	}, 250 );
}

function hideVcardLabel() {
	$("#vcard a span").animate({ 
		top: "-35px",
		opacity: 0
	}, 250 );
	setTimeout("$('#vcard a span').hide();", 250);
	$("#vcard a span").animate({ 
		top: "-45px",
	}, 250 );
}



function initialShowInternet() {
	$("#content").hide();
	$("#kurashev").removeClass();
	$("#kurashev").addClass("internet");
	$(".node").hide();
	$("#internet").show();
	setTimeout("$('#content').slideDown('slow');", 1000);
}
function initialShowPhoto() {
	$("#content").hide();
	$("#kurashev").removeClass();
	$("#kurashev").addClass("photo");
	$(".node").hide();
	$("#photo").show();
	setTimeout("$('#content').slideDown('slow');", 1000);
}
function initialShowTeka() {
	$("#content").hide();
	$("#kurashev").removeClass();
	$("#kurashev").addClass("teka");
	$(".node").hide();
	$("#teka").show();
	setTimeout("$('#content').slideDown('slow');", 1000);
}
function initialShowNetworks() {
	$("#content").hide();
	$("#kurashev").removeClass();
	$("#kurashev").addClass("networks");
	$(".node").hide();
	$("#networks").show();
	setTimeout("$('#content').slideDown('slow');", 1000);
}

function initialShowAbout() {
	$("#content").hide();
	$("#kurashev").removeClass();
	$("#kurashev").addClass("about");
	$(".node").hide();
	$("#about").show();
	setTimeout("$('#content').slideDown('slow');", 1000);
}

function initialShowContact() {
	$("#content").hide();
	$("#kurashev").removeClass();
	$("#kurashev").addClass("contact");
	$(".node").hide();
	$("#contact").show();
	setTimeout("$('#content').slideDown('slow');", 1000);
}

function initialShowLocator() {
	$("#content").hide();
	$("#kurashev").removeClass();
	$("#kurashev").addClass("locator");
	$(".node").hide();
	$("#locator").show();
	setTimeout("$('#content').slideDown('slow');", 1000);
}

function showAbout() {
	if ($("#kurashev").hasClass("about")){ }
	else {
		document.title = "Обо мне";
		$("#content").slideUp(500);
		$(".node").fadeOut(500);
		setTimeout("$('.node').hide();", 500);
		setTimeout("$('#about').show();", 500);
		$("#content").slideDown(500);
		$("#kurashev").removeClass();
		$("#kurashev").addClass("about");
	}
}

function showInternet() {
	document.title = "В сети";
	if ($("#kurashev").hasClass("internet")){ }
	else {
		$("#content").slideUp(500);
		$(".node").fadeOut(500);
		setTimeout("$('.node').hide();", 500);
		setTimeout("$('#internet').show();", 500);
		$("#content").slideDown(500);
		$("#kurashev").removeClass();
		$("#kurashev").addClass("internet");
	}
}
function showPhoto() {
	document.title = "Фото";
	if ($("#kurashev").hasClass("photo")){ }
	else {
		$("#content").slideUp(500);
		$(".node").fadeOut(500);
		setTimeout("$('.node').hide();", 500);
		setTimeout("$('#photo').show();", 500);
		$("#content").slideDown(500);
		$("#kurashev").removeClass();
		$("#kurashev").addClass("photo");
	}
}
function showTeka() {
	document.title = "Теки";
	if ($("#kurashev").hasClass("teka")){ }
	else {
		$("#content").slideUp(500);
		$(".node").fadeOut(500);
		setTimeout("$('.node').hide();", 500);
		setTimeout("$('#teka').show();", 500);
		$("#content").slideDown(500);
		$("#kurashev").removeClass();
		$("#kurashev").addClass("teka");
	}
}
function showNetworks() {
	document.title = "Проекты";
	if ($("#kurashev").hasClass("networks")){ }
	else {
		$("#content").slideUp(500);
		$(".node").fadeOut(500);
		setTimeout("$('.node').hide();", 500);
		setTimeout("$('#networks').show();", 500);
		$("#content").slideDown(500);
		$("#kurashev").removeClass();
		$("#kurashev").addClass("networks");
	}
}

function showContact() {
	if ($("#kurashev").hasClass("contact")){ }
	else {
		document.title = "Контакты";
		$("#content").slideUp(500);
		$(".node").fadeOut(500);
		setTimeout("$('.node').hide();", 500);
		setTimeout("$('#contact').show();", 500);
		$("#content").slideDown(500);
		$("#kurashev").removeClass();
		$("#kurashev").addClass("contact");
	}
}


function showLocator() {
	if ($("#kurashev").hasClass("locator")){ }
	else {
		document.title = "Где я?";
		$("#content").slideUp(500);
		$(".node").fadeOut(500);
		setTimeout("$('.node').hide();", 500);
		setTimeout("$('#locator').show();", 500);
		$("#content").slideDown(500);
		$("#kurashev").removeClass();
		$("#kurashev").addClass("locator");
	}
}
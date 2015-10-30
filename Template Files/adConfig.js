var adConfig = {
    "reminder_width": "728",
    "reminder_height": "90",
    "inter_width": "800",
    "inter_height": "600",
    "auto_cierre": "8000" // milisegundos
};



////////Funciones comunes, NO ELIMINAR!!!!!!!!////////////////////

function initEB() {
	if (!EB.isInitialized()) {
		EB.addEventListener(EBG.EventName.EB_INITIALIZED, startAd);
	}else {
		startAd();
	}
}

function is_touch_device() {
	return (('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
}

window.addEventListener("load", initEB);
///////////////////////////////////////////////////////////////////
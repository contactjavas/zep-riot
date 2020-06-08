window.Zep = (function () {
	function init() {
		setupTextFields();
		setupSubmenu();
		setupMobileMenu();
		setupDatePickers();
		setupDateRangePicker();
		setupTimePicker();
		setupMultiJS();
		setupAutocomplete();
		setupIntToThousand();
	}

	function setupTextFields(fields) {
		fields = fields && fields.length ? fields : document.querySelectorAll(".field .input");
		if (!fields.length) return;

		window.addEventListener("load", () => {
			setTimeout(() => {
				fields.forEach((field) => {
					if (field.type === "checkbox" || field.type === "radio") return;
					switchIsFilled(field);
				});
			}, 150);
		});

		fields.forEach((field) => {
			if (field.type === "checkbox" || field.type === "radio") return;
			switchIsFilled(field);
			field.addEventListener("change", () => switchIsFilled(field));
		});
	}

	function setupSubmenu() {
		var links = document.querySelectorAll(".has-submenu > a");
		if (!links.length) return;

		links.forEach((link) => {
			link.addEventListener("click", (e) => e.preventDefault());
		});
	}

	function setupMobileMenu() {
		const trigger = document.querySelector(".mobile-menu-trigger");
		const screen = document.querySelector(".main-screen");
		const menu = document.querySelector(".main-menu");

		if (!trigger || !screen || !menu) return;

		screen.addEventListener("click", function () {
			menu.classList.remove("is-open");
			trigger.classList.remove("is-open");
		});

		trigger.addEventListener("click", function () {
			fieldthis.classList.toggle("is-open");
			menu.classList.toggle("is-open");
		});
	}

	function switchIsFilled(field) {
		if (!field.parentNode.querySelector(".flatpickr-mobile")) {
			if (field.value) {
				field.classList.add("is-filled");
			} else {
				field.classList.remove("is-filled");
			}
		} else if (field.classList.contains("use-multijs")) {
			field.classList.add("is-multijs");
		} else {
			field.classList.add("is-mobile-picker");
		}
	}

	function setupDatePickers(pickers) {
		if (!window.flatpickr) return;
		pickers = pickers && pickers.length ? pickers : document.querySelectorAll(".use-datepicker");
		if (!pickers.length) return;

		pickers.forEach((picker) => {
			setupDatePicker(picker);
		});
	}

	function setupDatePicker(picker) {
		if (!picker) return;
		let opts = {};

		opts.altInput = true;
		opts.altFormat = "j F Y";
		opts.dateFormat = "Y-m-d";

		if (!picker.dataset.defaultDate) {
			opts.defaultDate = Date.now();
		}

		flatpickr(picker, opts);
	}

	function setupDateRangePicker(pickers) {
		pickers = pickers && pickers.length ? pickers : document.querySelectorAll(".use-daterangepicker");
		if (!pickers.length) return;

		pickers.forEach((picker) => {
			flatpickr(picker, {
				mode: "range",
				altInput: true,
				altFormat: "j F Y",
				dateFormat: "Y-m-d",
				onChange: (selectedDates, dateStr, instance) => {
					let from = selectedDates[0]
						? flatpickr.formatDate(selectedDates[0], "Y-m-d")
						: "";
					let until = selectedDates[1]
						? flatpickr.formatDate(selectedDates[1], "Y-m-d")
						: "";

					if (picker.dataset.storeFromTo) {
						let fromField = document.querySelector(
							'[name="' + picker.dataset.storeFromTo + '"]'
						);
						if (fromField) fromField.value = from;
					}

					if (picker.dataset.storeUntilTo) {
						let untilField = document.querySelector(
							'[name="' + picker.dataset.storeUntilTo + '"]'
						);
						if (untilField) untilField.value = until;
					}
				},
			});
		});
	}

	function setupTimePicker(pickers) {
		pickers = pickers && pickers.length ? pickers : document.querySelectorAll(".use-timepicker");
		if (!pickers.length) return;

		pickers.forEach((picker) => {
			flatpickr(picker, {
				enableTime: true,
				noCalendar: true,
				dateFormat: "H:i",
				time_24hr: true,
			});
		});
	}

	function setupMultiJS(fields) {
		fields = fields && fields.length ? fields : document.querySelectorAll(".use-multijs");
		if (!fields.length) return;

		fields.forEach((field) => {
			const placeholder = field.getAttribute("placeholder");
			let opts = {};

			if (placeholder) opts.search_placeholder = placeholder;

			multi(field, opts);
		});
	}

	function setupAutocomplete(fields) {
		fields = fields && fields.length ? fields : document.querySelectorAll(".use-autocomplete");
		if (!fields.length) return;

		fields.forEach((field) => {
			let opts = {};
			let autocomplete;
			let ajax = new XMLHttpRequest();
			let sendRequest;

			if (field.dataset.ajaxUrl) {
				sendRequest = (query) => {
					let ajaxUrl = field.dataset.ajaxUrl + "&query=" + query;
					opts.list = [];

					ajax.abort();

					ajax.open("GET", ajaxUrl, true);
					ajax.send();
					ajax.onload = function () {
						let list = JSON.parse(ajax.responseText);

						autocomplete.list = list;
						autocomplete.evaluate();
					};
				};

				field.addEventListener("keypress", (e) => {
					if (
						e.key === "Escape" ||
						e.key === "Esc" ||
						e.keyCode === 27 ||
						e.key === "Enter" ||
						e.keyCode === 13 ||
						e.key === "ArrowDown" ||
						e.keyCode === 40 ||
						e.key === "ArrowUp" ||
						e.keyCode === 38
					) {
						return;
					}

					sendRequest(field.value);
				});
			}

			field.addEventListener("focus", () => {
				field.parentNode.classList.add("is-filled");
			});

			field.addEventListener("blur", () => {
				if (field.value) {
					field.parentNode.classList.add("is-filled");
				} else {
					field.parentNode.classList.remove("is-filled");
				}
			});

			if (field.dataset.useArrayOf === "object" && field.dataset.storeValueTo) {
				opts.replace = (suggestion) => {
					field.value = suggestion.label;
					let valueField = document.querySelector(
						'[name="' + field.dataset.storeValueTo + '"]'
					);
					if (!valueField) return;

					valueField.value = suggestion.value;

					if (!valueField.classList.contains("use-autocomplete")) return;

					if (suggestion.value) {
						valueField.parentNode.classList.add("is-filled");
					} else {
						valueField.parentNode.classList.remove("is-filled");
					}
				};
			}

			autocomplete = new Awesomplete(field, opts);
		});
	}

	function setupIntToThousand(fields) {
		fields = fields && fields.length ? fields : document.querySelectorAll(".use-thousand-sep");
		if (!fields.length) return;

		fields.forEach((field) => {
			field.addEventListener("keydown", function (e) {
				if (e.code) {
					// if (!e.code.toLowerCase().includes('digit')) e.preventDefault();
				} else {
					// if ((e.keyCode < 48 || e.keyCode > 57) && e.keyCode != 8) e.preventDefault();
				}
			});

			field.addEventListener("keyup", function (e) {
				intToThousand(this);
			});
		});
	}

	function intToThousand(field) {
		var sep = field.dataset.separator ? field.dataset.separator : ".";
		var sepRegex = sep === "." ? "\\." : sep;
		sepRegex = new RegExp(sepRegex, "g");
		var value = field.value.replace(sepRegex, "");
		field.dataset.currentValue = parseInt(value, 10);
		var caret = value.length - 1;

		while (caret - 3 > -1) {
			caret -= 3;
			value = value.split("");
			value.splice(caret + 1, 0, sep);
			value = value.join("");
		}

		field.value = value;
	}

	init();

	return {
		baseUrl: "http://139.180.143.210:8080/zepms",
		apiUrl: "http://139.180.143.210:8080/zepms/api",
		setupTextFields,
		setupDatePickers,
		setupDatePicker,
		setupDateRangePicker,
		setupTimePicker,
		setupMultiJS,
		setupAutocomplete,
		setupIntToThousand,
		intToThousand,
		switchIsFilled
	};
})();

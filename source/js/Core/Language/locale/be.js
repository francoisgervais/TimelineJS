﻿/* Belarusian LANGUAGE 
================================================== */
if(typeof VMM != 'undefined') {
	VMM.Language = {
		lang: "be",
		api: {
			wikipedia: "be"
		},
		date: {
			month: ["студзень", "люты", "сакавік", "красавік", "май", "чэрвень", "ліпень", "жнівень", "верасень", "кастрычнік", "лістапад", "снежань"],
			month_abbr: ["стд", "лют", "скв", "крс", "май", "чрв", "лпн", "жнв", "врс", "кст", "лст", "снж"],
			day: ["нядзеля","панядзелак", "аўторак", "серада", "чацвер", "пятніца", "субота"],
			day_abbr: ["Нд.","Пн.", "Аўт.", "Ср.", "Чц.", "Пт.", "Сб."]
		}, 
		dateformats: {
			year: "yyyy",
			month_short: "mmm",
			month: "mmmm yyyy",
			full_short: "d mmm",
			full: "d mmmm yyyy",
			time_short: "h:MM:ss TT",
			time_no_seconds_short: "h:MM TT",
			time_no_seconds_small_date: "h:MM TT'<br/><small>'d mmmm yyyy'</small>'",
			full_long: "d mmm yyyy 'at' h:MM TT",
			full_long_small_date: "h:MM TT'<br/><small>d mmm yyyy'</small>'"
		},
		messages: {
			loading_timeline: "Загрузка лініі часу... ",
			return_to_title: "Вярнуцца ў пачатак",
			expand_timeline: "Наблізіць лінію часу",
			contract_timeline: "Аддаліць лінію часу",
			wikipedia: "З Вікіпедыі, свабоднай энцыклапедыі",
			loading_content: "Загрузка зместу",
			loading: "Загрузка"
		}
	}
}
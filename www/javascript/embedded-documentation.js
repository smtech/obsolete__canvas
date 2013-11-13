/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true */

function stmarks_buildTwoWeekGradingDisclaimer() {
	var annotation = document.createElement('div');
	annotation.innerHTML = '<span style="margin-left: 10px;"><i>In the normal course of the academic year, students should expect that graded assignments will be returned within two weeks.</i></span>';
	return annotation;
}

function stmarks_insertTwoWeekGradingDisclaimerBefore(myDOMElement) {
	myDOMElement.parentElement.insertBefore(stmarks_buildTwoWeekGradingDisclaimer(), myDOMElement);
}

function stmarks_appendTwoWeekGradingDisclaimerAfter(myDOMElements) {
	myDOMElements[0].appendChild(stmarks_buildTwoWeekGradingDisclaimer());
}

function stmarks_embeddedDocumentation_twoWeekGradingDisclaimer() {
	// student grade summary
	stmarks_waitForDOMById(/.*\/courses\/\d+\/grades(\/\d+)?.*/, 'grades_summary', stmarks_insertTwoWeekGradingDisclaimerBefore);
	
	// submission details
	stmarks_waitForDOMByClassName(/.*\/courses\/\d+\/assignments\/\d+\/submissions\/\d+.*/, 'submission_details', stmarks_appendTwoWeekGradingDisclaimerAfter);
	
	// gradebook
	stmarks_waitForDOMById(/.*\/courses\/\d+\/gradebook2.*/, 'gradebook_wrapper', stmarks_insertTwoWeekGradingDisclaimerBefore);
}

function stmarks_embeddedDocumentation() {
	stmarks_embeddedDocumentation_twoWeekGradingDisclaimer();
}
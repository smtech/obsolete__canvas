/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true */

// TODO this should obviously be turned into two different methods (annotateBefore() and annotateAfter())
// FIXME looks like there are some timing issues that need to be worked out (wait for the DOM object to be created if it's not there and we're on the right page)
function stmarks_embeddedDocmentation() {
	var studentGradeSummaryUrl = /.*\/courses\/\d+\/grades(\/\d+)?.*/;
	var submissionDetailsUrl = /.*\/courses\/\d+\/assignments\/\d+\/submissions\/\d+.*/;
	var gradebookUrl = /.*\/courses\/\d+\/gradebook2.*/;
	
	var twoWeekGradingDisclaimer = 'In the normal course of the academic year, students should expect that graded assignments will be returned within two weeks.';
	var annotation;
	
	if (studentGradeSummaryUrl.test(document.location.href)) {
		// add 2-week grading turn-around disclaimer to student grade summary
		var gradeSummary = document.getElementById('grades_summary');
		annotation = document.createElement('div');
		annotation.innerHTML = '<span style="margin-left: 10px;"><i>' + twoWeekGradingDisclaimer + '</i></span>';
		gradeSummary.parentElement.insertBefore(annotation, gradeSummary);
	} else if (submissionDetailsUrl.test(document.location.href)) {
		// add 2-week grading turn-around disclaimer to submission details
		var submissionDetails = document.getElementById('content').getElementsByClassName('submission_details')[0];
		annotation = document.createElement('div');
		annotation.innerHTML = '<span style="padding-left: 10px; line-height: 0.7em; font-size: 0.8em;  "><i>' + twoWeekGradingDisclaimer + '</i></span>';
		submissionDetails.appendChild(annotation);
	} else if (gradebookUrl.test(document.location.href)) {
		// add 2-week grading turn-around disclaimer to gradebook
		var gradebook = document.getElementById('gradebook_wrapper');
		annotation = document.createElement('p');
		annotation.innerHTML = '<i>' + twoWeekGradingDisclaimer + '</i>';
		gradebook.parentElement.insertBefore(annotation, gradebook);
	}	
}
<?php

require_once('../config.inc.php');
require_once('../common.inc.php');
require_once('../.ignore.grading-analytics-authentication.inc.php');
require_once('../../mysql.inc.php');
require_once('../../phpgraphlib.php');

$stats = mysqlQuery("
	SELECT * FROM `course_statistics`
	WHERE
		`course[id]` = '{$_REQUEST['course_id']}'
	ORDER BY
		`timestamp` ASC
");

$data = array();
while ($row = $stats->fetch_assoc()) {
	$date = new DateTime($row['timestamp']);
	$data[$date->format('M. j')] = $row['average_grading_turn_around'];
}

$graph = new PHPGraphLib(graphWidth(count($data)), graphHeight());
$graph->addData($data);
$graph->setBars(false);
$graph->setLine(true);
$graph->setDataPoints(true);
if (count($data) > 7) {
	$graph->setXValuesInterval(7);
}
$graph->setXValuesHorizontal(true);
$graph->setGoalLine(7, 'lime', 'solid');
$graph->setGoalLine(14, 'red', 'solid');
$graph->setGrid(false);
$graph->createGraph();

?>
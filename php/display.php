<?php
/*include db connection*/
include("./dbConnect.php");

/*For each major(only 3)*/
foreach ($_REQUEST['major'] as $major) {
    /*DB Selection Query*/
    $sql = "SELECT pgmCluster, pgmClusterDesc, pgmClusterAbout, mkturl FROM crazyyea_pct.ISERIES_Degree_list WHERE pgmCluster = '" . $major . "' GROUP BY pgmCluster ORDER BY pgmClusterDesc ASC";
    $query = mysqli_query($link, $sql);


    while ($row = mysqli_fetch_array($query)) {
        /*Echos card for major*/
        echo "<a href='" . dirname($row[mkturl]) . "'' target='_blank' class='major card text-left p-3 mb-sm-5 mb-md-5 mb-lg-3 border-0 rounded-0 light-gray-background-top-border-red'><h3 class='card-title'>" . $row[pgmClusterDesc] . "</h3><p class='card-text text-muted'>" . $row[pgmClusterAbout] . "</p><p class='text-danger'>Learn More</p></a>";
    };
};

/*Close mysql link so hackers can't abuse an open connection*/
mysqli_close($link);
?>
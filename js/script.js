import grades from '/js/data.js';
import logos from '/js/images.js';

'use strict';

/*Global Variables*/
var swipeContainer = document.querySelector('.swipe--container');
var allCards = document.querySelectorAll('.swipeable--card');

/*Function to set default Session Storage*/
function setDefaultStorage() {
    let data = {
        'ICET02': 0,
        'ICET08': 0,
        'TNRT03': 0,
        'TNRT01': 0,
        'TNRT02': 0,
        'TNRT06': 0,
        'TNRT04': 0,
        'ICET03': 0,
        'CDT02': 0,
        'CDT04': 0,
        'BH01': 0,
        'SHVC01': 0,
        'BH03': 0,
        'SHVC04': 0,
        'CDT01': 0,
        'TNRT07': 0,
        'TNRT05': 0,
        'CDT03': 0,
        'ICET05': 0,
        'SHVC03': 0,
        'SHVC05': 0,
        'HS03': 0,
        'HS06': 0,
        'HS09': 0,
        'HS12': 0,
        'HS08': 0,
        'HS11': 0,
        'HS10': 0,
        'HS02': 0,
        'HS01': 0,
        'ICET01': 0,
        'CDT05': 0,
        'ICET06': 0,
        'ICET04': 0,
        'ICET07': 0
    };

    data = JSON.stringify(data);
    sessionStorage.setItem('Majors', data);
    sessionStorage.setItem('Confidence', data);
};

/*Initial Storage Must be set*/
setDefaultStorage();

/*Plugin Function to create circle around Radar Chart*/
Chart.pluginService.register({
    beforeDraw: chart => {
        const {ctx, scale, config} = chart
        const {xCenter, yCenter, drawingArea: radius} = scale

        ctx.save()
        ctx.arc(xCenter, yCenter, radius, 0, Math.PI * 2)
        ctx.fillStyle = config.options.chartArea.backgroundColor
        ctx.fill()
        ctx.restore()
    }
});

/*Function to set chart data*/
function chart_data() {
    /* Function to Create Images for Point Labels - SVGs dont work
    function chartImage(source){
        let image = new Image()
        image.src = source;
        return image;
    };

*/

    /*Base64 images stored in js file*/
    function jsonChartImage(source) {
        let image = new Image()
        image.src = "data:image/png;base64, " + logos[source];
        return image;
    };

    let chartData = JSON.parse(sessionStorage.getItem('Majors'));
    let data = {
        labels: ['Automated Manufacturing & Machining', 'Welding & Metal Fabrication', 'Collision Repair & Restoration', 'Automotive', 'Aviation', 'Heavy Equipment', 'Diesel & Power Generation', 'Electrical', 'Building Construction', 'Construction Management', 'Accounting & Business Administration', 'Brewing & Fermentation Science', 'Baking & Culinary', 'Graphic Design & Art', 'Architecture & Sustainable Design', 'Landscape/Horticulture', 'Forestry', 'Civil Engineering & Surveying', 'Engineering & Industrial Design Technology', 'Emergency Management & Homeland Security', 'Human Services & Restorative Justice', 'Paramedic', 'Nursing', 'Physician Assistant', 'Health Science', 'Physical Therapist Assistant', 'Surgical Technology', 'Radiography/Medical Imaging', 'Dental Hygiene', 'Applied Health Studies', 'Applied Technology Studies', 'Heating, Ventilation & Air Conditioning', 'Information Technology', 'Electronics & Computer Engineering Technology', 'Plastics & Polymer Engineering Technology'],
        datasets: [{
            backgroundColor: "rgba(216, 59, 24, .5)",
            borderColor: "rgba(216, 59, 24, .8)",
            pointRadius: 15,
            /* Point Style Gathers major image icons from above */
            //Image method using PNG files and a ton of server requests
            //pointStyle: [chartImage('../img/ICET02.png'), chartImage('../img/ICET08.png'), chartImage('../img/TNRT03.png'), chartImage('../img/TNRT01.png'), chartImage('../img/TNRT02.png'), chartImage('../img/TNRT06.png'), chartImage('../img/TNRT04.png'), chartImage('../img/ICET03.png'), chartImage('../img/CDT02.png'), chartImage('../img/CDT04.png'), chartImage('../img/BH01.png'), chartImage('../img/SHVC01.png'), chartImage('../img/BH03.png'), chartImage('../img/SHVC04.png'), chartImage('../img/CDT01.png'), chartImage('../img/TNRT07.png'), chartImage('../img/TNRT05.png'), chartImage('../img/CDT03.png'), chartImage('../img/ICET05.png'), chartImage('../img/SHVC03.png'), chartImage('../img/SHVC05.png'), chartImage('../img/HS03.png'), chartImage('../img/HS06.png'), chartImage('../img/HS09.png'), chartImage('../img/HS12.png'), chartImage('../img/HS08.png'), chartImage('../img/HS11.png'), chartImage('../img/HS10.png'), chartImage('../img/HS02.png'), chartImage('../img/HS01.png'), chartImage('../img/ICET01.png'), chartImage('../img/CDT05.png'), chartImage('../img/ICET06.png'), chartImage('../img/ICET04.png'), chartImage('../img/ICET07.png')],

            /*Obtains points using base64 method*/
            pointStyle: [jsonChartImage('ICET02'), jsonChartImage('ICET08'), jsonChartImage('TNRT03'), jsonChartImage('TNRT01'), jsonChartImage('TNRT02'), jsonChartImage('TNRT06'), jsonChartImage('TNRT04'), jsonChartImage('ICET03'), jsonChartImage('CDT02'), jsonChartImage('CDT04'), jsonChartImage('BH01'), jsonChartImage('SHVC01'), jsonChartImage('BH03'), jsonChartImage('SHVC04'), jsonChartImage('CDT01'), jsonChartImage('TNRT07'), jsonChartImage('TNRT05'), jsonChartImage('CDT03'), jsonChartImage('ICET05'), jsonChartImage('SHVC03'), jsonChartImage('SHVC05'), jsonChartImage('HS03'), jsonChartImage('HS06'), jsonChartImage('HS09'), jsonChartImage('HS12'), jsonChartImage('HS08'), jsonChartImage('HS11'), jsonChartImage('HS10'), jsonChartImage('HS02'), jsonChartImage('HS01'), jsonChartImage('ICET01'), jsonChartImage('CDT05'), jsonChartImage('ICET06'), jsonChartImage('ICET04'), jsonChartImage('ICET07')],

            /*Data Puts Data into Radar Chart*/
            data: [chartData.ICET02, chartData.ICET08, chartData.TNRT03, chartData.TNRT01, chartData.TNRT02, chartData.TNRT06, chartData.TNRT04, chartData.ICET03, chartData.CDT02, chartData.CDT04, chartData.BH01, chartData.SHVC01, chartData.BH03, chartData.SHVC04, chartData.CDT01, chartData.TNRT07, chartData.TNRT05, chartData.CDT03, chartData.ICET05, chartData.SHVC03, chartData.SHVC05, chartData.HS03, chartData.HS06, chartData.HS09, chartData.HS12, chartData.HS08, chartData.HS11, chartData.HS10, chartData.HS02, chartData.HS01, chartData.ICET01, chartData.CDT05, chartData.ICET06, chartData.ICET04, chartData.ICET07]
        }]
    };
    return data;
};

/*Function to set chart options*/
function chart_options() {
    return {
        chartArea: {backgroundColor: "rgba(247, 247, 247, 1)"},
        legend: {display: false},
        scale: {
            ticks: {stepSize: 1, display: false},
            pointLabels: {display: false},
            gridLines: {display: false}
        },
        layout: {padding: 15},
        responsive: true,
        aspectRatio: 1,
        maintainAspectRatio: true,
        tooltips: {
            callbacks: {
                title: function (tooltipItem, data) {
                    return data['labels'][tooltipItem[0]['index']];
                },
                /* Label set to return false to prevent showing numbers*/
                label: function (tooltipItem, data) {
                    return false;
                },
            },
            backgroundColor: '#FFF',
            titleFontSize: 16,
            titleFontColor: '#214a9f',
            displayColors: false
        },
    };
};

/* Var Creates Chart while giving it a reference variable for updates*/
var radarChart = new Chart(document.getElementById("radarChart"), {
    type: 'radar',
    data: chart_data(),
    options: chart_options()
});
/*End Radar Chart*/

/* Function to get Top Three majors*/
function getTopThree() {
    let list = JSON.parse(sessionStorage.getItem('Majors'));
    let keysSorted = Object.keys(list).sort(function (a, b) {
        return list[b] - list[a]
    });
    keysSorted = keysSorted.slice(0, 3);
    return keysSorted;
};

/*Function to Initialize Card Stack*/
function initCards(card, index) {
    /* Function updating chart data*/
    function updateChart(chart) {
        chart.data = chart_data();
        chart.update();
    };

    let newCards = document.querySelectorAll('.swipeable--card:not(.removed)');
    newCards.forEach(function (card, index) {
        card.style.zIndex = allCards.length - index;
        card.style.transform = 'scale(' + (20 - index) / 20 + ') translateY(-' + 30 * index + 'px)';
        card.style.opacity = (10 - index) / 10;
    });

    swipeContainer.classList.add('loaded');

    /*Makes Top Card a standard variable instead of an array. Grabs top value if multiple values.*/
    var topCard;
    if (newCards.length > 0) topCard = newCards[0].id;
    else topCard = newCards.id;

    /*Function determining if its the last card or not*/
    if (topCard > 0) {

        /*Function Determining if we are at the directions card so it hides the directions on how to use this app*/
        /*Directions are important for 2 reasons
            1. So people Know How to use the App
            2. It delays chart.js rendering massively increasing initial load time
        */
        if (topCard == 1) {
            /*When Card with First Question is loaded*/
            /*Hide Directions*/
            document.getElementById("directions").style.display = "none";
            /*Show Chart*/
            document.getElementById("chartContainer").style.display = "block";
        }

        /*Chart always updates upon card swipe or button click*/
        updateChart(radarChart);
        /*Else Applies to last card*/
    } else if (topCard != 0) {
        /*Chart always updates upon card swipe or button click*/
        updateChart(radarChart);

        /*Uses AJAX do display majors from SQL DB using PHP*/
        $.ajax({    //create an ajax request to display.php
            type: "GET",
            url: "./php/display.php",
            data: {major: getTopThree()},
            dataType: "html",   //expect html to be returned                
            success: function (response) {
                $("#results").html(response);
            }
        });

        swipeContainer.style.display = "none";
        document.querySelector('.postResults').style.display = "block";
    }
    ;
};

/*Initialize the card stack on load*/
initCards();

/*Function to Set Question Ranks into local storage*/

/*Int is JSON reference number in data.js . This determins True/False/ Nuetral*/
function cardPointCalc(card, int) {

    /*Function Setting the data in local storage*/
    function setRank(gradeData) {
        let sessionData = JSON.parse(sessionStorage.getItem('Majors'));

        sessionStorage.setItem('Majors', JSON.stringify({
            'ICET02': sessionData.ICET02 + gradeData.ICET02,
            'ICET08': sessionData.ICET08 + gradeData.ICET08,
            'TNRT03': sessionData.TNRT03 + gradeData.TNRT03,
            'TNRT01': sessionData.TNRT01 + gradeData.TNRT01,
            'TNRT02': sessionData.TNRT02 + gradeData.TNRT02,
            'TNRT06': sessionData.TNRT06 + gradeData.TNRT06,
            'TNRT04': sessionData.TNRT04 + gradeData.TNRT04,
            'ICET03': sessionData.ICET03 + gradeData.ICET03,
            'CDT02': sessionData.CDT02 + gradeData.CDT02,
            'CDT04': sessionData.CDT04 + gradeData.CDT04,
            'BH01': sessionData.BH01 + gradeData.BH01,
            'SHVC01': sessionData.SHVC01 + gradeData.SHVC01,
            'BH03': sessionData.BH03 + gradeData.BH03,
            'SHVC04': sessionData.SHVC04 + gradeData.SHVC04,
            'CDT01': sessionData.CDT01 + gradeData.CDT01,
            'TNRT07': sessionData.TNRT07 + gradeData.TNRT07,
            'TNRT05': sessionData.TNRT05 + gradeData.TNRT05,
            'CDT03': sessionData.CDT03 + gradeData.CDT03,
            'ICET05': sessionData.ICET05 + gradeData.ICET05,
            'SHVC03': sessionData.SHVC03 + gradeData.SHVC03,
            'SHVC05': sessionData.SHVC05 + gradeData.SHVC05,
            'HS03': sessionData.HS03 + gradeData.HS03,
            'HS06': sessionData.HS06 + gradeData.HS06,
            'HS09': sessionData.HS09 + gradeData.HS09,
            'HS12': sessionData.HS12 + gradeData.HS12,
            'HS08': sessionData.HS08 + gradeData.HS08,
            'HS11': sessionData.HS11 + gradeData.HS11,
            'HS10': sessionData.HS10 + gradeData.HS10,
            'HS02': sessionData.HS02 + gradeData.HS02,
            'HS01': sessionData.HS01 + gradeData.HS01,
            'ICET01': sessionData.ICET01 + gradeData.ICET01,
            'CDT05': sessionData.CDT05 + gradeData.CDT05,
            'ICET06': sessionData.ICET06 + gradeData.ICET06,
            'ICET04': sessionData.ICET04 + gradeData.ICET04,
            'ICET07': sessionData.ICET07 + gradeData.ICET07
        }));
    };

    /*Function Setting the data in local storage*/
    function setConfidence(gradeData) {
        let sessionData = JSON.parse(sessionStorage.getItem('Majors'));

        sessionStorage.setItem('Confidence', JSON.stringify({
            'ICET02': sessionData.ICET02 + gradeData.ICET02,
            'ICET08': sessionData.ICET08 + gradeData.ICET08,
            'TNRT03': sessionData.TNRT03 + gradeData.TNRT03,
            'TNRT01': sessionData.TNRT01 + gradeData.TNRT01,
            'TNRT02': sessionData.TNRT02 + gradeData.TNRT02,
            'TNRT06': sessionData.TNRT06 + gradeData.TNRT06,
            'TNRT04': sessionData.TNRT04 + gradeData.TNRT04,
            'ICET03': sessionData.ICET03 + gradeData.ICET03,
            'CDT02': sessionData.CDT02 + gradeData.CDT02,
            'CDT04': sessionData.CDT04 + gradeData.CDT04,
            'BH01': sessionData.BH01 + gradeData.BH01,
            'SHVC01': sessionData.SHVC01 + gradeData.SHVC01,
            'BH03': sessionData.BH03 + gradeData.BH03,
            'SHVC04': sessionData.SHVC04 + gradeData.SHVC04,
            'CDT01': sessionData.CDT01 + gradeData.CDT01,
            'TNRT07': sessionData.TNRT07 + gradeData.TNRT07,
            'TNRT05': sessionData.TNRT05 + gradeData.TNRT05,
            'CDT03': sessionData.CDT03 + gradeData.CDT03,
            'ICET05': sessionData.ICET05 + gradeData.ICET05,
            'SHVC03': sessionData.SHVC03 + gradeData.SHVC03,
            'SHVC05': sessionData.SHVC05 + gradeData.SHVC05,
            'HS03': sessionData.HS03 + gradeData.HS03,
            'HS06': sessionData.HS06 + gradeData.HS06,
            'HS09': sessionData.HS09 + gradeData.HS09,
            'HS12': sessionData.HS12 + gradeData.HS12,
            'HS08': sessionData.HS08 + gradeData.HS08,
            'HS11': sessionData.HS11 + gradeData.HS11,
            'HS10': sessionData.HS10 + gradeData.HS10,
            'HS02': sessionData.HS02 + gradeData.HS02,
            'HS01': sessionData.HS01 + gradeData.HS01,
            'ICET01': sessionData.ICET01 + gradeData.ICET01,
            'CDT05': sessionData.CDT05 + gradeData.CDT05,
            'ICET06': sessionData.ICET06 + gradeData.ICET06,
            'ICET04': sessionData.ICET04 + gradeData.ICET04,
            'ICET07': sessionData.ICET07 + gradeData.ICET07
        }));
    };

    /*Case and Switch Function setting data using setRank() function so the appriot questions get the right data */
    switch (card.id) {
        case '1':
            setRank(grades.question1[int]);
            setConfidence(grades.question1[3]);
            break;
        case '2':
            setRank(grades.question2[int]);
            setConfidence(grades.question2[3]);
            break;
        case '3':
            setRank(grades.question3[int]);
            setConfidence(grades.question3[3]);
            break;
        case '4':
            setRank(grades.question4[int]);
            setConfidence(grades.question4[3]);
            break;
        case '5':
            setRank(grades.question5[int]);
            setConfidence(grades.question5[3]);
            break;
        case '6':
            setRank(grades.question6[int]);
            setConfidence(grades.question6[3]);
            break;
        case '7':
            setRank(grades.question7[int]);
            setConfidence(grades.question7[3]);
            break;
        case '8':
            setRank(grades.question8[int]);
            setConfidence(grades.question8[3]);
            break;
        case '9':
            setRank(grades.question9[int]);
            setConfidence(grades.question9[3]);
            break;
        case '10':
            setRank(grades.question10[int]);
            setConfidence(grades.question10[3]);
            break;
        case '11':
            setRank(grades.question11[int]);
            setConfidence(grades.question11[3]);
            break;
        case '12':
            setRank(grades.question12[int]);
            setConfidence(grades.question12[3]);
            break;
        case '13':
            setRank(grades.question13[int]);
            setConfidence(grades.question13[3]);
            break;
        case '14':
            setRank(grades.question14[int]);
            setConfidence(grades.question14[3]);
            break;
        case '15':
            setRank(grades.question15[int]);
            setConfidence(grades.question15[3]);
            break;
        case '16':
            setRank(grades.question16[int]);
            setConfidence(grades.question16[3]);
            break;
        case '17':
            setRank(grades.question17[int]);
            setConfidence(grades.question17[3]);
            break;
        case '18':
            setRank(grades.question18[int]);
            setConfidence(grades.question18[3]);
            break;
        case '19':
            setRank(grades.question19[int]);
            setConfidence(grades.question19[3]);
            break;
        case '20':
            setRank(grades.question20[int]);
            setConfidence(grades.question20[3]);
            break;
    }
    ;
};

/*Function Adding Swiping to Cards*/
allCards.forEach(function (card) {
    /* Create new Instance of Hammer.js*/
    var mc = new Hammer(card);

    /*Allows cards to capture data from all directions*/
    mc.get('pan').set({direction: Hammer.DIRECTION_ALL});

    /*Allows cards to move or pan*/
    mc.on('pan', function (event) {
        card.classList.add('moving');
    });

    /*Displays +/-/= on dragging*/
    mc.on("panleft panright panup pandown", function (event) {
        swipeContainer.classList.toggle('swipe--status_false', event.direction == 2);
        swipeContainer.classList.toggle('swipe--status_nuetral', event.direction == 8 || event.direction == 16);
        swipeContainer.classList.toggle('swipe--status_true', event.direction == 4);

        event.target.style.transform = 'translate(' + event.deltaX + 'px, ' + event.deltaY + 'px)';
    });

    /*Finishes Draggin function and captures data*/
    mc.on('panend', function (event) {
        card.classList.remove('moving');
        swipeContainer.classList.remove('swipe--status_true');
        swipeContainer.classList.remove('swipe--status_false');
        swipeContainer.classList.remove('swipe--status_nuetral');

        switch (event.direction) {
            /*Cases for left and right*/
            case 2:
            case 4:
                var moveOutWidth = document.body.clientWidth;
                /*Keep makes sure card was moved out enough to register instead of reverting back to center*/
                var keep = Math.abs(event.deltaX) < 80 || Math.abs(event.velocityX) < 0.5;

                /*removes card from stack if Keep is false*/
                event.target.classList.toggle('removed', !keep);

                /*No Transform event if keep is true*/
                if (keep) {
                    event.target.style.transform = '';
                    /*Transform event if Keep is false*/
                } else {
                    /*Vars determining how far to move the cards out of view to get off screen*/
                    var endX = Math.max(Math.abs(event.velocityX) * moveOutWidth, moveOutWidth);
                    var toX = event.deltaX > 0 ? endX : -endX;
                    var endY = Math.abs(event.velocityY) * moveOutWidth;
                    var toY = event.deltaY > 0 ? endY : -endY;

                    event.target.style.transform = 'translate(' + toX + 'px, ' + (toY + event.deltaY) + 'px)';

                    /* Determins if card was swiped left or right*/
                    if (event.deltaX > 0) {
                        /*True If (Right)*/
                        cardPointCalc(card, 2);
                    } else if (event.deltaX < 0) {
                        /*False If (Left)*/
                        cardPointCalc(card, 0);
                    }

                    /*reinitialize card stack with swiped card removed from deck*/
                    initCards();
                }
                break;
            /*Cases for Up and down*/
            /*Same logic as above, only were using Y values now since this case is verically based*/
            case 8:
            case 16:
                var moveOutWidth = document.body.clientHeight;
                /*Keep makes sure card was moved out enough to register instead of reverting back to center*/
                var keep = Math.abs(event.deltaY) < 80 || Math.abs(event.velocityY) < 0.5;

                /*removes card from stack if Keep is false*/
                event.target.classList.toggle('removed', !keep);

                /*No Transform event if keep is true*/
                if (keep) {
                    event.target.style.transform = '';
                    /*Transform event if Keep is false*/
                } else {
                    /*Vars determining how far to move the cards out of view to get off screen*/
                    var endY = Math.max(Math.abs(event.velocityY) * moveOutWidth, moveOutWidth);
                    var toY = event.deltaY > 0 ? endY : -endY;
                    var endX = Math.abs(event.velocityX) * moveOutWidth;
                    var toX = event.deltaX > 0 ? endX : -endX;

                    event.target.style.transform = 'translate(' + (toX + event.deltaX) + 'px, ' + toY + 'px)';

                    /* Determins if card was swiped up or down*/
                    /* You can split this into 2 inputs like above for different up and down functions */
                    if (event.deltaY > 0 || event.deltaY < 0) {
                        /* Nuetral If*/
                        cardPointCalc(card, 1);
                    }

                    /*reinitialize card stack with swiped card removed from deck*/
                    initCards();
                }
                ;
                break;
        }
    });
});

/*Button Functions*/

/*General Logic same for all three button functions. Only difference is assigned points and button directions*/
function falseButton() {
    /* Cards without class removed are active cards*/
    let cards = document.querySelectorAll('.swipeable--card:not(.removed)');
    let moveOutWidth = document.body.clientWidth * -1.5;

    /*If no cards, disables buttons*/
    if (!cards.length) return false;

    /*Make var card first card*/
    let card = cards[0];

    /*Add class removed to card to make it innactive*/
    card.classList.add('removed');

    /*Move Card off Screen*/
    card.style.transform = 'translate(' + moveOutWidth + 'px, 0px)';

    /*Set Data based on button pressed*/
    cardPointCalc(card, 0);

    /*reinitialize card stack with top card removed from deck*/
    initCards();
};

function nuetralButton() {
    /* Cards without class removed are active cards*/
    let cards = document.querySelectorAll('.swipeable--card:not(.removed)');
    let moveOutHeight = document.body.clientHeight * -1.5;

    /*If no cards, disables buttons*/
    if (!cards.length) return false;

    /*Make var card first card*/
    let card = cards[0];

    /*Add class removed to card to make it innactive*/
    card.classList.add('removed');

    /*Move Card off Screen*/
    card.style.transform = 'translate(0px, ' + moveOutHeight + 'px)';

    /*Set Data based on button pressed*/
    cardPointCalc(card, 1);

    /*reinitialize card stack with top card removed from deck*/
    initCards();
};


function trueButton() {
    /* Cards without class removed are active cards*/
    let cards = document.querySelectorAll('.swipeable--card:not(.removed)');
    let moveOutWidth = document.body.clientWidth * 1.5;

    /*If no cards, disables buttons*/
    if (!cards.length) return false;

    /*Make var card first card*/
    let card = cards[0];

    /*Add class removed to card to make it innactive*/
    card.classList.add('removed');

    /*Move Card off Screen*/
    card.style.transform = 'translate(' + moveOutWidth + 'px, -0px)';

    /*Set Data based on button pressed*/
    cardPointCalc(card, 2);

    /*reinitialize card stack with top card removed from deck*/
    initCards();
};

/*Even Listeners for card button clicks*/
document.getElementById('button--false').addEventListener('click', falseButton);
document.getElementById('button--nuetral').addEventListener('click', nuetralButton);
document.getElementById('button--true').addEventListener('click', trueButton);


/*Forms*/
(function ($) {
    'use strict';

    /* Form Variables */
    var contactForm = $('.contact__form'),
        contactMessage = $('.contact__msg'),
        feedbackForm = $('.feedback__form'),
        feedbackMessage = $('.feedback__msg');

    /* Contact Form (Also Known As Request Info) */

    // Success function
    function contact_done_func(response) {
        contactMessage.fadeIn().removeClass('alert-danger').addClass('alert-success');
        contactMessage.text(response);
        setTimeout(function () {
            contactMessage.fadeOut();
        }, 2000);
        contactForm.find('input:not([type="submit"])').val('');
    };

    // fail function
    function contact_fail_func(data) {
        contactMessage.fadeIn().removeClass('alert-success').addClass('alert-success');
        contactMessage.text(data.responseText);
        setTimeout(function () {
            contactMessage.fadeOut();
        }, 2000);
    };

    contactForm.submit(function (e) {
        /*Prevents page reload*/
        e.preventDefault();

        /*Form data Variables*/
        let fname = document.getElementById('contact-fname').value;
        let lname = document.getElementById('contact-lname').value;
        let email = document.getElementById('contact-email').value;
        let dob = document.getElementById('contact-dob').value;
        let semester = document.getElementById('contact-semester').value;

        /*Passes form data to PHP file  php/contactForm.php*/
        $.ajax({
            type: 'POST',
            url: contactForm.attr('action'),
            data: {fname: fname, lname: lname, email: email, dob: dob, semester: semester, majors: getTopThree()}
        })
            .done(contact_done_func)
            .fail(contact_fail_func);
    });

    /* Feedback Form */

    // Success function
    function feedback_done_func(response) {
        feedbackMessage.fadeIn().removeClass('alert-danger').addClass('alert-success');
        feedbackMessage.text(response);
        setTimeout(function () {
            feedbackMessage.fadeOut();
        }, 2000);
        feedbackForm.find('input:not([type="submit"]), textarea').val('');
    };

    // fail function
    function feedback_fail_func(data) {
        feedbackMessage.fadeIn().removeClass('alert-success').addClass('alert-success');
        feedbackMessage.text(data.responseText);
        setTimeout(function () {
            feedbackMessage.fadeOut();
        }, 2000);
    };

    feedbackForm.submit(function (e) {
        /*Prevents page reload*/
        e.preventDefault();

        /*Form data Variables*/
        let fname = document.getElementById('feedback-fname').value;
        let lname = document.getElementById('feedback-lname').value;
        let email = document.getElementById('feedback-email').value;
        let message = document.getElementById('feedback-message').value;

        /*Passes form data to PHP file php/feedbackForm.php*/
        $.ajax({
            type: 'POST',
            url: feedbackForm.attr('action'),
            data: {fname: fname, lname: lname, email: email, message: message, majors: getTopThree()}
        })
            .done(feedback_done_func)
            .fail(feedback_fail_func);
    });
})(jQuery);

/*Submit Feedback Button*/

/*Function makes feedback form appear*/
function feedbackAppear() {
    document.getElementById('feedback-container').style.display = "block";
}

/*Event listener to display feedback form on button click*/
document.getElementById('button--feedback').addEventListener('click', feedbackAppear);

/*Retake Quiz button Function*/
function retakeQuiz() {
    /*Select all the innactive cards*/
    let newCards = document.querySelectorAll('.removed');

    /*Fucntion to reactivate cards accept for instructions*/
    newCards.forEach(function (card) {
        if (card.id != 0) {
            /*Remove "removed" class to make cards active*/
            card.classList.remove('removed');
            /*Setting Transform to none brings cards back into view*/
            card.style.transform = "none";
        }
    });

    /*Hide Results*/
    document.querySelector('.postResults').style.display = "none";
    /*Show Cards again*/
    document.querySelector(".swipe--container").style.display = "flex";

    /*Reset Chart data Session Storage*/
    setDefaultStorage();

    /*Delete Generated majors list in results*/
    document.getElementById("results").innerHTML = '';

    /*reinitialize card stack*/
    initCards();
};

/*event listener to allow retaking of quiz*/
document.getElementById('button--retake').addEventListener('click', retakeQuiz);

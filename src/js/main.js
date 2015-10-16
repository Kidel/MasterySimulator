var lzwCompress = window.lzwCompress;

//lettura url code
if(typeof(window.location.href.split("#", 2)[1]) != "undefined") {
    var urlCodeApp = window.location.href.split("#", 2)[1];
    urlCodeApp=decodeURI(urlCodeApp);
    var urlCodeArr= [];
    for (var i = 0; i < urlCodeApp.length; i++) {
        urlCodeArr[i] = parseInt(urlCodeApp.charCodeAt(i));
    }
    var urlCode = lzwCompress.unpack(urlCodeArr);
}


//funzione generazione url code
var urlCodeGen = function(data) {
    var code = data.total_points + "?" + data.spent_points + "=" ;
    //code = data.total_points+';'+data.spent_points+';'+data.spent_exp+'?';
    for (var zoneIndex in data.zones) {
        for (var trackIndex in data.zones[zoneIndex].tracks) {
            code = code + '' + data.zones[zoneIndex].tracks[trackIndex].points + ';';
        }
        code = code.substring(0, code.length - 1)+'|'
    }
    return code.substring(0, code.length - 1);
};

//parsing url code
if(typeof(urlCode) != "undefined" && typeof(urlCode.split("=")[1])!="undefined"){
    var appCode = urlCode.split("=");
    var heroCode = appCode[0].split("?");
    var zoneCode = appCode[1].split("|");

    var url = {
        total_points: heroCode[0],
        spent_points: heroCode[1],
        zones: []
    };
    for (var zoneIndex in zoneCode) {
        var trackCode = zoneCode[zoneIndex].split(";");
        url.zones[zoneIndex] = { tracks: [] };
        for (var trackIndex in trackCode) {
            url.zones[zoneIndex].tracks[trackIndex] = { points: trackCode[trackIndex] }
        }
    }
}

//funzione scrittura url pagina
var urlUpdate = function(code) {
    var appArr = lzwCompress.pack(code);
    code = "";
    for(var index in appArr) {
        code = code + String.fromCharCode(appArr[index]);
    }
    document.location.hash = "#" + encodeURI(code);

};

// default url data generation
if(typeof(url) == "undefined") {
    var url = {
        total_points: config.total_points,
        spent_points: config.spent_points,
        zones: []
    };
    for (var zoneIndex in config.zones) {
        url.zones[zoneIndex] = { tracks: [] };
        for (var trackIndex in config.zones[zoneIndex].tracks) {
            url.zones[zoneIndex].tracks[trackIndex] = { points: config.zones[zoneIndex].tracks[trackIndex].points }
        }
    }
}

var updateHeroData = function(){
    var total_points = (typeof(url) != "undefined")? url.total_points:config.total_points;
    var spent_points = (typeof(url) != "undefined")? url.spent_points:config.spent_points;
    var spent_exp = (typeof(url) != "undefined")? url.spent_exp:config.spent_exp;

    $("#mastery-points").text(total_points);
    $("#mastery-points-input").attr("value", total_points);
    $("#mastery-points-used").text(spent_points);
    $("#exp-points").text(spent_exp);

    $("#selected-track-points").text(total_points-spent_points);

    var calcPercentage = function(arr) {
        var data = (typeof(url)!="undefined")? url:config;

        var zoneIndex = arr[0];
        var trackIndex = arr[1];
        var lineIndex = arr[2];
        var pointsApp = 0;
        for (var lineIndex in config.zones[zoneIndex].tracks[trackIndex].lines) {
            pointsApp += config.zones[zoneIndex].tracks[trackIndex].lines[lineIndex].points;
        }
        pointsApp = data.zones[zoneIndex].tracks[trackIndex].points / pointsApp * 100;
        return pointsApp;
    };


    // updating small exp bars
    $("#zones div div div div.progress div.progress-bar").attr('aria-valuenow', function(){return calcPercentage($(this).attr('id').split('-')); } ).attr('style', function(){return 'width: ' + calcPercentage($(this).attr('id').split('-'))+ '%'; } );
};


var updateSelectedTrack = function(selectedTrack, selectedTrackData, zoneIndex, trackIndex, previousPointValue) {
    $("#selected-track-name").text(selectedTrack.name);
    $("#selected-zone-name").text(config.zones[zoneIndex].name);
    //$("#selected-track-points").text(selectedTrackData.points);

    var trackPoints = selectedTrackData.points;

    var thisLines = selectedTrack.lines;
    for (var lineIndex in thisLines) {

        var newLineInfo = $('<a></a>').attr({'data-toggle':'popover', 'data-trigger':'hover', 'title':thisLines[lineIndex].name, 'data-content':thisLines[lineIndex].description }).text('[?]').addClass('selected-line-info-'+lineIndex).addClass('selected-line-info');
        var lineName = $('<p></p>').html('<span class="line-name l-'+ lineIndex + '">'+ thisLines[lineIndex].name  +'</span>').append(newLineInfo);
        var lineExp = $('<p></p>').html('<div class="progress">'+
            '<div role="progressbar" aria-valuenow="'+
            ((trackPoints-thisLines[lineIndex].points>=0)? '100':'0')  +
            '" aria-valuemin="0" aria-valuemax="100" class="progress-bar progress-width-'+
            (((previousPointValue-thisLines[lineIndex].points)<0 && (trackPoints-thisLines[lineIndex].points>=0))? 'going-':'') +
            (((previousPointValue-thisLines[lineIndex].points)>=0 && (trackPoints-thisLines[lineIndex].points<0))? 'going-':'') +
            ((trackPoints-thisLines[lineIndex].points>=0)? '100':'0')  +
            '">'+
            '</div>'+
            '</div>');
        if(trackPoints < thisLines[lineIndex].points)
            var button = $('<div></div>').addClass('col-sm-1').addClass('selected-line-right').html('<button type="button" name="#'+ zoneIndex + '-' + trackIndex + '-' +  lineIndex + '" class="add-points point-button">'+ (((parseInt(trackPoints)>=0)? ((parseInt(trackPoints)<=thisLines[lineIndex].points)? trackPoints:thisLines[lineIndex].points):0) +'/'+ thisLines[lineIndex].points)  +'</button>');
        if(trackPoints >= thisLines[lineIndex].points)
            var button = $('<div></div>').addClass('col-sm-1').addClass('selected-line-right').html('<button type="button" name="#'+ zoneIndex + '-' + trackIndex + '-' +  lineIndex + '" class="remove-points point-button">'+ (((parseInt(trackPoints)>=0)? ((parseInt(trackPoints)<=thisLines[lineIndex].points)? trackPoints:thisLines[lineIndex].points):0) +'/'+ thisLines[lineIndex].points)  +'</button>');

        var newLine = $('<div></div>').attr('id', 'line'+lineIndex).addClass('selected-line').addClass('selected-line-'+lineIndex);
        var newLineLeft = $('<div></div>').addClass('col-sm-10').addClass('selected-line-center').append(lineName).append(lineExp);
        var picDiv = $('<div></div>').addClass('selected-line-left').addClass('col-sm-1').html('<img src="'+ ((typeof(thisLines[lineIndex].pic) != "undefined")? thisLines[lineIndex].pic:'img/dummy-icon.png') +'" class="line-icon'+ ((trackPoints-thisLines[lineIndex].points>=0)? '':' greyscale'+(($.browser.msie)? '-ie':'')) +'" alt=" " />');
        newLine.append(picDiv).append(newLineLeft).append(button);

        //decrement points
        previousPointValue -= thisLines[lineIndex].points;
        trackPoints -= thisLines[lineIndex].points;

        $("#selected-lines").append(newLine);

        //enable popover
        $('.selected-line-info-'+lineIndex).popover({'animation':true, 'placement':'auto'})

    }
};

var expCalc = function(zonePoints, currentLines) {
    var appExp = 0;
    for(var index in currentLines){
        diff = zonePoints-currentLines[index].points;
        if(diff>=0) appExp+=currentLines[index].exp;
    }
    return appExp;
};

// ui generation from data
$(document).ready(function(){
    //updating points in hero panel from config or url
    updateHeroData();

    //--

    $("#zones").html(" ");

    for (var zoneIndex in config.zones) {
        var zoneTitle = $('<h3></h3>').text(config.zones[zoneIndex].name);
        var newZone = $('<div></div>').attr('id', 'zone'+zoneIndex);
        newZone.append(zoneTitle);

        var data = (typeof(url)!="undefined")? url:config;

        //append delle singole track
        var thisTracks = config.zones[zoneIndex].tracks;
        for (var trackIndex in thisTracks) {

            var pointsApp = 0;
            for(var lineIndex in config.zones[zoneIndex].tracks[trackIndex].lines){
                pointsApp += config.zones[zoneIndex].tracks[trackIndex].lines[lineIndex].points;
            }
            pointsApp = data.zones[zoneIndex].tracks[trackIndex].points / pointsApp * 100;

            var trackTitle = $('<h4></h4>').html('<a href="#'+zoneIndex+'-'+trackIndex+'" class="select-track'+ ((trackIndex==0 && zoneIndex==0)? ' track-toggle':'') +'">' + thisTracks[trackIndex].name + '</a>');
            var lineExp = $('<div></div>').html('<div class="progress small-progress">'+
                '<div id="'+zoneIndex+'-'+trackIndex+'-'+lineIndex+'" class="progress-bar" role="progressbar" aria-valuenow="'+
                pointsApp  +
                '" aria-valuemin="0" aria-valuemax="100" style="width: '+
                pointsApp +
                '%">'+
                '</div>'+
                '</div>');

            var newTrack = $('<div></div>').attr('id', 'track'+trackIndex).addClass('track-selector');
            newTrack.append(trackTitle).append(lineExp);

            newZone.append(newTrack);
        }

        $("#zones").append(newZone);
    }

    //--

    var defaultSelectedTrack = config.zones[0].tracks[0];
    var defaultSelectedTrackData = (typeof(url) != "undefined")? url.zones[0].tracks[0]:defaultSelectedTrack;

    // updating the default selected track values
    updateSelectedTrack(defaultSelectedTrack, defaultSelectedTrackData, 0, 0, 0);

});

// mastery selection
$("#zones").on("click", "div a.select-track", function(event){
    event.preventDefault();
    var i=$(this).attr("href").split('-');

    $('#zones div a').removeClass('track-toggle');
    $(this).addClass('track-toggle');

    $("#selected-lines").html(" ");

    var selectedTrack = config.zones[i[0][1]].tracks[i[1]];
    var selectedTrackData = (typeof(url) != "undefined")? url.zones[i[0][1]].tracks[i[1]]:selectedTrack;

    // updating the selected track values
    updateSelectedTrack(selectedTrack, selectedTrackData, i[0][1], i[1], selectedTrackData.points);

});


// adding points to a track
$("#selected-lines").on("click", "div div button.add-points", function(event){
    event.preventDefault();
    var i=$(this).attr("name").split('-');

    var data = (typeof(url) != "undefined")? url:config;

    var currentLines = config.zones[i[0][1]].tracks[i[1]].lines;
    var currentLine = currentLines[i[2]];
    var trackPoints = data.zones[i[0][1]].tracks[i[1]].points;

    //storing current points for later
    var app = trackPoints;

    var pointsToAdd = currentLine.points;

    for(j=i[2]-1; j>=0; j--) {
        trackPoints -= currentLines[j].points;
    }

    pointsToAdd -= trackPoints;

    if(parseInt(data.spent_points) + parseInt(pointsToAdd) <= data.total_points) {
        $("#selected-lines").html(" ");
        data.zones[i[0][1]].tracks[i[1]].points = parseInt(data.zones[i[0][1]].tracks[i[1]].points) + parseInt(pointsToAdd);
        data.spent_points = parseInt(data.spent_points) + parseInt(pointsToAdd);

        // calcolo exp
        data.spent_exp = expCalc(trackPoints, currentLines);

        var selectedTrack = config.zones[i[0][1]].tracks[i[1]];
        var selectedTrackData = (typeof(url) != "undefined") ? url.zones[i[0][1]].tracks[i[1]] : selectedTrack;

        //updating points in hero panel from config or url
        updateHeroData();
        // updating the selected track values
        updateSelectedTrack(selectedTrack, selectedTrackData, i[0][1], i[1], app);

        //updating page url
        urlUpdate(urlCodeGen(data));
    }

});

// removing points to a track
$("#selected-lines").on("click", "div div button.remove-points", function(event){
    event.preventDefault();
    var i=$(this).attr("name").split('-');

    var data = (typeof(url) != "undefined")? url:config;

    //storing current points for later
    var app = data.zones[i[0][1]].tracks[i[1]].points;

    if(data.spent_points-config.zones[i[0][1]].tracks[i[1]].lines[i[2]].points >= 0) {
        $("#selected-lines").html(" ");
        data.zones[i[0][1]].tracks[i[1]].points -= config.zones[i[0][1]].tracks[i[1]].lines[i[2]].points;
        data.spent_points-= config.zones[i[0][1]].tracks[i[1]].lines[i[2]].points;
        // calcolo exp
        var currentLines = config.zones[i[0][1]].tracks[i[1]].lines;
        var trackPoints = data.zones[i[0][1]].tracks[i[1]].points;

        data.spent_exp = expCalc(trackPoints, currentLines);

        var selectedTrack = config.zones[i[0][1]].tracks[i[1]];
        var selectedTrackData = (typeof(url) != "undefined") ? url.zones[i[0][1]].tracks[i[1]] : selectedTrack;

        //updating points in hero panel from config or url
        updateHeroData();

        // updating the selected track values
        updateSelectedTrack(selectedTrack, selectedTrackData, i[0][1], i[1], app);

        //updating page url
        urlUpdate(urlCodeGen(data));
    }

});

$("#mastery-points").on("click", function(event) {
    event.preventDefault();
    $("#mastery-points-input").each(resizeInput);
    $("#mastery-points").addClass("hidden");
    $("#mastery-points-input").removeClass("hidden").focus();
});

var totalPointsUpdate = function() {
    var data = (typeof(url) != "undefined")? url:config;

    var app = data.total_points;

    data.total_points = parseInt($("#mastery-points-input").val());

    $("#mastery-points").text(data.total_points);
    $("#mastery-points-input").attr("value", data.total_points);

    $("#mastery-points-input").addClass("hidden");
    $("#mastery-points").removeClass("hidden");

    if(app != data.total_points) {
        urlUpdate(urlCodeGen(data));
        $("#selected-track-points").text(data.total_points-data.spent_points);
    }
};

$("#mastery-points-input").on("focusout", totalPointsUpdate).keypress(function (e) {
    if (e.keyCode == 13) {
        totalPointsUpdate();
    }
});

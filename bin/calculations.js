﻿<!doctype html>
<html>
<head>
    <meta http-equiv=”X-UA-Compatible” content=”chrome=1;IE=edge”>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0" />
    <title>PEWI Work Space</title>
    <meta name="description" content="A dynamic watershed.">
    <link rel="stylesheet" href="css/style.css"/>
    <link rel="stylesheet" href="css/broken.css"/>
    <link rel="stylesheet" href="css/results.css"/>
	<link rel="stylesheet" href="css/popup.css"/>
    <script src="plugins/jquery/jquery-1.10.2.min.js"></script>
    <script src="plugins/jquery/jquery-ui.js"></script>
    <script src="plugins/d3/d3.v3.min.js"></script>
    <script src="bin/helpers.js"></script>
    <script src="bin/main.js"></script>
    <script src="bin/compatibility.js"></script>
    <script src="bin/data.js"></script>
    <script src="bin/calculations.js"></script>
    <script src="bin/puck.js"></script>
    <script src="plugins/colorbrewer/colorbrewer.js"></script>
    <script src="bin/stream.js"></script>
    <script src="bin/background.js"></script>
    <script src="bin/outputmaps.js"></script>
    <script src="bin/score_script.js"></script>
    <script src="bin/views.js"></script>
    <script src="bin/message.js"></script>
    <script src="bin/hud.js"></script>
    <script type="text/javascript">
        if(document.documentMode != undefined && document.documentMode < 9) {
            alert("Please turn off compatibility mode and refresh the browser.");
        } else {
            $(document).ready(function () {
                go();
            });
        }
    </script>

</head>
<body>
<section id="splash-screen" class="loading-layer">
    <div>PEWI</div>
    <br/>
    <a><img src="images/icons/preloader.gif"></a>
</section>
<section id="nextyear-screen" class="loading-layer">
    <div>Loading...</div>
    <br/>
    <a><img src="images/icons/preloader.gif"></a>
</section>
<section id="main" style="display:none">
    <div id="popup-overlay"></div>
    <section id="workspace">
        <div id="divcontainer"></div>
        <canvas id="3d-container"></canvas>
    </section>
    <section id="rounds" class="rounds">
        <div id="year-transition-label" class="menu-background"><a>Years</a></div>
        <ul>
            <li id="r1" title="Transition to year 1">
                <input type="radio" id="round1" name="round" value="1"/><label
                    for="round1" class="menu-background" id="label-year-1">1</label>
            </li>
            <li id="r2" title="Transition to year 2">
                <input type="radio" id="round2" name="round" value="2"/><label
                    for="round2" class="menu-background" id="label-year-2">2</label>
            </li>
            <li id="r3" title="Transition to year 3">
                <input type="radio" id="round3" name="round" value="3"/><label
                    for="round3" class="menu-background" id="label-year-3">3</label>
            </li>
        </ul>
    </section>
    <section id="hud">
        <div class="hud-element" id="year-hud"><a>Year: 1</a></div>
        <div class="hud-element" id="precipitation-hud"><a>Precipitation: Unknown</a></div>
        <div class="hud-element" id="current-selection-hud"><a>Current Selection: None</a></div>
        <div class="hud-element" id="hover-selection-hud"><a></a></div>
    </section>
    <section id="sidebar-left" class="sidebar">
        <section id="landusetype-toolbar" class="menu-background">
            <ul id="selectable-paint" class="list-vertical">
                <li>
                    <div><input value="1" type="radio" id="cover1"
                                name="landcover"/><img
                            src="images/toolbar_icons_bitmaps/Icon_Conventional_Corn.png"
                            alt="Conventional Corn" title="Conventional Corn"></div>
                    <div><input value="2" type="radio" id="cover2"
                                name="landcover"/><img
                            src="images/toolbar_icons_bitmaps/Icon_Conservation_Corn.png"
                            alt="Conservation Corn" title="Conservation Corn">
                    </div>
                </li>
                <li>
                    <div><input value="3" type="radio" id="cover3"
                                name="landcover"/><img
                            src="images/toolbar_icons_bitmaps/Icon_Conventional_Soybean.png"
                            alt="Conventional Soybean" title="Conventional Soybean"></div>
                    <div><input value="4" type="radio" id="cover4"
                                name="landcover"/><img
                            src="images/toolbar_icons_bitmaps/Icon_Conservation_Soybean.png"
                            alt="Conservation Soybean"
                            title="Conservation Soybean"></div>
                </li>
                <li>
                    <div><input value="5" type="radio" id="cover5"
                                name="landcover"/><img
                            src="images/toolbar_icons_bitmaps/Icon_Alfalfa.png"
                            alt="Alfalfa" title="Alfalfa"></div>
                    <div><input value="15" type="radio" id="cover15"
                                name="landcover"/><img
                            src="images/toolbar_icons_bitmaps/Icon_Mixed_Fruits_and_Vegetables.png"
                            alt="Mixed Fruits & Vegetables"
                            title="Mixed Fruits & Vegetables"></div>
                </li>
                <li>
                    <div><input value="8" type="radio" id="cover8"
                                name="landcover"/><img
                            src="images/toolbar_icons_bitmaps/Icon_Grass_Hay.png"
                            alt="Grass Hay" title="Grass Hay"></div>
                    <div><input value="12" type="radio" id="cover12"
                                name="landcover"/><img
                            src="images/toolbar_icons_bitmaps/Icon_Herbaceous_Perennial_Bioenergy.png"
                            alt="Herbaceous Perennial Bioenergy"
                            title="Herbaceous Perennial Bioenergy"></div>
                </li>
                <li>
                    <div><input value="6" type="radio" id="cover6"
                                name="landcover"/><img
                            src="images/toolbar_icons_bitmaps/Icon_Permanent_Pasture.png"
                            alt="Permanent Pasture" title="Permanent Pasture">
                    </div>
                    <div><input value="7" type="radio" id="cover7"
                                name="landcover"/><img
                            src="images/toolbar_icons_bitmaps/Icon_Rotational_Grazing.png"
                            alt="Rotational Grazing" title="Rotational Grazing">
                    </div>
                </li>
                <li>
                    <div><input value="14" type="radio" id="cover14"
                                name="landcover"/><img
                            src="images/toolbar_icons_bitmaps/Icon_Wetland.png"
                            alt="Wetland" title="Wetland"></div>
                    <div><input value="9" type="radio" id="cover9"
                                name="landcover"/><img
                            src="images/toolbar_icons_bitmaps/Icon_Prairie.png"
                            alt="Prairie" title="Prairie"></div>
                </li>
                <li>
                    <div><input value="11" type="radio" id="cover11"
                                name="landcover"/><img
                            src="images/toolbar_icons_bitmaps/Icon_Conventional_Forest.png"
                            alt="Conventional Forest"
                            title="Conventional Forest"></div>
                    <div><input value="10" type="radio" id="cover10"
                                name="landcover"/><img
                            src="images/toolbar_icons_bitmaps/Icon_Conservation_Forest.png"
                            alt="Conservation Forest"
                            title="Conservation Forest"></div>
                </li>
                <li>
                    <div><input value="13" type="radio" id="cover13"
                                name="landcover"/><img
                            src="images/toolbar_icons_bitmaps/Icon_Woody_Bioenergy.png"
                            alt="Short-rotation Woody Bioenergy" title="Short-rotation Woody Bioenergy"></div>
                </li>
            </ul>
        </section>
        <section id="pfeature-toolbar" class="menu-background">
            <ul class="list-vertical">
                <li>
                    <div><img src="images/icons/navigation/Icon_Topography.svg" id="topo" class="selectable-pfeature" title="Topographic Relief"></div>
                </li>
                <li>
                    <div><img src="images/icons/navigation/Icon_Flood_Frequency.svg" id="flood" class="selectable-pfeature" title="Flood Frequency"></div>
                </li>
                <li>
                    <div><img src="images/icons/navigation/Icon_Strategic_Wetlands.svg" id="wetland" class="selectable-pfeature" title="Strategic Wetlands"></div>
                </li>
                <li>
                    <div><img src="images/icons/navigation/Icon_Subwatershed_Boundaries.svg" id="sub" class="selectable-pfeature" title="Subwatershed Boundaries"></div>
                </li>
                <li>
                    <div><img src="images/icons/navigation/Icon_Drainage_Class.svg" id="drainage" class="selectable-pfeature" title="Drainage Class"></div>
                </li>
            </ul>
        </section>
        <ul class="list-vertical" style="margin-top:0">
            <li class="rotated menu-background" id="landcover">
                <div>
                    <div><a>Land&nbsp;Use</a></div>
                    <!--<img src="images/icons/white-l.png" alt="" title="" width="10px">-->
                </div>
            </li>
            <li class="rotated menu-background" id="layer">
                <div>
                    <div><a>Physical&nbsp;Features</a></div>
                    <!--<img src="images/icons/white-l.png" alt="" title="" width="10px">-->
                </div>
            </li>
            <li class="rotated menu-background" id="freeform-paint">
                <img src="images/icons/Button_Brush_Tool.svg" class="freeform-paint-toggle menu-item" alt="sqr">
            </li>
			<li class="rotated menu-background" id="square-paint">
                <img src="images/icons/Button_Rectangular_Selection_Tool.svg" class="square-paint-toggle menu-item" alt="sqr">
			</li>
        </ul>
    </section>
    <section id="sidebar-right" class="sidebar">
        <ul class="list-vertical">
            <li id="score-tab" class="rotated menu-background">
                <!--<article id="improve-selection-helper" class="helper-box">Spatially displayed<br />output maps</article>-->
                <div>
                    <div><a id="score">Scores</a></div>
                </div>
            </li>
            <li id="outputmap-tab" class="rotated menu-background">
                <!--<article id="improve-selection-helper" class="helper-box">Spatially displayed<br />output maps</article>-->
                <div>
                    <div><a id="improve">Maps</a></div>
                </div>
            </li>
            <li id="results-tab" class="rotated menu-background">
                <!--<article id="improve-selection-helper" class="helper-box">Spatially displayed<br />output maps</article>-->
                <div>
                    <div><a id="facts">Results</a></div>
                </div>
            </li>
        </ul>
    </section>
</section>
<section id="rclick-puk-container"></section>
<section id="movement-controls" class="menu-background">
    <ul class="list-vertical">
        <li>
            <div id="zoom-fit"><img src="images/icons/panel_resize_actual.png"
                                    alt="fit"></div>
        </li>
        <li>
            <div id="zoom-in"><img src="images/icons/zoomIn.png" alt="in"></div>
        </li>
        <li>
            <div id="zoom-out"><img src="images/icons/zoomOut.png" alt="out">
            </div>
        </li>
        <li>
            <div id="pan"><img src="images/icons/move.png" alt="pan"></div>
        </li>
        <li>
            <div id="select"><img src="images/icons/select.png" alt="select">
            </div>
        </li>
    </ul>
</section>
</section>
</body>
</html>

// Diaphragm Expansion Vessel Calculation Software
// by Velizar Stavrev
// JS Version

// Hamburger Menu
const menuToggle = () => {
    let menuvis = document.getElementById('hamburgermenu').style.display;
    if (menuvis == 'flex') {
        document.getElementById('hamburgermenu').style.display = 'none';
    } else {
        document.getElementById('hamburgermenu').style.display = 'flex';
    }
}

// Menu overlay
const showOverlay = (number) => {
    switch (number) {
        case 11:
            document.getElementById("overlay11").style.display = "grid";
            break;
        case 12:
            document.getElementById("overlay12").style.display = "grid";
            break;
        case 13:
            document.getElementById("overlay13").style.display = "grid";
            break;
        case 14:
            document.getElementById("overlay14").style.display = "grid";
            break;
        case 15:
            document.getElementById("overlay15").style.display = "grid";
            break;
        case 1:
            document.getElementById("overlay1").style.display = "grid";
            break;
        case 2:
            document.getElementById("overlay2").style.display = "grid";
            break;
        case 3:
            document.getElementById("overlay3").style.display = "grid";
            break;
        case 4:
            document.getElementById("overlay4").style.display = "grid";
            break;
        case 5:
            document.getElementById("overlay5").style.display = "grid";
            break;
        case 6:
            document.getElementById("overlay6").style.display = "grid";
            break;
        case 7:
            document.getElementById("overlay7").style.display = "grid";
            break;
        case 8:
            document.getElementById("overlay8").style.display = "grid";
            break;
        case 9:
            document.getElementById("overlay9").style.display = "grid";
            break;
    }
}

// Close overlay
const CloseOverlay = (number) => {
    switch (number) {
        case 11:
            document.getElementById("overlay11").style.display = "none";
            break;
        case 12:
            document.getElementById("overlay12").style.display = "none";
            break;
        case 13:
            document.getElementById("overlay13").style.display = "none";
            break;
        case 14:
            document.getElementById("overlay14").style.display = "none";
            break;
        case 15:
            document.getElementById("overlay15").style.display = "none";
            break;
        case 1:
            document.getElementById("overlay1").style.display = "none";
            break;
        case 2:
            document.getElementById("overlay2").style.display = "none";
            break;
        case 3:
            document.getElementById("overlay3").style.display = "none";
            break;
        case 4:
            document.getElementById("overlay4").style.display = "none";
            break;
        case 5:
            document.getElementById("overlay5").style.display = "none";
            break;
        case 6:
            document.getElementById("overlay6").style.display = "none";
            break;
        case 7:
            document.getElementById("overlay7").style.display = "none";
            break;
        case 8:
            document.getElementById("overlay8").style.display = "none";
            break;
        case 9:
            document.getElementById("overlay9").style.display = "none";
            break;
    }
}

// Swap between Diagram and Model
const diagramSwitch = (button) => {
    
    if (button == 'diagram') {
        document.getElementById("modelSection").style.backgroundColor = 'transparent';
        document.getElementById("modelSection").style.color = '#0047ab';
        document.getElementById("modelSection").style.fontWeight = 'normal';
        document.getElementById("diagramSection").style.backgroundColor = '#0047ab';
        document.getElementById("diagramSection").style.color = 'white';
        document.getElementById("diagramSection").style.fontWeight = 'bold';
        document.getElementById("pressures").style.display = 'flex';
        document.getElementById("model3d").style.display = 'none';
        document.getElementById("diagram").style.paddingBottom = '27.5px';
    } else {
        document.getElementById("diagramSection").style.backgroundColor = 'transparent';
        document.getElementById("diagramSection").style.color = '#0047ab';
        document.getElementById("diagramSection").style.fontWeight = 'normal';
        document.getElementById("modelSection").style.backgroundColor = '#0047ab';
        document.getElementById("modelSection").style.color = 'white';
        document.getElementById("modelSection").style.fontWeight = 'bold';
        document.getElementById("pressures").style.display = 'none';
        document.getElementById("model3d").style.display = 'block';
        document.getElementById("diagram").style.paddingBottom = '0';
    }
}

// Calculation
const expansionVesselCalc = () => {

    // Input Data
    let fluidType = document.getElementById('inputfluid').value; // h2o, pp, pe
    let fluidPercent = document.getElementById('input2').value;  // %
    let vsys = document.getElementById('input3').value;          // dm^3 / m^3 -> must use m^3 for calcs
    let ts = document.getElementById('input4').value;            // degC
    let tf = document.getElementById('input5').value;            // degC
    let hst = document.getElementById('input6').value;           // m
    // console.log(fluidType, fluidPercent, vsys, ts, tf, hst);

    // Transform into numbers
    fluidPercent = Number(fluidPercent);
    vsys = Number(vsys);
    ts = Number(ts);
    tf = Number(tf);
    hst = Number(hst);

    // Transform into m^3 if it isn't
    vsys /= 1000; // m^3
    // console.log(`vsys=${vsys}`);

    // transform degC to degK
    ts += 273.15; // degK
    tf += 273.15; // degK

    // 1. Calculate expansion volume - water
    // Calculate the fluid density and max and min temperatures
    // Water Density
    const rhotsw = 322 + 1094.0233 * Math.pow((1 - (ts / 647.10)), 0.35) + (-1813.2295) * 
                Math.pow((1 - (ts / 647.10)), (2/3)) + 3863.9557 * (1 - (ts / 647.10)) +
                (-2479.8130) * Math.pow((1 - (ts / 647.10)), (4/3)); // kg/m^3
    const rhotfw = 322 + 1094.0233 * Math.pow((1 - (tf / 647.10)), 0.35) + (-1813.2295) * 
                Math.pow((1 - (tf / 647.10)), (2/3)) + 3863.9557 * (1 - (tf / 647.10)) +
                (-2479.8130) * Math.pow((1 - (tf / 647.10)), (4/3)); // kg/m^3
    console.log(`rhotsw=${rhotsw} \n rhotfw=${rhotfw}`);
    // Ethylene Glycol
    const rhotseg = 325 + 1305.5931 * Math.pow((1 - (ts / 719.15)), 0.35) + (-1374.2561) * 
                    Math.pow((1 - (ts / 719.15)), (2/3)) + 1691.0501 * (1 - (ts / 719.15)) +
                    (-665.0358) * Math.pow((1 - (ts / 719.15)), (4/3)); // kg/m^3;
    const rhotfeg = 325 + 1305.5931 * Math.pow((1 - (tf / 719.15)), 0.35) + (-1374.2561) * 
                    Math.pow((1 - (tf / 719.15)), (2/3)) + 1691.0501 * (1 - (tf / 719.15)) +
                    (-665.0358) * Math.pow((1 - (tf / 719.15)), (4/3)); // kg/m^3;
    console.log(`rhotseg=${rhotseg} \n rhotfeg=${rhotfeg}`);
    // Propylene Glycol Density
    const rhotspg = 351 + 1122.4836 * Math.pow((1 - (ts / 724.05)), 0.35) + (-875.9683) * 
                    Math.pow((1 - (ts / 724.05)), (2/3)) + 844.968 * (1 - (ts / 724.05)) +
                    (-234.3532) * Math.pow((1 - (ts / 724.05)), (4/3)); // kg/m^3;
    const rhotfpg = 351 + 1122.4836 * Math.pow((1 - (tf / 724.05)), 0.35) + (-875.9683) * 
                    Math.pow((1 - (tf / 724.05)), (2/3)) + 844.968 * (1 - (tf / 724.05)) +
                    (-234.3532) * Math.pow((1 - (tf / 724.05)), (4/3)); // kg/m^3;
    console.log(`rhotspg=${rhotspg} \n rhotfpg=${rhotfpg}`);
    // Check Fluid and mix it with water
    let rhots = 0;
    let rhotf = 0;
    if (fluidType == 'water') {
        rhots = rhotsw;
        rhotf = rhotfw;
    } else if (fluidType == 'ethylene') {
        rhots = 100 / (((100 - fluidPercent) / rhotsw) + (fluidPercent / rhotseg));
        rhotf = 100 / (((100 - fluidPercent) / rhotfw) + (fluidPercent / rhotfeg));
    } else if (fluidType == 'propylene') {
        rhots = 100 / (((100 - fluidPercent) / rhotsw) + (fluidPercent / rhotspg));
        rhotf = 100 / (((100 - fluidPercent) / rhotfw) + (fluidPercent / rhotfpg));
    } else {
        console.log('SOMETHING IS WRONG WITH THE FLUIDS!');
    }
    console.log(`rhots=${rhots}`);
    console.log(`rhotf=${rhotf}`);

    // Calculate the expansion coefficient
    const expansionCoef = 1 - (rhots / rhotf); // -
    console.log(`e=${expansionCoef}`);

    // Calculate the expansion volume
    const vex = vsys * expansionCoef; // m^3
    console.log(`vex=${vex}`);

    // 2. Calculate reserve volume - Vwr
    let vwr = vsys * 0.05; // m^3 
    if (vwr < 0.003) {
        vwr = 0.003;
    }
    console.log(`vwr=${vwr}`);

    // 3. Calculate minimal required volume - Vcalc
    // Calculate pressures
    // pst
    const rho = rhots; // kg/m^3
    const g = 9.81; // m/s^2
    const pv = 0.123; // bar
    const pst = (rho * g * hst) / 100000; // bar
    console.log(`pst=${pst}`);

    // po - needs to have a 0.3 bar diff with pini
    const po = pst + pv + 0.2; // bar
    console.log(`pv=${pv}`);
    console.log(`po=${po}`);

    // psv - must be >= 3 bar
    let psv = pst + 2; // bar
    if (psv < 3) {
        psv = 3;
    }
    console.log(`psv=${psv}`);

    // pfin
    let psvextra = psv * 0.2; // bar
    if (psvextra < 0.6) {
        psvextra = 0.6;
    }
    const pfin = psv - psvextra; // bar
    console.log(`pfin=${pfin}`);

    // Vcalc
    let vcalc = (vex + vwr) * ((pfin + 1)/(pfin - po)); // m^3
    vcalc *= 1000; // dm^3
    console.log(`vcalc=${vcalc}`);

    // Vn - can be with a 5% diff from Vcalc
    let vn = 0;

    if (vcalc <= 4.2) { // 4
        vn = 4;
    }
    else if (4.2 < vcalc && vcalc <= 8.4) { // 8
        vn = 8;
    }
    else if (8.4 < vcalc && vcalc <= 12.6) { // 12
        vn = 12;
    }
    else if (12.6 < vcalc && vcalc <= 16.8) { // 16
        vn = 16;
    }
    else if (16.8 < vcalc && vcalc <= 18.9) { // 18
        vn = 18;
    }
    else if (18.9 < vcalc && vcalc <= 23.1) { // 22
        vn = 22;
    }
    else if (23.1 < vcalc && vcalc <= 26.25) { // 25
        vn = 25;
    }
    else if (26.25 < vcalc && vcalc <= 36.75) { // 35
        vn = 35;
    }
    else if (36.75 < vcalc && vcalc <= 52.50) { // 50
        vn = 50;
    }
    else if (52.50 < vcalc && vcalc <= 84.00) { // 80
        vn = 80;
    }
    else if (84.00 < vcalc && vcalc <= 105.00) { // 100
        vn = 100;
    }
    else if (105.00 < vcalc && vcalc <= 147.00) { // 140
        vn = 140;
    }
    else if (147.00 < vcalc && vcalc <= 210.00) { // 200
        vn = 200;
    }
    else if (210.00 < vcalc && vcalc <= 262.50) { // 250
        vn = 250;
    }
    else if (262.50 < vcalc && vcalc <= 315.00) { // 300
        vn = 300;
    }
    else if (315.00 < vcalc && vcalc <= 420.00) { // 400
        vn = 400;
    }
    else if (420.00 < vcalc && vcalc <= 525.00) { // 500
        vn = 500;
    }
    else if (525.00 < vcalc && vcalc <= 630.00) { // 600
        vn = 600;
    }
    else if (630.00 < vcalc && vcalc <= 840.00) { // 800
        vn = 800;
    }
    else if (840.00 < vcalc && vcalc <= 1050.00) { // 1000
        vn = 1000;
    } else {
        vn = 0;
        console.log('Vessel size exceeded!');
    }

    vn /= 1000;
    console.log(`vn=${vn}`);

    // 4. Calculate volume check
    // pini - pini must be >= po + 0.3
    let pini = ((pfin + 1) / (1 + (vex / vn) * ((pfin + 1) / (po + 1)))) - 1; // bar
    if (pini < (po + 0.3)) {
        vn *= 1000;
        if (vn <= 4.2) { // 4
            vn = 8;
        }
        else if (4.2 < vn && vn <= 8.4) { // 8
            vn = 12;
        }
        else if (8.4 < vn && vn <= 12.6) { // 12
            vn = 16;
        }
        else if (12.6 < vn && vn <= 16.8) { // 16
            vn = 18;
        }
        else if (16.8 < vn && vn <= 18.9) { // 18
            vn = 22;
        }
        else if (18.9 < vn && vn <= 23.1) { // 22
            vn = 25;
        }
        else if (23.1 < vn && vn <= 26.25) { // 25
            vn = 35;
        }
        else if (26.25 < vn && vn <= 36.75) { // 35
            vn = 50;
        }
        else if (36.75 < vn && vn <= 52.50) { // 50
            vn = 80;
        }
        else if (52.50 < vn && vn <= 84.00) { // 80
            vn = 100;
        }
        else if (84.00 < vn && vn <= 105.00) { // 100
            vn = 140;
        }
        else if (105.00 < vn && vn <= 147.00) { // 140
            vn = 200;
        }
        else if (147.00 < vn && vn <= 210.00) { // 200
            vn = 250;
        }
        else if (210.00 < vn && vn <= 262.50) { // 250
            vn = 300;
        }
        else if (262.50 < vn && vn <= 315.00) { // 300
            vn = 400;
        }
        else if (315.00 < vn && vn <= 420.00) { // 400
            vn = 500;
        }
        else if (420.00 < vn && vn <= 525.00) { // 500
            vn = 600;
        }
        else if (525.00 < vn && vn <= 630.00) { // 600
            vn = 800;
        }
        else if (630.00 < vn && vn <= 840.00) { // 800
            vn = 1000;
        }
        else if (840.00 < vn && vn <= 1050.00) { // 1000
            vn = 0;
            console.log('Vessel size exceeded!');
        } else {
            vn = 0;
            console.log('Vessel size exceeded!');
        }
        pini = ((pfin + 1) / (1 + (vex / vn) * ((pfin + 1) / (po + 1)))) - 1;
    }
    console.log(`pini=${pini}`);

    // 5. Calculate required system pressure
    // pfil
    const pfil = vn * ((po + 1) / (vn - vsys * (1 - (rhotf / rhotf)) - vwr)) - 1; // bar
    console.log(`pfil=${pfil}`);

    // Output Data Set
    document.getElementById('statusMessage').innerHTML = '<b>Status:</b> Calculating...';
    
    const outputFunc = () => {
        // OUTPUTS
        document.getElementById('output1').value = vcalc.toFixed(2);
        document.getElementById('output2').value = vn.toFixed(2);
        document.getElementById('output3').value = pini.toFixed(2);
        document.getElementById('output4').value = pfil.toFixed(2);
        document.getElementById('output5').value = 'placeholder';
        document.getElementById('output6').value = 'placeholder';
        document.getElementById('statusMessage').innerHTML = '<b>Status:</b> Calculated!';

        // PRESSURES
        document.getElementById('pressure1').value = psv.toFixed(2);
        document.getElementById('pressure2').value = psvextra.toFixed(2);
        document.getElementById('pressure3').value = pfin.toFixed(2);
        document.getElementById('pressure4').value = pfil.toFixed(2);
        document.getElementById('pressure5').value = pini.toFixed(2);
        document.getElementById('pressure6').value = po.toFixed(2);
        document.getElementById('pressure7').value = pst.toFixed(2);
    }

    setTimeout(outputFunc, 3000);
    
}
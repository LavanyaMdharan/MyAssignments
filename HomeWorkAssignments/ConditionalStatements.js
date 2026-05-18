
function launchBrowser(browserName)
{
if (browserName ==="Chrome")
    {
        console.log("Launch Chrome browser")
        }
else{
        console.log("Browser is not Chrome")
    }
}

launchBrowser("Other")

function runTests(testType){
    switch(testType)
    {
        case "Smoke":
            console.log("Smoke Testing is executed")
            break
        case "Sanity":
            console.log("Sanity testing is performed")
            break
        case "Regression":
            console.log("Regression testing is done")
            break
        default:
            console.log("Smoke testing is executed")            
    }
}
runTests("Other")
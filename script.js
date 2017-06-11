var numberOfFaces = 3;
function generateFaces()
{
    for(var i =0; i < numberOfFaces; i++)
    {
        var image = document.createElement("img");
        image.src = "http://home.cse.ust.hk/~rossiter/mooc/matching_game/smile.png";
        var top, left;
        top = Math.random(0, 400) * 400;
        left = Math.random(0, 400) * 400;

        image.setAttribute("style", "left:" + left.toString() + "px;top:" + top.toString() + "px");
        document.getElementById("leftSide").appendChild(image);
    }
    var theRightSide = document.getElementById("rightSide");
    var theLeftSide = document.getElementById("leftSide");
    var leftSideImages = theLeftSide.cloneNode(true);
    document.getElementById("rightSide").appendChild(leftSideImages);
    $('#rightSide div').removeAttr('id');
    var newRight = document.getElementById("rightSide");
    var newLeft = newRight.firstChild;
    newLeft.removeChild(newLeft.lastChild);

    var theBody = document.getElementsByTagName("body")[0];
    theLeftSide.lastChild.onclick = function nextLevel(event) {
        event.stopPropagation();
        numberOfFaces += 3;
        while(theLeftSide.firstChild)
        {
            theLeftSide.removeChild(theLeftSide.firstChild);
        }
        theRightSide.removeChild(theRightSide.firstChild);
        generateFaces();
    };
    theBody.onclick = function gameOver() {
        alert("Game Over !");
        theBody.onclick  = null;
        theLeftSide.lastChild.onclick = null;
    };
}

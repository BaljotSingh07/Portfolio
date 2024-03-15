new LeaderLine(document.getElementById("intro-leader-line"), document.getElementById("about-me-header"), {
     color: "white", size: 3, path: "grid", startSocket: "bottom", endSocket:"right" ,endPlug: "behind", 
     dropShadow: { color: "white", dx: 20, dy: 20, blur: 0 },
     startLabel: LeaderLine.pathLabel({text: "More about me", outlineColor: ""}) });

new LeaderLine(document.getElementById("intro-leader-line"), document.getElementById("about-me-header"), { color: "white", size: 3, path: "grid" ,startSocket: "bottom", endSocket:"right", endPlug: "behind", dropShadow: { color: "white", dx: 40, dy: 40, blur: 2 } });

new LeaderLine(document.getElementById("about-me-leader-line"), document.getElementById("skills-header"), {
     color: "white", size: 3, path: "grid", startSocket: "left", endSocket:"top", endPlug: "behind", 
     dropShadow: { color: "white", dx: 20, dy: 20, blur: 0 },
     middleLabel: LeaderLine.pathLabel({text: "What's in my toolkit?", outlineColor: ""}) });

new LeaderLine(document.getElementById("about-me-leader-line"), document.getElementById("skills-header"), { color: "white", size: 3, path: "grid" ,startSocket: "left", endSocket:"top", endPlug: "behind", dropShadow: { color: "white", dx: 40, dy: 40, blur: 2 } });

new LeaderLine(document.getElementById("skills"), document.getElementById("projects-header"), { color: "white", size: 3, path: "grid", startSocket: "bottom", endSocket:"top", endPlug: "behind", dropShadow: { color: "white", dx: 20, dy: 20, blur: 0 } });

new LeaderLine(document.getElementById("skills"), document.getElementById("projects-header"), { color: "white", size: 3, path: "grid", startSocket: "bottom", endSocket:"top", endPlug: "behind", dropShadow: { color: "white", dx: 40, dy: 40, blur: 2 } });

new LeaderLine(document.getElementsByClassName("project")[0], document.getElementsByClassName("project")[1], { color: "white", size: 1, path: "grid", startSocket: "left", endSocket: "left", endPlug: "behind" });

new LeaderLine(document.getElementsByClassName("project")[1], document.getElementsByClassName("project")[2], { color: "white", size: 1, path: "grid", startSocket: "right", endSocket: "right", endPlug: "behind" });


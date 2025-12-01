let currentState = "start";
 
// Show current state on the page
const renderQuestion = () => {
    const paragraphNode  = document.querySelector("#question-text");
    const buttonContainer = document.querySelector("#option-container");
    buttonContainer.innerHTML = "";
    if (!paragraphNode || !buttonContainer) {
        console.error("Error: Missing HTML elements. Check #question-text and #option-container exist in your HTML.");
        return;
    }
 
    
    switch (currentState) {
        case "start":
            paragraphNode.textContent = "You have entered the game and now face  two paths. Which one do you choose";
            addAnswerButton("The Lost Traveller", "lost-traveller");
            addAnswerButton("Hidden Message", "hidden-message");
            addAnswerButton("Unexpected Challenge", "unexpected-challenge");
            break;
 
        // Path 1: The Lost Traveller
        case "lost-traveller":
            paragraphNode.textContent = "You arrive in a foreign country but realize you've lost your phone and wallet. What do you do?";
            addAnswerButton("Ask a local for help", "ask-local");
            addAnswerButton("Try to navigate alone", "navigate-alone");
            break;
 
        case "ask-local":
            paragraphNode.textContent = "An unexpected cross-cultural interaction results from a helpful stranger offering assistance. Later, you meet a traveler who invites you to join their road trip.";
            addAnswerButton("Accept the invitation", "join-road-trip");
            addAnswerButton("Decline and stick to your plan", "self-reflection");
            break;
        case "navigate-alone":
            paragraphNode.textContent = "You struggle but find an alternate solution, strengthening your own standpoint. Later, you meet a traveler who invites you on a road trip.";
            addAnswerButton("Accept the invitation", "join-road-trip");
            addAnswerButton("Decline and stick to your plan", "self-reflection");
            break;  
        case "join-road-trip":
            paragraphNode.textContent = "You embark on an instantaneous adventure with new friendships!";
            addAnswerButton("Restart", "start");
            break;
        case "self-reflection":
            paragraphNode.textContent = "You continue your solo journey, leading to deep self-reflection.";
            addAnswerButton("Restart", "start");
            break;    
        // Path 2: Hidden Message
        case "hidden-message":
            paragraphNode.textContent = "While browsing a bookshop, you discover an old letter inside a novel.";
            addAnswerButton("Yes, track down the recipient", "find-recipient");
            addAnswerButton("Ignore it and continue your trip", "ignore-letter");
            break;
 
        case "find-recipient":
            paragraphNode.textContent = "You uncover a long-lost story connecting past and present. If you find the recipient’s family, do you deliver the letter?";
            addAnswerButton("Yes, deliver the letter", "family-reunion");
            addAnswerButton("No, keep it as a memory", "missed-opportunity");
            break;
        case "ignore-letter":
            paragraphNode.textContent = "The mystery lingers, but your journey takes an unexpected turn elsewhere.";
            addAnswerButton("Restart", "start");
            break;
        case "family-reunion":
            paragraphNode.textContent = "The emotional gathering changes your perspective on life.";
            addAnswerButton("Restart", "start");
            break;
        case "missed-opportunity":
            paragraphNode.textContent = "You keep the letter as a personal memory, reflecting on missed opportunities.";
            addAnswerButton("Restart", "start");
            break;
        // Path 3: Unexpected Challenge
        case "unexpected-challenge":
            paragraphNode.textContent = "You are invited to a local event. Do you participate?";
            addAnswerButton("Accept the challenge", "join-challenge");
            addAnswerButton("Decline and observe", "observe-event");
            break; 
        case "join-challenge":    
            paragraphNode.textContent = "You submerge yourself in the culture, forming strong bonds with locals. During the event, you face an unexpected problem. How do you react?";
            addAnswerButton("Push through and complete the challenge", "gain-respect");
            addAnswerButton("Step back and observe", "appreciation");
            break;
 
        case "observe-event":
            paragraphNode.textContent = "You watch from the sidelines, learning in a different way.";
            addAnswerButton("Restart", "start");
            break;    
        case "gain-respect":
            paragraphNode.textContent = "You gain deep respect from the locals!";
            addAnswerButton("Restart", "start");
            break;
        case "appreciation":
            paragraphNode.textContent = "You develop a different kind of appreciation and understanding.";
            addAnswerButton("Restart", "start");
            break;    
    }
};    
 
// Function to create buttons
const addAnswerButton = (buttonText, newState) => {
    const buttonContainer = document.querySelector("#option-container");
 
    if (!buttonContainer) {
        console.error("Error: #option-container not found in HTML.");
        return;
    }
 
    const newButtonNode = document.createElement("button");
    newButtonNode.textContent = buttonText;
    newButtonNode.setAttribute("role", "button"); // ARIA role for button
    newButtonNode.setAttribute("aria-label", buttonText); // ARIA label for button
 
 
    newButtonNode.addEventListener("click", () => {
        currentState = newState;
        renderQuestion();
    });
 
    newButtonNode.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
            currentState = newState;
            renderQuestion();
            }    
    });
 
    buttonContainer.appendChild(newButtonNode);
};
 
document.addEventListener("DOMContentLoaded", function () {
    renderQuestion();
});    

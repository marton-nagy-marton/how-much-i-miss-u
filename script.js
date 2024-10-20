const messages = [
    "I miss you like the shine of your eyes when you walk into your bedroom while brushing your teeth to see me.",
    "I miss you like the moments we share over brunch I made you at home.",
    "I miss you like the cozy nights spent cuddling while watching Derry Girls.",
    "I miss you like your smile when I bring you coffee in the morning while you are under your heated blanket.",
    "I miss you like the sweet scent of your perfume that we spent hours choosing in Müller.",
    "I miss you like the taste of your favorite meal I prepare just for you.",
    "I miss you like the joy of planning our next date at Kréta.",
    "I miss you like the comfort of holding your hand during our walks.",
    "I miss you like the excitement you get collecting chestnuts in autumn.",
    "I miss you like the way your hair shines in the sunlight.",
    "I miss you like the cute moments we have with Pöttyös when we visit.",
    "I miss you like the joy of making handmade bracelets from beads together.",
    "I miss you like the warmth of your hugs that you give when I arrive at your place in the night.",
    "I miss you like the way your laughter fills my heart with happiness when we are goofing around.",
    "I miss you like the sweet moments when you yap endlessly.",
    "I miss you like the the way you ask me to tutor you on subjects I have no idea about.",
    "I miss you like the way you brighten my days with your kindness.",
    "I miss you like the excitement of getting you a small treat each time I do the groceries.",
    "I miss you like the feeling of your head on my shoulder during movie nights.",
    "I miss you like the peace I feel when we’re simply together.",
    "I miss you like the way you smile when I cook your favorite dish and you taste it for the first time.",
    "I miss you like the thrill of sitting next to you when you drive.",
    "I miss you like the happiness I feel when I hear you call me some totally unhinged names again.",
    "I miss you like the excitement of planning our next trip together.",
    "I miss you like the way you support me through everything, even if I fail.",
    "I miss you like the feeling of your warmth next to me at night (even though you sleep very far away, under 4 blankets...).",
    "I miss you like the moments we steal glances at each other across the room while trying to study.",
    "I miss you like the way we laugh at our inside jokes.",
    "I miss you like you miss a good smoothie when you are hangover",
    "I miss you like the cozy mornings spent sipping coffee together and watching your shows I barely enjoy - but I do it for you.",
    "I miss you like the way your creativity shines through in your nails, make-up and clothing.",
    "I miss you like the way we can talk about anything for hours.",
    "I miss you like the feeling of being wrapped in your love.",
    "I miss you like the joy of picking out our favorite snacks before watching a movie.",
    "I miss you like the beautiful sunsets we watched together in Rhodes.",
    "I miss you like the thrill of exploring new restaurants with you - of course, I pay.",
    "I miss you like the comfort of knowing you’re just a text away.",
    "I miss you like the joy of cuddling with you while watching a movie.",
    "I miss you like the way your laughter can brighten my darkest days.",
    "I miss you like the anticipation of our next adventure.",
    "I miss you like the happiness I feel when I think of our memories.",
    "I miss you like the way your eyes sparkle when you’re passionate about something you're telling me about.",
    "I miss you like the comfort of your presence in my life.",
    "I miss you like the moments we share, just being silly together.",
    "I miss you like the sweet scent of your hair when I hug you, even if you haven't washed it in 5 days.",
    "I miss you like the way you make even the ordinary feel special.",
    "I miss you like the little surprises we plan for each other.",
    "I miss you like the way you hold my hand and make me feel safe.",
    "I miss you like the cozy evenings we spend massaging each other's backs.",
    "I miss you like the sweet memories of our favorite dates.",
    "I miss you like the joy of sharing our lives and dreams.",
    "I miss you like the way we play fight, and you somehow always think you're going to win.",
    "I miss you like the laughter we share over silly Reels.",
    "I miss you like you miss the chicken breast from Gundel.",
    "I miss you like the beauty of your smile that lights up my day.",
    "I miss you like the moments we play Kinect golf together in the living room.",
    "I miss you like the excitement of window-shopping jewlery together.",
    "I miss you like the joy of sharing my new experiences in Vienna with you.",
    "I miss you like the warmth of your body next to mine when you are under at least 4 blankets.",
    "I miss you like the fun we have trying new things together.",
    "I miss you like the sweet moments when we get lost in conversation.",
    "I miss you like the way we share our favorite songs.",
    "I miss you like the laughter we share over dinner dates.",
    "I miss you like the joy of having you by my side.",
    "I miss you like the cozy nights we spend binge-watching shows.",
    "I miss you like the moments we shared watching the shooting stars.",
    "I miss you like the sweetness of your kisses that linger on my lips.",
    "I miss you like the way you always know how to make me smile.",
    "I miss you like the joy of spending lazy Sundays together.",
    "I miss you like the way we can be completely ourselves around each other.",
    "I miss you like the tenderness of your hugs that make everything okay.",
    "I miss you like the joy of cooking my favorite recipes for you.",
    "I miss you like the happiness of knowing you’re my best friend.",
    "I miss you like the silly dances you do when you win in something.",
    "I miss you like the moments we share making memories.",
    "I miss you like the way we share dreams for our future.",
    "I miss you like the joy of cooking meals just for you.",
    "I miss you like the way your presence makes everything better.",
    "I miss you like the moments we tickle each other competitively.",
    "I miss you like the anticipation of our next movie night.",
    "I miss you like the way your smile lights up my life.",
    "I miss you like the excitement of trying new cuisines together.",
    "I miss you like the peace I feel when I’m in your arms.",
    "I miss you like the warmth of your love that keeps me grounded.",
    "I miss you like the moments we share making each other laugh.",
    "I miss you like the joy of cuddling up with Penne and Füles.",
    "I miss you like the sweetness of your kisses that make my heart flutter.",
    "I miss you like the thrill of planning our next adventure.",
    "I miss you like the way you understand me (sometimes) without words.",
    "I miss you like the comfort of knowing you’re always there for me.",
    "I miss you like the happiness I feel when you’re near.",
    "I miss you like the moments we share exploring new places.",
    "I miss you like the laughter we share over brunch at our favorite spot.",
    "I miss you like the way we make even mundane tasks fun together.",
    "I miss you like the warmth of your hand in mine as we stroll through the streets of Budapest.",
    "I miss you like the sweetness of your smile when I surprise you with some flowers (don't forget to lock the door!).",
    "I miss you like the moments we cuddle up together, lost in one of your silly rom-coms again.",
    "I miss you like the comfort of your presence during our cozy movie nights at home.",
    "I miss you like the sweet scent of your perfume that lingers on my clothes after we part.",
    "I miss you like the joy of watching you get excited about your new skincare products.",
    "I miss you like the little moments when you rest your head on my shoulder while we relax.",
    "I miss you like the way your eyes light up when I cook your favorite meal.",
    "I miss you like the way we always manage to find laughter in the simplest things.",
    "I miss you like the happy moments we shared while watching the sunsets together on our trips around Europe.",
    "I miss you like the feeling of your soft hair against my cheek when we hug.",
    "I miss you like the warmth of your smile that melts my heart every time I see it.",
    "I miss you like the excitement of planning our next adventure at Kréta.",
    "I miss you like the sound of your laughter echoing in my mind during the day.",
    "I miss you like the gentle way you squeeze my hand when we walk together.",
    "I miss you like the way you brighten my life with the many funny Reels you send me each day.",
    "I miss you like the way your creativity adds a splash of color to everything.",
    "I miss you like the comfort of knowing you're always on my side, no matter what.",
    "I miss you like the joy of discovering new places together hand in hand.",
    "I miss you like the happiness we create when we cook meals in the kitchen.",
    "I miss you like the moments we spend cuddled up under a blanket, just being together.",
    "I miss you like the little dance parties you have by yourself have in the living room.",
    "I miss you like the thrill of hearing your voice when we talk on the phone.",
    "I miss you like the way your joy is contagious, lifting everyone around you.",
    "I miss you like the way you look at me with love when I least expect it.",
    "I miss you like the peace I find in your arms after a long day.",
    "I miss you like the sweetness of your texts that brighten my mornings.",
    "I miss you like the laughter we share over inside jokes that only we understand.",
    "I miss you like the comfort of having you by my side during every adventure.",
    "I miss you like the happiness that comes from simply knowing you're mine.",
    "I miss you like the anticipation of our next brunch date filled with laughter.",
    "I miss you like the way your creativity sparks my own inspiration.",
    "I miss you like the way your eyes glimmer with excitement when you talk about your passions.",
    "I miss you like the feeling of being completely at home in your arms.",
    "I miss you like the way your love makes even the hardest days easier.",
    "I miss you like the warmth of your smile that always brightens my day.",
    "I miss you like the moments we share sipping coffee on the couch",
    "I miss you like the way you make everything feel right in my world.",
    "I miss you like the way your laughter dances in the air and fills my heart.",
    "I miss you like the comfort of knowing we can always be ourselves with each other.",
    "I miss you like the sweetness of your kisses that linger on my lips.",
    "I miss you like the fun of exploring the city hand in hand, creating memories.",
    "I miss you like the happiness we create when we try new recipes together.",
    "I miss you like the beauty of your spirit that inspires me to be my best self.",
    "I miss you like the warmth of your love that wraps around me on cold nights.",
    "I miss you like the moments we share that feel like they last forever.",
    "I miss you like the comfort of knowing you’re always there to listen.",
    "I miss you like the joy of seeing your face light up with happiness.",
    "I miss you like the beauty of your creativity expressed in every handmade piece.",
    "I miss you like the way you understand me like no one else can.",
    "I miss you like the anticipation of planning our future adventures together.",
    "I miss you like the way your laughter fills the room with joy."
];

// Wait for the window to load to show login page
window.onload = function() {
    document.getElementById('login-page').style.display = 'flex';
}

// Hardcoded username
const correctUsername = "Anna2";

// Declare these outside so they are accessible everywhere
let missMessage;
let newMessageBtn;

// Function to get a random message
function getRandomMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
}

// Display random message
function displayMessage() {
    missMessage.innerText = getRandomMessage();
}

// Check login
function login() {
    const enteredUsername = document.getElementById('username').value;
    if (enteredUsername === correctUsername) {
        // Hide login page
        document.getElementById('login-page').style.display = 'none';
        // Show main content
        document.getElementById('main-content').style.display = 'block';
        // assign elements
        missMessage = document.getElementById('miss-message');
        newMessageBtn = document.getElementById('new-message-btn');
        // Make the button visible after login
        newMessageBtn.style.display = 'block';
        // Display initial message
        displayMessage();
        // Button functionality
        newMessageBtn.onclick = function() {
            displayMessage();
        };
        // const now = new Date();
        // timestamp.innerText = `Last checked: ${now.toLocaleString()}`;
     } else {
        // Show error message
        document.getElementById('error-message').style.display = 'block';
        }    
}

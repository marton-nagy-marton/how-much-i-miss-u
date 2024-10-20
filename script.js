window.onload = function() {
const messages = [
    "I miss you like the warmth of your smile when you walk into a room.",
    "I miss you like the moments we share over brunch, just the two of us.",
    "I miss you like the cozy nights spent cuddling while watching our favorite movies.",
    "I miss you like the laughter we share over coffee in the morning.",
    "I miss you like the sweet scent of your perfume that lingers in my memory.",
    "I miss you like the taste of your favorite meal I prepare just for you.",
    "I miss you like the joy of planning our next date at Kréta.",
    "I miss you like the comfort of holding your hand during our walks.",
    "I miss you like the excitement of making memories together in Budapest.",
    "I miss you like the way your hair shines in the sunlight.",
    "I miss you like the cute moments we have with Pöttyös when we visit.",
    "I miss you like the joy of seeing you happy with your handmade jewelry.",
    "I miss you like the warmth of your hugs that make everything better.",
    "I miss you like the way your laughter fills my heart with happiness.",
    "I miss you like the sweet moments when you talk passionately about marketing.",
    "I miss you like the comfort of watching you work on your projects.",
    "I miss you like the way you brighten my days with your kindness.",
    "I miss you like the excitement of planning surprise brunches for you.",
    "I miss you like the feeling of your head on my shoulder during movie nights.",
    "I miss you like the peace I feel when we’re simply together.",
    "I miss you like the way you smile when I cook your favorite dish.",
    "I miss you like the thrill of our spontaneous adventures around Budapest.",
    "I miss you like the way you inspire me to be better every day.",
    "I miss you like the happiness I feel when I hear you call my name.",
    "I miss you like the moments we share when the world feels just right.",
    "I miss you like the joy of sharing our dreams late at night.",
    "I miss you like the excitement of planning our next trip together.",
    "I miss you like the way you support me through everything.",
    "I miss you like the feeling of your warmth next to me at night.",
    "I miss you like the moments we steal glances at each other across the room.",
    "I miss you like the way we laugh at our inside jokes.",
    "I miss you like the taste of your favorite dessert after dinner.",
    "I miss you like the cozy mornings spent sipping coffee together.",
    "I miss you like the way your creativity shines through in your jewelry.",
    "I miss you like the sweet nothings we whisper to each other.",
    "I miss you like the way we can talk about anything for hours.",
    "I miss you like the feeling of being wrapped in your love.",
    "I miss you like the joy of sharing a bottle of wine on a Friday night.",
    "I miss you like the beautiful sunsets we watch together.",
    "I miss you like the thrill of exploring new restaurants with you.",
    "I miss you like the comfort of knowing you’re just a text away.",
    "I miss you like the joy of cuddling with you while watching a movie.",
    "I miss you like the way your laughter can brighten my darkest days.",
    "I miss you like the anticipation of our next adventure.",
    "I miss you like the happiness I feel when I think of our memories.",
    "I miss you like the way your eyes sparkle when you’re excited.",
    "I miss you like the comfort of your presence in my life.",
    "I miss you like the moments we share, just being silly together.",
    "I miss you like the sweet scent of your hair when I hug you.",
    "I miss you like the way you make even the ordinary feel special.",
    "I miss you like the little surprises we plan for each other.",
    "I miss you like the excitement of our late-night movie marathons.",
    "I miss you like the way you hold my hand and make me feel safe.",
    "I miss you like the cozy evenings we spend just talking.",
    "I miss you like the sweet memories of our favorite dates.",
    "I miss you like the joy of sharing our lives and dreams.",
    "I miss you like the way we tease each other lovingly.",
    "I miss you like the laughter we share over silly memes.",
    "I miss you like the taste of our favorite brunch dishes.",
    "I miss you like the beauty of your smile that lights up my day.",
    "I miss you like the comfort of knowing you’re my biggest supporter.",
    "I miss you like the moments we dance together in the living room.",
    "I miss you like the excitement of planning our future together.",
    "I miss you like the way you challenge me to think differently.",
    "I miss you like the peaceful nights spent wrapped up together.",
    "I miss you like the joy of sharing new experiences with you.",
    "I miss you like the way your creativity inspires me.",
    "I miss you like the warmth of your body next to mine.",
    "I miss you like the little notes I leave for you to find.",
    "I miss you like the fun we have trying new things together.",
    "I miss you like the sweet moments when we get lost in conversation.",
    "I miss you like the way we share our favorite songs.",
    "I miss you like the laughter we share over dinner dates.",
    "I miss you like the joy of having you by my side.",
    "I miss you like the cozy nights we spend binge-watching shows.",
    "I miss you like the way you bring out the best in me.",
    "I miss you like the moments we share watching the stars.",
    "I miss you like the sweetness of your kisses that linger on my lips.",
    "I miss you like the beauty of your passion for life.",
    "I miss you like the way you always know how to make me smile.",
    "I miss you like the excitement of planning surprise trips.",
    "I miss you like the joy of spending lazy Sundays together.",
    "I miss you like the way we can be completely ourselves around each other.",
    "I miss you like the tenderness of your hugs that make everything okay.",
    "I miss you like the joy of sharing our favorite recipes.",
    "I miss you like the comfort of your laugh that makes my heart soar.",
    "I miss you like the way we always find the perfect words for each other.",
    "I miss you like the happiness of knowing you’re my best friend.",
    "I miss you like the warmth of your love that surrounds me.",
    "I miss you like the moments we share making memories.",
    "I miss you like the beauty of your creativity shining through.",
    "I miss you like the sweetness of your voice when you sing.",
    "I miss you like the way we share dreams for our future.",
    "I miss you like the joy of cooking meals just for you.",
    "I miss you like the way your presence makes everything better.",
    "I miss you like the moments we get lost in each other’s eyes.",
    "I miss you like the laughter we share during our silly arguments.",
    "I miss you like the feeling of your love wrapping around me.",
    "I miss you like the anticipation of our next movie night.",
    "I miss you like the way your smile lights up my life.",
    "I miss you like the excitement of trying new cuisines together.",
    "I miss you like the peace I feel when I’m in your arms.",
    "I miss you like the warmth of your love that keeps me grounded.",
    "I miss you like the moments we share making each other laugh.",
    "I miss you like the way you encourage me to follow my dreams.",
    "I miss you like the joy of cuddling up with our plushies.",
    "I miss you like the sweetness of your kisses that make my heart flutter.",
    "I miss you like the beauty of our connection that feels so right.",
    "I miss you like the thrill of planning our next adventure.",
    "I miss you like the way you understand me without words.",
    "I miss you like the comfort of knowing you’re always there for me.",
    "I miss you like the happiness I feel when you’re near.",
    "I miss you like the moments we share exploring new places.",
    "I miss you like the laughter we share over brunch at our favorite spot.",
    "I miss you like the way your passion for life inspires me every day.",
    "I miss you like the beauty of your creativity in every piece of jewelry.",
    "I miss you like the way we make even mundane tasks fun together.",
    "I miss you like the way your laughter fills our favorite cafe, making everything feel right.",
    "I miss you like the warmth of your hand in mine as we stroll through the streets of Budapest.",
    "I miss you like the sweetness of your smile when I surprise you with brunch on a lazy Sunday.",
    "I miss you like the soft whisper of your voice as we share our dreams late at night.",
    "I miss you like the moments we cuddle up together, lost in our favorite movies.",
    "I miss you like the spark in your eyes when you talk about your marketing projects.",
    "I miss you like the way your creativity shines through every piece of jewelry you make.",
    "I miss you like the feeling of waking up next to you, knowing the day will be perfect.",
    "I miss you like the comfort of your presence during our cozy movie nights at home.",
    "I miss you like the sweet scent of your perfume that lingers on my clothes after we part.",
    "I miss you like the joy of watching you get excited about your new skincare products.",
    "I miss you like the little moments when you rest your head on my shoulder while we relax.",
    "I miss you like the way your eyes light up when I cook your favorite meal.",
    "I miss you like the thrill of our late-night talks that last until dawn.",
    "I miss you like the way we always manage to find laughter in the simplest things.",
    "I miss you like the happy moments we share while watching the sunset together.",
    "I miss you like the spark of your spirit that ignites my passion for life.",
    "I miss you like the feeling of your soft hair against my cheek when we hug.",
    "I miss you like the warmth of your smile that melts my heart every time I see it.",
    "I miss you like the excitement of planning our next adventure at Kréta.",
    "I miss you like the sound of your laughter echoing in my mind during the day.",
    "I miss you like the little secrets we share that make our bond unique.",
    "I miss you like the way you always know how to cheer me up on tough days.",
    "I miss you like the gentle way you squeeze my hand when we walk together.",
    "I miss you like the sweet moments of silence that speak louder than words.",
    "I miss you like the way you brighten my life with your mere presence.",
    "I miss you like the way your creativity adds a splash of color to everything.",
    "I miss you like the tenderness of your kisses that leave me breathless.",
    "I miss you like the comfort of knowing you're always on my side, no matter what.",
    "I miss you like the joy of discovering new places together hand in hand.",
    "I miss you like the happiness we create when we cook meals in the kitchen.",
    "I miss you like the moments we spend cuddled up under a blanket, just being together.",
    "I miss you like the little dance parties we have in the living room.",
    "I miss you like the excitement of planning surprise dates just to see you smile.",
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
    "I miss you like the special connection we share during quiet moments.",
    "I miss you like the way we find magic in the mundane, making every moment special.",
    "I miss you like the joy of planning trips to explore new places together.",
    "I miss you like the feeling of being completely at home in your arms.",
    "I miss you like the way your love makes even the hardest days easier.",
    "I miss you like the warmth of your smile that always brightens my day.",
    "I miss you like the moments we share sipping coffee in our favorite cafe.",
    "I miss you like the way you make everything feel right in my world.",
    "I miss you like the way your laughter dances in the air and fills my heart.",
    "I miss you like the comfort of knowing we can always be ourselves with each other.",
    "I miss you like the sweetness of your kisses that linger on my lips.",
    "I miss you like the fun of exploring the city hand in hand, creating memories.",
    "I miss you like the way you always find the perfect words to make me feel better.",
    "I miss you like the happiness we create when we try new recipes together.",
    "I miss you like the excitement of our late-night conversations about everything.",
    "I miss you like the beauty of your spirit that inspires me to be my best self.",
    "I miss you like the thrill of our shared adventures and the memories we make.",
    "I miss you like the warmth of your love that wraps around me on cold nights.",
    "I miss you like the moments we share that feel like they last forever.",
    "I miss you like the comfort of knowing you’re always there to listen.",
    "I miss you like the joy of seeing your face light up with happiness.",
    "I miss you like the beauty of your creativity expressed in every handmade piece.",
    "I miss you like the way you understand me like no one else can.",
    "I miss you like the anticipation of planning our future adventures together.",
    "I miss you like the way your laughter fills the room with joy.",
    "I miss you like the cozy evenings we spend cuddling with our plushies.",
    "I miss you like the excitement of sharing our favorite songs with each other.",
    "I miss you like the little moments that make our love so special.",
    "I miss you like the beauty of our connection that grows stronger every day.",
    "I miss you like the sweetness of your smile that makes everything better.",
    "I miss you like the moments we share when we’re completely lost in each other."
];

    // Function to get a random message
    function getRandomMessage() {
        const randomIndex = Math.floor(Math.random() * messages.length);
        return messages[randomIndex];
    }

    const missMessage = document.getElementById('miss-message');
    const timestamp = document.getElementById('timestamp');

    // Display a random miss message
    missMessage.innerText = getRandomMessage();

    // Get the current date and time and display it
    const now = new Date();
    timestamp.innerText = `Last checked: ${now.toLocaleString()}`;
};

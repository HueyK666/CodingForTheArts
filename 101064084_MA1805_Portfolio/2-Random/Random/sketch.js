let i = 0;

// Passage from Alan Watts on 'the eternal now'
const EternalNow = `
    On the one hand, you let go of everything
    And you live in the eternal now
    Because that's all there is
    See, memory is an illusion, it's all gone
    So, everything you know about
    That makes an impression on you, is no longer there
    That is the meaning of Maya
    There is only the eternal now
    There's only the present moment
    And never will be anything else
    Because, even what you're remembering
    Is happening in the present
    The memory is in the eternal now, isn't it?
    See, so it's all really absolutely here
    But on the other hand, what fun?
    To drag it out
    And to make it echo
    And to get involved
    And to fall in love
    And to become attached
    It's just like riding a bicycle
    It's a balance trick
`;

const textArray = EternalNow.split('\n');

function setup() {
    createCanvas(800, 600);
    background(0);
    frameRate(0.8);
}

function draw() {
    let x = random(width - 100); // Adjust the text margin from canvas edges
    let y = random(height - 20); // Adjust the text margin from canvas edges

    if (i < textArray.length) {
        fill(255);
        noStroke();
        textFont('Courier New')
        textStyle(BOLD);
        textSize(20);
        textAlign(CENTER, CENTER);

        //I used the below to calculate the size of each line of text and make sure that the text stays within the margins
        const textWidthVal = textWidth(textArray[i]);
        const textHeightVal = textAscent() + textDescent();

        let x = random(textWidthVal / 2, width - textWidthVal / 2);
        let y = random(textHeightVal / 2, height - textHeightVal / 2);

        text(textArray[i], x, y);
        i++;

      
        //I would like to add a collision solution to stop the lines over lapping
        //But I do quite like that you may have to watch the loop a few times to get the whole passage
        //from what I have looked up, this will also take many more lines of code

    } else {
        i = 0;
        background(0);
    }
}
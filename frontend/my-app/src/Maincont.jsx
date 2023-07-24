import React from "react";
import './maincont.css';
import Related from "./Related";
export default function Maincont(){
    return (
        <div className="main">
            <div className="aprofile"><div><h6 style={{margin:0,padding:0}}>Author</h6><p style={{margin:0,padding:0}}>follow count</p></div><button type="button" class="btn btn-light">follow</button></div>
            <h1>Title</h1>
            <h3>About</h3>
            <p>
Once upon a time, in the dense and lush forest of the jungle, there lived a mighty and fierce lion, known for his strength and dominance over the other animals. The lion was proud of his power and often boasted about it to the other creatures, making them fear and respect him.

One day, while the lion was taking a nap under the shade of a large tree, a tiny rat accidentally crossed his path. Startled by the sudden presence of the mighty lion, the little rat trembled with fear and pleaded for his life.

"Please, Mr. Lion, spare my life
! I did not mean to disturb you," the rat squeaked, fear evident in his voice.

The lion, amused by the sight of t
he trembling rat, decided to show mercy and spare his life. He chuckled, "Very well, little rat. I shall let you go, but remember that you owe me a favor now."

The rat was grateful for his life,
 and he promised the lion that he wo
 uld repay his kindness someday.

Days passed, and one afternoon, the lion found himself trapped in a hunter's net. No matter how hard he tried, he couldn't break free from the strong ropes that bound him. The lion roared in frustration and despair, hoping that someone would come to his rescue.

Hearing the lion's roar, the little rat remembered the debt he owed to the lion. Without hesitation, he rushed to the spot where the lion was trapped. Seeing the predicament of the mighty lion, the rat immediately began gnawing at the ropes with his sharp teeth.
            </p>
            <p>-by Auther</p>
            <p>-posted time</p>
            <h6>Enter your comment</h6>
            <input type="text" placeholder="comment"></input>
            <p>-show comments</p>
            <Related title="title"/>
        </div>
    );
}
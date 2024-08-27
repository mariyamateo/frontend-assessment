<template>
    <section class="banana">
        <div class="banana__header" @click="toggle">
            <h2 class="banana__title">Why the result of <span>('b' + 'a' + + 'a' +
                    'a').toLowerCase()</span> is banana?
            </h2>
            <span>
                {{ isOpen ? '-' : '+' }}
            </span>
        </div>
        <div class="banana__content" v-if="isOpen">
            <p class="banana__trivia banana__triviaAnswer">
                The expression <span>('b' + 'a' + + 'a' + 'a').toLowerCase()</span> results in <span>'banana'</span> due
                to a combination of string concatenation and type coercion in JavaScript.
            </p>
            <p class="banana__trivia banana__triviaAnswer">First, let's break down the expression step-by-step. The
                expression starts with the string <span>'b'</span>, and we concatenate it with the string
                <span>'a'</span>. This results in the string <span>'ba'</span>. Next, the expression includes <span>+
                    'a'</span>, where the unary plus operator <span>(+)</span> attempts to convert its operand,
                <span>'a'</span>, into a number. Since <span>'a'</span> cannot be converted to a number, this results in
                <span>NaN (Not-a-Number)</span>.
            </p>
            <p class="banana__trivia banana__triviaAnswer">When <span>NaN</span> is concatenated with
                the string <span>'ba'</span>, it produces <span>'baNaN'</span> because <span>NaN</span> is coerced
                into its string representation, <span>'NaN'</span>. Finally, the expression adds another
                <span>'a'</span> to <span>'baNaN'</span>, resulting in <span>'baNaNa'</span>.
            </p>
            <p class="banana__trivia banana__triviaAnswer">After this, the <span>.toLowerCase() method</span> is
                applied to <span>'baNaNa'</span>, converting all characters to lowercase. As a result,
                <span>'baNaNa'</span> becomes <span>'banana'</span>.
            </p>
            <p class="banana__trivia banana__triviaAnswer">Thus, the expression <span>('b' + 'a' + + 'a' +
                    'a').toLowerCase()</span> evaluates to <span>'banana'</span> due to the way string concatenation and
                type coercion interact in JavaScript.
            </p>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            isOpen: false,
        };
    },
    methods: {
        toggle() {
            this.isOpen = !this.isOpen;
        },
    },
};
console.log(('b' + 'a' + + 'a' + 'a').toLowerCase())
</script>
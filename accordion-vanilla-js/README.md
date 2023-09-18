# Simple-accordion-vanilla-js-css
Lightweight accordion with vanilla CSS and Javascript - without Bootstrap and SCSS.

Perfect for using with FAQ.

Also there is a code to mix with Advanced Custom Fields to make it dynamically content inserted inside the wordpress.

Simplified from Raw Source code: https://codepen.io/codeorum/pen/JjGzMRQ


### Example in HTML
```
<div class="accordion v1">
    <div class="a-container">
        <p class="a-btn">Button 1<span></span></p>
        <div class="a-panel">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium minima dolores assumenda id. Porro consequuntur at dolor eum, neque labore!</p>
        </div>
    </div>
    <div class="a-container">
        <p class="a-btn">Button 2<span></span></p>
        <div class="a-panel">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium minima dolores assumenda id.Porro consequuntur at dolor eum, neque labore!</p>
        </div>
    </div>
    <div class="a-container">
        <p class="a-btn">Button 3<span></span></p>
        <div class="a-panel">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur non sint sequi ipsa laudantium, a iure rem vel nemo soluta temporibus, consectetur at corrupti aspernatur maxime, iusto neque blanditiis deleniti.</p>
        </div>
    </div>
</div>
```

### Usage Example in PHP

```
<div class="accordion v1">
    <?php foreach ($faq['questions'] as $eachitem): ?>
        <div class="a-container">
            <p class="a-btn"><?php echo $eachitem['question'] ?><span></span></p>
            <div class="a-panel">
                <p><?php echo $eachitem['answer'] ?></p>
            </div>
        </div>
    <?php endforeach ?>
</div>
```


### Usage Example in Advanced Custom Fields

```
<?php if( have_rows('faq') ): ?>
    <div class="accordion v1">
    <?php while( have_rows('faq') ): the_row(); ?>
        <div class="a-container">
            <p class="a-btn"><?php the_sub_field('question'); ?><span></span></p>
            <div class="a-panel">
                <p><?php the_sub_field('answer'); ?></p>
            </div>
        </div>
    <?php endwhile; ?>
    </div>
<?php endif; ?>
```
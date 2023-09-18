<link rel="stylesheet" href="style.css">

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

<script src="script.js"></script>
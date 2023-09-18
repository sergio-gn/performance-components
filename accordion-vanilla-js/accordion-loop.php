<link rel="stylesheet" href="style.css">

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

<script src="script.js"></script>
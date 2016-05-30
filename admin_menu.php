<div class="column col-6">
    <nav class="col-10 nav admin">
            <ul>
                <li>
                    <a id="articles" href="index.php?page=admin">View articles</a>
                </li>
                <li>
                    <a class="admin-menu" id="add-articles" href="#admin-content">Add article</a>
                </li>
                <li>
                    <a class="admin-menu" id="add-user" href="#admin-content">Add User</a>
                </li>
            </ul>
        </nav>
</div>
<div class="column col-3">
    <div class="form-group">
        <input class="input" type="text" name="search" value="<?php echo $search;?>" />
        <input class="btn" type="submit" value="Search" />
    </div>
</div>
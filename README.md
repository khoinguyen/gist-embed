##How to use embed-gist to spice up code snippets on your blog

### Include the gist css:

    <link rel="stylesheet" href="https://gist.github.com/stylesheets/gist/embed.css">

### Include jQuery:

    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>

### Include embed-gist (If your blog doesn't accept local file includes, then simply copy past contents into a script tag):

    <script type="text/javascript" src="gist-embed.js"></script>

### All you need to do to create an embed-gist is add a placeholder div.  The id of the div should be in the format:

    "gist-<gist-id>"
	e.g.:
    <div id="gist-1741" class="gistEmbed"></div>
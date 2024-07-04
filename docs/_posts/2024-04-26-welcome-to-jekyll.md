---
layout: post
title: Welcome to Jekyll!
date: 2024-04-26 23:31:19 +0200
categories: jekyll update
published: false
---
You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.

Jekyll requires blog post files to be named according to the following format:

`YEAR-MONTH-DAY-title.MARKUP`

Where `YEAR` is a four-digit number, `MONTH` and `DAY` are both two-digit numbers, and `MARKUP` is the file extension representing the format used in the file. After that, include the necessary front matter. Take a look at the source for this post to get an idea about how it works.

Jekyll also offers powerful support for code snippets:

{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/


für mich: embed iframe:  dynamische anker 
<!-- Dynamische Iframes -->
<iframe id="iframe-photo1" src="/media/2024-05-27-batumi-boom-town/photo1"class="embedded-media" data-fullscreen-link="/media/2024-05-27-batumi-boom-town/photo1" data-anchor="iframe-photo1">
</iframe>

<iframe id="iframe-video1" src="/media/2024-05-27-batumi-boom-town/video1" class="embedded-media" data-fullscreen-link="/media/2024-05-27-batumi-boom-town/video1" data-anchor="iframe-video1">
</iframe>

hier das script mit automatische ankter -> wichtig : backlink: am ende '#id-conainter

<script> document.addEventListener("DOMContentLoaded", function() { document.querySelectorAll('.embedded-media').forEach(function(iframe) { // Dynamischer Anker var anchor = document.createElement('a'); anchor.id = iframe.dataset.anchor + '-container'; iframe.before(anchor); // Iframe-Stile setzen iframe.style.height = 'auto'; iframe.style.width = '100%'; iframe.style.border = 'none'; // Klick-Event zum Vollbildlink iframe.addEventListener('click', function() { window.location.href = iframe.dataset.fullscreenLink; }); }); }); </script>



<!-- Manuelle Anker und Iframes -->
<a id="iframe-photo1-container"></a> 
<iframe id="iframe-photo1"src="/media/2024-05-27-batumi-boom-town/photo1" class="embedded-media" data-fullscreen-link="/media/2024-05-27-batumi-boom-town/photo1"></iframe> 

<a id="iframe-video1-container"></a> 
<iframe id="iframe-video1"src="/media/2024-05-27-batumi-boom-town/video1" class="embedded-media" data-fullscreen-link="/media/2024-05-27-batumi-boom-town/video1"></iframe> <script> document.addEventListener("DOMContentLoaded", function() {document.querySelectorAll('.embedded-media').forEach(function(iframe) { iframe.style.height = 'auto'; iframe.style.width = '100%'; iframe.style.border = 'none'; iframe.addEventListener('click', function() { window.location.href = iframe.dataset.fullscreenLink; }); }); }); </script>

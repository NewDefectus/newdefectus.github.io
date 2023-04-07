function gallery_select(self)
{
    let parent = self.parentElement;
    let mainImage = parent.firstChild;
    mainImage.src = self.src;

    for (let image of parent.querySelectorAll('img'))
    {
        if (image != mainImage)
        {
            image.className = 'gallery-selector';
        }
    }

    self.className = 'gallery-selector selected';
}
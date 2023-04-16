function gallery_select(self)
{
    let parent = self.parentElement;
    let mainImage = parent.parentElement.querySelector('.gallery-image');
    mainImage.src = self.src;

    for (let image of parent.querySelectorAll('img'))
    {
        image.className = 'gallery-selector';
    }

    self.className = 'gallery-selector selected';
}